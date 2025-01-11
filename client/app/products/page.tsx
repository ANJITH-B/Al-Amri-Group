"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import InteractiveDiv from "./Components/Landing";
import Process from "./Components/Process";
import Search from "./Components/Search";
import Category from "./Components/Category";
import TrendingProducts from "./Components/TrendingProducts";

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
    <div className='w-screen h-full flex flex-col items-center'>
        <InteractiveDiv/>
        <div className="px-5 md:px-10 lg:px-10 xl:px-[20px] w-full max-w-screen-xl">
        <Process/>
        <Search/>
        <Category/>
        <TrendingProducts/>
        </div>
    </div>
  );
};

export default page;


