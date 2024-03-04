"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className="nav bg-[#2d2d2d] fixed w-[30%] mx-auto top-5 rounded-full py-5 left-1/2 z-10 transform -translate-x-1/2">
      <ul className="flex justify-center gap-12">
        <li className="list-none transition-all duration-100 ease-in-out hover:scale-105">
          <Link href="/" className="text-white hover:text-gray-200" prefetch>
            Home
          </Link>
          {path === "/" ? "🔥" : ""}
        </li>
        <li className="list-none transition-all duration-100 ease-in-out hover:scale-105">
          <Link
            href="/about"
            className="text-white hover:text-gray-200"
            prefetch
          >
            About
          </Link>
          {path === "/about" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
