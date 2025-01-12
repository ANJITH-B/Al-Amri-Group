"use client";
import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import { Icons } from "../Icons";
import ProductCard from "./ProductCard";
import { productData, ProductType } from "@/data/productData";
import { useSearchParams } from "next/navigation";

const ProductPage: React.FC = () => {
  const params = useSearchParams();
  const query = params.get("q") ?? "";
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState<ProductType[]>(productData);
  const [filter, setFilter] = useState<string>("All Products");
  const [search, setSearch] = useState<string>(query.replace("-", " "));

  useEffect(() => {
    const result = productData.filter((item) => {
      const matchesSearch = search
        ? item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase())
        : true;

      const matchesFilter =
        filter === "All Products" || item.category === filter;
      return matchesSearch && matchesFilter;
    });

    setData(result);
  }, [filter, search]);

  return (
    <div className="flex gap-4 mt-20 md:mt-28 lg:mt-32 mb-12 w-full justify-between min-h-screen">
      <div className="w-1/3 static hidden xl:flex flex-col gap-8">
        <Filter filter={filter} setFilter={setFilter} />
      </div>
      <div className="flex flex-col w-full mx-auto xl:w-2/3 max-w-[54rem] gap-4 xl:gap-8 p-2">
        <div className="flex gap-1 w-full">
          <div
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="flex xl:hidden justify-center items-center border border-stone-300 rounded-lg p-2"
          >
            <Icons.filter />
          </div>
          <div className="flex items-center border bg-white border-stone-300 rounded-full text-sm p-1 pl-4 w-full">
            <Icons.search />
            <input
              placeholder="Explore the best products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none text-sm px-2 w-full bg-transparent"
            />
          </div>
          <button className="hidden md:flex w-fit h-fit z-10 bg-white items-center rounded-full border border-gray-300 p-1">
            <p className="px-4 text-xs md:text-sm">Search</p>
            <span className="rounded-full w-8 lg:w-10 h-8 lg:h-10 flex items-center justify-center text-xs xl:text-2xl font-bold bg-black">
              <Icons.search className="text-white" />
            </span>
          </button>
        </div>
        <div
          id="dropdown"
          className={`xl:hidden z-10 overflow-hidden transition-height duration-300 pop ${
            isDropdownOpen ? "opacity-1 p-1" : "max-h-[1px] opacity-0"
          } w-full rounded-lg shadow`}
        >
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 lg:gap-4 justify-between">
          {data?.length ? (
            data.map((item, index) => <ProductCard key={index} data={item} />)
          ) : (
            <div className="col-span-3">
              <p className="px-4 text-xs md:text-sm">
                Oops! No results found, try changing filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
