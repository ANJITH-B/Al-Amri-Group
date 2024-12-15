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
    <main>
      <HeroSection />
      <BlogListings />
      <NewsLetter />
    </main>
  );
};

export default page;
