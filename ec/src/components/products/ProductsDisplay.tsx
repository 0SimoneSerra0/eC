import { ReactNode } from "react";

export default function ProductDisplay(props: {children: ReactNode, rows: number, cols: number }) {

    if(props.rows !== Math.abs(Math.floor(props.rows)) || props.cols !== Math.floor(props.cols)){
        throw new Error("ProductDisplay.tsx: props.rows must be a positive integer and props.cols must be an integer.\n");
    }
    

    function getWidth() : string{
        return props.cols < -1 ? "100%" : "calc(" + props.cols + "*var(--product-card-w))";
    }


    return (
        <div
            className="grid gap-10"
            style={ {width: getWidth(),
                     height: `calc(${props.rows}*var(--product-card-h))`,
                     gridTemplateColumns: `repeat(${props.cols}, minmax(0, 1fr))`,
                     gridTemplateRows: `repeat(${props.rows < 0 ? `calc(100% / var(--product-card-w)` : props.rows}, minmax(0, 1fr))`
                    }
                }
        >
            {props.children}
        </div>
    );
}