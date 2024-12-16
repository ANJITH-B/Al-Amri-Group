"use client";
import { links } from "@/data/footerData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white w-full font-bricolage text-stone-500">
      <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 lg:w-1/4 px-12 max-w-md pb-6">
            <Link href="/" className="flex flex-col items-center">
              <Image
                src="/assets/logo.png"
                alt="Al Amri Group Logo"
                width={220}
                height={100}
                className="w-full h-full"
              />
              <span className="self-center whitespace-nowrap text-xs lg:text-sm">
                Al Amri Trading & Service Co
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap md:flex-nowrap flex-row gap-4 md:gap-8 px-4 justify-center lg:justify-end md:px-12">
            {links.map((section, idx) => (
              <h2
                key={idx}
                className="text-sm font-semibold text-gray-900"
              >
                {section.title}
              </h2>
            ))}
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              Al Amri Group
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4 text-sm text-stone-500">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
