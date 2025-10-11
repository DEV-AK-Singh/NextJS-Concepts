import React from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string; 
    phone: string; 
}

export default async function UserServer() {
    const users: User[] = await fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());  
    return (
        <div>
            <h1>Users</h1>
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
