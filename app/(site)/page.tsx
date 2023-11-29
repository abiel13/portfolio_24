import Navbar from "@/components/Navbar";
import Image from "next/image";
import SphereModel from "@/components/SphereModel";
import { Stack } from "@mui/material";
import CenterText from "@/components/CenterText";
import DynamicText from "@/components/DynamicText";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Stack className="gradient_sbg min-h-screen relative">
      <div className="mt-16">
        <SphereModel />
      </div>
      <CenterText />
      <div className="absolute left-5">
        {/* <DynamicText text="love" /> */}
      </div>
    </Stack>
  );
}
