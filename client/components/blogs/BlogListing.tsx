"use client";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import blogData from "@/data/blogData";
import CustomButton from "../CustomButton";

const BlogListings: React.FC = () => {
  const [index, setIndex] = useState(3);
  const data = blogData?.slice(0, index);
  const handleLoad = () => {
    const pos = index + 3;
    if (index < blogData.length) {
      setIndex(pos);
    }
  };
  return (
    <div className="p-4 py-8 lg:p-12 flex-col items-center">
      <p className="text-center text-3xl lg:text-5xl p-8">
        Popular Blogs
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {data?.map((item, index) => (
          <React.Fragment key={`parent-${index}`}>
            <div key={`card-${index}`} className="col-span-2">
              <BlogCard data={item} />
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center items-center pt-8">
        <CustomButton onClick={handleLoad}>
          VIEW ALL
        </CustomButton>
      </div>
    </div>
  );
};

export default BlogListings;
