'use client'
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
    { src: "/Tools/Welding.png", style: "absolute -bottom-20 lg:-bottom-20 w-48", rotate: -23, xMultiplier: -20, yMultiplier: -10, moveDown: medium },
    { src: "/Tools/T2.png", style: "absolute -top-20 ", size:'w-64', rotate: -23, xMultiplier: -6, yMultiplier: -3 , moveDown: fast },
    { src: "/Tools/T4.png", style: "absolute right-10 top-32 ", size:'w-64', rotate: 23, xMultiplier: -20, yMultiplier: -10 , moveDown: fast},
    { src: "/Tools/T5.png", style: "absolute -bottom-10 right-96 blur-xm ",size:'w-20', rotate: 45, xMultiplier: -13, yMultiplier: -8 , moveDown: slow },
    { src: "/Tools/T7.png", style: "absolute right-96 top-40 blur-xs ",size:'w-28', rotate: 0, xMultiplier: -5, yMultiplier: -8 , moveDown: slow },
    { src: "/Tools/T8.png", style: "absolute left-0 blur-sm ",size:'w-16', rotate: 0, xMultiplier: -18, yMultiplier: -8 , moveDown: slow},
    { src: "/Tools/T9.png", style: "absolute right-40 -top-24 ",size:' w-56', rotate: -90, xMultiplier: -21, yMultiplier: -7 , moveDown: fast},
    { src: "/Tools/T10.png", style: "absolute left-0 -top-20 blur-sm",size:' w-56', rotate: 25, xMultiplier: -10, yMultiplier: -10 , moveDown: fast},
    { src: "/Tools/T11.png", style: "absolute left-96 -top-10 ",size:'w-44', rotate: 200, xMultiplier: -15, yMultiplier: -10 , moveDown: fast},
    { src: "/Tools/T12.png", style: "absolute left-[26vw] top-[26vh]",size:' w-40', rotate: -36, xMultiplier: -12, yMultiplier: -10 , moveDown:medium},
    { src: "/Tools/T13.png", style: "absolute left-[36vw] bottom-[12vh]",size:' w-40', rotate: -23, xMultiplier: -18, yMultiplier: -6 ,  moveDown: medium },
    { src: "/Tools/T15.png", style: "absolute right-[38vw] bottom-[10vh] ",size:'w-52', rotate: 0, xMultiplier: -23, yMultiplier: -10 ,  moveDown: slow},
    { src: "/Tools/T17.png", style: "absolute left-20 -bottom-20 blur-xm",size:' w-40', rotate: -50, xMultiplier: -13, yMultiplier: -8 , moveDown: slow },
    { src: "/Tools/T18.png", style: "absolute right-[10vw] bottom-[10vh] ",size:'w-40', rotate: 45, xMultiplier: -18, yMultiplier: -6 },
    { src: "/Tools/T19.png", style: "absolute -left-14 bottom-[10vh] ",size:'w-52', rotate: 0, xMultiplier: -19, yMultiplier: -8 },
  ];

  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 2;
    const y = ((clientY - top) / height - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <div
      className="w-screen h-[70vh] bg-[#D1D1D1] overflow-hidden relative" onMouseMove={handleMouseMove} >
      <motion.div className="flex flex-col gap-2 w-full h-full font-sans items-center justify-center" style={{ perspective: 1000 }}  >
        <motion.div className="flex flex-col font-sans items-center justify-center" style={{y:fast}} >
          <motion.div className="font-bold text-center" animate={{ x: mousePos.x * -6, y: mousePos.y * -3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }} >
            <SentenceAnimation className="font-bold text-4xl md:text-7xl text-center" sentences={["Unleash the Power"]} />
          </motion.div>
          <motion.div  className="text-md md:text-xl" animate={{ x: mousePos.x * -6, y: mousePos.y * -3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }} >
            <SentenceAnimation className="text-md md:text-xl" sentences={["Experience True Freedom with Every Tools"]} />
          </motion.div>
        </motion.div>

        {tools.map((tool, index) => (
          <motion.div key={index} className={tool.style} 
          initial={{ scale:1.5,x:200 }}  
          animate={{
              x: mousePos.x * tool.xMultiplier,
              y: mousePos.y * tool.yMultiplier,
              rotate: tool.rotate, scale: 1, 
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
