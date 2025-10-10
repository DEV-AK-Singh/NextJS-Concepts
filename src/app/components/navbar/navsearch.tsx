"use client";
import React from "react";

export default function NavSearch() {
  const [search, setSearch] = React.useState("");
  return <>
    <input
      type="text"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <div>NavSearch {search}</div>
  </>;
}
