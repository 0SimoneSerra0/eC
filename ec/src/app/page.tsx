import { dehydrate, HydrationBoundary, QueryClientProvider, DehydratedState } from "@tanstack/react-query";
import { queryClient, getProducts } from "@/lib/graphql/graphql";
import { ImagesView } from "../components/imagesview/ImagesView";
import ProductCard from "@/components/product/ProductCard";

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

        <div className="flex w-[var(--product-card-w)] h-[var(--product-card-h)]">
          <ProductCard name="Test" price={32.50} img="blank" imgAlt="blank" />
        </div>

      </HydrationBoundary>
    </div>

  );
}
