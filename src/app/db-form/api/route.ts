import { createProduct } from "@/prisma-db";

export async function POST(request: Request) {
    const { name, price, description } = await request.json();
    const product = await createProduct(name, price, description);
    return new Response(JSON.stringify(product, null, 2), { headers: { "Content-Type": "application/json" }, status: 201 });
}