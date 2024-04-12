'use client'
import { useEffect, useState } from "react";
import { Users } from "../types/types";
import User from "../app/components/user";

//https://jsonplaceholder.typicode.com/users
// test this component

export default function Home() {
  const [data, setData] = useState<Users[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUsers = async () => {
      const res: Response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setData(data);
      setLoading(false);
      
    };
    fetchUsers();
  }, []);
  return (
    <main className="flex flex-wrap flex-col p-1">
      <div>
        <h2>Home</h2>
      </div>
      <div className="flex flex-wrap p-1 border-2">
        {isLoading && <p>Loading...</p>}
        {data && data.length > 0 && <User users={data} />}
      </div>
    </main>
  );
}
