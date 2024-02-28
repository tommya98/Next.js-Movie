import Link from "next/link";

export const metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-3xl font-bold text-red-600 mb-4">404 - Not Found</h2>
      <p className="text-lg  mb-5">
        Sorry, we could not find the requested resource.
      </p>
      <Link
        href="/"
        className="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-700 transition-all duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
