"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import "./globals.css";

import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import Link from "next/link";

import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Photos",
    url: "photos",
  },
  {
    title: "Music",
    url: "#",
  },
  {
    title: "Writer",
    url: "#",
  },
  {
    title: "Testimonials",
    url: "#",
  },
  {
    title: "Services",
    url: "#",
  },
  {
    title: "Contact",
    url: "#",
  },
];

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/poppins/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  const pathname = usePathname();
  console.log(pathname);

  const handleNav = () => {
    setNavOpen((prevNavOpen) => !prevNavOpen);
  };
  return (
    <html lang="en">
      <body className={`${poppins.className} relative`}>
        <div className="absolute  z-[400] top-0 w-full left-0 px-4 py-2 md:py-2 bg-black ">
          <div className="w-full flex items-center justify-between ">
            <div>
              <Bars3BottomLeftIcon
                className="h-7 w-7 md:h-9 md:w-9 cursor-pointer text-[#ffd000] "
                onClick={handleNav}
              />
            </div>
            <Link href="/" className="h-12 w-20 md:h-16 md:w-28 relative">
              <Image src="/images/logo.png" alt="logo" fill />
            </Link>
            <div className=""></div>
          </div>
        </div>
        <div
          className={`absolute  w-[150px] z-[400] left-0 bg-gray-200 px-4 py-6 top-0 h-full transform transition-transform ${
            navOpen
              ? "translate-x-0 transition duration-500"
              : "-translate-x-full transition duration-500"
          }`}
        >
          <div className="pb-10  border-b-[0.8px] border-gray-400">
            <XMarkIcon
              className="h-9 w-9 cursor-pointer text-black"
              onClick={handleNav}
            />
            <ul className="h-fit  flex flex-col pt-10 space-y-8 text-black border-t-r">
              {Links.map((link, index) => {
                const isActive = pathname.startsWith(link.url);

                return (
                  <div
                    key={index}
                    className={`text-black uppercase text-md font-light py-1 ${
                      isActive
                        ? `before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r before:from-yellow-500 before:to-white relative inline-block`
                        : ``
                    }`}
                  >
                    <Link onClick={() => setNavOpen(false)} href={link.url}>
                      <span className="relative pl-2">{link.title}</span>
                    </Link>
                  </div>
                );
              })}
              <Link
                href="#"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#000000] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full  bg-white border-2 border-black group-hover:bg-[#ffd000] group-hover:border-2 group-hover:border-[#ffd000]"></span>
                <span className="relative text-black group-hover:text-black">
                  BOOK LIVE
                </span>
              </Link>
            </ul>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
