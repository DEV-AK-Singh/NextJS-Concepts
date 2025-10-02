import React from "react";
import ProductsComp from "../products-comp";

export default function ProductLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>
        <ProductsComp />
        <h1>Product Layout</h1>
        {children}
        <h2>Featured Products</h2>
    </div>;
}
