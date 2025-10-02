"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ProductsComp() {
    const pathname = usePathname();
    const isActive = (path: string): boolean => pathname === path && path !== "/"; 
    return <>
        <li className={isActive("/products/1") ? "text-red-900" : "text-red-400"}><Link href="/products/1">Product 1</Link></li>
        <li className={isActive("/products/2") ? "text-red-900" : "text-red-400"}><Link href="/products/2">Product 2</Link></li>
        <li className={isActive("/products/3") ? "text-red-900" : "text-red-400"}><Link href="/products/3">Product 3</Link></li>
    </>;
}
