'use client'
import Image from 'next/image';
// import Picture1 from '../../../public/images/1.jpeg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import TextOpacityOnScroll from '@/components/TextOnScroll';
import { AnimatedText } from '@/components/TextAnimation';
import Openings from './opeanings';

export default function StickySection() {
    const contain = useRef<HTMLDivElement>(null);
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const scale = useTransform(scrollYProgress, [0, 0.4], [200, 40]);
    const headingY = useTransform(scrollYProgress, [0, 0.4, 0.4, 0.5], [60, 50, 50, 0]);
    const move = useTransform(scrollYProgress, [0.38,0.5],[0,-615])
    const blur = useTransform(scrollYProgress, [0, 1],["blur(110px)", "blur(10px)"])
    return (
        <div ref={container} className="h-[400vh] relative bg-[#F3F3F3]">
            <div className="sticky top-0 h-[100vh] flex flex-col items-center justify-start overflow-hidden">
                <motion.p
                  initial={{ opacity: 0.5, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                  className="pt-14 text-center  text-2xl md:text-4xl font-normal relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-200 py-4"
                >
                 <a className="text-5xl leading-relaxed">Empowering Talent,</a><br/>
                 Driving Excellence
                </motion.p>
                <motion.p
                  initial={{ opacity: 0.5, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                  className="pt-1 text-sm font-normal font-center text-center text-gray-400 mb-20 max-w-[30rem] px-4 sm:px-0"
                >
                  opportunity for students to begin their educational journey in
                  Dubai and complete their final year in the UK
                </motion.p>
                <motion.div style={{  }} className="w-full h-full bg-gray-50 px-40 inset-0 flex  items-start justify-">
                    <motion.div style={{y:headingY, x:move ,backdropFilter:'blur(10px)'}} initial={{opacity: 1}} className="relative w-2/5">
                        <h1 className='font-semi leading-[66px] text-6xl text-black'>Join Our Team, <br/>
                        Shape the Future</h1>
                    </motion.div>
                    <motion.div style={{y: scale, x:move }} transition={{ease: [0.65, 0, 0.35, 1]}} className='w-2/5 text-[24px] lg:text-[26px]'>
                        <TextOpacityOnScroll contain={contain} phrase='At Al Amri Group, we believe our people are our greatest asset. We are committed to fostering a dynamic, inclusive work environment where innovation and collaboration thrive. Join our team of professionals and become a part of a legacy built on quality, integrity, and excellence'/></motion.div>
                        <AnimatedText className='text-xl text-black' text='hello'/>
                    </motion.div>
                    <Openings/>
            </div>
        </div>
    );
}
