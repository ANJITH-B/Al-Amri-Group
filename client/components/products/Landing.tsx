"use client"
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SentenceAnimation } from "@/components/AnimationText";
import Image from "next/image";

const InteractiveDiv: React.FC = () => {
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll()
  const slow = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const medium = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fast = useTransform(scrollYProgress, [0, 1], [0, 160]);

  const tools = [
    { src: "/Tools/Welding.png", style: "absolute left-10 md:left-auto bottom-0 md:-bottom-20 w-32 md:w-48", rotate: -23, xMultiplier: -20, yMultiplier: -10, moveDown: medium },
    { src: "/Tools/T2.png", style: "absolute bottom-40 -right-2 md:bottom-auto md:right-auto md:-top-20", size:'w-32 md:w-64', rotate: -23, xMultiplier: -6, yMultiplier: -3 , moveDown: fast },
    { src: "/Tools/T4.png", style: "absolute top-12 right-2 md:right-10 md:top-32", size:'w-52 md:w-64', rotate: 23, xMultiplier: -20, yMultiplier: -10 , moveDown: fast},
    { src: "/Tools/T5.png", style: "absolute bottom-20 md:-bottom-10 md:right-96 blur-xs",size:'w-16 md:w-20', rotate: 45, xMultiplier: -13, yMultiplier: -8 , moveDown: slow },
    { src: "/Tools/T7.png", style: "absolute bottom-40 left-20 md:bottom-auto md:left-auto md:right-96 md:top-40 blur-xs",size:'w-24 md:w-28', rotate: 0, xMultiplier: -5, yMultiplier: -8 , moveDown: slow },
    { src: "/Tools/T8.png", style: "absolute left-20 md:left-0 blur-sm",size:'w-8 md:w-16', rotate: 0, xMultiplier: -18, yMultiplier: -8 , moveDown: slow},
    { src: "/Tools/T9.png", style: "absolute -left-4 top-32 md:left-auto md:right-40 md:-top-24",size:'w-40 md:w-56', rotate: -90, xMultiplier: -21, yMultiplier: -7 , moveDown: fast},
    { src: "/Tools/T10.png", style: "absolute left-4 top-0 md:left-0 md:-top-20 blur-sm",size:'w-28 md:w-56', rotate: 25, xMultiplier: -10, yMultiplier: -10 , moveDown: fast},
    { src: "/Tools/T11.png", style: "absolute right-0 md:right-auto md:left-96 md:-top-10",size:'w-24 md:w-44', rotate: 200, xMultiplier: -15, yMultiplier: -10 , moveDown: fast},
    { src: "/Tools/T12.png", style: "absolute -right-8 md:right-auto top-40 md:left-[10vw] md:top-[26vh]",size:'w-32 md:w-40', rotate: -36, xMultiplier: -12, yMultiplier: -10 , moveDown:medium},
    { src: "/Tools/T13.png", style: "absolute bottom-0 right-20 md:right-auto md:left-[30vw] md:bottom-10",size:'w-20 md:w-32', rotate: -23, xMultiplier: -18, yMultiplier: -6 ,  moveDown: medium },
    { src: "/Tools/T15.png", style: "absolute bottom-40 -left-8 md:left-auto md:right-[30vw] md:bottom-10",size:'w-40 md:w-52', rotate: 0, xMultiplier: -23, yMultiplier: -10 ,  moveDown: slow},
    { src: "/Tools/T17.png", style: "absolute top-40 md:top-auto md:left-20 md:-bottom-20 blur-xs",size:'w-20 md:w-40', rotate: -50, xMultiplier: -13, yMultiplier: -8 , moveDown: slow },
    { src: "/Tools/T18.png", style: "absolute bottom-10 -right-8 md:right-10 md:bottom-20",size:'w-32 md:w-40', rotate: 45, xMultiplier: -18, yMultiplier: -6 },
    { src: "/Tools/T19.png", style: "absolute top-10 md:top-auto left-20 md:-left-14 md:bottom-20",size:'w-40 md:w-52', rotate: 0, xMultiplier: -19, yMultiplier: -8 },
  ];
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 2;
    const y = ((clientY - top) / height - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <div className="w-screen h-[70vh] bg-[#D1D1D1] overflow-hidden relative" onMouseMove={handleMouseMove} >
      <motion.div className="flex flex-col gap-2 w-full h-full font-sans items-center justify-center" style={{ perspective: 1000 }}  >
        <motion.div className="flex flex-col font-sans items-center justify-center" style={{y:fast}} >
          <motion.div className="font-bold text-center" animate={{ x: mousePos.x * -6, y: mousePos.y * -3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }} >
            <SentenceAnimation className="font-bold text-4xl md:text-7xl text-center" sentences={["Unleash the Power"]} />
          </motion.div>
          <motion.div  className="text-base md:text-xl" animate={{ x: mousePos.x * -6, y: mousePos.y * -3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }} >
            <SentenceAnimation className="text-base md:text-xl" sentences={["Experience True Freedom with Every Tools"]} />
          </motion.div>
        </motion.div>
        {tools.map((tool, index) => (
          <motion.div key={index} className={tool.style} 
          initial={{ scale:1.5,x:200 }}  
          animate={{
              x: mousePos.x * tool.xMultiplier,
              y: mousePos.y * tool.yMultiplier,
              rotate: tool.rotate, scale: 0.9, 
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }} >
            <motion.div style={{ y: tool.moveDown}}>
            <Image src={tool.src}  width={500} height={500} alt={`Tool ${index + 1}`} className={tool.size} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default InteractiveDiv;
