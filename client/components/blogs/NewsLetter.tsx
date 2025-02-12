"use client";
import React from "react";
import CustomButton from "../CustomButton";
import { Icons } from "../Icons";

const NewsLetter: React.FC = () => {
  return (
    <div className="p-4 md:p-12 border-b-2">
      <div className="flex flex-col w-full lg:w-2/3 max-w-2xl mx-auto gap-4 lg:gap-8 p-8 font-bricolage bg-gradient-to-br from-primary100 to-white rounded-2xl">
        <div className="flex flex-col gap-2">
          <h1 className="text-sm md:text-lg xl:text-xl font-bold leading-snug md:leading-tight max-w-2xl">
            Join our newsletter list
          </h1>
          <p className="max-w-2xl text-sm md:text-base">
            Sign up to get the most recent blog articles in your email every
            week.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-2">
          <input
            placeholder="Enter your email"
            className="border border-stone-300 rounded-2xl text-sm py-2 px-4 w-full"
          />
          <CustomButton>
            <span className="font-normal">Subscribe</span>
          </CustomButton>
        </div>
        <div className="flex justify-between items-center pt-16">
          <p className="max-w-2xl text-xs md:text-sm">
            Share this page to social media
          </p>
          <div className="flex items-center sm:justify-end">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.alamrigroups.com/blogs/`}
              target="_blank"
              className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md  text-black bg-opacity-10 duration-300 hover:bg-opacity-100 hover:text-gray-500 sm:ml-3"
            >
              <Icons.linkedIn />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://www.alamrigroups.com/blogs/`}
              target="_blank"
              className="ml-1 mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md  text-black bg-opacity-10 duration-300 hover:bg-opacity-100 hover:text-gray-500"
            >
              <Icons.facebook />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=https://www.alamrigroups.com/blogs/text=Check%20this%20out`}
              target="_blank"
              className="ml-1 mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md  text-black bg-opacity-10 duration-300 hover:bg-opacity-100 hover:text-gray-500"
            >
              <Icons.twitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
