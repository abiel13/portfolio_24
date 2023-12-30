import React from "react";
import SphereModel from "./SphereModel";
import CenterText from "./CenterText";
import { Stack } from "@mui/material";
import DynamicText from "./DynamicText";

const Hero = () => {
  return (
    <Stack className=" gradient_bg relative min-h-[110vh]">
      <div className="mt-16">
        <SphereModel />
      </div>
      <CenterText />
      <div className="absolute left-5 mt-[1.5rem]">
        <DynamicText
          textArray={[
            '"Code Crafted Intellegence',
            "Sophisticated Designs ",
            "Excellent Problem Solving",
            "Unique Ideas",
          ]}
        />
      </div>
    </Stack>
  );
};

export default Hero;
