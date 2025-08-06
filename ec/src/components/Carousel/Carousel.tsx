"use client";
import { useQuery } from "@tanstack/react-query"
import { getProducts } from "@/lib/graphql/graphql";
import { ReactElement, useEffect, useState } from "react";


function renderImgs(imgsInfo : [string, string][]) : ReactElement[]{
    return imgsInfo.map<ReactElement>(imgInfo => <img src={String(imgInfo[0])} alt={imgInfo[1]} className="h-full w-auto cursor-pointer" />);
}


export type CarouselElement = {
    img: string,
    imgAlt: string,
    link: string
}

export function Carousel(props: { elements : CarouselElement[] }) {
    const [imgs, setImgs] = useState<ReactElement[]>([]);

    useEffect(() => {

        const imgsInfo : [string, string][] = [];
        props.elements.forEach( el => imgsInfo.push([el.img, el.imgAlt]));

        setImgs(renderImgs(imgsInfo));

    }, [props.elements]);

    // const { data, error } = useQuery({
    //     queryKey: ["products"],
    //     queryFn: () => getProducts(),
    // });

    return (
        <div className="bg-black w-[100vw] h-[max(70vh,20rem)] max-w-[var(--max-w)] max-h-[calc(var(--max-h)*60/100)] overflow-x-slide overflow-y-clip">
            <button className="corousel-arrow">❮</button>
            {imgs}
            <button className="corousel-arrow">❯</button>
        </div>
    );
}