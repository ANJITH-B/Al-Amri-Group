import React from "react";
import ReelCarousal from "./ReelCarousal";
import CustomButton from "../CustomButton";
import { SentenceAnimation } from "../AnimationText";

const Reels: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-gray-800 gap-4 mt-28 px-8">
        <SentenceAnimation sentences={["Transforming Visions into","Impactful Realities"]}  className="text-2xl md:text-5xl max-w-2xl font-normal text-center tracking-wider leading-5 md:leading-11"/>
        <p className="text-sm md:text-base max-w-md font-normal text-center">
          Unleashing innovation and excellence across diverse industries. From catering to construction, we craft solutions that inspire growth and redefine possibilities.
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
