import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { MotionDiv } from "../MotionDiv";

const Skill = () => {
  return (
    <MotionDiv.div
      whileInView={{
        y: [120, 0],
        scale: [0, 1],
      }}
      whileHover={{
        scale: [1, 0.5],
      }}
      transition={{
        ease: "easeIn",
        damping: 4.9,
        type: "spring",
      }}
    >
      <div className="flex items-center flex-col gap-4">
        <div className="w-[80px] h-[80px] md:w-[100px] flex items-center justify-center  md:h-[100px] rounded-full shadow-lg ">
          <Image src={"/git.png"} width={60} height={60} alt="git" />
        </div>
        <Typography className="font-bold capitalize">git</Typography>
      </div>
    </MotionDiv.div>
  );
};

export default Skill;
