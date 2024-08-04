import React from "react";
import DynamicText from "./DynamicText";

const TestimonialCard = () => {
  return (
    <div className="w-[50%] rounded-lg min-h-[200px] bg-[#0A1E46]/40  flex flex-col gap-4 items-center  px-3 py-4">
      <h2 className="font-extrabold text-2xl font-sans text-white">Mazi Tech</h2>
      <p className="text-justify text-white font-sans">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        distinctio ad aliquam at excepturi.
      </p>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="min-h-screen relative flex flex-col md:flex-row items-center px-[2rem] ">
      <div className="">
        <DynamicText
          hasButton
          size="2.4rem"
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
