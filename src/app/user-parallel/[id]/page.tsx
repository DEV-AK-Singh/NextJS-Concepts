import React, { Suspense } from "react";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Albums = {
  userId: number;
  id: number;
  title: string;
};

const getUserPosts = async (userId: number) : Promise<Posts[]> => {
  await new Promise((resolve) => setTimeout(() => resolve(true), 3000));
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return res.json();
};

const getUserAlbums = async (userId: number) : Promise<Albums[]> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  return res.json();
};

export default async function UserProfile({ params } : { params: Promise<{ id: string }> }) {
  const { id : userId } = await params;
  const [posts, albums] = await Promise.all([getUserPosts(parseInt(userId)), getUserAlbums(parseInt(userId))]); 
  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <h1>Posts</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </Suspense>
      <hr />
      <h1>Albums</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          {albums.map((album) => (
            <li key={album.id}>{album.title}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
