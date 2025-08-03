import { Children } from "react";
import { ReactNode } from "react";

export default function ProductDisplay(props: {children: ReactNode, rows: number, cols: number }) {

    if(props.cols < 0){
        props.cols = 0;
    }


    return (
        <div
            className={`
                flex
                w-[${props.rows === -1 ? "100%" : "calc(" + props.cols + "*var(--product-card-h)"}] 
                h-[${"calc(" + props.cols + "*var(--product-card-h)"}]
                bg-white
                pt-[2vw]
            `}
        >
            {props.children}
        </div>
    );
}