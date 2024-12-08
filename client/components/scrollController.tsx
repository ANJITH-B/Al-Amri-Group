// ScrollController Component
'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ScrollControllerProps {
  section: number;
  onSectionChange: (section: number) => void;
}

export const ScrollController = ({ section, onSectionChange }: ScrollControllerProps) => {
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);
  const containerRef = useRef(null);
  

  useEffect(() => {
    const container = containerRef.current;
    gsap.to(container, {
      duration: 1,
      scrollTop: section * window.innerHeight,
      onStart: () => { isAnimating.current = true; },
      onComplete: () => { isAnimating.current = false; },
    });
  }, [section]);

  useEffect(() => {
    const handleScroll = () => {
      if (isAnimating.current) return;
      const scrollPos = window.scrollY || window.pageYOffset;
      const curSection = Math.floor(scrollPos / window.innerHeight);
      if (scrollPos > lastScroll.current && curSection === 0) {
        onSectionChange(1);
      } else if (scrollPos < lastScroll.current && scrollPos < window.innerHeight) {
        onSectionChange(0);
      }
      lastScroll.current = scrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onSectionChange]);

  return <div ref={containerRef} className="absolute top-0 left-0 w-full h-full" />;
};