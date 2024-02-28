"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IMovieProps {
  title: string;
  id: number;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  const router = useRouter();
  const onClick = () => router.push(`/movies/${id}`);

  return (
    <div className="movie grid grid-rows-[1fr_auto] gap-5 cursor-pointer place-items-center">
      <img
        src={poster_path}
        alt={title}
        onClick={onClick}
        className="max-w-full min-h-full rounded-lg transition-opacity duration-300 ease-in-out opacity-70 hover:opacity-100"
      />
      <Link href={`/movies/${id}`} className="text-center" prefetch>
        {title}
      </Link>
    </div>
  );
}
