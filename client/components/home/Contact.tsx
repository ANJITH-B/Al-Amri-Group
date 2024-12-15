import Image from "next/image";
import React from "react";
import { Icons } from "../Icons";
import stepperData from "@/data/stepperData";

const Contact: React.FC = () => {
  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-2xl md:text-5xl max-w-2xl">
        Connecting You to Excellence Through Our Expertise
      </h1>
      <div className="flex flex-col md:flex-row min-h-[50vh]">
        <div className="flex h-full md:w-1/2">
          <Image
            src="/assets/logo-dark.png"
            width={40}
            height={40}
            alt="login"
            className="w-40 h-30 md:w-80 md:h-60 cursor-pointer"
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-4 justify-center">
          <p>
            For over two decades, we have been dedicated to delivering quality
            and personalized care, ensuring excellence every step of the way
          </p>
          <p>connect@alamrigroup.com | Phone : 989566003</p>
          <div className="flex border border-stone-300 bg-white rounded-full text-sm p-1 pl-3 w-full max-w-md">
            <input
              placeholder="Enter your email"
              className="outline-none text-sm px-2 w-2/3"
            />
            <button className="flex flex-row md:w-1/3 bg-black text-white p-2 justify-center gap-2 rounded-full">
              Let's connect <Icons.rightArrow />
            </button>
          </div>
        </div>
      </div>

      <ol className="relative text-gray-500 flex flex-col md:flex-row md:gap-8">
        {stepperData.map((step, index) => (
          <li key={index} className={`mt-8 ms-6 md:m-0 md:flex-1`}>
            <span
              className={`absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white md:static`}
            >
              <step.icon />
            </span>
            <h3 className="md:pt-4 pb-2 font-medium leading-tight">
              {step.title}
            </h3>
            <p className="text-sm">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Contact;
