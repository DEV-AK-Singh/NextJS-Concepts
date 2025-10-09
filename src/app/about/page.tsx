import React, { Suspense } from "react";
import Products from "../components/products";
import Reviews from "../components/reviews";

export default function About() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>
      <h1>About</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
