"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Icons } from "./Icons";

interface CustomLinkProps {
  path: string;
  children: React.ReactNode;
  dark?: boolean;
}

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Products" },
  { path: "/blogs", label: "Blogs" },
  { path: "/careers", label: "Careers" },
  { path: "/connect", label: "Connect" },
];

const CustomLink: React.FC<CustomLinkProps> = ({ path, children, dark }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`p-2 px-6 m-1
      ${
        pathname === path &&
        (dark
          ? "text-black bg-primary100 rounded-full w-full h-full backdrop-blur-lg bg-opacity-30 border-2 border-stone-300"
          : "text-stone-300")
      }
      ${dark ? "hover:text-black" : "hover:text-stone-300"}
      `}
      href={path}
    >
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-4 z-50 w-full">
      <div className="container px-6 py-3 md:p-0 mx-auto gap-8 rounded-full border-b-2 md:border-2 border-primary100 backdrop-blur-3xl bg-white bg-opacity-45 flex justify-between items-center w-fit max-w-screen-md">
        <nav className="hidden md:flex text-base text-stone-500">
          {navLinks.slice(0, 5).map(({ path, label }) => (
            <CustomLink key={path} path={path} dark>
              {label}
            </CustomLink>
          ))}
        </nav>
        <div className="flex md:hidden items-center">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="w-10 h-8"
          />
          <div className="text-xs flex flex-col justify-center">
            <h1 className="uppercase font-bold">Al-Amri Group</h1>
            <p className="uppercase text-xs">Al Amri Trading & Service Co</p>
          </div>
        </div>
        <div className="flex md:hidden gap-4 items-center">
          <Image
            src="/assets/logo.png"
            width={40}
            height={40}
            alt="login"
            className="w-10 h-8 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed bg-gradient-to-r from-[#0C3E54] to-[#1B89BA] text-white top-0 right-0 w-64 xs:w-72 sm:w-80 md:w-96 lg:w-104 backdrop-blur-lg overflow-hidden rounded-l-2xl p-2 shadow-md">
          <div className="flex justify-between p-8">
            <h2 className="text-sm font-semibold">Quick Links</h2>
            <button onClick={toggleMenu} aria-label="Close Menu">
              <Icons.close />
            </button>
          </div>
          <nav className="relative flex flex-col justify-center pb-20 px-8 gap-3 text-base">
            {navLinks.map(({ path, label }) => (
              <CustomLink key={path} path={path}>
                {label}
              </CustomLink>
            ))}
          </nav>
          <p className="text-xs text-center p-4 text-stone-300">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              Al-Amri Group
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
