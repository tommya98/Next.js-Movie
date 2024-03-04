import { getSimilarMovies } from "@/services/movies";
import Image from "next/image";
import Link from "next/link";

export default async function SimilarMovies({ id }: { id: string }) {
  const movies = await getSimilarMovies(id);

  return (
    <div className="container w-4/5 mx-auto grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10 mt-5 mb-10">
      {movies
        .filter((movie) => movie.poster_path)
        .splice(0, 12)
        .map((movie) => (
          <Link
            href={`/movie/${movie.id}`}
            key={movie.id}
            className="flex flex-col justify-center items-center w-max justify-self-center"
          >
            <Image
              src={movie.poster_path}
              width={200}
              height={300}
              alt={movie.title}
              className="rounded-md mb-4"
            />
            {movie.title}
          </Link>
        ))}
    </div>
  );
}
