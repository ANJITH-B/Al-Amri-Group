import HeroSection from "@/components/blogs/HeroSection";
import NewsLetter from "@/components/blogs/NewsLetter";
import BlogListings from "@/components/blogs/BlogListing";
import { Metadata } from "next";
import React from "react";
import { UnderConstruction } from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Blogs | Al Amri Group",
  description: "Innovating Across Borders | Al Amri Group",
};

const page = () => {
  return (
    <main>
      {/* <HeroSection />
      <BlogListings />
      <NewsLetter /> */}
      <UnderConstruction/>
    </main>
  );
};

export default page;
