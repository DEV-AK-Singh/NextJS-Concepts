// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"> 
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-6xl">
          Hello world!
          <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Next.js!
          </span>
        </h1> 
        <span><Link href="/about" className="text-lg hover:underline">About</Link> | <Link href="/profile" className="text-lg hover:underline">Profile</Link></span>
        <span><Link href="/blog" >BLOG:</Link> <Link href="/blog/first" className="text-lg hover:underline">First</Link> | <Link href="/blog/second" className="text-lg hover:underline">Second</Link></span>
        <span><Link href="/products" >PRODUCTS:</Link> <Link href="/products/1" className="text-lg hover:underline">Product 1</Link> | <Link href="/products/2" className="text-lg hover:underline">Product 2</Link></span>
      </main> 
    </div>
  );
}
