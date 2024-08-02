import React from "react";
import { Animate, MotionDiv } from "../MotionDiv";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const ThrophyCard = ({ item }: { item: any }) => {
  return (
    <Grid item xs={11} md={3}>
      <MotionDiv.div
        whileInView={{
          scale: [1, 1.3, 1.2, 1, 1],
          rotate: [0, 0, 40, 30, 0],
        }}
        transition={{
          ease: "easeIn",
          duration: 0.7,
          delay: 0.7,
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
            <Image width={250} height={150} alt={item.Title} src={item.img} />
            <Animate>
              <div className="absolute hidden group-hover:flex  inset-0 bg-[#000a] rounded-lg  items-center justify-center">
                <button className="bg-[#112C61] font-sans text-white px-3 py-2 rounded-full font-bold ">
                  Learn More
                </button>
              </div>
            </Animate>
          </div>
          <Typography sx={{ fontWeight: "bold" }}>{item.Title}</Typography>
          <Typography textAlign={"center"}>{item.Desc}</Typography>
        </Stack>
      </MotionDiv.div>
    </Grid>
  );
};

export default ThrophyCard;
