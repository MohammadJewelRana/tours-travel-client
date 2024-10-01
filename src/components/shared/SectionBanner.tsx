import img from "@/assets/banner/sectionBanner.jpg";
import Image from "next/image";

const SectionBanner = ({ heading }: { heading: string }) => {
  return (
    <div>
      <div className="relative h-[350px] flex justify-center items-center">
        <Image
          src={img}
          layout="fill"
          //   objectFit="cover"
          alt="section"
          className="absolute inset-0 z-0"
        />

        <div className="absolute inset-0 bg-black opacity-50 z-10  " />
        <h1 className="relative text-white text-4xl md:text-6xl font-bold capitalize z-20 text-center ">
          Home / {heading}
        </h1>
      </div>
    </div>
  );
};

export default SectionBanner;
