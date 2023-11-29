import Link from "next/link";
import React from "react";
import MobileNav from "./partials/MobileNav";

const Navroutes: string[] = ["Home", "about ", "skills ", "work", "contact"];
const Navbar = () => {
  return (
    <div className="fixed inset-x-0 bg-transparent z-50 top-0 py-4 flex items-center justify-end px-3">
      <div className="hidden md:flex items-center gap-4 text-xl text-white font-medium capitalize">
        {Navroutes?.map((item, i) => (
          <Link key={i} href={`/${item == "Home" ? "" : item}`}>
            {item}
          </Link>
        ))}
        <button className="bg-[#112C61] font-normal text-base py-3 px-4 rounded-lg">
          DownLoad Resume
        </button>
      </div>
      <MobileNav routes={Navroutes} />
    </div>
  );
};

export default Navbar;
