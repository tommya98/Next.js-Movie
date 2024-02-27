import Link from "next/link";
import { BASE_URL } from "../constant";

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const response = await fetch(BASE_URL);
  const json: IMovie[] = await response.json();
  return json;
}

export default async function Home() {
  const movies = await getMovies();
  return (
    <div>
      <h1>All Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
