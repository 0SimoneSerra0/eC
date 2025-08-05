

export default function ProductImage( props : { img: string, imgAlt: string, size: string} ){

    if(!["sm", "md", "lg"].includes(props.size.toLowerCase())){
        throw new Error(`Size '${props.size}' is not valid. Valid options <sm | md | lg>.\n`);
    }

    return (
        <a href="/product/" className={`product-img-a-${props.size.toLowerCase()} m-auto`} >
            <img 
                className="h-full w-full h-auto w-auto"
                src={props.img} alt={props.imgAlt}
            />
        </a>
    );
}