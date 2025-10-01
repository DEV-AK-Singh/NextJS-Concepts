"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function NotFound() {
    const path = usePathname().split("/");
    const exampleId = path[path.length - 1] ? parseInt(path[path.length - 1]) : 0; 
    if (path.length > 5) return <div>Page Not Found | 404</div>;
    else if (exampleId > 5) return <div>Example {exampleId} Not Found | 404</div>;
}
