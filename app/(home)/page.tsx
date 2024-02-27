import { BASE_URL } from "../constant";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const response = await fetch(BASE_URL);
  const json = await response.json();
  const data = JSON.stringify(json);
  return data;
}

export default async function Home() {
  const movies = await getMovies();
  return <div>{movies}</div>;
}
