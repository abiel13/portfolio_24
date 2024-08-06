import React from "react";
import { Animate, MotionDiv } from "../MotionDiv";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ThrophyCard = ({ item, idx }: { item: any; idx: number }) => {
  return (
    <div className="w-[80vw] md:w-[300px]">
      <MotionDiv.div
        whileInView={{
          scale: [1, 1.1, 1.05, 1, 1],
        }}
        transition={{
          ease: "easeIn",
          duration: 0.7,
          delay: idx * 0.7,
        }}
      >
        <Stack
          sx={{
            minHeight: "250px",
            padding: "1rem .5rem",
            borderRadius: "10px",
            bgcolor: "white",
          }}
          className="group shadow-lg"
          spacing={1}
          alignItems={"center"}
        >
          <div className="relative">
            <Image
              width={250}
              height={150}
              alt={item.title}
              className="rounded-md"
              src={item.image}
            />
            <Animate>
              <div className="absolute hidden group-hover:flex  inset-0 bg-[#000a] rounded-lg  items-center justify-center">
                <Link
                  href={`/aboutme/${item.id}`}
                  className="bg-[#112C61] font-sans text-white px-3 py-2 rounded-full font-bold "
                >
                  Learn More
                </Link>
              </div>
            </Animate>
          </div>
          <Typography sx={{ fontWeight: "bold" }}>{item.title}</Typography>
          <Typography textAlign={"center"}>{item.brief}</Typography>
        </Stack>
      </MotionDiv.div>
    </div>
  );
};

export default ThrophyCard;
