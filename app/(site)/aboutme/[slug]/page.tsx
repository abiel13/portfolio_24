"use client";
import { professionalNames } from "@/constants/whoiam";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useMemo } from "react";

const AboutMe = () => {
  const { slug } = useParams();
  const data = useMemo(() => {
    return professionalNames.filter((item) => item.id === slug)[0];
  }, [slug]);

  const router = useRouter();
  return (
    <div className="relative min-h-screen flex items-center justify-center px-[2rem] py-[1rem] mb-[10vh] md:mb-0">
      <div className="w-full flex items-center gap-8 justify-center md:flex-row flex-col">
        <div className="px-2 py-3  rounded-lg bg-white shadow-xl">
          <Image
            width={350}
            height={250}
            alt={data.title}
            className="rounded-md"
            src={data.image}
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col gap-8">
          <div className="w-[100%] rounded-lg min-h-[200px] bg-[#0A1E46]/40  flex flex-col gap-4 items-start  px-3 py-4">
            <h2 className="font-extrabold text-2xl font-sans text-[#0A1E46] text-left">
              {data.title}
            </h2>
            <p className="text-justify text-[#0A1E46] font-sans">
              {data.brief}
            </p>
            <p className="text-justify text-[#0A1E46] font-sans">
              {data.description}
            </p>
          </div>
          <Link
            href={"/#about"}
            className="
          md:w-fit bg-[#0A1E46] text-center rounded-md px-3 min-w-[120px] py-2 font-sans font-medium text-white"
          >
            Go Back
          </Link>
        </div>
      </div>

      <div className="rounded_gradient" />
    </div>
  );
};

export default AboutMe;
