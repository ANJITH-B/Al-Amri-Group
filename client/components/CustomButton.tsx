"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Icons } from "./Icons";

interface CustomButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  href,
  onClick,
  children,
}) => {
  const router = useRouter();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) {
      onClick(e);
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex w-fit h-fit items-center rounded-full border border-gray-300 p-1"
    >
      <p className="px-4 text-xs md:text-sm">{children}</p>
      <span className="rounded-full w-8 lg:w-10 h-8 lg:h-10 flex items-center justify-center text-xs xl:text-2xl font-bold bg-black">
        <Icons.rightArrow className="text-white" />
      </span>
    </button>
  );
};

export default CustomButton;
