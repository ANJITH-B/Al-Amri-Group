'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion";
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ScrollController } from "../../../components/scrollController";
import { useMediaQuery } from "react-responsive";
import StickySection from "./StickySetion";


const Landing = () => {
  const [section, setSection] = useState(0);
  const sm = useMediaQuery({ maxWidth: 768 });
  const md = useMediaQuery({ maxWidth: 768 });
  const [openContact, setopenContact] = useState(false);


  return (
    <>
        <NextThemesProvider attribute="class" forcedTheme="dark">
        {/* <MotionConfig
          transition={{
            type: "spring",
            mass: 5,
            stiffness: 150,
            damping: 50,
            restDelta: 0.0001,
          }} 
        > */}
          <div className="h-full ">
            <ScrollController section={section} onSectionChange={setSection} />
            <div className="bg-[#111111] h-[50rem] md:h-[50rem] w-full flex justify-center overflow-hidden relative">
              <motion.div animate={{ opacity: section === 0 ? 1 : 0 }} className="absolute h-screen items-center  pt-[65vh] z-10">
                {/* <p className="text-3xl text-center md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
                  Study & Work in Dubai
                </p>
                <p className="w-[40vh] md:w-[80vh] text-xs md:text-sm font-normal text-center text-gray-300">
                  Students looking to pursue their education in the UAE will
                  find comprehensive assistance from our experienced
                  professionals. We help students select the right course and
                  institution that align with their career objectives, ensuring
                  a transparent admissions process free from hidden charges.
                  With operations in both India and the UAE, our team offers
                  round-the-clock support, available both locally and in-person,
                  to meet your needs quickly and efficiently.{" "}
                </p> */}
              </motion.div>
              <motion.svg
                initial={{ opacity: 0 }}
                whileInView={{ opacity: section === 1 ? 1 : 0 }}
                transition={{ delay: 0, duration: 1 }}
                animate={{
                  scale: section === 0 ? 50 : sm ? 4 : 1,
                  y: section === 0 ? "400px" : sm ? "400px" : "100px",
                  x: sm ? 15 : 0,
                }}
                className="z-20 inset-0 absolute overflow-hidden"
                viewBox="0 0 1920 1025"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1482_5120)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1920 -5H0V1031H1920V-5ZM792.794 527.268C800.146 531.978 808.647 534.333 818.297 534.333C825.535 534.333 832.112 532.984 838.028 530.284C844.002 527.584 849.143 523.822 853.451 518.997C857.759 514.172 861.061 508.6 863.359 502.282C865.714 495.906 866.892 489.071 866.892 481.776V411.469H843.111V481.776C843.111 487.06 842.164 491.885 840.268 496.251C838.373 500.616 835.558 504.091 831.824 506.676C828.148 509.261 823.639 510.553 818.297 510.553C813.013 510.553 808.504 509.261 804.77 506.676C801.037 504.034 798.193 500.53 796.24 496.165C794.287 491.799 793.311 487.003 793.311 481.776V411.469H769.531V481.776C769.531 491.483 771.57 500.329 775.648 508.313C779.784 516.24 785.499 522.558 792.794 527.268ZM961.046 411.469H933.991L890.222 532.093H915.467L922.704 512.104H972.333L979.57 532.093H1004.81L961.046 411.469ZM963.63 488.324H931.407L947.432 444.124L963.63 488.324ZM1030.93 411.469V532.093H1107.27V508.313H1054.71V479.363H1095.72V455.583H1054.71V435.249H1107.27V411.469H1030.93Z"
                    fill="#F3F3F3"
                  />
                </g>{" "}
                <defs>
                  <clipPath id="clip0_1482_5120">
                    <rect width="1920" height="1025" fill="white" />
                  </clipPath>
                </defs>
              </motion.svg>
              <motion.div
                className="absolute w-full h-full overflow-hidden"
                transition={{ delay: 0, duration: 1 }}
                animate={{
                  scale: section === 0 ? 1 : 2,
                  y: section === 0 ? "0px" : "600px",
                }}
              >
                {sm ? (
                  <Image
                    className="absolute w-full h-full overflow-hidden"
                    src="/images/dubaibgsm.png"
                    width={2000}
                    height={2000}
                    alt="Dubai Work"
                  />
                ) : (
                  <Image
                    className="absolute w-full h-full overflow-hidden"
                    src="/images/dubaiBg.png"
                    width={2000}
                    height={2000}
                    alt="Dubai Work"
                  />
                )}
              </motion.div>
            </div>

            
          </div>
            <StickySection/>
          <div className="h-[1000vh] bg-red-500"></div>
        {/* </MotionConfig> */}
      </NextThemesProvider>
    </>
  );
};

export default Landing;