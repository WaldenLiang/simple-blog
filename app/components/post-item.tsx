import Link from "next/link";
import { FC } from "react";

type PropsType = {
  id: number;
  title: string;
  description: string;
  cover?: string;
  createdAt: string;
};

const PostItem: FC<PropsType> = ({
  id,
  title,
  description,
  cover,
  createdAt,
}) => {
  return (
    <div className="w-full rounded-lg shadow-lg overflow-hidden bg-accent-content">
      {cover && (
        <div className="mb-4">
          <img src={cover} alt={title} className="w-full" />
        </div>
      )}
      <div className="p-4">
        <Link href={`/post/${id}`}>
          <h2 className="text-2xl font-semibold mb-4 hover:underline hover:text-primary">
            {title}
          </h2>
        </Link>
        <p className="mb-4 text-gray-500">{createdAt}</p>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default PostItem;
