import { BASE_URL } from "@/app/constant";

async function getVideos(id: string) {
  const response = await fetch(`${BASE_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className="container w-4/5 mx-auto grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-10 mt-10 mb-10">
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
          className="rounded-md opacity-80 transition-opacity duration-200 ease-in-out hover:opacity-100"
        />
      ))}
    </div>
  );
}
