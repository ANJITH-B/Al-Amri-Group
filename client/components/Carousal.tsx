import React, { act, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sizes = [
    { height: 80, top: 0 },
    { height: 40, top: 40 },
    { height: 60, top: 10 },
    { height: 40, top: 10 },
    { height: 10, top: 10 },
  ]
  const getSize = (idx: number) => {
return sizes[idx]
  }
  return (
    <Swiper
      loop
      onSlideChange={(swiper: any) => setActiveIndex(swiper.realIndex)} // Use realIndex for consistent indices
      slidesPerView={5}
    >
      {[1, 2, 3, 4, 5, 6].map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="w-40 h-96 bg-green-400">
            <div className={`bg-red-400`}>
              {idx - activeIndex < 0 ? idx - activeIndex + 6 : idx - activeIndex} |
              {idx - activeIndex}
              {idx === activeIndex && '(Active1)'}
              {idx === activeIndex + 1 && '(Active2)'}
              {idx === activeIndex + 2 && '(Active3)'}
              {idx === activeIndex + 3 && '(Active4)'}
              {idx === activeIndex + 4 && '(Active5)'}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
