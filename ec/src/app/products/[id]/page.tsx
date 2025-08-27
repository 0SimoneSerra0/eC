"use client";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "next/navigation";
import ProductNotFound from "@/components/generalPages/PrductNotFound";
import DBError from "@/components/generalPages/DatabaseError";

const GET_PRODUCT = gql`
  query GetProduct($slug: String!) {
    product(slug: $slug) {
      id
      name
      price
    }
  }
`;

function ProductDetails({ slug }: { slug: string }) {

}

export default function ProductPage() {
  const params = useParams();


  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { slug: params.id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DBError />;
  if (!data?.product) return <ProductNotFound />;

  return (
    <div className="flex relative w-[100vw] max-w-[var(--max-w)]">
      <img src={data.product.img} alt="" className="w-xs h-auto" />

      <div className="flex ml-36 flex-wrap">

        <h2 className="text-4xl">{data.product.name}</h2>
        <div className="flex-break"></div>
        <p>Price: {data.product.price}</p>
        <div className="flex-break"></div>
        <p className="mt-10">{data.product.description}</p>
      </div>

    </div>
  );
}