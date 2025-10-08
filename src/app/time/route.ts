export const dynamic = "force-static";
export const revalidate = 10;

export async function GET() {
    const currentTime = new Date().toLocaleTimeString();
    return new Response(JSON.stringify({ currentTime }), { status: 200 });
}