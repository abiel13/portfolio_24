"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBarsStaggered, FaX } from "react-icons/fa6";

const MobileNav = ({ routes }: { routes: string[] }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="flex md:hidden inset-x-0 px-3 py-3  w-full items-center justify-between fixed z-50 ">
      <div className="text-[#112c61] font-bold text-2xl tracking-wider">
        Ab
        <span className="text-white">i</span>el
      </div>
      <div>
        <FaBarsStaggered
          color="white"
          fontSize="28"
          cursor="pointer"
          onClick={() => setVisible(true)}
        />
        <div
          className={`${
            visible
              ? "translate-x-[0] scale-100"
              : " translate-x-[100%] scale-0 ease-in-out duration-75"
          } fixed top-0 right-0 h-[100%] w-[80%] bg-[#c9c9da] flex flex-col items-end gap-10 p-7 text-black text-xl transition-all   `}
        >
          <FaX cursor="pointer" onClick={() => setVisible(false)} />
          {routes?.map((item) => (
            <Link href={`/${item == "Home" ? "" : item}`}>{item}</Link>
          ))}
          <button className="bg-[#112C61] text-white font-normal text-base py-3 px-4 rounded-lg">
            DownLoad Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
