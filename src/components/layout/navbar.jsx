"use client";
import { SearchIcon } from "@/components/svg/search";
import { Cart } from "../svg/cart";
import Link from "next/link";
import { Vector } from "../svg/Vector";
import { useState } from "react";

export const Navbar = () => {
  const [active, setactive] = useState(false);
  const handleClick = () => {
    console.log("act");
    setactive(!active);
  };
  return (
    <nav className="bg-[#E7E6E6] pb-2 border-gray-200">
      <div className=" flex flex-wrap items-center justify-between  p-4 gap-x-3">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold flex flex-row justify-center items-center space-x-2 whitespace-nowrap dark:text-white">
            Go Fashion
            <Vector />
          </span>
        </Link>
        <div className="relative hidden md:block flex-grow">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <SearchIcon />
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#9898984D] flex-grow focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..."
          />
        </div>

        <div className="flex space-x-4">
          <div
            onClick={handleClick}
            className="border-[1px]  md:hidden  rounded-lg border-black  p-2 flex justify-center items-center ps-3 cursor-pointer"
          >
            <SearchIcon />
          </div>
          <Link href="/cart">
            <Cart />
          </Link>
        </div>
      </div>
      {active && (
        <div className={`relative flex mx-10  md:hidden  flex-grow`}>
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <SearchIcon />
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#9898984D] flex-grow focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
      )}
    </nav>
  );
};
