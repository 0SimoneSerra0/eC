import { Resolver, Query, ObjectType, Field, ID } from "type-graphql"


export interface Review {
  user: string;
  date: string;
  content: string;
  stars: number;
}


@ObjectType()
class Product {
  @Field(() => ID)
  id!: string

  @Field()
  name!: string

  @Field()
  price!: number

  @Field()
  description!: string

  @Field()
  rating!: number

  @Field()
  img!: ImageData

  @Field()
  reviews!: Review[]
}

@Resolver(Product)
export class ProductResolver {
  @Query(() => [Product])
  products(): Product[] {
    return [
      { id: "1", name: "MacBook Pro" },
      { id: "2", name: "iPhone 15" },
    ]
  }
}