import { Suspense } from "react";
import MovieInfo from "@/components/MovieInfo";
import MovieCredits from "@/components/MovieCredits";
import LoadingUI from "@/components/LoadingUI";
import { getMovie } from "@/services/movies";
import MovieTab from "@/components/MovieTab";

interface IParams {
  params: { id: string };
  children: React.ReactNode;
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default function MovieDetail({ params: { id }, children }: IParams) {
  return (
    <div>
      <Suspense fallback={<LoadingUI />}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<LoadingUI />}>
        <MovieCredits id={id} />
      </Suspense>
      <Suspense fallback={<LoadingUI />}>
        <MovieTab id={id} />
        {children}
      </Suspense>
    </div>
  );
}
