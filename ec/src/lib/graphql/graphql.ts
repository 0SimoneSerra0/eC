import { GraphQLClient } from "graphql-request";
import { QueryClient } from "@tanstack/react-query"

import { getSdk } from "@/generated/graphql"

const endPoint = "http://localhost:3000/api/graphql";

const gplClient = new GraphQLClient(endPoint);

export const getProducts = async () => {
    const raw = await getSdk(gplClient).getProducts();
    return JSON.parse(JSON.stringify(raw));
}

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        }
    }
});