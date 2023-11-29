import React from "react";
import { Stack, Typography } from "@mui/material";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import LetsWork from "./partials/LetsWork";
import ProjectsWorked from "./partials/ProjectsWorked";
import Specialization from "./partials/Specialization";

const CenterText = () => {
  return (
    <>
      <div className=" absolute left-[50%] -translate-x-[50%] top-[50%] flex flex-col  px-1 -translate-y-[50%] md:-translate-y-[30%] ">
        <div className="flex gap-6 items-center">
          <FaStar className="text-5xl md:text-7xl text-white/40" />

          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: { md: "9rem", xs: "2rem" },
              textTransform: "uppercase",
              color: "white",
              opacity: "40%",
            }}
          >
            Creative
          </Typography>
          <FaStar className="text-4xl text-white/40" />
        </div>
        
          <LetsWork />
          <ProjectsWorked />
          <Specialization />
     
      </div>
    </>
  );
};

export default CenterText;
