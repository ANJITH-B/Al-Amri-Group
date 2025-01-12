"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import { Icons } from "@/components/Icons";

const Process: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacityOne = useTransform(scrollYProgress, [0, 0.1], [0.7, 1]);
  const opacityTwo = useTransform(scrollYProgress, [0, 0.1], [0.7, 1]);
  const opacityThree = useTransform(scrollYProgress, [0.1, 0.2], [0.7, 1]);
  const opacityFour = useTransform(scrollYProgress, [0.2, 0.3], [0.7, 1]);

  return (
    <div className="relative w-full flex flex-col md:flex-row mt-16 md:mt-20 lg:mt-28 px-4 md:px-0">
      <div className="absolute overflow-hidden h-3/4 md:h-1 md:w-full left-5 md:left-0 top-4 md:top-2">
        <motion.div
          style={{ scaleX, scaleY: scaleX }}
          className="h-10 bg-gray-500 w-1 md:w-10 md:h-1"
        ></motion.div>
      </div>
      <motion.div
        style={{ opacity: opacityOne }}
        className="h-1/4 flex flex-row md:flex-col pb-8 gap-4 md:gap-8"
      >
        <Icons.circle className="z-10 md:w-5 md:h-5 bg-[#f3f3f3]" />
        <div className="px-4 md:px-2">
          <h1 className="text-base lg:text-xl font-semibold">
            Initial Consultation
          </h1>
          <p className="text-sm lg:text-base">
            Share your requirements with our team, and we&apos;ll provide
            personalized guidance tailored to your needs.
          </p>
        </div>
      </motion.div>
      <motion.div
        style={{ opacity: opacityTwo }}
        className="h-1/4 flex flex-row md:flex-col pb-8 gap-4 md:gap-8"
      >
        <Icons.circle className="z-10 md:w-5 md:h-5 bg-[#f3f3f3]" />
        <div className="px-4 md:px-2">
          <h1 className="text-base lg:text-xl font-semibold">
            Detailed Assessment
          </h1>
          <p className="text-sm lg:text-base">
            We evaluate your inquiry to recommend the best products or services,
            ensuring optimal solutions for your business.
          </p>
        </div>
      </motion.div>
      <motion.div
        style={{ opacity: opacityThree }}
        className="h-1/4 flex flex-row md:flex-col pb-8 gap-4 md:gap-8"
      >
        <Icons.circle className="z-10 md:w-5 md:h-5 bg-[#f3f3f3]" />
        <div className="px-4 md:px-2">
          <h1 className="text-base lg:text-xl font-semibold">
            Customized Quotation
          </h1>
          <p className="text-sm lg:text-base">
            Receive a competitive, transparent quote crafted to match your
            specifications and budget.
          </p>
        </div>
      </motion.div>
      <motion.div
        style={{ opacity: opacityFour }}
        className="h-1/4 flex flex-row md:flex-col pb-8 gap-4 md:gap-8"
      >
        <Icons.circle className="z-10 md:w-5 md:h-5 bg-[#f3f3f3]" />
        <div className="px-4 md:px-2">
          <h1 className="text-base lg:text-xl font-semibold">
            Seamless Delivery
          </h1>
          <p className="text-sm lg:text-base">
            Once confirmed, we ensure timely delivery with ongoing support to
            guarantee your satisfaction.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Process;
