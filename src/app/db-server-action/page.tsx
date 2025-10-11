import { createProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import React from "react";
import SubmitButton from "../components/submit";

export default function ServerActionCreate() {
    async function handleSubmit(formData: FormData) {
        "use server";
        const name = formData.get("name") as string;
        const price = formData.get("price") as string;
        const description = formData.get("description") as string;
        await createProduct(name, parseInt(price), description);
        redirect("/db-products");
    }
  return (
    <div>
      <h1>DB Form</h1>
      <form action={handleSubmit} className="w-2xl flex flex-col gap-2 pt-2">
        <input
          className="input-group bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:cursor-not-allowed"
          type="text" 
          name="name"
          placeholder="Product Name" 
        />
        <input
          className="input-group bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          type="number"
          name="price" 
          placeholder="Product Price" 
        />
        <input
          className="input-group bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
          type="text"
          name="description"
          placeholder="Product Description" 
        />
        <SubmitButton />
      </form>
    </div>
  );
}
