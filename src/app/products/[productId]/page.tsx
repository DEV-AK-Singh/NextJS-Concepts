import React from "react";

export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
  return <div>Product {(await params).productId}</div>;
}