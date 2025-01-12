"use client";
import { SentenceAnimation } from "@/components/AnimationText";
import Link from "next/link";
import React, { useState } from "react";

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="w-full py-20 xl:py-20 flex flex-col gap-5 items-center">
      <SentenceAnimation
        className="text-4xl"
        sentences={["Rental Categories"]}
      />
      <h1 className=" max-w-[560px] text-center">
        Discover top-quality lifestyle apparel, catering, and construction
        solutions designed to elevate your projects. Experience excellence,
        reliability, and unmatched service with Al Amri Group{" "}
      </h1>
      <div className="flex border-2 border-primary100 rounded-full text-sm p-[2px] pl-3 w-full max-w-sm">
        <input
          placeholder="Explore the best products"
          value={search}
          id="search"
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none text-sm px-2 w-full bg-transparent"
        />
        <Link
          href={`/search?q=${search}`}
          className="bg-primary100 text-black p-2 px-6 rounded-full"
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default Search;
