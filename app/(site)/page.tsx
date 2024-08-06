"use client";
import { Stack } from "@mui/material";
import Hero from "@/components/Hero";
import DynamicText from "@/components/DynamicText";
import { MotionDiv } from "@/components/MotionDiv";
import WhoAmI from "@/components/WhoAmI";
import Skills from "@/components/Skills";
import CreativePortfolio from "@/components/CreativePortfolio";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contac";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="!overflow-x-hidden">
      <Hero />
      <WhoAmI />
      <Skills />
      <CreativePortfolio />
      <Testimonial />
      <Contact />
      {/* 
      <Navbar /> */}

    </div>
  );
}
