import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { ProductResolver } from "./resolvers/product.resolver" 

export const createSchema = () => {
  return buildSchema({
    resolvers: [ProductResolver],
    emitSchemaFile: false,
  })
}