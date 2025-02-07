import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Icons } from "../Icons";
import testimonialData from "@/data/testimonialData";
import TextOpacityOnScroll from "../TextOnScroll";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Carousel: React.FC = () => {
  const data = testimonialData;
  const contain = useRef<HTMLDivElement>(null);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [200, 40]);
  const headingY = useTransform(
    scrollYProgress,
    [0, 0.4, 0.4, 0.5],
    [60, 50, 50, 0]
  );
  const move = useTransform(scrollYProgress, [0.38, 0.5], [0, -615]);
  return (
    <div ref={container} className="relative p-2 my-12 md:p-4 lg:px-20 lg:pb-20">
      <p className="text-2xl md:text-4xl max-w-2xl font-normal tracking-wider md:leading-12">
        What Our Clients Say
      </p>
      <p className="text-sm md:text-base max-w-2xl py-8 font-normal">
        At Al Amri Group, we believe our people are our greatest asset. We are committed to fostering a dynamic, inclusive work environment where innovation and collaboration thrive. Join our team of professionals and become a part of a legacy built on quality, integrity, and excellence
      </p>
      <div className="absolute top-0 md:top-5 right-2 lg:right-20 z-10 flex gap-2">
        <button className="swiper-button3-next bg-white group !p-3 flex justify-center items-center border border-solid !w-12 !h-12 transition-all duration-500 rounded-full border-black border-opacity-20">
          <Icons.leftArrow className="text-black group-hover:text-opacity-50" />
        </button>
        <button className="swiper-button3-prev bg-white group !p-3 flex justify-center items-center border border-solid !w-12 !h-12 transition-all duration-500 rounded-full border-black border-opacity-20">
          <Icons.rightArrow className="text-black group-hover:text-opacity-50" />
        </button>
      </div>
      <div className="pt-4 lg:pt-8">
        <Swiper
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button3-next",
            prevEl: ".swiper-button3-prev",
          }}
          breakpoints={{
            1280: { slidesPerView: 3, spaceBetween: 10 },
            1026: { slidesPerView: 3, spaceBetween: 10 },
            760: { slidesPerView: 2, spaceBetween: 10 },
            300: { slidesPerView: 1, spaceBetween: 0 },
          }}
          autoHeight={true}
          modules={[Navigation, Autoplay]}
        >
          {data.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="flex flex-col gap-2 bg-white w-full h-full p-4 rounded-3xl border-2 border-stone-200">
                  <p>{item?.title}</p>
                  <div className="flex items-center gap-2">
                    <Image
                      src={`/assets/${item?.image}`}
                      width={40}
                      height={40}
                      alt="login"
                      className="w-10 h-10 rounded-full"
                    />
                    <p>{item?.author}</p>
                  </div>
                  <p className="text-xs lg:text-sm">{item?.description}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
