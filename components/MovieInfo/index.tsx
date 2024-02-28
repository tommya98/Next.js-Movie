import Image from "next/image";
import { getMovie } from "@/services/movies";

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-12 w-4/5 mx-auto">
      <Image
        src={movie.poster_path}
        alt={movie.title}
        width={400}
        height={600}
        className="rounded-xl max-w-[70%] place-self-center"
      />
      <div className="flex flex-col mt-5 gap-5">
        <h1 className="text-white text-4xl font-semibold">{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed()}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
