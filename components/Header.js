import React, { useEffect, useState } from "react";
import Image from "next/dist/client/image";
import logo from "../image/logo/air.png";
import {
  GlobeAltIcon,
  SearchIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/solid";
function Header() {
  const [hideNav, sethideNav] = useState(false);

  const scrol = useEffect(function mount() {
    function handleScrol() {
      if (window.scrollY >= 5) {
        sethideNav(true);
      } else {
        sethideNav(false);
      }
    }
    window.addEventListener("scroll", handleScrol);

    return function unMount() {
      window.removeEventListener("scroll", handleScrol);
    };
  });

  return (
    <div
      className={
        hideNav
          ? "sticky top-0 z-50 bg-white shadow-md grid grid-cols-3 p-5 md:px-20 items-center"
          : "hidden"
      }
      onScroll={scrol}
    >
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* center */}
      <div className="flex max-w-[300px] items-center rounded-full md:border-2 md:shadow-sm md:hover:shadow-md cursor-pointer py-2">
        <input
          type="text"
          className="outline-none flex-grow bg-transparent pl-5 placeholder-gray-900 text-gray-900 font-semibold items-center"
          placeholder="Begin je zoektocht"
        />
        <SearchIcon className="hidden md:inline-flex h-8 text-white bg-red-400 rounded-full p-2 mx-2" />
      </div>
      {/* right */}
      <div className="flex justify-end space-x-3 cursor-pointer mx-3 items-center">
        <p className="hidden md:inline-flex font-semibold text-lg  hover:rounded-3xl items-center hover:bg-gray-100 p-2 ">
          Host worden
        </p>
        <div className="flex items-center hover:rounded-full p-2 hover:bg-gray-100">
          <GlobeAltIcon className="hidden md:inline-flex h-8 text-gray-500" />
        </div>
        <div className="flex border-2 rounded-full shadow-sm p-2 hover:shadow-md items-center">
          <MenuIcon className="h-8 w-8 text-gray-500" />
          <UserCircleIcon className="h-8 w-8 text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default Header;
