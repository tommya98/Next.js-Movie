"use client";

import { Suspense, useState } from "react";
import SimilarMovies from "@/components/SimilarMovies";
import MovieVideos from "@/components/MovieVidoes";
import LoadingUI from "@/components/LoadingUI";

type TabType = "movies" | "videos";

export default function MovieTab({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState<TabType>("videos");

  return (
    <div className="">
      <div className="flex space-x-4 w-4/5 mx-auto">
        <button
          className={`tab ${
            activeTab === "videos"
              ? "bg-gray-900 text-white"
              : "bg-gray-800 text-white"
          } px-4 py-2 rounded-md`}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
        <button
          className={`tab ${
            activeTab === "movies"
              ? "bg-gray-900 text-white"
              : "bg-gray-800 text-white"
          } px-4 py-2 rounded-md`}
          onClick={() => setActiveTab("movies")}
        >
          Similar Movies
        </button>
      </div>
      <Suspense fallback={<LoadingUI />}>
        {activeTab === "movies" ? (
          <SimilarMovies id={id} />
        ) : (
          <MovieVideos id={id} />
        )}
      </Suspense>
    </div>
  );
}
