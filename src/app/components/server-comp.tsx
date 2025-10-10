// import ClientComp from "./client-comp";
import fs from "fs";

export default function ServerComp() {
    fs.readFileSync("src/app/page.tsx");
    console.log("server comp");
  return (
    <>
      <h1>ServerComp</h1>
      {/* <ClientComp /> */}
    </>
  );
}
