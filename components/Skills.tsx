"use client";
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Skill from "./partials/Skill";
import { experienceData } from "@/utils/Whoami";
import Experience from "./partials/Experience";
import { fetcchExp, fetchSkills } from "@/libs/actions/actions";
import { NextFetchEvent } from "next/server";

const Skills = () => {
  const [skillsarr, setSkillsarr] = useState([]);
  const [exparr, setExparr] = useState([])

  useEffect(() => {
    (async function () {
      try {
        const skills = await fetchSkills();
        setSkillsarr(skills)

        const exps = await fetcchExp()
        setExparr(exps)
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div id="skills" className="min-h-screen relative px-3 pt-5 mt-[10%]">
      <Stack alignItems={"center"} spacing={3}>
        <Typography
          className="text-[#0A1E46]"
          sx={{ fontWeight: "bolder", fontSize: { md: "3rem", xs: "2rem" } }}
        >
          Skills & Experience
        </Typography>
        <Stack
          direction={{ md: "row", xs: "column" }}
          sx={{
            marginTop: "1rem",
            width: { md: "80%", xs: "100%" },
            gap: "1.5rem",
          }}
        >
          <div className="flex flex-wrap justify-center w-full  md:basis-[40%] gap-[1rem]  ">
            {skillsarr?.map((item, i) => (
              <Skill item={item} key={i} />
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-5 md:items-end  w-full">
            {exparr?.map((item, i) => (
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
