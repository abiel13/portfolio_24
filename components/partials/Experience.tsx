import { Typography } from "@mui/material";
import React from "react";
import { MotionDiv } from "../MotionDiv";

const Experience = ({ item }: { item: any }) => {
  return (
    <MotionDiv.div
      whileInView={{
        x: [100, 0],
      }}
      className="max-w-full md:w-full"
    >
      <div className="max-w-full justify-around rounded-lg gap-6 bg-white shadow-lg flex items-center px-6 py-4 min-h-[130px]">
        <Typography className="text-xl text-[#449F24] font-medium basis-1/3">
          {item.startDate} {"-"} {item.endDate}
        </Typography>
        <div className="flex-1">
          <Typography className="text-2xl font-bold ">
            {item.jobTitle}
          </Typography>
          <Typography className="text-md">{item.companyName}</Typography>
        <p className="mt-3 text-gray-500 font-sans">
          {item.companyBrief}
        </p>
        </div>
      </div>
    </MotionDiv.div>
  );
};

export default Experience;
