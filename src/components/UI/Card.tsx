import React from "react";
import Image from "next/image"; // Assuming you're using Next.js
import { FaMapMarkerAlt, FaStar, FaClock } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import image1 from "@/assets/about/1.jpg";

const SingleCard = ({ item }: any) => {
  const { image, tourPlace, location, ratings, timePeriod, price } = item;

  return (
    <div className="bg-white w-[300px] shadow-lg rounded-lg overflow-hidden max-w-sm">
      <div className="relative group">
        <Image
          src={image}
          alt={tourPlace}
          height={200}
          width={200}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center mb-2 text-gray-600 my-2">
          <FaMapMarkerAlt className="mr-2 text-green-600" />
          <p>{location}</p>  
        </div>
        <h3 className="text-2xl font-semibold my-3">{tourPlace}</h3>{" "}
        <div className="flex items-center mb-2 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-black ml-4 mt-1">{ratings} (500+)</span>{" "}
        </div>
        <div className="flex items-center mb-4 text-gray-600">
          <FaClock className="mr-2 text-green-600" />
          <p>{timePeriod}</p>
        </div>
        <div className="flex justify-between items-center my-3">
          <div className="flex gap-2 cursor-pointer">
            {/* <Link href={`/tour/${item?.id}`}>See Details </Link> */}
            <Link href={`service/${item?.id}`}>See Details </Link>
            <FaArrowRight className="mt-1" />
          </div>
          <p className="text-lg font-bold text-green-600">${price}</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
