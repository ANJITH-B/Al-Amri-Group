"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import InteractiveDiv from "@/components/products/Landing";
import Process from "@/components/products/Process";
import Search from "@/components/products/Search";
import Category from "@/components/products/Category";
import Sections from "@/components/products/Sections";

const page: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="w-screen h-full flex flex-col items-center">
      <InteractiveDiv />
      <div className="px-2 md:px-10 lg:px-10 xl:px-[20px] w-full max-w-screen-xl">
        <Process />
        <Search />
        <Category />
        <Sections />
      </div>
    </div>
  );
};

export default page;
