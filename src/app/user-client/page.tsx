"use client";

import React from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string; 
    phone: string; 
}

export default function UserClient() {
    const [users, setUsers] = React.useState<User[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<Error>(new Error(""));

    React.useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error);
                    setLoading(false);
                }else{
                    setError(new Error("Something went wrong"));
                    setLoading(false);
                }
            }
        }
        fetchUsers();
    }, []);
  
    return (
        <div>
            <h1>Users</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {users.map((user) => (
                <div key={user.id} className="bg-white text-black p-2 m-2 rounded rounded-5">
                    <h2 className="font-bold">{user.name}</h2>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
            ))}
        </div>
    );
}
