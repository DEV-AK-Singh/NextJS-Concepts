import React from "react";

export default async function Products() {
  await new Promise((resolve) => setTimeout(() => resolve(true), 5000));
  return <div>products</div>;
}
