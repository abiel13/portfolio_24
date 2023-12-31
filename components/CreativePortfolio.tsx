import { Typography } from "@mui/material";
import React from "react";

const CreativePortfolio = () => {
  return (
    <div className="w-full min-h-screen px-[1rem] md:px-[2rem] mt-[10%] flex flex-col items-center  pt-[1rem] ">
      <Typography
        sx={{
          fontSize: { md: "3rem", xs: "1.5rem" },
          fontWeight: "bold",
        }}
      >
        My Creative Portfolio Section
      </Typography>
    </div>
  );
};

export default CreativePortfolio;
