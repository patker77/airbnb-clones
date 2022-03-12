import Image from "next/dist/client/image";

function City({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-100 rounded-2xl hover:scale-105 transform transition duration-200 ease-out ">
      <div className="relative h-20 w-20 flex-shrink-0">
        <Image src={img} layout="fill" className="rounded-lg" />
        {/* <img src={img} alt="" srcset="" /> */}
      </div>
      <div className="flex-none pr-16">
        <h2 className=" font-semibold">{location}</h2>
        <h3 className="text-gray-600 pr-4 ">{distance}</h3>
      </div>
    </div>
  );
}

export default City;
