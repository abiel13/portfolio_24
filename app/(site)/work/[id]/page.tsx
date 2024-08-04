import BottomSphere from "@/components/BottomSphere";
import Image from "next/image";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const WorkDescription = () => {
  return (
    <div className="bg-[#061024ef] h-screen w-full relative px-4 md:px-[3rem] flex items-center justify-center">
      <div className="flex flex-col min-h-[50vh] w-[80%] gap-8">
        <div className="w-12 h-12 rounded-full bg-[#98D084] flex items-center justify-center">
          <FaArrowLeft />
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col flex-1">
            <div className="w-[300px] h-[200px] bg-transparent backdrop-blur-md  shadow-lg">
              <Image
                src={"/work_img.png"}
                alt="projec_image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-white font-bold mt-2 font-sans">
                Youtube Clone
              </h1>
              <p className="text-gray-400 font-medium font-sans">
                A youtube clone using react and Material UI
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div>
              <h1 className="text-lg font-bold text-white">Description </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                exercitationem dolor, asperiores, neque quisquam aliquid quaerat
                facilis ipsam illum quos, dolores aspernatur id! Beatae, sit!
              </p>
            </div>
            <div>
              <h1>Tools Used </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                exercitationem dolor, asperiores, neque quisquam aliquid quaerat
                facilis ipsam illum quos, dolores aspernatur id! Beatae, sit!
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomSphere islight />
    </div>
  );
};

export default WorkDescription;
