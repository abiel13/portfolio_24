import React from "react";
import DynamicText from "./DynamicText";

const TestimonialCard = () => {
  return (
    <div className="md;w-[50%] rounded-lg min-h-[200px] bg-[#0A1E46]/40  flex flex-col gap-4 md:items-center  px-3 py-4">
      <h2 className="font-extrabold text-2xl font-sans text-white text-left md:text-center">Mazi Tech</h2>
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
          size="2rem"
          textArray={["What My Client Say"]}
        />
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <TestimonialCard />
      </div>
      <div className="rounded_gradient" />
    </div>
  );
};

export default Testimonial;
