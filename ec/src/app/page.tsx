import { dehydrate, HydrationBoundary, QueryClientProvider, DehydratedState } from "@tanstack/react-query";
import { queryClient, getProducts } from "@/lib/graphql/graphql";
import { ImagesView } from "../components/imagesview/ImagesView";
import ProductCard from "@/components/products/ProductCard";
import ProductDisplay from "@/components/products/ProductsDisplay";

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
    <div className="w-fit">
      <HydrationBoundary state={dehydratedState}>
        
        <ImagesView imgs={[""]} />

        <ProductDisplay rows={4} cols={1}>
          <ProductCard name="Test" price={32.50} img="vercel.svg" imgAlt="blank" />
        </ProductDisplay>

      </HydrationBoundary>
    </div>

  );
}