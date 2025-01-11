"use client";
import React, { useEffect } from "react";
import ContactCard from "./ContactCard";
import Link from "next/link";
import { Icons } from "../Icons";
import { motion } from "framer-motion";
import Lenis from "lenis";

const ContactPage: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-20 md:mt-28 lg:mt-32 mb-12 w-full justify-between p-2 md:p-8 h-full">
      <div className="flex flex-col w-full mx-auto xl:w-2/3 gap-4 xl:gap-8 p-2">
        <motion.h1 className="font-bold text-base md:text-2xl">
          Get In Touch With Us
        </motion.h1>
        <motion.p className="max-w-lg text-sm md:text-base">
          We&apos;re here to help you discover top-quality lifestyle apparel,
          catering, tools, and construction solutions tailored to elevate your
          projects. Whether you have a question, need assistance, or want to
          explore opportunities, experience excellence, reliability, and
          unmatched service with Al Amri Group. We&apos;d love to hear from you!
        </motion.p>
        <motion.h1 className="font-bold text-base md:text-xl">
          Contact Information
        </motion.h1>
        <div className="flex flex-col gap-2">
          <Link
            href={"tel:+911234567890"}
            target="_blank"
            className="flex gap-4 items-center text-sm md:text-base"
          >
            <Icons.phone />
            +91 123 456 7890
          </Link>
          <Link
            href={"mailto:info@alamrigroups.com"}
            className="flex gap-4 items-center text-sm md:text-base"
          >
            <Icons.email />
            info@alamrigroups.com
          </Link>
          <Link
            href={"https://www.google.com/maps"}
            target="_blank"
            className="flex gap-4 text-sm md:text-base"
          >
            <Icons.location />
            P.O. BOX : 118467,
            <br />
            105-9, 1st Floor Al Fajjer Complex Umm Hurair,
            <br />
            Oud Metha, Dubai - UAE
          </Link>
        </div>
        <div className="flex flex-col">
          <motion.h1 className="font-bold text-sm md:text-lg">
            Follow us
          </motion.h1>
          <motion.p className="text-xs md:text-sm">
            Stay updated with the latest trends and properties
          </motion.p>
          <div className="flex gap-6 items-center py-4">
            <Link href={"https://www.facebook.com/"} target="_blank">
              <Icons.facebook />
            </Link>
            <Link href={"https://www.linkedin.com/"} target="_blank">
              <Icons.linkedIn />
            </Link>
            <Link href={"https://www.alamrigroups.com/"} target="_blank">
              <Icons.google />
            </Link>
            <Link href={"https://www.instagram.com/"} target="_blank">
              <Icons.instagram />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/3">
        <ContactCard />
      </div>
    </div>
  );
};

export default ContactPage;
