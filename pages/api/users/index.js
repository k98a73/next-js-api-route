export default async function handler(req, res) {
  // ターミナルには{ name: 'John' }が表示される
  console.log(req.body);
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await response.json();
  res.status(200).json({ users });
}
