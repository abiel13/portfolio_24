"use client";

import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import WhoAmI from "./WhoAmI";
import DynamicText from "./DynamicText";
import WorkCard, { tWorkCard } from "./WorkCard";
import Link from "next/link";
import Image from "next/image";
import { fetchProjects } from "@/libs/actions/actions";

const CreativePortfolio = () => {
  const [workdata, setWorkdata] = useState<tWorkCard[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const projects = await fetchProjects();
        setWorkdata(projects);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="w-full min-h-screen px-[1rem] md:px-[2rem] my-[10%] flex   pt-[1rem]  relative gap-8 flex-col md:flex-row">
      <div className="basis-1/3 flex flex-col  justify-between gap-8 ">
        <DynamicText
          size="3rem"
          hasButton
          textArray={["Check Out My Creative Work"]}
        />

        <div className="w-full min-h-[150px] rounded-md  shadow-lg bg-white flex ">
          <div className="px-3 py-3 flex-1 flex-col gap-2 flex">
            <Typography className="font-bold text-[#0A1E46] text-xl">
              Visit my BLOG
            </Typography>
            <p>Find Insightful Topics and explanations bla bla blah</p>
            <Link
              className="bg-[#0A1E46] text-white font-sans px-3 py-2 rounded-lg w-fit"
              target="_blank"
              href={"https://medium.com/@dbestabi28/"}
            >
              Let's Go
            </Link>
          </div>
          <div className="relative min-h-full w-[50%] flex-1 flex-shrink-0">
            <Image
              className="object-cover rounded-r-md"
              src="/work_img.png"
              alt=""
              fill
            />{" "}
          </div>
        </div>
      </div>
      <div className="flex-1 grid-cols-1 md:grid-cols-3 grid space-y-6 justify-items-center">
        {workdata?.map((item, i) => (
          <WorkCard size={i % 2 == 0 ? "base" : "small"} {...item} key={i} />
        ))}
      </div>
      <div className="rounded_gradient" />
    </div>
  );
};

export default CreativePortfolio;
