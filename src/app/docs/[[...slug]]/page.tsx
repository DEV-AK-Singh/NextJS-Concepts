import { notFound } from "next/navigation";
import React from "react";

export default async function Docs({ params }: { params: Promise<{ slug: number[] }> }) {
    const { slug } = await params;
    if (slug?.length == 3){
        if (slug[2] > 5) notFound();
        return <div>features of {slug[0]} for concept {slug[1]} with example {slug[2]}</div>;
    }
    else if (slug?.length == 2){
        return <div>features of {slug[0]} for concept {slug[1]}</div>;
    }
    else if (slug?.length == 1){
        return <div>features of {slug[0]}</div>;
    }
    else{
        notFound();
    } 
    return <div>Docs Home Page</div>;
}
