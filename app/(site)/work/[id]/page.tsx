"use client";
import BottomSphere from "@/components/BottomSphere";
import { fetchProjectbyId } from "@/libs/actions/actions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const WorkDescription = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [workdata, setWorkdata] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const result = await fetchProjectbyId(params.id);
        setWorkdata(result[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [params.id]);

  if (loading)
    return (
      <div className="bg-[#061024ef] h-screen w-full relative px-4 md:px-[3rem] flex items-center justify-center">
        loading.... please wait
      </div>
    );

  return (
    <div className="bg-[#061024ef] min-h-screen w-full relative  md:px-[3rem] flex items-center justify-center px-3 py-4">
      <div className="flex flex-col w-full md:min-h-[50vh] md:w-[70%] gap-8 ">
        <div
          onClick={() => {
            router.back();
          }}
          className="w-12 h-12 md:w-24 md:h-24 rounded-full bg-[#98D084] flex items-center justify-center"
        >
          <FaArrowLeft fontSize={32} />
        </div>  

        <div className="w-full flex-col flex md:flex-row items-center  justify-around min-h-full">
          <div className="flex flex-col flex-1 px-3 w-full">
            <div className="md:w-[350px] w-full h-[200px] md:h-[300px] bg-transparent backdrop-blur-md  shadow-lg relative px-3">
              <Image
                src={workdata.thumbnailUrl || "/work_img.png"}
                alt="projec_image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-white font-bold mt-2 font-sans text-[2rem]">
                {workdata?.name}
              </h1>
            </div>
          </div>
          <div className="flex flex-col flex-1 min-h-[40vh] py-2 md:px-0  px-3">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-white font-sans mb-2">
                Description{" "}
              </h1>
              <p className="text-gray-400 font-medium font-sans text-lg">
                {workdata.description}
              </p>
            </div>
            <div className="my-4">
              <h1 className="font-bold text-white font-sans text-2xl mb-2">
                Tools Used{" "}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                {workdata?.tools?.map((item: any, i: any) => (
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
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {workdata?.links?.map((item: any, i: any) => (
                  <Link key={i} href={item} className="cursor-pointer text-blue-500">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:block hidden">
        {" "}
        <BottomSphere islight />
      </div>
    </div>
  );
};

export default WorkDescription;
