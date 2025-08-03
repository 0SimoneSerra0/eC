import { Resolver, Query, ObjectType, Field, ID } from "type-graphql"


export type Review =  {
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
  img!: string

  @Field()
  reviews!: Review[]
}


const a : Review = {user: "Giacomo", date: "n/a", content: "Bello schifo", stars: 0.1}

@Resolver(Product)
export class ProductResolver {
  @Query(() => [Product])
  products(): Product[] {
    return [
      { id: "1", name: "MacBook Pro", price: 5.5, description: "test", rating: 5, img: "test", reviews: [a]},
      { id: "2", name: "iPhone 15", price: 5.5, description: "test", rating: 5, img: "test", reviews: [a] },
    ]
  }
}