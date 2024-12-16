"use client";
import * as React from "react";
import { cn } from "../../utils/cn";
import { useMotionTemplate, useMotionValue, motion, easeInOut } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const BorderLineCard = ({ className, children }: CardProps) => {
    const radius = 350;
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    console.log('count: %d', mouseX)
    return (
        <motion.div transition={{ duration: 3, delay: 3, ease:easeInOut}}
            style={{
                background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 40%
        )
      `, 
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="p-[2px] rounded-xl transition duration-300 group/input border  border-gray-300 dark:border-transparent"
        >
            <div
                className={cn(
                    `flex h-10 w-full border-none bg-gray-50 dark:bg-black text-black dark:text-white shadow-input rounded-xl text-sm   file:border-0 file:bg-transparent 
                  file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                  focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
                   disabled:cursor-not-allowed disabled:opacity-50
                   dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                   group-hover/input:shadow-none transition duration-400
                   `,
                    className
                )}
            >
                {/* <motion.section
                    className={`rounded-2xl h-40 flex flex-col min-w-40 max-w-72  items-center justify-center bg-white dark:bg-neutral-950   shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] dark:shadow  overflow-hidden`}
                    initial={{ opacity: 0, y: -5, }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } }}>
                </motion.section> */}
                {children}
            </div>
        </motion.div>
    );
}

export default BorderLineCard