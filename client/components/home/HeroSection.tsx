import React from "react";
import CustomButton from "../CustomButton";
import Carousal from "./Carousal";
import { SentenceAnimation } from "../AnimationText";
import { motion } from "framer-motion"

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center text-gray-800 gap-4 mt-28 lg:mt-36 md:px-8 h-[35vh] md:h-[30vh]">
        <SentenceAnimation className="text-[30px]  md:text-5xl  font-normal text-center tracking-wider leading-6 md:leading-11" sentences={["Your Trusted Wholesale","Partner Since 2002"]}/>
        <motion.p className="text-sm leading-5 md:text-base max-w-lg font-normal text-center px-8 md:px-0">
          Discover top-quality lifestyle apparel, catering, and construction
          solutions designed to elevate your projects. Experience excellence,
          reliability, and unmatched service with Al Amri Group
        </motion.p>
        <CustomButton>Explore benefits</CustomButton>
      </div>
      <Carousal />
    </>
  );
};

export default HeroSection;
