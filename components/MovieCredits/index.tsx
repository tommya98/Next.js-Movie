import Image from "next/image";
import { getCredits } from "@/services/movies";
import defaultImage from "@/assets/defaultProfileImage.png";

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);

  return (
    <div className="w-4/5 mx-auto my-8">
      <div className="overflow-x-auto whitespace-nowrap">
        <ul className="list-none m-0 p-0">
          {credits
            .filter((credit) => credit.character)
            .map((credit) => (
              <li
                key={credit.id}
                className="inline-block bg-gray-800 mr-4 p-2 rounded-md"
              >
                <Image
                  src={credit.profile_path || defaultImage}
                  width={100}
                  height={150}
                  alt={credit.name}
                  className="mx-auto rounded-md pb-4"
                />
                <div className="font-semibold">{credit.name}</div>
                <div className="text-sm text-gray-400">{credit.character}</div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
