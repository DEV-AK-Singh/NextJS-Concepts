import { PrismaClient } from "./generated/prisma/client";

export const prisma = new PrismaClient();

const seedProducts = async () => {
    await prisma.product.createMany({
        data: [
            { name: "Product 1", price: 1200, description: "Description 1" },
            { name: "Product 2", price: 80000, description: "Description 2" },
            { name: "Product 3", price: 33200, description: "Description 3" },
        ],
    });
};

const productCount = await prisma.product.count();
if(productCount === 0) await seedProducts();

export async function getProducts() {
    await new Promise((resolve) => setTimeout(() => resolve(true), 1500));
    return await prisma.product.findMany();
}

export async function getProduct(id: number) {
    await new Promise((resolve) => setTimeout(() => resolve(true), 1500));
    return await prisma.product.findUnique({ where: { id } });
}

export async function createProduct(name: string, price: number, description: string) {
    await new Promise((resolve) => setTimeout(() => resolve(true), 1500));
    return await prisma.product.create({ data: { name, price, description } });
}

export async function updateProduct(id: number, name: string, price: number, description: string) {
    await new Promise((resolve) => setTimeout(() => resolve(true), 1500));
    return await prisma.product.update({ where: { id }, data: { name, price, description } });
}

export async function deleteProduct(id: number) {
    await new Promise((resolve) => setTimeout(() => resolve(true), 1500));
    return await prisma.product.delete({ where: { id } });
}