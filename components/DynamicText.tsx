"use client";
import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const DynamicText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      sx={{ marginTop: "2rem", gap: "1rem" }}
      spacing={2}
    >
      <Stack spacing={4}>
        <Image
          className="h-[80px] w-[10px]"
          src={"/Line 1.png"}
          alt={"line"}
          width={30}
          height={90}
        />

        <Image
          className="h-[250px] w-[10px]"
          src={"/Line 2.png"}
          alt={"line"}
          width={20}
          height={120}
        />
      </Stack>
      {children}
    </Stack>
  );
};

export default DynamicText;
