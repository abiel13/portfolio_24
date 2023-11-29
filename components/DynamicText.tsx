"use client";
import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const DynamicText = ({ text }: { text: string }) => {
  const textarray = [
    "Sophisticated ",
    "Polished",
    "Refinement",
    "Dignity",
    "Exquiste",
  ];
  const [count, setcount] = useState<number>(1);

  return (
    <Stack sx={{ marginTop: "2rem" }} spacing={2}>
      <Image
        className="h-[150px] w-[10px]"
        src={"/Line 1.png"}
        alt={"line"}
        width={20}
        height={100}
      />
      <Typography
        sx={{
          fontWeight: "bolder",
          fontSize: "3rem",
          color: "white",
          width: "fit-content",
        }}
      >
        "Code Crafted
      </Typography>
      <Typography
        sx={{ fontSize: "3rem", fontWeight: "bolder" }}
        className="text_gradient w-fit"
      >
        {textarray[count]}
      </Typography>
      <Stack direction="row">
        <Image
          className="h-[300px] w-[10px]"
          src={"/Line 2.png"}
          alt={"line"}
          width={20}
          height={120}
        />
      </Stack>
    </Stack>
  );
};

export default DynamicText;
