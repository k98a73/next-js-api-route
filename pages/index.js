export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/users");
  const data = await response.json();

  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <div>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
