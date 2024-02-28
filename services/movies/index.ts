import { BASE_URL } from "@/constant";
import { IMovie, IMovieInfo, IMovieVideo } from "@/types";

export async function getMovies(): Promise<IMovie[]> {
  const response = await fetch(BASE_URL);
  const json: IMovie[] = await response.json();
  return json;
}

export async function getMovie(id: string): Promise<IMovieInfo> {
  const response = await fetch(`${BASE_URL}/${id}`);
  const json: IMovieInfo = await response.json();
  return json;
}

export async function getVideos(id: string) {
  const response = await fetch(`${BASE_URL}/${id}/videos`);
  const json: IMovieVideo[] = await response.json();
  return json;
}
