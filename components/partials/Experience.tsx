import { Typography } from "@mui/material";
import React from "react";
import { MotionDiv } from "../MotionDiv";

const Experience = ({ item }: { item: any }) => {
  return (
    <MotionDiv.div
      whileInView={{
        x: [100, 10],
      }}
      className="w-full"
    >
      <div className="w-full justify-around rounded-lg gap-6 bg-white shadow-lg flex items-center px-6 py-4">
        <Typography className="text-2xl text-[#449F24] font-bold basis-1/3">
          {item.date}
        </Typography>
        <div className="flex-1">
          <Typography className="text-2xl font-bold ">{item.Title}</Typography>
          <Typography className="text-md">{item.name}</Typography>
          <button className="bg-[#112C61] font-bold px-4 py-1 font-sans mt-4 rounded-lg text-white">
            Learn More{" "}
          </button>
        </div>
      </div>
    </MotionDiv.div>
  );
};

export default Experience;
