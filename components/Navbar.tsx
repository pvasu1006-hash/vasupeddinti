import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const menuOptions = [
  {
    link: "#home",
    label: "Home",
  },
  {
    link: "#about",
    label: "About Us",
  },
  {
    link: "#skills",
    label: "Skills",
  },
  {
    link: "#portfolio",
    label: "Portfolio",
  },
];

export default function Navbar() {
  return (
    <div  className="flex justify-between items-center px-4 shadow h-16 sticky top-0 z-100 bg-white mr-2 md:mx-0">
      <div className="bg-violet-100 p-2 rounded-md">
        <h1 className="font-semibold tracking-wider text-lg md:text-xl flex justify-between items-center">
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500 pr-2 border border-r-purple-400 font-bold">
            VASU
          </span>
          <span className="pl-2 ">
          PEDDINTI
          </span>

        </h1>
      </div>
      <div className="hidden md:flex  gap-8 text-sm font-medium text-neutral-500 hover:text-neutral-700">
        {menuOptions.map((menu) => (
          <div key={menu.label} className="flex  items-center gap-1 font-semibold">
            <a href={menu.link}>{menu.label} </a>
            <FaAngleDown />
          </div>
        ))}
      </div>
      <div className="flex gap-6 items-center text-sm">
        <a
          href="VASU_RESUME_FULL_STACK.pdf"
          target="_blank"
          className="text-xs bg-violet-100 font-medium  hover:bg-violet-700 hover:text-white py-2 px-6 rounded-md transition-all text-violet-900"
        >
          Download CV
        </a>
        <a
          href="#about"
          className="hidden md:flex bg-purple-500 font-medium hover:bg-violet-700 py-2 px-6 rounded-md text-white transition-all"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
