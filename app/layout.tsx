import type { Metadata } from "next";
import "@/app/global.css";
import Navigation from "@/components/Navagation";

export const metadata: Metadata = {
  title: {
    template: "%s | MOIVES",
    default: "MOIVES",
  },
  description: "The best movies in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white pt-40">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
