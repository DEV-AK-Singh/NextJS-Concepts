"use client";
 
import { useRouter } from "next/navigation";
import React from "react";

export default function DbForm() {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState(0);
    const [description, setDescription] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<Error | null>(null);
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            await fetch("/db-form/api", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, price, description }),
            });
            router.push("/db-products");
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    };
  return (
    <div>
      <h1>DB Form</h1>
      <form onSubmit={handleSubmit} className="w-2xl flex flex-col gap-2 pt-2">
        <input
          className="input-group bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          type="text"
          value={name}
          placeholder="Product Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input-group bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          type="number"
          value={price}
          placeholder="Product Price"
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
        <input
          type="text"
          className="input-group bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          value={description}
          placeholder="Product Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" disabled={loading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-2xl">
          {loading ? "Loading..." : "Submit"}
        </button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
}
