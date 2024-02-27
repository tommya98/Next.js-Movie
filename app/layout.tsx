import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MOIVES",
  description: "The best movies in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
