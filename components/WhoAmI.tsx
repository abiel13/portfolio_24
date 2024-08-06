import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Animate, MotionDiv } from "./MotionDiv";
import DynamicText from "./DynamicText";
import { whatido } from "@/utils/Whoami";
import Image from "next/image";
import ThrophyCard from "./partials/ThrophyCard";
import { professionalNames } from "@/constants/whoiam";

const WhoAmI = () => {
  return (
    <Stack
      id="about"
      direction={{ md: "row" }}
      className="min-h-[110vh] relative px-3 md:px-7 py-5  gap-[1.4rem] mt-[10vh]"
    >
      <div className="flex items-center basis-1/3">
        <MotionDiv.div
          whileInView={{
            y: [150, 0],
          }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
            type: "spring",
            damping: 5.4,
          }}
        >
          <DynamicText
            textArray={["I Know That  Good Design  Means Good Business"]}
            size="2rem"
            hasButton
          />
        </MotionDiv.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 flex-1 gap-x-4 gap-y-5 justify-items-center">
        {professionalNames.map((item, i) => (
          <ThrophyCard idx={i} item={item} key={i} />
        ))}
      </div>

      <div className="rounded_gradient" />
    </Stack>
  );
};

export default WhoAmI;
