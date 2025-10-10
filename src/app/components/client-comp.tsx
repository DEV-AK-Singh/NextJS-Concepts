"use client";

import React from "react";
// import ServerComp from "./server-comp";

export default function ClientComp({children}: Readonly<{children: React.ReactNode}>) {
    console.log("client comp");
  return <>
    <h1>ClientComp</h1>
    {children}
    {/* <ServerComp /> */}
  </>;
}
