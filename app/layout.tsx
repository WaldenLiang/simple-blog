import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walden's Blog",
  description:
    "Consectetur fugiat eiusmod pariatur Lorem occaecat elit incididunt aute.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full max-w-[800px] mx-auto p-10">{children}</div>
      </body>
    </html>
  );
}
