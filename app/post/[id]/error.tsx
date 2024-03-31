"use client";

import { useRouter } from "next/navigation";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();

  return (
    <div className="hero py-20 rounded-lg bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Sorry, something went wrong!</h1>
          <p className="py-6">{error.message}</p>
          <button
            className="btn btn-primary"
            onClick={() => router.replace("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
