import BookNow from "@/components/UI/BookNow";
import Container from "@/components/UI/Container";
import React from "react";
import { FaCheck, FaCircle, FaCross, FaHeart, FaShare } from "react-icons/fa6";
import img1 from "@/assets/about/1.jpg";
import Image from "next/image";
import SwiperSlideComponent from "@/components/UI/SiperSlide";

const page = ({ params }: any) => {
  const facility = [
    {
      highlights: [
        "Hotel accommodation",
        "Private Air-conditioned car with driver",
        "All sightseeing with private local guides",
        "Driver allowances & fuel charges",
        "Personal care and attention",
        "All currently applicable taxes",
      ],
    },
    {
      serviceInclude: [
        "Hotel accommodation",
        "Private Air-conditioned car with driver",
        "All sightseeing with private local guides",
        "Driver allowances & fuel charges",
        "Personal care and attention",
        "All currently applicable taxes",
      ],
    },
    {
      serviceExclude: ["Additional Services", "Insurance", "Drink", "Tickets"],
    },
  ];

  return (
    <Container>
      <div className="flex gap-2 md:gap-8 border py-4 px-2 md:px-12">
        <p className="text-green-800 text-xl">Home / </p>
        <p className="text-green-800 text-xl">Delhi / </p>
        <p className="text-black text-xl"> Delhi Sight</p>
      </div>

      <div className="flex justify-between items-center gap-12 my-12">
        <div className="md:w-4/6">
          <h1 className="text-xl md:text-4xl font-bold">
            Delhi Sightseeing Tour
          </h1>
        </div>
        <div className="flex gap-8">
          <FaShare
            className="text-white border rounded-full text-4xl bg-green-800 p-2 cursor-pointer"
            title="Share"
          />
          <FaHeart
            className="text-white border rounded-full text-4xl bg-green-800 p-2 cursor-pointer"
            title="Wishlist"
          />
        </div>
      </div>

      <div className="my-12 flex justify-between  items-center  gap-12 flex-wrap mt-8">
        <div className="overflow-x-auto text-xl">
          <table className="min-w-full text-left border-collapse">
            <tbody>
              <tr>
                <td className="py-2 px-4 font-bold">Price</td>
                <td className="py-2 px-4">$ 1200</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-bold">Members</td>
                <td className="py-2 px-4">Unlimited</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-bold">Location</td>
                <td className="py-2 px-4">Chine</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-bold">Day</td>
                <td className="py-2 px-4">1 days</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-bold">Night</td>
                <td className="py-2 px-4">1 nights</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-row-reverse flex-wrap-reverse gap-8">
          <div className="flex md:flex-col gap-4   ">
            <Image
              alt="popular"
              src={img1}
              height={800}
              width={500}
              className="h-[140px] w-[200px] rounded-lg"
            />
            <Image
              alt="popular"
              src={img1}
              height={800}
              width={200}
              className="h-[140px] w-[200px] rounded-lg"
            />
          </div>

          <div>
            <Image
              alt="popular"
              src={img1}
              height={800}
              width={500}
              className="h-[300px] w-[500px] rounded-lg "
            />
          </div>
        </div>
      </div>

      <hr />

      <div className="flex justify-between flex-wrap items-start">
        {/* Left Side */}
        <div className="md:w-4/6">
          {/* About */}
          <div className="my-12 text-justify">
            <h1 className="text-xl md:text-4xl font-bold mb-4">
              About This Tour
            </h1>
            <p className="text-gray-500">
              Delhi, the capital of India, is the most popular destination in
              India, known for its historical forts and modern city life. Enjoy
              the Same Day Delhi Tour Package with Explorer.
            </p>
          </div>

          <hr />
          <div className="my-8">
            <h1 className="text-xl md:text-4xl font-bold mb-4">Highlights</h1>
            <div className="md:ml-12 ml-4">
              {facility[0]?.highlights?.map((item, index) => (
                <div key={index} className="flex gap-8 py-2">
                  <FaCircle className="text-green-600 mt-2 text-[10px]" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <hr />
          <div className="my-8">
            <h1 className="text-xl md:text-4xl font-bold mb-4">
              Include/Exclude
            </h1>
            <div className="flex gap-12 flex-wrap">
              <div className="md:ml-12 ml-4">
                {facility[1]?.serviceInclude?.map((item, index) => (
                  <div key={index} className="flex gap-8 py-2">
                    <FaCheck className="text-green-600 mt-2 text-[10px]" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="md:ml-12 ml-4">
                {facility[2]?.serviceExclude?.map((item, index) => (
                  <div key={index} className="flex gap-8 py-2">
                    <FaCross className="text-red-600 mt-2 text-[10px]" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr />
          <div className="my-8">
            <h1 className="text-xl md:text-4xl font-bold mb-4">
              Tours Location
            </h1>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14597.752131076564!2d90.34117698669432!3d23.838574521865922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c10078fabca1%3A0xf7bf824d69d57d8e!2sNoor%20Print!5e0!3m2!1sen!2sbd!4v1720717683758!5m2!1sen!2sbd"
                loading="lazy"
                title="map"
                className="w-full h-72"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-2/6 mt-12      p-6">
          <BookNow />
        </div>
      </div>

{/* 
<div>
    <SwiperSlideComponent/>
</div> */}


    </Container>
  );
};

export default page;
