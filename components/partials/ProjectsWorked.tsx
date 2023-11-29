import { Stack, Typography } from "@mui/material";
import React from "react";
import { MdVerified } from "react-icons/md";
import { RiCheckboxCircleFill } from "react-icons/ri";

const ProjectsWorked = () => {
  return (
    <div className="relative mt-[10%] md:-mt-[5%] bg-[#0A1E46] w-[150px] md:w-[175px] p-4  rounded-lg min-h-[110px] left-[30%] md:left-[25%] ">
      <Stack alignItems="center" spacing={2}>
        <RiCheckboxCircleFill fontSize={27} color="#449F24" />
        <Typography sx={{ fontWeight: "bold", color: "white" }}>
          A<sup className="text-lg">+</sup>
        </Typography>
        <Typography sx={{letterSpacing:'2px'}} color="white">
          Software <br /> Enginner
        </Typography>
      </Stack>
    </div>
  );
};

export default ProjectsWorked;
