import { BASE_URL } from "@/constant";
import { IMovie } from "@/types";

export async function getMovies(): Promise<IMovie[]> {
  const response = await fetch(BASE_URL);
  const json: IMovie[] = await response.json();
  return json;
}
