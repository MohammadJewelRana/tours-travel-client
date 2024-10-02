/* eslint-disable jsx-a11y/no-static-element-interactions */
"use client";

import img1 from "@/assets/about/1.jpg";
import img2 from "@/assets/about/2.jpg";
import img3 from "@/assets/about/3.jpg";
import img4 from "@/assets/about/4.jpg";
import Container from "@/components/UI/Container";
import Image from "next/image";
import { FaRightLong } from "react-icons/fa6";
import { useState } from "react"; // Import useState
import SectionTitle from "@/components/shared/SectionTitle";

const Popular = () => {
  const popularData = [
    { id: "01", title: "Weekend Wonders", image: img1 },
    { id: "02", title: "Eco Tours", image: img2 },
    { id: "03", title: "Beach Tour", image: img3 },
    { id: "04", title: "Heritage Tour", image: img4 },
  ];

  const [selectedId, setSelectedId] = useState(popularData[0].id);
  const [selectedImage, setSelectedImage] = useState(popularData[0].image);

  const handleItem = (item: any) => {
    setSelectedId(item.id);
    setSelectedImage(item.image);
  };

  return (
    <Container>
      {/* header */}
   
      <SectionTitle heading="Popular Destinations for trip" subHeading=" Whether you’re looking for places for a vacation. We are here to" buttonText="View More" />

      {/* main */}
      <div className="my-12 flex justify-between items-center gap-12 flex-wrap">
        <div>
          {popularData.map((item) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              key={item.id}
              className="flex items-center justify-between gap-12 my-12 cursor-pointer border-b-2 border-gray-300 pb-4"
              onClick={() => handleItem(item)}
            >
              <div className="flex items-center gap-12">
                <h1
                  className={`text-xl md:text-3xl ${selectedId === item.id ? "text-green-900 font-bold" : "text-gray-400"}`}
                >
                  {item.id}
                </h1>
                <h1 className=" text-2xl md:text-4xl font-bold">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Image
            alt="popular"
            src={selectedImage}
            height={800}
            width={500}
            className="h-[400px] w-[500px] rounded-lg"
          />
        </div>
      </div>
    </Container>
  );
};

export default Popular;
