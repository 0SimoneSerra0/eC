"use client";
import { useQuery } from "@tanstack/react-query"
import { getProducts } from "@/lib/graphql/graphql";


export function ImagesView(props: { imgs: String[] }) {

    const { data, error } = useQuery({
        queryKey: ["products"],
        queryFn: () => getProducts(),
    });

    if (error) console.log("ERROR");

    return (
        <div className="bg-black text-white w-[100vw] h-[max(70vh,20rem)] max-w-[var(--max-w)] max-h-[calc(var(--max-h)*60/100)]">
            {JSON.stringify(data)}
        </div>
    );
}