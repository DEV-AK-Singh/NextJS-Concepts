import React from "react";

export default async function Reviews() {
  await new Promise((resolve) => setTimeout(() => resolve(true), 3000));
  return <div>reviews</div>;
}
