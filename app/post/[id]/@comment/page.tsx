import { prisma } from "@/prisma";

export default async function Page({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: { id: Number(params.id), published: true },
  });

  if (!post) {
    throw new Error("The resource is not found.");
  }

  const { title, content, createdAt, cover } = post;

  return (
    <div>
      <article className="prose mx-auto">
        {cover && (
          <div>
            <img src={cover} title={title} className="w-full rounded-lg" />
          </div>
        )}
        <h1>{title}</h1>
        <p className="text-gray-500">{createdAt.toLocaleString()}</p>
        <div dangerouslySetInnerHTML={{ __html: content ?? "" }}></div>
      </article>
    </div>
  );
}
