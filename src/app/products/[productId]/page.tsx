import { Metadata } from "next";
import React from "react";
import AddCart from "./add_to_cart";

export const generateMetadata = async ({ params }: { params: { productId: string } }) : Promise<Metadata> => {
  const { productId } = params;
  const title = await new Promise((resolve) => setTimeout(() => resolve(`Next.js`), 1000)); 
  return { title: `Product ${productId} | ${title}` };
}

export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) { 
  return <div>Product {(await params).productId} | <AddCart /></div>;
}