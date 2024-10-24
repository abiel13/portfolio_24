import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

export type tWorkCard = {
  _id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  tools: [string];
  links: [string];
  size?: "base" | "small";
};

const WorkCard: FC<tWorkCard> = ({
  _id,
  name,
  thumbnailUrl,
  size = "base",
  description,
}) => {
  console.log(name, thumbnailUrl);
  return (
    <Stack
      className="rounded-lg h-fit "
      sx={{
        bgcolor: "white",
        width: "300px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.4)",
        height: size === "base" ? "330px" : "300px",
      }}
    >
      <div
        className={`relative w-[300px] ${
          size === "base" ? "min-h-[280px]" : " min-h-[250px"
        } min-h-[250px] `}
      >
        <Image
          src={thumbnailUrl || "/work_img.png"}
          alt="work_img"
          objectFit="cover"
          className="rounded-t-lg  aspect-w-16 aspect-h-1"
          fill
        />
      </div>
      <div className="py-3 px-2 mb-3">
        <Typography sx={{ width: "150px" }} fontWeight={"bold"}>
          {name}
        </Typography>
        <Typography sx={{ marginBottom: "1rem" }}>
          {" "}
          {description.substring(0, 55)}....{" "}
        </Typography>

        <Link
          href={`/work/${_id}`}
          className="px-5 py-2 mt-3 bg-green-600 rounded-lg text-white font-sans"
        >
          Learn More
        </Link>
      </div>
    </Stack>
  );
};

export default WorkCard;
