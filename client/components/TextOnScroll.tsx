'use client';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

interface Props {
  contain: React.RefObject<HTMLDivElement>;
  phrase: string;
}

export default function TextOpacityOnScroll({ contain, phrase }: Props) {
  const refs = useRef<HTMLSpanElement[]>([]);
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: contain.current,
        scrub: true,
        start: 'top',
        end: `+=${window.innerHeight / .5}`,
      },
      opacity: 1,
      ease: 'none',
      stagger: 0.1,
    });
  };

  const splitWords = (phrase: string) => {
    return phrase.split(' ').map((word, i) => (
      <p key={`${word}_${i}`} className="m-0 mr-1">
        {splitLetters(word)}
      </p>
    ));
  };

  const splitLetters = (word: string) => {
    return word.split('').map((letter, i) => (
      <span
        key={`${letter}_${i}`}
        ref={(el) => {
          if (el) refs.current.push(el);
        }}
        className="opacity-20"
      >
        {letter}
      </span>
    ));
  };

  return (
    <main className="flex flex-col h-full items-end justify-center leading-relaxed text-gray-600">
      <div ref={body} className="flex flex-wrap">
        {splitWords(phrase)}
      </div>
    </main>
  );
}
