"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <div className="flex justify-center items-center ">
      <nav className="bg-red-500 px-4 py-2 flex justify-center items-center rounded-md w-1/4">
        <ul className="flex space-x-4">
          <li className={path === "/" ? "font-bold" : ""}>
            <Link href="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            {path === "/" ? "🔥" : ""}
          </li>
          <li className={path === "/about" ? "font-bold" : ""}>
            <Link href="/about" className="text-white hover:text-gray-200">
              About
            </Link>
            {path === "/about" ? "🔥" : ""}
          </li>
        </ul>
      </nav>
    </div>
  );
}
