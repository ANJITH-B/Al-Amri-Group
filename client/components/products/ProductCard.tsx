import { SectionItem } from "@/data/sectionData";
import { Icons } from "../Icons";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard: React.FC<{ data: SectionItem }> = ({ data }) => {
  return (
    <div>
      <div className="min-w-52 max-w-56 h-full bg-[#F9FBFA] rounded-xl border border-[#999999]">
        <div className="relative w-full h-32 bg-white overflow-hidden rounded-t-xl border-b-2 border-gray-300 group">
          <Image
            src={data?.image}
            alt="product-image"
            fill
            className="absolute object-contain transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="p-3 flex flex-col gap-2">
          <h1 className="font-semibold">{data?.title}</h1>
          <h1 className="font- text-xs">{data?.desc}</h1>
          <div className="flex flex-row justify-between">
            <h1 className="font-semibold text-xs text-gray-500 w-2/5">
              Price {data?.price}
            </h1>
            <Link
              href="/connect"
              className="flex items-center gap-2 p-0.5 border-2 rounded-2xl"
            >
              <p className="text-xs pl-3">Book now</p>
              <div className="bg-black w-6 p-0.5 rounded-full h-6">
                <motion.div
                  animate={{ scale: 0.6 }}
                  className="flex items-center justify-center"
                >
                  <Icons.phone className="text-white" />
                </motion.div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
