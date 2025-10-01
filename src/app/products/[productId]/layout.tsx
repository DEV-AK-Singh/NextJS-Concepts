import React from "react";

export default function ProductLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>
        <h1>Product Layout</h1>
        {children}
        <h2>Featured Products</h2>
    </div>;
}
