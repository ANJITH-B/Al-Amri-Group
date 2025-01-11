import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import carousalCards from "./CarousalCards";
import { Autoplay, Navigation } from "swiper/modules";
import { Icons } from "../Icons";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Carousal: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const sm = useMediaQuery({ query: "(max-width: 600px)" });
  const data = carousalCards;
  const [activeIndex, setActiveIndex] = useState(0);
  const top = [0, 120, 60, 60, 60];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const initialScale = isHydrated ? (sm ? 0.68 : 0.85) : 0.85;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.89,
        y: 200,
        x: 100,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0,
      }}
      className="relative pl-2 pt-4 md:p-4 lg:px-20"
    >
      <motion.div
        initial={{ scale: initialScale, y: 10 }}
        animate={isHydrated ? { scale: sm ? 0.68 : 0.85, y: 10 } : {}}
        className="absolute bottom-20 left-14 md:left-20 lg:left-40 z-10 flex gap-2"
      >
        <button className="swiper-button-next bg-white group !p-3 flex justify-center items-center border border-solid !w-12 !h-12 transition-all duration-500 rounded-full border-black border-opacity-20">
          <Icons.leftArrow className="text-black group-hover:text-opacity-50" />
        </button>
        <button className="swiper-button-prev bg-white group !p-3 flex justify-center items-center border border-solid !w-12 !h-12 transition-all duration-500 rounded-full border-black border-opacity-20">
          <Icons.rightArrow className="text-black group-hover:text-opacity-50" />
        </button>
      </motion.div>
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
            300: { slidesPerView: 3, spaceBetween: 2 },
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
    </motion.div>
  );
};

export default Carousal;
