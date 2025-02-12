"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Link from "next/link";

export function UnderConstruction() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative h-screen flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="text-3xl md:text-7xl font-bold text-center">
                    We're Building this page
                </div>
                <div className="font-extralight text-base md:text-4xl py-4">
                    stay tunned.
                </div>
                <Link href={'/'} className="bg-black rounded-full w-fit text-white px-4 py-2">
                    Back to home
                </Link>
            </motion.div>
        </AuroraBackground>
    );
}
