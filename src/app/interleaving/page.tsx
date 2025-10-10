import React from "react";
import ClientComp from "../components/client-comp";
import ServerComp from "../components/server-comp";

export default function Interleaving() {
  return <>
    <div>Interleaving</div>
    <ClientComp> 
        <ServerComp />
    </ClientComp>
    <ServerComp />
  </>;
}
