import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const BottomSphere = () => {
  return (
    <Box
      sx={{ width: "600px", height: "400px" }}
      className="absolute -bottom-1 -right-4"
    >
      <Image
        fill
        src="/bottomsphere.png"
        alt="bottom_sphere"
        objectFit="cover"
      />
    </Box>
  );
};

export default BottomSphere;
