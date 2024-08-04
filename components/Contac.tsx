import React from "react";
import DynamicText from "./DynamicText";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <div className="min-h-screen relative px-4 md:px-[2rem] mt-[10%] flex items-center flex-col md:flex-row gap-6">
      <div className="px-4">
        <DynamicText size="2.4rem" textArray={["Let's Talk More"]} />
      </div>

      <div className="flex items-center justify-center w-full h-full">
        <ContactCard />
      </div>
      <div className="rounded_gradient" />
    </div>
  );
};

export default Contact;
