import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        slug : "smartphone-0",
        name: "Smartphone",
        price: 299.99,
        description: "New smartphones with 5g and increased performance",
        img: "/images/smartphone.png",
      },
      {
        slug : "tablet-0",
        name: "Tablet",
        price: 199.99,
        description: "Ligth-weight tablet",
        img: "/images/tablet.png",
      },
      {
        slug : "laptop-0",
        name: "Laptop",
        price: 799.99,
        description: "Laptop for work and more",
        img: "/images/laptop.png",
      },
      {
        slug : "headphones-0",
        name: "Headphones",
        price: 59.99,
        description: "Bluetooth headphones",
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