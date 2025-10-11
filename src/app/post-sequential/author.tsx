import React from "react";

type Author = { 
    id: number,
    name: string
}

export default async function Author({userId}: {userId: number}) {
    await new Promise((resolve) => setTimeout(() => resolve(true), 3000));
    const author: Author = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => res.json());
    console.log(author);
  return (
    <div className="bg-white text-black p-2 my-2 rounded rounded-5 border border-black text-bold inline-block"><b>Author:</b> {author.name}</div>
  );
}
