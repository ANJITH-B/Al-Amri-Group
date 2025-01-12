import React from "react";
import ProductCard from "./ProductCard";
import { sectionData } from "@/data/sectionData";
import CustomButton from "@/components/CustomButton";

const Sections: React.FC = () => {
  return (
    <div className="py-12 md:py-20">
      {sectionData.map((item) => (
        <div key={item?.title} className="pl-2 md:px-4 py-4">
          <h1 className="font-black text-xl pb-2">{item?.title}</h1>
          <div className="flex overflow-x-auto space-x-2 md:space-x-4 py-4">
            {item?.products?.map((item) => (
              <ProductCard data={item} key={item?.title} />
            ))}
          </div>
        </div>
      ))}
      <div className="mx-auto w-fit pt-8 md:pt-12">
        <CustomButton href="/search">Explore more</CustomButton>
      </div>
    </div>
  );
};

export default Sections;
