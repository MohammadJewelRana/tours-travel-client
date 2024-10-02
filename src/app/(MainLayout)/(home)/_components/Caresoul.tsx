"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import Next.js Image component
import Image from "next/image";

// Import your images
import img1 from "@/assets/caresoul/3.jpg"; // Update the path to your images
import img2 from "@/assets/caresoul/5.jpg";

import img3 from "@/assets/caresoul/9.jpg";
import img4 from "@/assets/caresoul/4.jpg";
import img5 from "@/assets/caresoul/1.jpg";

const Caresoul = () => {
  const imageData = [img1, img2, img3, img4, img5];

  return (
    <div>
      <Swiper className=" max-w-7xl mx-auto">
        {imageData?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[600px]">
              <Image
                src={item}
                alt="Slide 2"
                fill
                style={{ objectFit: "fill" }} // Ensures the full image is visible
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Caresoul;
