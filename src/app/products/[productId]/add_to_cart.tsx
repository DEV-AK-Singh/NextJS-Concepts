"use client";

import { redirect, useRouter } from "next/navigation";
import React from "react";


export default function AddCart() {
  const router = useRouter();
  const [count, setCount] = React.useState(0);
  const Navigate = () => {
    // router.push("/"); 
    // router.replace("/");
    redirect("/");
  };
  return (
    <>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-2xl"
      >
        Add to Cart + {count}
      </button>
      <button 
        onClick={Navigate}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-2xl ms-2"
      >
        place order
      </button>
    </>
  );
}
