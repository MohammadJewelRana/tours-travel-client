// SwiperSlideComponent.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import img from "@/assets/about/1.jpg";
import Image from "next/image";

const SwiperSlideComponent = () => {
  const slides = [
    {
      id: 1,
      title: "Slide 1",
      description: "This is the first slide.",
      imgSrc: "https://via.placeholder.com/300", // Replace with your image URL
    },
    {
      id: 2,
      title: "Slide 2",
      description: "This is the second slide.",
      imgSrc: "https://via.placeholder.com/300", // Replace with your image URL
    },
    {
      id: 3,
      title: "Slide 3",
      description: "This is the third slide.",
      imgSrc: "https://via.placeholder.com/300", // Replace with your image URL
    },
  ];

  return (
    <Swiper spaceBetween={30} pagination={{ clickable: true }} navigation>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="flex flex-col items-center justify-center p-4">
            <Image
              alt="popular"
              src={img}
              height={800}
              width={500}
              className="h-[140px] w-[200px] rounded-lg"
            />{" "}
            <h2 className="text-xl font-bold">{slide.title}</h2>
            <p className="text-gray-500">{slide.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlideComponent;
