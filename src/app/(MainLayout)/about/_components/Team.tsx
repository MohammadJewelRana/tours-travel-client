// src/components/Team.tsx

import React from "react";
import Image from "next/image";
import img1 from "@/assets/about/5.jpg"; // Add your imported image

const Team = () => {
  return (
    <div className="my-24">
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Team Member */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105">
            <Image
               src={img1}  
              alt="Team Member 1"
              className="rounded-full w-32 h-32 mx-auto mb-4"
              width={128} // Image width
              height={128} // Image height
            />
            <h3 className="text-xl font-semibold text-center">John Doe</h3>
            <p className="text-gray-600 text-center">
              Travel Enthusiast & Guide
            </p>
          </div>

          {/* Team Member */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105">
            <Image
               src={img1}  
              alt="Team Member 2"
              className="rounded-full w-32 h-32 mx-auto mb-4"
              width={128} // Image width
              height={128} // Image height
            />
            <h3 className="text-xl font-semibold text-center">Jane Smith</h3>
            <p className="text-gray-600 text-center">Marketing Specialist</p>
          </div>

          {/* Team Member */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src={img1}  
              alt="Team Member 3"
              className="rounded-full w-32 h-32 mx-auto mb-4"
              width={128} // Image width
              height={128} // Image height
            />
            <h3 className="text-xl font-semibold text-center">Emily Johnson</h3>
            <p className="text-gray-600 text-center">
              Customer Service Manager
            </p>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Team;
