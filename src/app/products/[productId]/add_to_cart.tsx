"use client";

import React from "react";

export default function AddCart() {    
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-2xl">Add to Cart + {count}</button>;
}
