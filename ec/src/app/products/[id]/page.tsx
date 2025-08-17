"use client";
import { useQuery, gql } from "@apollo/client";

const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      price
    }
  }
`;

function ProductDetails({ id }: { id: string }) {
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data.product) return <p>Product Not Found</p>;

  return (
    <div>
      <h2>{data.product.name}</h2>
      <p>Price: {data.product.price}</p>
    </div>
  );
}

export default function ProductPage(){
    return(
        <div>
            {ProductDetails({id : "1"})}
        </div>
    );
}