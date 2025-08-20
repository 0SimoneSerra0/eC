import { Resolver, Query, ObjectType, Field, Float, ID, Arg } from "type-graphql"
import { PrismaClient } from "../../../generated/prisma";

@ObjectType()
class Review {
  @Field()
  user!: string

  @Field()
  date!: string

  @Field()
  content!: string

  @Field(() => Float) // perché number di default diventa Int
  stars!: number
}

@ObjectType()
class Product {
  @Field()
  id!: string

  @Field()
  slug!: string

  @Field()
  name!: string

  @Field()
  price!: number

  @Field()
  description!: string

  @Field()
  img!: string

  @Field( () => [Review])
  reviews!: Review[]
}


const a : Review = {user: "Giacomo", date: "n/a", content: "Bello schifo", stars: 0.1}
const prisma = new PrismaClient();
@Resolver(Product)
export class ProductResolver {
  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return prisma.product.findMany();
  }

  @Query(() => Product, { nullable: true })
  async product(@Arg("slug") slug: string): Promise<Product | null> {
    return prisma.product.findUnique({
      where: { slug: slug },
    });
  }
}