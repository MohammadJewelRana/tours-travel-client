/* eslint-disable react/jsx-key */
import React from "react";
import { FaCertificate, FaCheck, FaShieldHalved } from "react-icons/fa6";

const Award = () => {
  const data = [
    {
      id: 1,
      title: "Certified travel Service-Quality System",
      icon: <FaCertificate />,
    },
    { id: 2, title: "Authorized By Tourist Board", icon: <FaShieldHalved />},
    {
      id: 3,
      title: "Member of the Travel Industry Association",
      icon: <FaCheck />,
    },
  ];

  return (
    <div className="mt-24 px-2">
      <div className="text-center my-12">
        <h1 className="text-3xl font-bold ">Awards & Certification</h1>
        <p className="text-gray-400 text-justify my-4">
          Quality and trust are the backbone of our business, along with our
          other core values. dignissim ipsumodio scelerisque felis egetese ore
          euismodivamus blandit vehicula suorbi dstieqcondimentum tincidunt dui
          vitae.Egeteuismod quis neqemporodn porta digssim ipsumodio scelerisque
          felis eget euismod purus quamat antenrcunec utdui idpurus elementum
          rutrum et rutrum sapamus.
        </p>
      </div>
      <div className="flex items-start justify-between gap-8">
        {data?.map((item) => (
          <div key={item.id} className="flex items-center flex-col">
            <div className="bg-green-800 h-16 w-16 rounded-full flex items-center justify-center">
              <p className="text-white text-2xl"> {item?.icon}</p>
            </div>
            <div>
              <p className="text-[14px] md:text-xl my-4 text-center">{item?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Award;
