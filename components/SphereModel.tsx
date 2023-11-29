import React from "react";
import "@/styles/animate.css";

const SphereModel = () => {
  return (
    <div className=" hidden md:flex absolute left-[0%] md:relative md:-right-[50%] md:left-[auto]   flex-row pt-16 w-full items-start ">
      <img
        src="/gray.png"
        alt="MaterialFrame"
        className="w-[50vw]  md:w-[465px] md:h-[291px]  absolute top-5 md:top-0 animate-move left-28 md:left-48"
      />
      <img
        src="/green.png"
        alt="MaterialFrame1"
        className=" w-[60vw]   md:w-[564px] md:h-[477px] absolute top-32 animate-movedown left-32"
      />
      <img
        src="/blueSphere.png"
        alt="MaterialFrame2"
        className="relative mb-56 animate-moveleft md:w-[auto] md:h-[auto] w-[40vw] "
      />
    </div>
  );
};

export default SphereModel;
