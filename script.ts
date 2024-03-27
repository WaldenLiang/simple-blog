import { PrismaClient } from "@prisma/client";
import initData from "./init-db-data.json" assert { type: "json" };

const prisma = new PrismaClient();

async function main() {
  const { settings } = initData;

  Promise.all(
    settings.map((setting) => prisma.settings.create({ data: setting }))
  );
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
