'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
// import WordPopping from "./WordPopping";
// import ShortBrief from "./ShortBrief";
import { AnimatedText } from "@/components/TextAnimation";

const FQA: [string, string][] = [
  [
    "Where can I redeem my allowance for dining in restaurants?",
    "You can redeem your allowance at restaurants partnered with Plateup",
  ],
  [
    "How do I locate restaurants?",
    "You can find these restaurants on the Plateup webpage or the Plateup app.",
  ],
  [
    "Is there any specific food I can order and redeem my allowance?",
    "We offer you complete access to use your coins for a dining experience at the restaurant, eliminating any concerns about payment",
  ],
  [
    "After the redemption of my allowance, do I still need to pay for my meal?",
    `No, you don't need to pay. It is already redeemed via your Plateup allowance card or the app.`,
  ],
];

const Openings = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedQuestionIndex(selectedQuestionIndex === index ? null : index);
  };

  return (
    <motion.div 
    initial={{ scale: 0.9, y: 40, x: -40, opacity: 0 }}
      exit={{ scale: 0, opacity: 0  ,transition:{ ease: [0.65, 0, 0.35, 1], delay: 0 ,duration: 0}}}  
      whileInView={{ scale: 1, opacity: 1 ,x: 0,y :0  , transition: {ease: [0.65, 0, 0.35, 1], delay: 0.1 ,duration: 1.2}}}
      // viewport={{ amount: 0 }}
       className="h-full w-full bg-[#4C5A5D] rounded-3xl p-5">
      {FQA.map((item, index) => (
        <div key={index}>
          <motion.div className="flex flex-row justify-between py-3 items-center">
            <p className="text-lg sm:text-xl font-light "><AnimatedText className="mr-1" text={item[0]}/></p>
              <motion.button className="px-[14px] pb-1 text-2xl rounded-full w-11 h-11 bg-black text-white"
              initial={{ rotate: 0 }}
              animate={{
                rotate: selectedQuestionIndex === index ? 45 : 0,
                scale: selectedQuestionIndex === index ? [1, 0.75, 1] : [1, 0.8, 1],
              }}
              onClick={() => handleClick(index)}    
              >  
              <motion.span animate={{
                rotateZ: selectedQuestionIndex === index  ? 0 : 45,
                scale: selectedQuestionIndex === index  ? [0.7, 1, 0.7] : [0.7, 1, 0.7],
                }}>+
              </motion.span> 
              </motion.button>
            
          </motion.div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: selectedQuestionIndex === index ? "auto" : 0,
              opacity: selectedQuestionIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <p className="text-medium sm:text-lg font-light px-5"><AnimatedText className="mr-1" text={item[1]} /></p>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default Openings;