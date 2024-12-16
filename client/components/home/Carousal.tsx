import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import carousalCards from "./CarousalCards";
import { Autoplay, Navigation } from "swiper/modules";
import { Icons } from "../Icons";

const Carousal: React.FC = () => {
  const data = carousalCards;
  const [activeIndex, setActiveIndex] = useState(0);
  const top = [0, 120, 60, 60, 60];

  return (
    <div className="relative pl-2 pt-4 md:p-4 lg:px-20">
      <div className="absolute bottom-20 left-20 lg:left-40 z-10 flex gap-2">
        <button className="swiper-button-next bg-white group !p-3 flex justify-center items-center border border-solid !w-12 !h-12 transition-all duration-500 rounded-full border-black border-opacity-20">
          <Icons.leftArrow className="text-black group-hover:text-opacity-50" />
        </button>
        <button className="swiper-button-prev bg-white group !p-3 flex justify-center items-center border border-solid !w-12 !h-12 transition-all duration-500 rounded-full border-black border-opacity-20">
          <Icons.rightArrow className="text-black group-hover:text-opacity-50" />
        </button>
      </div>
      <div>
        <Swiper
          loop={true}
          spaceBetween={20}
          onSlideChange={(swiper: any) => setActiveIndex(swiper.realIndex)}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            1280: { slidesPerView: 5, spaceBetween: 10 },
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
            return (
              <SwiperSlide key={idx}>
                <div
                  style={{
                    transition: "top 0.5s ease",
                    position: "relative",
                    top: `${top[pos]}px`,
                  }}
                  className="min-h-[400px] md:min-h-[450px]"
                >
                  {item}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousal;
