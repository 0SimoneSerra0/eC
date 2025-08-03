export default function ProductCard(props: { name: string, price: number, img: string, imgAlt: string }) {


    return (
        <div className="relative flex flex-col justify-around items-center h-[var(--product-card-h)] w-[var(--product-card-w)] bg-black p-[1%] rounded-md overflow-clip">

            <div className="w-full h-[60%] overflow-clip flex items-center justify-center rounded-t-md">
            <img className="h-full w-full h-auto w-auto"
                src={props.img} alt={props.imgAlt} 
            />
            </div>

            <h2 className="mt-[5%] text-2xl w-full text-nowrap self-end">{props.name}</h2>
            <h1 className="text-2xl">{props.price}$</h1>

        </div>
    );
}