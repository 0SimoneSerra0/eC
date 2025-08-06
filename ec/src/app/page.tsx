import { dehydrate, HydrationBoundary, QueryClientProvider, DehydratedState } from "@tanstack/react-query";
import { queryClient, getProducts } from "@/lib/graphql/graphql";
import { Carousel, CarouselElement } from "../components/Carousel/Carousel";
import ProductCard from "@/components/products/ProductCard";
import ProductDisplay from "@/components/products/ProductsDisplay";
import ProductImage from "@/components/products/ProductImage";



// Carusel Elements creation
const CarEls : CarouselElement[]= [{img: "", imgAlt: "", link: ""}];








export async function getDehydratedState(): Promise<{ dehydratedState: DehydratedState; }> {
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: () => getProducts()
  });

  return {
    dehydratedState: dehydrate(queryClient),
  }
}






export default async function Home() {

  const { dehydratedState } = await getDehydratedState();


  return (
    <div className="w-fit bg-gray-400">
      <HydrationBoundary state={dehydratedState}>
        
        <Carousel elements={CarEls} />

        <ProductDisplay rows={2} cols={2}>
          <ProductCard name="Test" price={32.50} img="window.svg" imgAlt="blank" />
          <ProductImage img="window.svg" imgAlt="blank" size="sm"/>
          <ProductImage img="window.svg" imgAlt="blank" size="sm"/>
          <ProductImage img="window.svg" imgAlt="blank" size="sm"/>
        </ProductDisplay>

      </HydrationBoundary>
    </div>

  );
}