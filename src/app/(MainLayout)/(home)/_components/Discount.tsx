import Button from "@/components/shared/Button";
import React from "react";

const Discount = () => {
  return (
    <div className="my-16 flex justify-between items-center flex-wrap gap-12 border border-dashed border-green-600 px-4 md:px-12 py-8 rounded-lg">
      <h1 className="text-green-900 text-xl md:text-2xl font-bold">
        Get up to <span className="text-red-600 text-4xl">40%</span> off on your
        first trip{" "}
      </h1>
      <Button buttonText="Book Now" />
    </div>
  );
};

export default Discount;
