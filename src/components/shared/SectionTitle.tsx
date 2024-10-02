import React from "react";
import { FaRightLong } from "react-icons/fa6";
import Button from "./Button";

const SectionTitle = ({
  heading,
  subHeading,
  buttonText,
}: {
  heading: string;
  subHeading: string;
  buttonText: string;
}) => {
  return (
    <div>
      <div className="flex justify-between items-center gap-8 flex-wrap">
        {/* heading */}
        <div>
          <h1 className="text-2xl md:text-4xl font-bold my-2">{heading}</h1>
          <p className="text-md text-gray-400 my-2">{subHeading}</p>
        </div>
        {/* button */}
        <div>
         <Button buttonText={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
