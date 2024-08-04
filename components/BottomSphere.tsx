import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const BottomSphere = ({ islight }: { islight?: boolean }) => {
  return (
    <Box
      sx={{ width: "400px", height: "300px" }}
      className="absolute bottom-0 -right-4"
    >
      <Image
        fill
        src={islight ? "/bottomsphere1.png":"/bottomsphere.png"}
        alt="bottom_sphere"
        objectFit="cover"
      />
    </Box>
  );
};

export default BottomSphere;
