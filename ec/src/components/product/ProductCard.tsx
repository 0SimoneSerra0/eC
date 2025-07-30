export default function ProductCard(props: { name: string, price: number, img: string, imgAlt: string }) {


    return (
        <div className="relatve h-[var(--product-card-h)] w-[var(--product-card-w)] bg-white">

            <img className="h-[90%] w-auto"
                src={props.img} alt={props.imgAlt} />

            <h2>{props.name}</h2>

        </div>
    );
}