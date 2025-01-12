import HeroSection from "@/components/blogs/HeroSection";
import NewsLetter from "@/components/blogs/NewsLetter";
import BlogListings from "@/components/blogs/BlogListing";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blogs | Al Amri Group",
  description: "Innovating Across Borders | Al Amri Group",
};

const page = () => {
  return (
    <main className="w-screen h-full flex flex-col items-center">
      <HeroSection />
      <div className="px-2 md:px-10 lg:px-10 xl:px-[20px] w-full max-w-screen-xl">
        <BlogListings />
        <NewsLetter />
      </div>
    </main>
  );
};

export default page;
