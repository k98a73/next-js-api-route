import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const postData = async () => {
      await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "John" }),
      });
    };
    postData();
  }, []);

  return (
    <div>
      <h1>ユーザー</h1>
    </div>
  );
}
