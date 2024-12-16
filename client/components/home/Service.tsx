import React, { useState } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import serviceData from "@/data/serviceData";
import Image from "next/image";
import CustomButton from "../CustomButton";
import { CardSpotlight } from "../ui/card-spotlight";
import { cn } from "@/utils/cn";

const spring = {
  type: "easeInOut",
  damping: 20,
  stiffness: 300,
};

interface ServiceItem {
  title: string;
  text: string;
  description: string;
  image: string;
  class: string;
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
    <div className="min-h-screen justify-center flex flex-col gap-8  ">
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
        <div className="grid grid-cols-10 gap-2 md:gap-4 min-h-[50vh]">
          <div className="col-span-10 lg:col-span-5 flex flex-col">
            <motion.div
              key={data[0].title}
              layout
              layoutId={`box-${data[0].title}`}
              transition={spring}
              className="w-full h-full rounded-[10px]  "
              onClick={() => handleClick(0)}
            >
              <CardSpotlight className="border-2 rounded-2xl h-full p-3 md:p-6 lg:p-8  flex flex-col justify-start gap-4 md:gap-8 relative overflow-hidden">
                <h3 className="text-sm md:text-2xl font-bold z-10">{data[0].title}</h3>
                <p className="text-xs md:text-lg max-w-md text-start z-10">{data[0].description}</p>
                <CustomButton>Connect Now</CustomButton>
                {/* <Image
                  src={`/assets/image.png`}
                  width={1040}
                  height={1040}
                  alt="no-image"
                  className={cn(`w-full mx-auto drop-shadow-custom`, data[0].class)}
                /> */}
                <motion.svg initial={{ scale: 1.2, y: 105 }} className={cn(`w-full h-40 md:h-60 xl:h-80 drop-shadow-custom`)} viewBox="0 0 280 269" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_i_728_106)">
                    <path d="M86.5 184V214.5C86.5 228.859 98.1406 240.5 112.5 240.5H139.827C154.058 240.5 165.645 229.059 165.825 214.829L166.175 187.171C166.355 172.941 177.942 161.5 192.173 161.5H221.657C235.955 161.5 247.57 149.955 247.657 135.658L247.843 104.826C247.93 90.5351 236.466 78.8531 222.175 78.671L195.507 78.3313C181.145 78.1483 169.652 66.3551 169.84 51.9936L170.158 27.6835C170.346 13.253 158.746 1.43004 144.315 1.34414L112.655 1.15568C98.2351 1.06985 86.5 12.7353 86.5 27.1552V55.489C86.5 69.656 97.842 81.2154 112.006 81.4843L139.994 82.0157C154.158 82.2846 165.5 93.844 165.5 108.011V132C165.5 146.359 153.859 158 139.5 158H112.5C98.1406 158 86.5 169.641 86.5 184Z" fill="#F7F8FD" />
                    <path d="M197 242.5V215.5C197 201.141 208.641 189.5 223 189.5H253.5C267.859 189.5 279.5 201.141 279.5 215.5V242.5C279.5 256.859 267.859 268.5 253.5 268.5H223C208.641 268.5 197 256.859 197 242.5Z" fill="#F7F8FD" />
                    <path d="M1 134V107C1 92.6406 12.6406 81 27 81H57.5C71.8594 81 83.5 92.6406 83.5 107V134C83.5 148.359 71.8594 160 57.5 160H27C12.6406 160 1 148.359 1 134Z" fill="#F7F8FD" />
                  </g>
                  <path d="M86.5 184V214.5C86.5 228.859 98.1406 240.5 112.5 240.5H139.827C154.058 240.5 165.645 229.059 165.825 214.829L166.175 187.171C166.355 172.941 177.942 161.5 192.173 161.5H221.657C235.955 161.5 247.57 149.955 247.657 135.658L247.843 104.826C247.93 90.5351 236.466 78.8531 222.175 78.671L195.507 78.3313C181.145 78.1483 169.652 66.3551 169.84 51.9936L170.158 27.6835C170.346 13.253 158.746 1.43004 144.315 1.34414L112.655 1.15568C98.2351 1.06985 86.5 12.7353 86.5 27.1552V55.489C86.5 69.656 97.842 81.2154 112.006 81.4843L139.994 82.0157C154.158 82.2846 165.5 93.844 165.5 108.011V132C165.5 146.359 153.859 158 139.5 158H112.5C98.1406 158 86.5 169.641 86.5 184Z" stroke="#B1B1B1" stroke-opacity="0.25" />
                  <path d="M197 242.5V215.5C197 201.141 208.641 189.5 223 189.5H253.5C267.859 189.5 279.5 201.141 279.5 215.5V242.5C279.5 256.859 267.859 268.5 253.5 268.5H223C208.641 268.5 197 256.859 197 242.5Z" stroke="#B1B1B1" stroke-opacity="0.25" />
                  <path d="M1 134V107C1 92.6406 12.6406 81 27 81H57.5C71.8594 81 83.5 92.6406 83.5 107V134C83.5 148.359 71.8594 160 57.5 160H27C12.6406 160 1 148.359 1 134Z" stroke="#B1B1B1" stroke-opacity="0.25" />
                  <defs>
                    <filter id="filter0_i_728_106" x="0.5" y="0.655151" width="279.5" height="268.345" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_728_106" />
                    </filter>
                  </defs>
                </motion.svg>

              </CardSpotlight>
            </motion.div>
          </div>

          <div className="col-span-6 lg:col-span-3 grid grid-rows-3 gap-2 md:gap-4">
            {data.slice(1, 4).map((item, idx) => (
              <motion.div
                key={item.title}
                layout
                layoutId={`box-${item.title}`}
                transition={spring}
                onClick={() => handleClick(idx + 1)}
              >
                <CardSpotlight className="p-3 lg:p-4 border-2 rounded-[10px] h-full flex items-center gap-2 md:gap-5 justify-start lg:pb-10 cursor-pointer">
                  <div className={`order-1 w-4/6 z-10`}>
                    <h3 className=" text-sm md:text-xl font-bold">{item.title}</h3>
                    <p className="text-xs md:text-sm pt-1.5">{item.text}</p>
                  </div>
                  <motion.div initial={{ scale: 1 }} className={`w-1/3 z-0 order-${idx % 2}`} >
                    <Image
                      src={`/assets/${item?.image}`}
                      width={500}
                      height={500}
                      alt="no-image"
                      className={cn(`drop-shadow-custom`, item?.class)}
                    />
                  </motion.div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>

          <div className="col-span-4 lg:col-span-2 grid grid-rows-2 gap-2 md:gap-4">
            {data.slice(4, 6).map((item, idx) => (
              <motion.div key={item.title}
                layout
                layoutId={`box-${item.title}`}
                onClick={() => handleClick(idx + 4)}
                transition={spring}>
                <CardSpotlight
                  className="w-full md:p-3 lg:p-4 border-2 rounded-[10px]  h-full flex flex-col items-center justify-end p-3 lg:pb-10 cursor-pointer  bg-[#f9fbfa5d] shadow-white shadow-2xl"
                >
                  <Image
                    src={`/assets/${item?.image}`}
                    width={500}
                    height={500}
                    alt="no-image"
                    className={cn(`drop-shadow-custom `, item?.class)}
                  />
                  <h3 className="text-sm md:text-lg w-full font-bold z-10">{item.title}</h3>
                  <p className="text-xs md:text-sm pt-1.5 z-10">{item.text}</p>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
