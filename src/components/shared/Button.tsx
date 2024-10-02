import React from "react";
import { FaRightLong } from "react-icons/fa6";

const Button = ({buttonText}:{buttonText:string}) => {
  return (
    <div>
      <button className="px-8  bg-green-900 text-white font-semibold rounded-md shadow-md rounded-l-full rounded-r-full hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center py-4">
        {buttonText}
        <FaRightLong className="ml-2" />
      </button>
    </div>
  );
};

export default Button;
