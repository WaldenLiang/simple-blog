import { PrismaClient } from "@prisma/client";
import initData from "./init-db-data.json" assert { type: "json" };

const prisma = new PrismaClient();

async function main() {
  const { settings, post, comments } = initData;

  prisma.settings.deleteMany();
  prisma.post.deleteMany();
  prisma.comment.deleteMany();

  Promise.all(settings.map((data) => prisma.settings.create({ data })));
  Promise.all(post.map((data) => prisma.post.create({ data })));
  Promise.all(comments.map((data) => prisma.comment.create({ data })));
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
