"use client";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Preloader from "@/components/Preloader";

import Link from "next/link";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  return (
    <main className="relative text-white h-screen w-full overflow-hidden">
      {!imagesLoaded && <Preloader />}

      <div className="text-white bg-black h-full w-full relative">
        <div className="absolute h-screen mx-auto w-full left-0 px-0 z-50 pt-16 pb-12 md:pt-[70px] md:pb-[60px] md:px-[70px]">
          <div className="h-full w-full relative z-[1000]">
            <Image
              src="/images/image4.webp"
              fill
              alt="heroImage"
              loading="eager"
              onLoad={handleImageLoad}
            />
            <div className="relative h-full  w-full z-50 ">
              <div className="absolute z-50  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-72 border-[0.8px] border-gray-500 w-[300px] md:w-[400px] rounded-3xl"></div>
              <div className="absolute z-50   top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-72 border-[0.8px] bg-white w-[350px] md:w-[400px] rounded-3xl   text-black text-center flex flex-col -skew-y-[5deg] "></div>
              <div className="absolute z-50 py-4 w-[400px]  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-64 text-black text-center flex flex-col">
                <div className="flex items-center justify-center w-full  space-x-4">
                  <p>✍ </p>
                  <p>🎵 </p>
                  <p>👗 </p>
                </div>
                <motion.h1
                  animate={{ opacity: 1 }}
                  className="font-bold text-lg text-gray-700 px-6 mt-4"
                >
                  Unlock the Soul, Embrace the Art.
                </motion.h1>
                <p className="relative z-[100] text-sm text-slate-500 px-12 mt-3 mb-7">
                  Embark on a captivating journey where music, poetry, and
                  modeling converge to unlock the depths of the soul.
                </p>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.1 }}
                  className="relative z-[200] "
                >
                  <Link
                    href="/photos"
                    className="relative z-[300] inline-flex items-center justify-center p-4 px-10 py-2 overflow-hidden font-medium text-black bg-black transition duration-300 ease-out border-2 border-[#ffd000] rounded-md shadow-md group cursor-pointer"
                  >
                    <span className="absolute z-[600] inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-[#ffd000] group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute  flex items-center justify-center w-full h-full text-[#ffd000] transition-all duration-300 transform group-hover:translate-x-full ease">
                      Explore
                    </span>
                    <span className="relative invisible">Explore</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute z-50 md:top-1/2  md:right-0  md:px-4  md:grid md:justify-items-end md:gap-8 small flex   justify-center md:justify-normal space-x-8  ">
          <FaFacebook className="h-4 w-4 cursor-pointer hover:text-blue-600 transition duration-200 ease-out  hover:scale-150" />
          <FaTwitter className="h-4 w-4 cursor-pointer hover:text-blue-500 transition duration-200 ease-out  hover:scale-150" />
          <FaInstagram className="h-4 w-4 cursor-pointer hover:text-pink-500 transition duration-200 ease-out  hover:scale-150" />
        </div>
      </div>
    </main>
  );
}
