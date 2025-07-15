"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          euoom's public space
        </Link>
        <ul className="flex space-x-2 sm:space-x-4">
          <li className="flex-shrink-0">
            <Link href="/" className="block p-2 hover:bg-gray-700 rounded">홈</Link>
          </li>
          <li className="flex-shrink-0">
            <Link href="/service" className="block p-2 hover:bg-gray-700 rounded">서비스</Link>
          </li>
          <li className="flex-shrink-0">
            <Link href="/project" className="block p-2 hover:bg-gray-700 rounded">프로젝트</Link>
          </li>
          <li className="flex-shrink-0">
            <Link href="/blog" className="block p-2 hover:bg-gray-700 rounded">블로그</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
