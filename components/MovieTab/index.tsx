"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MovieTab({ id }: { id: string }) {
  const pathname = usePathname();
  const activeTab = pathname.includes("similar") ? "similar" : "videos";

  return (
    <div className="flex space-x-4 w-4/5 mx-auto">
      <Link
        href={`/movies/${id}`}
        className={`${
          activeTab === "videos"
            ? "bg-gray-900 text-white"
            : "bg-gray-800 text-white"
        } px-4 py-2 rounded-md hover:bg-gray-700`}
        prefetch
      >
        Videos
      </Link>
      <Link
        href={`/movies/${id}/similar`}
        className={`${
          activeTab === "similar"
            ? "bg-gray-900 text-white"
            : "bg-gray-800 text-white"
        } px-4 py-2 rounded-md hover:bg-gray-700`}
        prefetch
      >
        Similar Movies
      </Link>
    </div>
  );
}
