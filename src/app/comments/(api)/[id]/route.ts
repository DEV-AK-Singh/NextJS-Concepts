const { comments } = await import("../data");

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    return new Response(JSON.stringify(comment, null, 2));
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const comment = await request.json();
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    comments[index] = { ...comments[index], ...comment };
    return new Response(JSON.stringify(comments, null, 2));
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
     const { id } = await params;
    comments.splice(comments.findIndex((comment) => comment.id === parseInt(id)), 1);
    return new Response(null, { status: 204 });
}