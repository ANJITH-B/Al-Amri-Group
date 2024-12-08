'use client';
import { useEffect } from "react";
import Landing from "./Components/landing";
import Lenis from "lenis";
import StickySection from "./Components/StickySetion";

export default function Page() {
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
        <main>
            {/* <div className="h-[100vh]"></div> */}
            <Landing />
            
        </main>
    );
}
