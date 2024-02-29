import { BASE_URL } from "@/constant";
import {
  IMovie,
  IMovieInfo,
  IMovieVideo,
  IMovieCredit,
  IMovieProvider,
} from "@/types";

const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(`${BASE_URL}/${url}`);
  const json: T = await response.json();
  return json;
};

export const getMovies = (): Promise<IMovie[]> => fetchData<IMovie[]>("");

export const getMovie = (id: string): Promise<IMovieInfo> =>
  fetchData<IMovieInfo>(`${id}`);

export const getVideos = (id: string): Promise<IMovieVideo[]> =>
  fetchData<IMovieVideo[]>(`${id}/videos`);

export const getCredits = (id: string): Promise<IMovieCredit[]> =>
  fetchData<any>(`${id}/credits`);

export const getProviders = (id: string): Promise<IMovieProvider> =>
  fetchData<any>(`${id}/providers`);

export const getSimilarMovies = (id: string): Promise<IMovie[]> =>
  fetchData<IMovie[]>(`${id}/similar`);
