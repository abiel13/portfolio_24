import { createExp, createSkill, createprojects } from "@/libs/actions/actions";
import React from "react";

const ContactCard = () => {
  return (
    <div className="w-full md:w-[70%] min-h-[550px] rounded-lg shadow-lg flex items-center flex-col gap-8 bg-[#061024ef] px-2 md:px-3 py-2 justify-center">
      <h1 className="text-center font-bold text-3xl text-white  font-sans">
        {" "}
        Contact Me{" "}
      </h1>

      <div className="flex flex-col gap-5 w-full">
        <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-4 w-full">
          <div>
            <h1 className="text-white font-medium font-sans">Full Name</h1>{" "}
            <input
              className="w-full px-4 py-2 rounded-lg bg-[#ffffff20]"
              type="text"
            />
          </div>
          <div>
            <h1 className="font-sans font-medium text-white">Email Address</h1>{" "}
            <input
              className="w-full px-4 py-2 rounded-lg bg-[#ffffff20]"
              type="text"
            />
          </div>
        </div>
        <div>
          <textarea
            rows={10}
            className="w-full px-4 py-2 rounded-lg bg-[#ffffff20]"
          />
        </div>
      </div>

      <button
        onClick={() => {
          createprojects({
            name: "Desi",
            thumbnailUrl:
              "https://i.pinimg.com/736x/c6/82/1d/c6821dee4210319ffd581874e78c4c8a.jpg",
            tools: [
              "React Native",
              "Expo",
              "Appwrite",
              "NativeWind",
              "Typescript",
              
            ],
            links: [
              "https://github.com/abiel13/desi",
           
            ],
            description:
              "Desi is a video-sharing app built using React Native, powered by the flexibility of Expo and backed by the secure and scalable backend from Appwrite. The app features a modern and responsive UI designed with NativeWind, styled with Tailwind-like classes for native components. Built with Typescript for strong typing and enhanced code maintainability, Desi offers a seamless video-sharing experience across platforms, focusing on performance and accessibility.",
          });
        }}
        className="px-5 py-2 rounded-full bg-[#112C61] text-white font-sans font-medium min-w-[140px]"
      >
        Send
      </button>
    </div>
  );
};

export default ContactCard;
