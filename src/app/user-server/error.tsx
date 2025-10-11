"use client";
import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
    useEffect(() => {
        console.log(error);
    }, []);
    return (
        <div>
            <h1>Error : Error fetching data</h1> 
        </div>
    );
}