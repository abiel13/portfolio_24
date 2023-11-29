import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Specialization = () => {
  return (
    <div className="w-[206px] mt-10 p-5 shadow-lg bg-[#98D084] rounded-lg relative md:-mt-[10%] left-0 md:left-[55%]">
      <div className="flex gap-2">
        <div className="relative ">
          <Image src={"/specshere.png"} alt="image" width={120} height={100} />
        </div>

        <div className="self-end">
          <Typography color={"white"} fontWeight="bold">
            Front end <br /> Development
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
