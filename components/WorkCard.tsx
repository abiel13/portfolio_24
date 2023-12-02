import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

export type tWorkCard = {
  projectTitle: string;
  projectDesc: string;
};

const WorkCard: FC<tWorkCard> = ({ projectDesc, projectTitle }) => {
  return (
    <Stack
      className="rounded-lg "
      sx={{
        bgcolor: "white",
        width: "fit-content",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.4)",
      }}
    >
      <div className="">
        <Image
          src={"/work_img.png"}
          alt="work_img"
          objectFit="cover"
          width={200}
          height={140}
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
