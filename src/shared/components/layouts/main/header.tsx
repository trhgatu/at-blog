"use client";
import Link from "next/link";
import { ModeToggle } from "../../darkmode-toggle";

const Header = () => {
  return (
    <header className=" py-4 bg-white dark:text-black">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold">AT BLOG</span>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex space-x-6 items-center">
            <li>
              <ModeToggle />
            </li>
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
