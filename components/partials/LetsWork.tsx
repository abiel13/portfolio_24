import { Typography } from "@mui/material";
import React from "react";

const LetsWork = () => {
  return (
    <div className="relative w-fit h-fit ">
      <div className="mt-7 w-[176px] overflow-hidden h-[120px] shadow-md flex relative items-center px-3 rounded-lg bg-[#98D084]">
        <Typography
          sx={{ fontWeight: "bolder", position: "relative", zIndex: "10" }}
        >
          Let's Work Together
        </Typography>
        <div className="absolute h-[70px] w-[70px] gradient_balls rounded-full -bottom-1 z-0 -right-4" />
      </div>
      <div
        className="gradient_balls w-[44px] h-[44px] rounded-full absolute -bottom-5 left-[40%] -translate-x-[40%]
      animate-moveleft
      "
      />
        <div
        className="gradient_balls w-[23px] h-[23px] rounded-full absolute top-5 -right-[7%] -translate-x-[40%]
      animate-movedown
      "
      />
      
    </div>
  );
};

export default LetsWork;
