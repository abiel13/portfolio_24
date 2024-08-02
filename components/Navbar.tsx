"use client";
import Link from "next/link";
import React from "react";
import MobileNav from "./partials/MobileNav";
import { Typography } from "@mui/material";
import { MotionDiv } from "./MotionDiv";

const Navroutes: string[] = ["Home", "about ", "skills ", "work", "contact"];
const Navbar = () => {
  return (
    <div className="fixed backdrop-blur-lg inset-x-0 bg-transparent z-50 top-0 py-2 flex items-center justify-end px-3">
      <MotionDiv.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeIn", duration: ".3" }}
      >
        <div className="hidden md:flex items-center bg-[#ffffff7a]  shadow-2xl drop-shadow-lg px-6 rounded-lg py-2 gap-4 text-xl text-[#fff] font-medium capitalize">
          {Navroutes?.map((item, i) => (
            <Link key={i} href={`/${item == "Home" ? "" : `#${item}`}`}>
              <Typography fontWeight="bold">{item}</Typography>
            </Link>
          ))}
          <button className="bg-[#112C61] text-white font-normal text-[1rem] py-2 px-4 rounded-lg">
            <Typography>DownLoad Resume</Typography>
          </button>
        </div>
      </MotionDiv.div>

      <MobileNav routes={Navroutes} />
    </div>
  );
};

export default Navbar;
