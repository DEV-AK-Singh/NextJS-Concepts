import Image from "next/image";

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
      </main> 
    </div>
  );
}
