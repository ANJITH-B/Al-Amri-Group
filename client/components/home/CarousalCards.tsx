import Image from "next/image";
import React from "react";

const carousalCards: JSX.Element[] = [
  <div className="w-full h-full bg-primary200 border-2 rounded-2xl md:rounded-3xl relative py-3 md:py-6 sm:px-3 px-2.5 text-sm md:text-lg">
    <h1 className="leading-4 md:leading-tight font-medium md:font-semibold text-start text-gray-900">
      Welcome to Turki Saeed Al Amri Trading Company
    </h1>
    <p className="text-xs md:text-sm font-normal text-start text-gray-900 pt-2">
      your premier destination for high-quality lifestyle apparel, catering,
      construction materials, and building tools
    </p>
  </div>,
  <div className="w-full h-90 bg-[#9cd9ffcf] border-2 rounded-3xl relative" key="3">
    <div className="absolute w-full h-full pb-5  flex items-end justify-center">
      <button className="bg-white text-xs md:text-sm px-2 md:px-5 py-[2px] rounded-md">Al Amri Group</button>
    </div>
    <Image width={100} height={100} className="w-full h-full rounded-3xl" src={"/assets/landing/card13.png"} alt="..." />
  </div>,
  <div className="w-full h-40 bg-primary200 border-2 rounded-3xl relative" key="2">
    <h1 className="leading-tight font-semibold text-start text-gray-900 absolute p-3.5 md:p-5">
      “Celebrating 22 Years of Excellence in Wholesale Solutions “
    </h1>
    <Image width={100} height={100} className="w-full h-full rounded-3xl" src={"/assets/landing/popper.gif"} alt="..." />
  </div>,
  <div className="w-full h-52 md:h-60 bg-primary100 border-2 rounded-3xl" key="3">
    <div className="absolute w-full h-full pt-5  flex items-start justify-center"><button className="bg-gray-600 text-xs md:text-sm text-white  px-2 md:px-5 py-[2px] rounded-md">Al Amri Group</button></div>
    <Image width={100} height={100} className="w-full h-full rounded-3xl" src={"/assets/landing/powertool.jpg"} alt="..." />
  </div>,
  <div className="w-full bg-[#95bfd9cf]  border-2 rounded-2xl md:rounded-3xl relative py-3 md:py-6 sm:px-3 px-2.5  text-sm md:text-lg" key="3">
    <h1 className=" leading-4 md:leading-tight font-medium md:font-semibold text-start text-gray-900">
      Empowering Industries, Enriching Lives
    </h1>
    <p className="text-xs md:text-sm font-normal text-start text-gray-900 pt-2">
      Al Amri Group stands at the forefront of innovation, offering exceptional solutions across diverse sectors. With a commitment to quality and excellence, we help businesses and communities thrive globally.
    </p>
  </div>,
  <div className="w-full h-90 bg-blue-400 border-2 rounded-2xl md:rounded-3xl relative" key="2">
    <div className="absolute w-full h-full pt-5  flex items-start justify-center"><button className="bg-white text-xs md:text-sm px-2 md:px-5 py-[2px] rounded-md">Al Amri Group</button></div>
    <div className="absolute w-full h-full pb-6 px-5 flex items-end justify-center text-white leading-tight text-lg"><h1>Catering & Restaurant Services</h1></div>
    <Image width={100} height={100} className="w-full h-full rounded-2xl  md:rounded-3xl" src={"/assets/landing/catering.png"} alt="..." />
  </div>,
  <div className="w-full h-60 bg-primary200 rounded-2xl md:rounded-3xl py-3 md:py-6 md:px-5 px-3" key="3">
    <h1 className=" leading-tight text-sm md:text-md font-semibold text-start text-gray-900">
      At Al Amri, our values of integrity, honesty, and respect form the
      foundation of everything we do.
    </h1>
  </div>,
];

export default carousalCards;
