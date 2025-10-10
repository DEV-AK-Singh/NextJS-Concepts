"use client";

import React from "react";
import Slider from "../components/slider";
import { useTheme } from "../components/themeProvider";
// import { serverUtils } from "../utils/server-utils";
import { clientUtils } from "../utils/client-utils";

export default function Profile() {
  // console.log(serverUtils()); 
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div>{clientUtils()}</div>
      <div>Profile - {theme} - <button onClick={toggleTheme} className={`font-bold py-1 px-4 rounded-2xl ${theme === "light" ? "bg-white text-black border border-white" : "bg-black text-white border border-white" }`}>Toggle Theme</button></div>
      <Slider />
    </>
  );
}
