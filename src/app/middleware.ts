import { NextResponse } from "next/server";

export function middleware(req: NextResponse) {
    console.log(req.url);
    return NextResponse.next();
}