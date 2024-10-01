import img1 from "@/assets/about/5.jpg";
import Image from "next/image";
import { FaAngleRight, FaRightLong } from "react-icons/fa6";

const WhyChoose = () => {
    const data=[
        {id:1,title:"Discover Your Next Adventure "},
        {id:2,title:"Making Memories One Trip at a Time"},
        {id:3,title:"Explore the World with Us "},
    ]

  return (
    <div className="flex  justify-center  gap-12  flex-wrap-reverse px-2">
      <div>
        <Image
          alt="popular"
          src={img1}
          height={800}
          width={500}
          className="h-[400px] w-[500px] rounded-lg"
        />
      </div>

      <div className=" ">
        <p className="text-xl text-green-800 my-4">Why Choose Us</p>
        <h1 className="text-2xl font-bold max-w-md my-4"> Where Every Moment Becomes a Cherished Memory</h1>

        <span className="text-gray-400  my-4 max-w-md ">
          We have been operating for over a decade, providing top-notch   services <br /> 
          to our clients and building a strong track record
        </span>
        <div className="mt-8">
         {
            data?.map(item=><>
            <div className="flex gap-4 item-center my-2 text-green-800 font-medium">
                <FaAngleRight className="mt-1"/>
                <p>{item?.title}</p>
            </div>
            </>)
         }
        </div>
        <button className="px-8 mt-4 py-2 bg-green-900 text-white font-semibold rounded-md shadow-md rounded-l-full rounded-r-full hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center">
             Read More
            <FaRightLong className="ml-2" />
          </button>
      </div>
    </div>
  );
};

export default WhyChoose;
