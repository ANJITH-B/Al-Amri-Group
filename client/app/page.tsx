'use client';
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { SwiperSlide } from "swiper/react";
import Carousal from "@/components/Carousal";
import CarousalCard from "@/components/CarousalCard";

const page: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,           // Smoothness of scrolling
      smoothWheel: true,   // Smooth scrolling on mouse wheel
    });
    function raf(time: number) {
      lenis.raf(time);   // Correct context is maintained
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();  // Cleanup
    };
  }, []);
  return (
    <main className="p-20">
      <Carousal />
    </main>
  );
}

export default page

