import { Suspense } from "react";
import MovieInfo from "@/components/MovieInfo";
import MovieVideos from "@/components/MovieVidoes/MovieVideos";
import { getMovie } from "@/services/movies";
import LoadingUI from "@/components/LoadingUI";

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
  return (
    <div>
      <Suspense fallback={<LoadingUI />}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<LoadingUI />}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
