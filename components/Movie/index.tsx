import Link from "next/link";
import Image from "next/image";

interface IMovieProps {
  title: string;
  id: number;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  return (
    <div className="movie grid grid-rows-[1fr_auto] gap-5 cursor-pointer place-items-center">
      <Link
        href={`/movies/${id}`}
        className="text-center flex flex-col gap-4"
        prefetch
      >
        <Image
          src={poster_path}
          alt={title}
          width={300}
          height={400}
          className="max-w-full min-h-full rounded-lg transition-opacity duration-300 ease-in-out opacity-70 hover:opacity-100"
        />
        {title}
      </Link>
    </div>
  );
}
