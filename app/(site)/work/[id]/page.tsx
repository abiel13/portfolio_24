"use client";
import BottomSphere from "@/components/BottomSphere";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const WorkDescription = () => {
  const router = useRouter();
  return (
    <div className="bg-[#061024ef] h-screen w-full relative px-4 md:px-[3rem] flex items-center justify-center">
      <div className="flex flex-col min-h-[50vh] w-[70%] gap-8 ">
        <div
          onClick={() => {
            router.back();
          }}
          className="w-24 h-24 rounded-full bg-[#98D084] flex items-center justify-center"
        >
          <FaArrowLeft fontSize={32} />
        </div>

        <div className="w-full flex items-center px-4 justify-around min-h-full">
          <div className="flex flex-col flex-1">
            <div className="w-[350px] h-[300px] bg-transparent backdrop-blur-md  shadow-lg relative">
              <Image
                src={"/work_img.png"}
                alt="projec_image"
                fill
                className="object-cover rounded-lg aspect-auto"
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-white font-bold mt-2 font-sans text-[2rem]">
                Youtube Clone
              </h1>
              <p className="text-gray-400 font-medium font-sans text-lg">
                A youtube clone using react and Material UI
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-1 min-h-[40vh] py-2 ">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-white font-sans mb-2">
                Description{" "}
              </h1>
              <p className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              </p>
            </div>
            <div className="my-4">
              <h1 className="font-bold text-white font-sans text-2xl mb-2">
                Tools Used{" "}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                {["Reac", "Typescript"].map((item, i) => (
                  <div
                    className="bg-white font-bold px-6 py-2 rounded-full font-sans"
                    key={i}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="my-4">
              <h1 className="font-bold text-white font-sans text-2xl mb-2">
                LINKS{" "}
              </h1>
              <p className="text-white font-sans fon">
                https://somehtin,g.com.ng
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
