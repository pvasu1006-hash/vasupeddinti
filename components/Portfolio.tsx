import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Portfolio() {
  return (
    <div className="py-28 px-24 bg-neutral-200">
      <div>
        <p className="font-semibold text-sm">Visit my Portfolio</p>
        <h1 className="text-2xl ">
          My
          <span className="dm-serif bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500 pl-2">
            Amazing Work
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-white p-4 text-neutral-500 rounded-2xl  shadow-2xl py-8">
          <img className="h-80 w-full object-fill p-2" src="/screen1.png" />

          <p className="pt-4 font-medium text-neutral-700">
            Unified Digital Platform
          </p>
          <p className="text-sm pt-4">
            Architected and developed comprehensive enterprise digital platform
            integrating school management, student information systems,
            attendance tracking, academic performance monitoring, and
            administrative workflows.
          </p>

          <a href="#" className="flex items-center font-medium text-sm mt-4">
            Read More <FaArrowRight className="pl-2 text-violet-600 text-xl" />
          </a>
        </div>

        <div className="bg-white p-4 text-neutral-500 rounded-2xl  shadow-2xl py-8">
          <img className="h-80 w-full object-fill p-2" src="/screen2.png" />

          <p className="pt-4 font-medium text-neutral-700">
            Savara Christian Songs Mobile App
          </p>
          <p className="text-sm pt-4">
            Developed and launched feature-rich music streaming mobile
            application for Christian devotional songs with offline playback
            capabilities, playlist management, lyrics display, and social
            sharing features
          </p>

          <a href="#" className="flex items-center font-medium text-sm mt-4">
            Read More <FaArrowRight className="pl-2 text-violet-600 text-xl" />
          </a>
        </div>

        <div className="bg-white p-4 text-neutral-500 rounded-2xl  shadow-2xl py-8">
          <img className="h-80 w-full object-fill p-2" src="/screen3.png" />

          <p className="pt-4 font-medium text-neutral-700">
            District Education Monitoring Mobile Application
          </p>
          <p className="text-sm pt-4">
            Built comprehensive mobile application for real-time education
            monitoring, school inspection, attendance tracking, infrastructure
            assessment, and field data collection by government education
            officials with offline capabilities
          </p>

          <a href="#" className="flex items-center font-medium text-sm mt-4">
            Read More <FaArrowRight className="pl-2 text-violet-600 text-xl" />
          </a>
        </div>

        <div className="bg-white p-4 text-neutral-500 rounded-2xl  shadow-2xl py-8">
          <img className="h-80 w-full object-fill p-2" src="/screen4.png" />

          <p className="pt-4 font-medium text-neutral-700">
            Mandal/Block Education Monitoring Mobile Application
          </p>
          <p className="text-sm pt-4">
            Built comprehensive mobile application for real-time education
            monitoring, school inspection, attendance tracking, infrastructure
            assessment, and field data collection by government education
            officials with offline capabilities
          </p>

          <a href="#" className="flex items-center font-medium text-sm mt-4">
            Read More <FaArrowRight className="pl-2 text-violet-600 text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
