import { createYoga } from "graphql-yoga"
import { NextRequest } from "next/server"
import { createSchema } from "@/lib/graphql/schema"

const yoga = createYoga<{
  req: NextRequest
}>({
  schema: await createSchema(),
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Request, Response },
})

export { yoga as GET, yoga as POST }