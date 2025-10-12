import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div
      id="home"
      className="md:flex md:justify-between my-8 md:p-6  md:py-24 text-gray-900"
    >
      <div className=" w-full md:w-1/2 p-8">
        <p>
          Hi. I am <span className="font-semibold"> Vasu Peddinti</span>
        </p>
        <h1 className="text-2xl mt-4">
          I am
          <span className="dm-serif pl-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">
            Professional
          </span>
          <br /> Expert Developer.
        </h1>
        <p className="text-sm mt-4 text-neutral-500">
          I am a Full Stack Developer and Senior Software Engineer with 7+ years
          of proven experience delivering scalable web and mobile solutions for
          government and education sectors. Expert in React Native, Next.js,
          Python, and PHP with demonstrated track record of reducing operational
          errors by 60% and contributing to national award-winning projects.
        </p>

        <div className="flex gap-6 mt-8">
          <a
            href="#portfolio"
            className="bg-violet-500  hover:bg-violet-700 hover:text-white py-2 px-6 rounded-md transition-all text-white flex gap-4 items-center"
          >
            My Portfolio <FaArrowRight />
          </a>
          <a
            href="VASU_RESUME_FULL_STACK.pdf"
            target="_blank"
            className="hidden md:flex bg-violet-100  hover:bg-violet-700 hover:text-white py-2 px-6 rounded-md transition-all text-violet-900"
          >
            Download CV
          </a>
        </div>

        {/* <div className="mt-8">
          <p className="font-semibold">Find with Me</p>
          <div className="flex items-center gap-2 mt-2">
            <FaFacebook className="bg-violet-100 w-8 h-8 rounded-full p-1 text-blue-500" />
            <FaTwitter className="bg-violet-100 w-8 h-8 rounded-full p-1 text-cyan-500" />
            <FaLinkedin className="bg-violet-100 w-8 h-8 rounded-full p-1 text-indigo-500" />
          </div>
        </div> */}
      </div>

      <div className="w-full md:w-1/2  flex items-center justify-center relative ">
        <div className="absolute bg-white  w-120 h-120 rounded-full bg-gradient-to-b from-violet-500  to-pink-500 blur-[80px] "></div>

        <div className="absolute left-0 top-0 md:top-20    p-2 z-20   flex items-center text-white text-center text-sm">
          <div className="flex justify-baseline items-center bg-violet-50 px-2 py-2 gap-2">
            <h1 className="text-violet-900 font-semibold text-xl border-r border-r-violet-500 md:px-2">
              7+
            </h1>
            <p className="text-xs text-violet-950">
              Years of <br />
              Experience
            </p>
          </div>
        </div>

        <div className="absolute right-0 md:right-10  bottom-0 md-bottom-20   p-2 z-20   flex items-center text-white text-center text-sm">
          <div className="flex justify-baseline items-center bg-violet-50 px-2 py-2 gap-2">
            <h1 className="text-violet-900 font-semibold text-xl border-r border-r-violet-500 md:px-2">
              100+
            </h1>
            <p className="text-xs md:text-sm text-violet-950">
              Completed <br />
              Projects
            </p>
          </div>
        </div>

        <div className="absolute left-10 md:left-40  bottom-0 w-25 h-25 rounded-full bg-gradient-to-tr from-violet-700  to-pink-300 p-2 z-20  shadow-2xl flex items-center text-white text-center text-sm">
          <p>Expert Developer</p>
        </div>
        <div className="w-80 h-80 md:w-100 md:h-100  bg-transparent rounded-full z-10 shadow-2xl border-10 border-white ">
          <Image
            src="/vasuphoto1.jpeg"
            alt="Vasu Peddinti"
            width={400}
            height={400}
            className="w-full h-full  object-fill rounded-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}
