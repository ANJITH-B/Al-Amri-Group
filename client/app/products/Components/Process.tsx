'use client'
import { useScroll, useTransform } from 'framer-motion'
import React from 'react'
import { motion } from 'framer-motion'


const Process: React.FC = () => {

   const { scrollYProgress } = useScroll();
   const scaleX = useTransform(scrollYProgress, [0, 1], [0, 90]);
   const opacityOne = useTransform(scrollYProgress, [0, 0.1], [0.7, 1]);
   const opacityTwo = useTransform(scrollYProgress, [0, 0.1], [0.7, 1]);
   const opacityThree = useTransform(scrollYProgress, [0.1, 0.2], [0.7, 1]);
   const opacityFour = useTransform(scrollYProgress, [0.2, 0.3], [0.7, 1]);

   return (
      <div className='w-full flex flex-row gap-10 md:py-20 lg:py-28'>
         <div className='absolute overflow-hidden w-full p-1.5'><motion.div style={{ scaleX }} className=' w-10 bg-gray-500 h-1'></motion.div></div>

         <motion.div style={{ opacity: opacityOne }} className='w-1/4 flex flex-col gap-2 z-10'>
            <svg className='z-10' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="8.5" cy="8.5" r="8" fill="#246576" fillOpacity="0.2" stroke="#246576" />
               <circle cx="8.5" cy="8.5" r="5.5" fill="#246576" />
            </svg>
            <h1 className='text-xl font-semibold'>Initial Consultation</h1>
            <p>Share your requirements with our team, and we’ll provide personalized guidance tailored to your needs.</p>
         </motion.div>
         <motion.div style={{ opacity: opacityTwo }} className='w-1/4 flex flex-col gap-2'>
            <svg className='z-10' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               {/* <circle cx="8.5" cy="8.5" r="8" fill="#246576" fillOpacity="0.2" stroke="#246576"/> */}
               <circle cx="8.5" cy="8.5" r="5.5" fill="#246576" />
            </svg>
            <h1 className='text-xl font-semibold'>Detailed Assessment</h1>
            <p>We evaluate your inquiry to recommend the best products or services, ensuring optimal solutions for your business.</p>
         </motion.div>
         <motion.div style={{ opacity: opacityThree }} className='w-1/4 flex flex-col gap-2'>
            <svg className='z-10' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="8.5" cy="8.5" r="8" fill="#246576" fillOpacity="0.2" stroke="#246576" />
               <circle cx="8.5" cy="8.5" r="5.5" fill="#246576" />
            </svg>
            <h1 className='text-xl font-semibold'>Customized Quotation</h1>
            <p>Receive a competitive, transparent quote crafted to match your specifications and budget.</p>
         </motion.div>
         <motion.div style={{ opacity: opacityFour }} className='w-1/4 flex flex-col gap-2'>
            <svg className='z-10' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="8.5" cy="8.5" r="8" fill="#246576" fillOpacity="0.2" stroke="#246576" />
               <circle cx="8.5" cy="8.5" r="5.5" fill="#246576" />
            </svg>
            <h1 className='text-xl font-semibold'>Seamless Delivery</h1>
            <p>Once confirmed, we ensure timely delivery with ongoing support to guarantee your satisfaction.</p>
         </motion.div>
      </div>
   )
}

export default Process