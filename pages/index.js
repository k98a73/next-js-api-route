import sqlite3 from "sqlite3";

const selectAll = (db, query) => {
  return new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) return reject(err);
      return resolve(rows);
    });
  });
};

export async function getServerSideProps() {
  const db = new sqlite3.Database("./database.sqlite");
  const data = await selectAll(db, "select * from users");
  db.close();

  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
