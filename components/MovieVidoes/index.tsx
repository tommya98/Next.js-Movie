import { getVideos } from "@/services/movies";

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return (
    <div className="container w-4/5 mx-auto grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10 mt-t mb-10">
      {videos.map((video) => (
        <div
          key={video.id}
          className="flex justify-center items-center w-max justify-self-center"
        >
          <iframe
            src={`https://youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.name}
            className="rounded-md opacity-80 transition-opacity duration-200 ease-in-out hover:opacity-100 h-60 w-full"
          />
        </div>
      ))}
    </div>
  );
}
