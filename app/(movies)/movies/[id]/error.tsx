"use client";

import Link from "next/link";

export default function ErrorOMG() {
  return (
    <div className=" flex flex-col items-center justify-center bg-black">
      <h1 className="text-white text-5xl font-bold mb-8">Error</h1>
      <Link
        href="/"
        className="text-blue-500 hover:text-blue-700 font-medium text-lg"
      >
        Return Home
      </Link>
    </div>
  );
}
