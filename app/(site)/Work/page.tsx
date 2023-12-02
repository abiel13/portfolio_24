import SphereModel from "@/components/SphereModel";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { data } from "@/utils/workdata";
import WorkCard from "@/components/WorkCard";

const Work = () => {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <div className="flex justify-end mt-10">
        <div className="mt-20 w-full flex flex-wrap relative px-4 gap-5 md:w-[40%]">
          {data.map((item) => (
            <WorkCard
              projectDesc={item.projectDesc}
              projectTitle={item.projectTitle}
            />
          ))}
        </div>
      </div>
    </Stack>
  );
};

export default Work;
