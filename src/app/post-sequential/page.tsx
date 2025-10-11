import React, { Suspense } from "react";
import Author from "./author";

type Posts = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default async function Posts() {
    const posts: Posts[] = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
    const filteredPosts = posts.filter((post) => post.id % 10 === 2);
    console.log(filteredPosts);
    return (
        <div>
            <h1>Posts</h1>
            {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white text-black p-2 m-2 rounded rounded-5">
                    <h2 className="font-bold">{post.title} | {post.id}</h2>
                    <p>{post.body}</p><hr />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Author userId={post.userId} />
                    </Suspense>
                </div>
            ))}
        </div>
    );
}
