import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Skill from "./partials/Skill";
import { experienceData } from "@/utils/Whoami";
import Experience from "./partials/Experience";

const Skills = () => {
  return (
    <div className="min-h-screen relative px-3 pt-5 mt-[10%]">
      <Stack alignItems={"center"} spacing={3}>
        <Typography
          className="text-[#0A1E46]"
          sx={{ fontWeight: "bolder", fontSize: "3rem" }}
        >
          Skills & Experience
        </Typography>
        <Stack
          direction={{ md: "row", xs: "column" }}
          sx={{ marginTop: "1rem", width: "60%", gap: "1.5rem" }}
        >
          <div className="flex flex-wrap items-center basis-[40%] gap-[1rem] ">
            {Array.from({ length: 12 }).map((item, i) => (
              <Skill />
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-5 items-end">
            {experienceData.map((item, i) => (
              <Experience item={item} key={i} />
            ))}
          </div>
        </Stack>
        {/* //TODO: pagination */}
      </Stack>
      <div className="rounded_gradient" />
    </div>
  );
};

export default Skills;
