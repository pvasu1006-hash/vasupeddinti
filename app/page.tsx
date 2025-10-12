
import About from "@/components/About";
import { CarouselPortfolio } from "@/components/CarouselPortfolio";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Service from "@/components/Service";
import React from "react";

export default function page() {
  return (
    <div className="bg-violet-500 w-screen h-full relative md:py-6  ">
        <div className="w-full md:max-w-7xl bg-white mx-auto  rounded-md shadow-2xl ">
        <Navbar />
        <Home />
        <About />
        <Service />
        {/* <Portfolio /> */}
        <CarouselPortfolio/>
      </div>
    </div>
  );
}
