import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Smartphone",
        price: 299.99,
        description: "New smartphones with 5g and increased performance",
        rating: 4.5,
        img: "/images/smartphone.png",
      },
      {
        name: "Tablet",
        price: 199.99,
        description: "Ligth-weight tablet",
        rating: 4.0,
        img: "/images/tablet.png",
      },
      {
        name: "Laptop",
        price: 799.99,
        description: "Laptop for work and more",
        rating: 4.3,
        img: "/images/laptop.png",
      },
      {
        name: "Headphones",
        price: 59.99,
        description: "Bluetooth headphones",
        rating: 4.2,
        img: "/images/headphones.png",
      },
    ],
  });

  console.log("Database seeding completed.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });