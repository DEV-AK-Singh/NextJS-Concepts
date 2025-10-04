import { Metadata } from "next";
import React from "react";
import AddCart from "./add_to_cart";

export const generateMetadata = async ({ params }: { params: { productId: string } }) : Promise<Metadata> => {
  const { productId } = params;
  const title = await new Promise((resolve) => setTimeout(() => resolve(`Next.js`), 1000)); 
  return { title: `Product ${productId} | ${title}` };
}

export default async function ProductDetails({ params, searchParams }: { params: Promise<{ productId: string }>, searchParams: Promise<{ star?: number, likes?: number }> }) { 
  throw new Error("This is an error");
  const { productId } = await params;
  const { star, likes } = await searchParams;
  await new Promise((resolve) => setTimeout(() => resolve(true), 3000));
  return <div>Product {productId} - Likes {likes} | Stars {star} | <AddCart /></div>;
}