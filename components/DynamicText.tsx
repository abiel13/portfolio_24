"use client";
import React, { useState, useEffect, FC } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

interface DynamicTextI {
  textArray: String[];
  hasButton?: boolean;
  size?: string;
}

const DynamicText: FC<DynamicTextI> = ({ textArray, hasButton, size }) => {
  const [textCount, settextCount] = useState<number>(0);

  // declare a use effecct that runs when the components mounts
  useEffect(() => {
    let interval: any;

    if (textArray.length === 1) {
      settextCount(0);
    } else {
      interval = setInterval(() => {
        settextCount((prev) => (prev + 1) % textArray.length);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [textArray]);

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      sx={{
        marginTop: "2rem",
        gap: "1rem",
      }}
      spacing={2}
    >
      <Stack
        sx={{
          display: { md: "block", xs: "none" },
        }}
        spacing={2}
      >
        <Image
          className="h-[80px] w-[10px]"
          src={"/Line.png"}
          alt={"line"}
          width={30}
          height={90}
        />
        <Typography
          sx={{ fontSize: (size && size) || "3rem" }}
          className="font-bold text-[#0A1E46]  w-[20ch]"
        >
          {textArray[textCount]}
        </Typography>

        {hasButton && (
          <button className="bg-[#449F24] rounded-lg flex gap-3 font-bold w-fit px-4 py-2 items-center text-white hover:scale-[1.1] duration-50 ease-in-out">
            <Typography>Send Message</Typography>
            <IoIosArrowRoundForward color="white" />
          </button>
        )}
        <Image
          className="h-[250px] w-[10px]"
          src={"/Line1.png"}
          alt={"line"}
          width={20}
          height={120}
        />
      </Stack>

      <Typography
        sx={{
          fontSize: (size && size) || "2.2rem",
          display: { md: "none", xs: "block" },
        }}
        className="font-bold text-[#0A1E46] "
      >
        {textArray[textCount]}
      </Typography>
    </Stack>
  );
};

export default DynamicText;
