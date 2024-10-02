import Link from "next/link";
import Image from "next/image";
import bannerImg from "@/assets/caresoul/3.jpg";

const Banner2 = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-r w-full from-purple-500 via-pink-500 to-red-500 text-white p-6 rounded-lg shadow-lg mx-auto   ">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get 30% Off on All Package!
            </h2>
            <p className="text-lg mb-6 max-w-3xl text-justify">
              {" "}
              Don&apos;t miss out on our exclusive 30% discount on all travel
              packages! Whether you&apos;re looking for an adventurous getaway or a
              relaxing vacation, we&apos;ve got the perfect offer for you. Book now
              and make your next journey unforgettable. Hurry, this limited-time
              offer won&apos;t last long!.Limited time offer!
            </p>

            <Link
              href='/service'
              className="inline-block bg-white text-purple-500 font-semibold text-lg px-6 py-3 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
          <div className="mt-6 md:mt-0 md:ml-6">
            <Image
              src={bannerImg}
              alt="Discounted Package"
              width={200} // Set the width explicitly
              height={300} // Set the height explicitly
              className="rounded-lg shadow-lg w-full md:w-96 h-[300px] w-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
