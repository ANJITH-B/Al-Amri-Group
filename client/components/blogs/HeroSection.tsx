"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import blogData from "@/data/blogData";

const HeroSection: React.FC = () => {
  const data = blogData[0];
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col justify-end xl:flex-row items-end min-h-screen pt-20">
        <Image
          className="object-cover"
          src={`/assets/${data?.image}`}
          alt="background cover image"
          fill
          priority
        />
        <div className="absolute bg-opacity-40 z-1 bg-black w-full h-full" />
        <div className="flex flex-col justify-center items-center gap-4 lg:gap-8 w-full p-4 md:py-8 pb-14 z-10 font-bricolage">
          <div className="flex gap-2">
            <button className="backdrop-blur-lg py-2 bg-white bg-opacity-30 rounded-full px-8 text-lg uppercase">
              Blog
            </button>
            <button className="backdrop-blur-lg py-2 bg-white bg-opacity-30 rounded-full px-8 text-lg">
              {data?.updatedAt ? new Date(data.updatedAt).toDateString() : ""}
            </button>
          </div>
          <h1 className="text-2xl lg:text-4xl xl:text-5xl leading-snug md:leading-tight max-w-7xl text-center text-white">
            {data?.subtitle}
          </h1>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-4/5 max-w-6xl items-center mx-auto gap-4 lg:gap-8 px-8 pt-8 font-bricolage bg-gradient-to-r from-primary100 to-white rounded-3xl">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg md:text-lg xl:text-2xl font-bold text-center leading-snug md:leading-tight max-w-2xl">
            {data?.title}
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-center">
            {data?.description}
          </p>
        </div>
        <div className="flex items-end w-full justify-center ">
          <div className="h-12 w-10 flex-1 bg-[#F3F3F3]">
            <div className="w-full h-12 bg-gradient-to-r from-primary100 to-[#d3e0e4] rounded-br-2xl" />
          </div>
          <div className="bg-[#F3F3F3] w-fit text-center flex justify-center px-2 pt-2 rounded-t-3xl">
            <CustomButton href={`blogs/${data?._id}`}>
              <span className="font-normal">Read more</span>
            </CustomButton>
          </div>
          <div className="h-12 w-10 flex-1 bg-[#F3F3F3]">
            <div className="w-full h-12 bg-gradient-to-r from-[#dfe8eb] to-white rounded-bl-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
