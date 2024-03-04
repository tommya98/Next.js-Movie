import SimilarMovies from "@/components/SimilarMovies";
import { getMovie } from "@/services/movies";

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
  return <SimilarMovies id={id} />;
}
