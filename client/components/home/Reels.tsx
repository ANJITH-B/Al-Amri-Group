import React from "react";
import ReelCarousal from "./ReelCarousal";
import CustomButton from "../CustomButton";

const Reels: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-gray-800 gap-4 mt-28 px-8">
        <p className="text-2xl md:text-5xl max-w-2xl font-normal text-center tracking-wider md:leading-12">
          We address Solutions for Your Business Growth
        </p>
        <p className="text-sm md:text-base max-w-md font-normal text-center">
          Providing High-Quality Products and Services Across Apparel, Catering,
          and Construction Industries
        </p>
      </div>
      <ReelCarousal />
      <div className="w-full flex justify-center">
        <CustomButton>Explore more</CustomButton>
      </div>
    </div>
  );
};

export default Reels;
