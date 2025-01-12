"use client";
import React from "react";
import { Icons } from "../Icons";
import FilterSection from "./FilterSection";

interface Props {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <div className="flex h-fit flex-col border border-stone-300 bg-white rounded-xl p-2 xl:p-6 py-8 gap-6">
      <h1 className="flex gap-3 uppercase font-bold">
        <Icons.filter />
        Filter
      </h1>
      <div className="flex flex-col gap-2 w-full">
        <p className="flex font-semibold gap-2">Category</p>
        <FilterSection
          selectedKey={filter}
          onSelect={(key) => setFilter(key)}
        />
      </div>
    </div>
  );
};

export default Filter;
