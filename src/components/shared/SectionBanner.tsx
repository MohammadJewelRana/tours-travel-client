
"use client";

import { Parallax } from "react-parallax";
import img from "@/assets/caresoul/4.jpg";

const SectionBanner = ({ heading }: { heading: string }) => {
  return (
    <Parallax
      bgImage={img.src}
      bgImageAlt={heading}
      strength={300} 
    >
      <div className="relative h-[450px] flex justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <h1 className="relative text-white text-4xl md:text-6xl font-bold capitalize z-20 text-center">
          Home / {heading}
        </h1>
      </div>
    </Parallax>
  );
};

export default SectionBanner;
