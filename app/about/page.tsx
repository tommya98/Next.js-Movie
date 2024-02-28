export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="mb-4">
        This is a Next.js practice project dedicated to showcasing various
        movies.
        <br />
        Here you can find detailed information about different movies, their
        trailers, and much more.
      </p>
      <div className="space-y-3">
        <div>
          <span className="font-bold">GitHub:</span>
          <a
            href="https://github.com/tommya98/Next.js-Movie"
            className="text-blue-400 hover:text-blue-300 ml-2"
          >
            tommya98/Next.js-Movie
          </a>
        </div>
        <div>
          <span className="font-bold">Dev Blog:</span>
          <a
            href="https://seokhun.dev"
            className="text-blue-400 hover:text-blue-300 ml-2"
          >
            seokhun.dev
          </a>
        </div>
        <div>
          <span className="font-bold">Resources:</span>
          <a
            href="https://nomadcoders.co/nextjs-for-beginners"
            className="text-blue-400 hover:text-blue-300 ml-2"
          >
            Next.js for Beginners by Nomad Coders
          </a>
        </div>
        <div>
          <span className="font-bold">Made by:</span>
          <span className="ml-2">seokhun / 2024</span>
        </div>
      </div>
    </div>
  );
}
