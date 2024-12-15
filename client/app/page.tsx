"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import HeroSection from "@/components/home/HeroSection";
import Service from "@/components/home/Service";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
import Reels from "@/components/home/Reels";

const page: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Smoothness of scrolling
      smoothWheel: true, // Smooth scrolling on mouse wheel
    });
    function raf(time: number) {
      lenis.raf(time); // Correct context is maintained
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy(); // Cleanup
    };
  }, []);
  return (
    <main className="">
      <HeroSection />
      <Service />
      <Reels />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default page;
