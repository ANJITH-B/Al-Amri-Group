import React from "react";

const carousalCards: JSX.Element[] = [
  <div className="w-full h-full bg-primary200 rounded-3xl relative py-10">
    <p className="text-xs md:text-sm font-normal text-center text-gray-900">
      Welcome to Turki Saeed Al Amri Trading Company, your premier destination
      for high-quality lifestyle apparel, catering, construction materials, and
      building tools. Since 2002, we have been a trusted name in wholesale
    </p>
    <p className="text-xs md:text-sm font-normal text-center text-gray-900">
      At Al Amri, our values of integrity, honesty, and respect form the
      foundation of everything we do.
    </p>
  </div>,
  <div className="w-full h-40 bg-primary200 rounded-3xl" key="2"></div>,
  <div className="w-full h-60 bg-primary100 rounded-3xl" key="3"></div>,
  <div className="w-full h-60 bg-orange-400 rounded-3xl" key="3"></div>,
  <div className="w-full bg-yellow-400 rounded-3xl py-10" key="3">
    <p className="text-xs md:text-sm font-normal text-center text-gray-900">
      Welcome to Turki Saeed Al Amri Trading Company, your premier destination
      for high-quality lifestyle apparel, catering, construction materials, and
      building tools. Since 2002, we have been a trusted name in wholesale
    </p>
    <p className="text-xs md:text-sm font-normal text-center text-gray-900">
      At Al Amri, our values of integrity, honesty, and respect form the
      foundation of everything we do.
    </p>
  </div>,
  <div className="w-full h-40 bg-blue-400 rounded-3xl" key="2"></div>,
  <div className="w-full h-60 bg-purple-400 rounded-3xl" key="3"></div>,
];

export default carousalCards;
