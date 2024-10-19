import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

export type tWorkCard = {
  projectTitle: string;
  projectDesc: string;
  size?: "base" | "small";
};

const WorkCard: FC<tWorkCard> = ({
  projectDesc,
  projectTitle,
  size = "base",
}) => {
  return (
    <Stack
      className="rounded-lg h-fit"
      sx={{
        bgcolor: "white",
        width: "300px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.4)",
      }}
    >
      <div className={`relative w-[300px] ${size === 'base' ? 'h-[330px]': 'h-[300px]'}`}>
        <Image
          src={"/work_img.png"}
          alt="work_img"
          objectFit="cover"
          className="rounded-t-lg"
         fill
        />
      </div>
      <div className="py-3 px-2 ">
        <Typography sx={{ width: "150px" }} fontWeight={"bold"}>
          {projectTitle}
        </Typography>
        <Typography> {projectDesc} </Typography>
      </div>
    </Stack>
  );
};

export default WorkCard;
