// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // http://localhost:3000/api/hello?firstName=john&lastName=doeにアクセスすると、ターミナルには{ firstName: 'john', lastName: 'doe' }が表示される
  console.log(req.query);
  res.status(200).json({ name: 'John Doe' })
}
