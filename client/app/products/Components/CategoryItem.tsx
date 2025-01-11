import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const draw = {
   hidden: { pathLength: 0, opacity: 0 },
   visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
         pathLength: { type: "spring", duration: 6, delay: 0.5, bounce: 0 },
         opacity: { duration: 0.01 },
      },
   },
};
interface IconProps {
   viewBox: string;
   width: number | string;
   height: number | string;
   d: string;
   src: string;
}
interface Props {
   icon: IconProps;
   index: number;
}

const CategoryItem: React.FC<Props> = ({ icon, index = 456 }) => {
   const { scrollYProgress } = useScroll();
   const path = useTransform(scrollYProgress, [0, 1], [0, 1]);

   const [rotateDirection, setRotateDirection] = useState<number>(0);
   const [scale, setScale] = useState<number>(0.1);
   const [isHovered, setIsHovered] = useState<boolean>(false);

   const handleHoverStart = () => setScale(2050);
   const handleHoverEnd = () => setScale(0.1);

   const calculateAngle = (
      e: React.MouseEvent<HTMLDivElement>,
      rect: DOMRect
   ) => {
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      return Math.atan2(y, x) * (180 / Math.PI);
   };

   const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const angle = calculateAngle(e, rect);
      setRotateDirection(angle + 50);
      setIsHovered(true);
   };

   const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const angle = calculateAngle(e, rect);
      setRotateDirection(angle + 50);
      setIsHovered(false);
   };

   const uniqueId = `radialGradient-${index}`;

   return (
      <div
         key={index}
         id={`divid${index}`}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         className="w-1/6 bg-[#D9D9D9] h-28 rounded-full flex items-center justify-center text-white border-2 relative overflow-hidden cursor-pointer"
      >
         <motion.svg
            key={index}
            animate={{ rotate: rotateDirection + 98 }}
            className="absolute md:w-32 lg:w-36 z-10"
            transition={{ duration: 0, ease: "easeInOut" }}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            width="446"
            height="446"
            viewBox="0 0 446 446"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <rect width="446" height="446" fill={`url(#${uniqueId})`} />
            <defs>
               <motion.radialGradient
                  id={uniqueId}
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  animate={{
                     gradientTransform: `translate(96.5 95.5) rotate(44.7259) scale(${scale})`,
                  }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
               >
                  <stop offset="0.299596" stopOpacity="0" />
                  <stop offset="0.424879" />
               </motion.radialGradient>
            </defs>
         </motion.svg>
         <motion.svg
            transition={{ delay: 0 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            className="z-20 pointer-events-none absolute"
            width={icon.width}
            height={icon.height}
            viewBox={icon.viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <motion.path
               variants={draw}
               animate={isHovered ? "hidden" : "visible"}
               initial="hidden"
               d={icon.d}
               stroke="#F8F7F2"
               strokeWidth="3"
            />
         </motion.svg>
         <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1 : 1.1 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 100, damping: 20 }}
            className="pointer-events-none"
         >
            <Image
               src={icon.src}
               width={300}
               height={300}
               alt=".."
            />
         </motion.div>
      </div>
   );
};

export default CategoryItem;
