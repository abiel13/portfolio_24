import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Animate, MotionDiv } from "./MotionDiv";
import DynamicText from "./DynamicText";
import { whatido } from "@/utils/Whoami";
import Image from "next/image";

const WhoAmI = () => {
  return (
    <Stack
      direction={{ md: "row" }}
      className="min-h-[110vh] relative px-7 py-5  gap-[1.4rem]"
    >
      <div className="flex items-center basis-[34%]">
        <MotionDiv.div
          whileInView={{
            y: [150, 0],
          }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
            type: "spring",
            damping: 5.4,
          }}
        >
          <DynamicText
            textArray={["I Know That  Good Design  Means Good Business"]}
            size="2rem"
            hasButton
          />
        </MotionDiv.div>
      </div>

      <Grid
        container
        className="flex-1 flex items-center px-2 md:px-5 gap-[1rem] justify-around"
      >
        {whatido.map((item, i) => (
          <Grid item xs={11} md={4} key={i}>
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
                  <Image
                    width={250}
                    height={150}
                    alt={item.Title}
                    src={item.img}
                  />
                  <Animate>
                    <div className="absolute hidden group-hover:flex  inset-0 bg-[#000a] rounded-lg  items-center justify-center">
                      <button className="bg-[#112C61] font-sans text-white px-3 py-2 rounded-full font-bold ">
                        Learn More
                      </button>
                    </div>
                  </Animate>
                </div>
                <Typography sx={{ fontWeight: "bold" }}>
                  {item.Title}
                </Typography>
                <Typography textAlign={"center"}>{item.Desc}</Typography>
              </Stack>
            </MotionDiv.div>
          </Grid>
        ))}
      </Grid>
      <div className="rounded_gradient" />

    </Stack>
  );
};

export default WhoAmI;
