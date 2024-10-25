"use client";
import { createExp, createSkill, createprojects } from "@/libs/actions/actions";
import React, { useState } from "react";

const ContactCard = () => {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    try {
      setLoading(true);
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('kkk');
          resolve({});
        }, 2000); // The resolve should be called inside setTimeout
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <div className="w-full md:w-[70%] min-h-[550px] rounded-lg shadow-lg flex items-center flex-col gap-8 bg-[#061024ef] px-2 md:px-6 py-2 justify-center">
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
        onClick={handleClick}
        className="px-5 py-2 rounded-full bg-[#112C61] text-white font-sans font-medium min-w-[140px]"
      >
        {loading ? 'sending....' : 'send message'}
      </button>
    </div>
  );
};

export default ContactCard;
