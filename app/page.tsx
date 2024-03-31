import { prisma } from "@/prisma";
import PostItem from "./components/post-item";

export default async function Page() {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
      cover: true,
    },
    where: {
      published: true,
    },
  });

  return (
    <div className="flex flex-col gap-6">
      {posts.map((item) => (
        <PostItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          createdAt={item.createdAt.toLocaleString()}
          cover={item.cover ?? undefined}
        />
      ))}
    </div>
  );
}
