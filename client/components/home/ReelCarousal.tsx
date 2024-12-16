import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Icons } from "../Icons";
import Image from "next/image";
import reelData from "@/data/reelData";

const ReelCarousal: React.FC = () => {
  const data = reelData;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative pl-2 md:p-4 lg:px-20">
      <div className="text-lg md:text-3xl">
        <div className="flex items-end">
          <Image
            src="/assets/clapboard.png"
            alt="logo"
            width={40}
            height={40}
            className="w-20 h-20"
          />
          <p className="">Your Stories</p>
        </div>
        <p className="">Our Spotlights</p>
      </div>
      <div className="absolute top-0 md:top-24 right-2 lg:right-20 z-10 flex gap-2">
        <button className="swiper-button2-next bg-white group !p-3 flex justify-center items-center border border-solid !w-12 !h-12 transition-all duration-500 rounded-full border-black border-opacity-20">
          <Icons.leftArrow className="text-black group-hover:text-opacity-50" />
        </button>
        <button className="swiper-button2-prev bg-white group !p-3 flex justify-center items-center border border-solid !w-12 !h-12 transition-all duration-500 rounded-full border-black border-opacity-20">
          <Icons.rightArrow className="text-black group-hover:text-opacity-50" />
        </button>
      </div>
      <div className="">
        <Swiper
          loop={true}
          spaceBetween={20}
          onSlideChange={(swiper: any) => setActiveIndex(swiper.realIndex)}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button2-next",
            prevEl: ".swiper-button2-prev",
          }}
          breakpoints={{
            1280: { slidesPerView: 5, spaceBetween: 15 },
            1026: { slidesPerView: 4, spaceBetween: 10 },
            760: { slidesPerView: 3, spaceBetween: 10 },
            300: { slidesPerView: 1.5, spaceBetween: 8 },
          }}
          autoHeight={true}
          modules={[Navigation, Autoplay]}
        >
          {data.map((item, idx) => {
            const pos =
              idx - activeIndex < 0
                ? idx - activeIndex + data.length
                : idx - activeIndex;
            const top = pos % 2 === 0 ? 40 : 0;
            return (
              <SwiperSlide key={idx}>
                <div
                  style={{
                    transition: "top 0.5s ease",
                    position: "relative",
                    top: `${top}px`,
                  }}
                  className="min-h-[500px] md:min-h-[550px]"
                >
                  <div className="relative min-h-96 bg-primary200 overflow-hidden rounded-3xl">
                    <video
                      className="absolute inset-0 w-full h-full object-cover z-0"
                      src={`/assets/${item?.video}`}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                  <p className="text-xs md:text-base font-normal px-2 pt-2">
                    {item?.text}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ReelCarousal;
