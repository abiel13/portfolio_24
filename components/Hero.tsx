import React from "react";
import SphereModel from "./SphereModel";
import CenterText from "./CenterText";
import { Stack } from "@mui/material";
import DynamicText from "./DynamicText";
import { Animate, MotionDiv } from "./MotionDiv";

const Hero = () => {
  return (  
    <Animate>
      <MotionDiv.div
        whileInView={{
          opacity: [0, 1],
        }}
        transition={{
          type: "tween",
          ease: "easeIn",
          duration: 0.4,
        }}
      >
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
      </MotionDiv.div>
    </Animate>
  );
};

export default Hero;
