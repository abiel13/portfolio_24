import { Stack } from "@mui/material";
import { FiGithub } from "react-icons/fi";
import { FiGitlab } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      sx={{ gap: "1rem", position: "fixed", bottom: "0px", padding: "1rem" }}
    >
      <Link href={"https://github.com/abiel13"}>
        <FiGithub fontSize={27} />
      </Link>
      <Link href={""}>
        <SlSocialLinkedin fontSize={27} />
      </Link>
      <Link href={""}>
        <FiGitlab fontSize={27} />
      </Link>
    </Stack>
  );
};

export default Footer;
