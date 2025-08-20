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
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DBError />;
  if (!data?.product) return <ProductNotFound />;

  return (
    <div>
      <h2>{data.product.name}</h2>
      <p>Price: {data.product.price}</p>
    </div>
  );
}

export default function ProductPage(){
  const params = useParams();
  

    return(
        <div>
            <ProductDetails slug={String(params.id)} />
        </div>
    );
}