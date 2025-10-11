import { getProducts } from "@/prisma-db";
import React from "react";

type Products = {
    id: number;
    name: string;
    price: number;
    description: string | null;
};

export default async function DatabaseProducts() {
    const products: Products[] = await getProducts();
    return (
        <div>
            <h1>Database Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name} | {product.price} | {product.description}</li>
                ))}
            </ul>
        </div>
    );
}
