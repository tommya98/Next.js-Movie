import Movie from "@/components/Movie";
import { getMovies } from "@/services/movies";

export default async function Home() {
  const movies = await getMovies();
  return (
    <div className="grid grid-cols-5 gap-6 mx-auto max-w-[90%] w-full">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
