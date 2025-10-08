// import { headers } from "next/headers";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const { comments } = await import("./data");

// export async function GET() {
//     return new Response("Hello, Next.js!");
// }

// export async function GET() {
//     return new Response(JSON.stringify(comments, null, 2));
// }

export async function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams.get("query") ?? "";
    const resultComments = comments.filter((comment) => comment.text.toLowerCase().includes(query.toLowerCase()));
    // const headers_data : any = await headers();  
    // console.log(headers_data.get("X-Custom-data"));

    const cookies_data = await cookies();
    console.log(cookies_data.get("test"));
    console.log(cookies_data.get("test2"));
    cookies_data.set("test", "test");
    cookies_data.set("test2", "test2");
    return new Response(JSON.stringify(resultComments, null, 2));
}

export async function POST(request: Request) {
    const comment = await request.json();
    comments.push({id: comments.length + 1, ...comment}); 
    return new Response(JSON.stringify(comments, null, 2));
}