import Newsletter from "@/components/shared/Newsletter";
import { tourData } from "@/db";
import Image from "next/image";
import Link from "next/link";

const ToursPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">
          Explore Our Tours
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourData.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <Image
                src={tour.image}
                alt={tour.tourPlace}
                width={500}
                height={300}
                className="object-cover h-60 "
              />
              <div className="p-6">
                <p className="text-gray-600 mt-2">
                  {tour.details.length > 0
                    ? tour.details.slice(0, 60) + "..."
                    : tour.details}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-green-500 font-bold">${tour.price}</p>
                  <span className="text-yellow-400">★ {tour.ratings}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Duration: {tour.timePeriod}
                </p>
              <Link href={'/service'}>   <button className="mt-6 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Book Now
                </button> </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="-mb-12">
       <Newsletter/>
       </div>
    </div>
  );
};

export default ToursPage;
