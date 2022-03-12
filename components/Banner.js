import Image from "next/dist/client/image";
import banner from "../image/banner/banner.jpeg";
import {
  GlobeAltIcon,
  SearchIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/solid";

function Banner() {
  return (
    <div className="relative">
      <div className="relative h-[700px]  w-[600px] sm:h-[400px] sm:w-[100%] md:h-[500px] lg:[600px] 2xl:[700px]">
        <Image
          src={banner}
          layout="fill"
          className="object-fill md:object-cover"
        />
        <div className="absolute md:hidden flex top-6 bg-white left-[4%]  rounded-full shadow-sm cursor-pointer py-3 px-28 sm:px-40">
          <SearchIcon className="flex h-8 text-white bg-red-400 rounded-full p-2 mx-2" />
          <input
            type="text"
            className="outline-none cursor-pointer flex px-3 bg-transparent text-center placeholder-gray-900 text-gray-900 font-semibold"
            placeholder="Begin je zoektocht"
          />
        </div>
        <div className="absolute top-72 sm:top-[40%] w-full text-center">
          <p className="font-semibold text-lg md:text-2xl">
            Twijfel je nog over je bestemming?
          </p>
          <p className="font-semibold text-lg md:text-2xl pb-3">
            Geen probleem.
          </p>
          <button className="font-semibold md:text-2xl rounded-full text-red-400 p-4 bg-white shadow-md hover:shadow-xl">
            Ik ben flexibel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
