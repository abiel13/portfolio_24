import BottomSphere from "@/components/BottomSphere";
import DynamicText from "@/components/DynamicText";
import SphereModel from "@/components/SphereModel";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const roles = [
  "React Developer",
  "Front End Developer",
  "Flutter Developer",
  "Next js Developer",
];

const About = () => {
  return (
    <Stack
      sx={{
        position: "relative",
        marginTop: "1.5rem",
        display: "flex",
        bgcolor: "white",
        minHeight: "100vh",
      }}
    >
      {/* content  */}
      <Stack
        direction={{ md: "row", xs: "column" }}
        sx={{
          marginTop: "10%",
          width: "100%",
          padding: "1rem 2rem",
          gap: "2rem",
        }}
      >
        <Stack sx={{}}>
          <DynamicText>
            <Stack
              className="dark_blue"
              sx={{
                width: { md: "50%", xs: "100%", xl: "40%" },
                bgcolor: "",
                padding: "1rem 2rem ",
                borderRadius: "7px",
              }}
              spacing={3}
            >
              <Typography
                sx={{ fontSize: "2rem" }}
                textAlign={"center"}
                color={"white"}
              >
                Abiel Asimiea
              </Typography>
              <Typography
                letterSpacing={"2px"}
                textAlign={"center"}
                color="white"
                sx={{ fontWeight: "light" }}
              >
                I'm Abiel, an ardent developer on a perpetual journey to
                transform ideas into elegant lines of code. My fascination with
                programming began [insert personal story or pivotal moment], and
                ever since, I've been immersed in the ever-evolving landscape of
                software development. My journey is an ongoing story,{" "}
              </Typography>
              <Link
                className="bg-[#449F24] w-fit px-4 text-white py-3 rounded-lg self-center"
                href={"/contacts"}
              >
                Send Message
              </Link>
            </Stack>
          </DynamicText>
        </Stack>
        {/* Roles  */}
        <Stack spacing={2} sx={{ width: "100%" }}>
          {roles.map((item, i) => (
            <Box
              key={i}
              className="dark_blue"
              sx={{
                width: { md: "100%", xl: "50%" },
                padding: ".6rem 2rem",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              <Typography className="text-white  text-center capitalize text-xl ">
                {item}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>

      <BottomSphere />
    </Stack>
  );
};

export default About;
