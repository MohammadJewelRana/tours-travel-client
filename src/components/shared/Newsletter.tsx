import React from "react";
import Image from "next/image";
import backgroundImg from "@/assets/newsletter/1.png";

const Newsletter = () => {
  return (
    <div
      className="relative flex items-center justify-center h-[400px] bg-no-repeat bg-right mt-24"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 text-white text-center p-4">
        <h2 className="text-4xl font-extrabold mb-4 shadow-lg">
          Subscribe to Our Newsletter
        </h2>
        <p className="mb-4 text-lg max-w-md mx-auto">
          Stay updated with our latest news and promotions. Enter your email
          below to subscribe!
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="p-2 rounded-l-md w-64 text-black"
          />
          <button className="bg-green-900 text-white p-2 rounded-r-md hover:bg-green-800 transition duration-300 shadow-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
