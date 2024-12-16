import React, { useState } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import serviceData from "@/data/serviceData";
import Image from "next/image";
import CustomButton from "../CustomButton";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

interface ServiceItem {
  title: string;
  text: string;
  description: string;
  image: string;
}

const Service: React.FC = () => {
  const [data, setData] = useState<ServiceItem[]>(serviceData);

  const handleClick = (index: number) => {
    if (index === 0) return;
    const updatedData = [...data];
    const [clickedItem] = updatedData.splice(index, 1);
    updatedData.unshift(clickedItem);
    setData(updatedData);
  };

  const shuffleServices = () => setData(shuffle([...data]))

  return (
    <div className="min-h-screen justify-center flex flex-col gap-8">
      <div className="px-5 lg:px-20 xl:px-[20px] w-full max-w-screen-xl">
        <div className="flex flex-col items-center text-gray-800 gap-4 mt-8 px-8">
          <p className="text-2xl md:text-5xl max-w-2xl font-normal text-center tracking-wider md:leading-12">
            We address Solutions for Your Business Growth
          </p>
          <p className="text-sm md:text-base max-w-md font-normal text-center">
            Providing High-Quality Products and Services Across Apparel, Catering,
            and Construction Industries
          </p>
        </div>
      </div>

      <div className="w-full p-4 md:p-8 overflow-hidden flex justify-center items-center">
        <div className="grid grid-cols-10 gap-2 md:gap-4 min-h-[60vh]">
          <div className="col-span-10 lg:col-span-5 flex flex-col h-full">
            <motion.div
              key={data[0].title}
              layout
              layoutId={`box-${data[0].title}`}
              transition={spring}
              className="w-full h-full rounded-[10px] p-4 lg:p-12 flex flex-col justify-center gap-4 md:gap-8 bg-gradient-to-t from-sky-100 via-gray-200 to-gray-100 border-2 border-stone-200"
              onClick={() => handleClick(0)}
            >
              <h3 className="text-sm md:text-xl font-bold">{data[0].title}</h3>
              <p className="text-xs md:text-sm max-w-md text-start">{data[0].description}</p>
              <CustomButton>Connect Now</CustomButton>
              <Image
                src={`/assets/${data[0].image}`}
                width={40}
                height={40}
                alt="no-image"
                className="w-52 md:w-72 h-52 md:h-72 mx-auto"
              />
            </motion.div>
          </div>

          <div className="col-span-6 lg:col-span-3 grid grid-rows-3 gap-2 md:gap-4">
            {data.slice(1, 4).map((item, idx) => (
              <motion.div
                key={item.title}
                layout
                layoutId={`box-${item.title}`}
                transition={spring}
                className="w-full rounded-[10px] p-2 md:p-4 flex flex-row items-center justify-center bg-gradient-to-t from-gray-100 to-gray-200 border-2 border-stone-200 cursor-pointer"
                onClick={() => handleClick(idx + 1)}
              >
                <Image
                  src={`/assets/${item?.image}`}
                  width={40}
                  height={40}
                  alt="no-image"
                  className="w-16 h-16 order-1"
                />
                <div className={`order-${idx % 2}`}>
                  <h3 className="text-sm md:text-xl font-bold">{item.title}</h3>
                  <p className="text-xs md:text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="col-span-4 lg:col-span-2 grid grid-rows-2 gap-2 md:gap-4">
            {data.slice(4, 6).map((item, idx) => (
              <motion.div
                key={item.title}
                layout
                layoutId={`box-${item.title}`}
                transition={spring}
                className="w-full rounded-[10px] p-2 md:p-4 flex flex-col items-center justify-center bg-gradient-to-t from-gray-100 to-gray-200 border-2 border-stone-200 cursor-pointer"
                onClick={() => handleClick(idx + 4)}
              >
                <Image
                  src={`/assets/${item?.image}`}
                  width={40}
                  height={40}
                  alt="no-image"
                  className="w-16 h-16"
                />
                <h3 className="text-sm md:text-xl font-bold">{item.title}</h3>
                <p className="text-xs md:text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
