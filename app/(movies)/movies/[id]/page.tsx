import { getMovie } from "@/services/movies";
import MovieVideos from "@/components/MovieVidoes";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default function MovieDetail({ params: { id } }: IParams) {
  return <MovieVideos id={id} />;
}
