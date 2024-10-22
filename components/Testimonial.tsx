import React from "react";
import DynamicText from "./DynamicText";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const TestimonialCard = () => {
  return (
    <div className=" rounded-lg min-h-[200px] bg-[#0A1E46]/70  flex flex-col gap-4 md:items-center  px-3 py-4">
      <h2 className="font-extrabold text-2xl font-sans text-white text-left md:text-center">
        Mazi Tech
      </h2>
      <p className="text-justify text-white font-sans">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        distinctio ad aliquam at excepturi.
      </p>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="min-h-[70vh] relative flex flex-col gap-8 md:flex-row items-center px-3 md:px-[2rem] ">
      <div className="">
        <DynamicText
          hasButton
          size="2.4rem"
          textArray={["What My Client Say"]}
        />
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[50%]">
          <Carousel showArrows={false} showStatus={false}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Carousel>
        </div>
      </div>
      <div className="rounded_gradient" />
    </div>
  );
};

export default Testimonial;
