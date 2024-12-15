import React from "react";
import CustomButton from "../CustomButton";
import Carousal from "./Carousal";

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center text-gray-800 gap-4 mt-28 px-8">
        <p className="text-2xl md:text-5xl max-w-xl font-normal text-center tracking-wider md:leading-12">
          Your Trusted Wholesale Partner Since 2002
        </p>
        <p className="text-sm md:text-base max-w-lg font-normal text-center">
          Discover top-quality lifestyle apparel, catering, and construction
          solutions designed to elevate your projects. Experience excellence,
          reliability, and unmatched service with Al Amri Group
        </p>
        <CustomButton>Explore benefits</CustomButton>
      </div>
      <Carousal />
    </>
  );
};

export default HeroSection;
