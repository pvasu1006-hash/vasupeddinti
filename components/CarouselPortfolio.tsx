"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "./ui/button";
import Image from "next/image";

export function CarouselPortfolio() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const works = [
    {
      img: "screen1.png",
      title: "Unified Digital Platform for CSE & Samagra Shiksha",
      desc: "This platform was custom-developed for the District Educational Department of Parvathipuram Manyam under the Samagra Shiksha framework, aligning with the Government of Andhra Pradesh’s vision for digital transformation in school education.",
      link: "https://www.dseppm.com/login",
    },
    {
      img: "screen2.png",
      title: "Savara Christian Songs App",
      desc: "This mobile app is designed to preserve and share Christian worship songs in the Savara language, combining audio playback with synchronized lyrics to support spiritual engagement and cultural preservation among tribal believers.",
      link: "https://play.google.com/store/apps/details?id=com.vappmrcglp.sorakenkenolpro&hl=en_IN",
    },
    {
      img: "screen3.png",
      title: "District Education Monitoring App",
      desc: "This integrated platform was developed for the District Educational Office (DEO), Parvathipuram Manyam, under the Samagra Shiksha framework. It unifies school infrastructure, enrollment, staff, and ICT data into a single, real-time dashboard—empowering district officials to make data-driven decisions and streamline reporting to the state.",
      link: "https://www.figma.com/proto/FupsdTobibtsyrJtjIGjrO/DSEPPM?node-id=32-794&p=f&t=LzTQ6NM4ER6OOIlZ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A7",
    },
    {
      img: "screen4.png",
      title: "Block/Mandal Education Monitoring App",
      desc: "This app was developed to empower Mandal Educational Officers (MEOs) and sectoral staff with a real-time digital dashboard for monitoring school-level data across their respective blocks. It complements the district-level platform under Samagra Shiksha, enabling granular oversight and faster interventions.",
      link: "https://www.figma.com/proto/js0RfBN6jzZ1CZGfEHRCa0/Iphone-11-X--Mockups---Dribbble---Instagram-mockups--Community-?node-id=9-487&t=k4rS8NdYcsgOkqxi-1",
    },
    {
      img: "gcc.png",
      title: "AP Girijan Cooperative Coroporation Limited, Visakhapatnam",
      desc: "Designed, developed, and maintained a full-stack digital platform for APGCC to streamline tribal welfare operations, product inventory, and cooperative services. Delivered a scalable solution using modern web technologies, ensuring secure data handling, multilingual support, and seamless integration with government workflows.",
      link: "https://old.apgirijan.com/oldVer/project/cg/",
    },
  ];

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div id="portfolio" className="py-16 md:p-12 bg-neutral-200">
      <div>
        <p className="font-semibold text-sm">Visit my Portfolio</p>
        <h1 className="text-2xl ">
          My
          <span className="dm-serif bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500 pl-2">
            Amazing Work
          </span>
        </h1>
      </div>

      <Carousel setApi={setApi} className="w-full mx-auto mt-4">
        <CarouselContent className="scroll-smooth">
          {works.map((work, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div className="bg-white h-150 md:h-130 p-4 text-neutral-500 rounded-2xl  shadow-2xl py-8 relative">

                <Image
                  className="h-65 w-full object-cover rounded-md  shadow-2xl"
                  src={work.img}
                  height={100}
                  width={80}
                  alt="profile"
                />

                <p className="pt-4 font-medium text-neutral-700">
                  {work.title}
                </p>
                <p className="text-sm pt-4">{work.desc}</p>

                <a
                  href={work.link}
                  target="_blank"
                  className="flex items-center font-medium text-sm mt-4 absolute bottom-8 right-8 bg-purple-50 px-4 py-2 text-violet-900 rounded-md hover:bg-violet-500 hover:text-white transition-all"
                >
                  Read More{" "}
                  <FaArrowRight className="pl-2 text-violet-600 hover:text-white text-xl" />
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}

        <div className="hidden md:flex">
          <Button
            variant="outline"
            onClick={() => {
              if (!api) return;
              const nextIndex = Math.min(current + 2, count - 1);
              api.scrollTo(nextIndex);
            }}
            className="absolute top-1/2 right-2 -translate-y-1/2 z-10"
          >
            Next →
          </Button>

          <Button
            variant="outline"
            onClick={() => {
              if (!api) return;
              const prevIndex = current >= 2 ? current - 2 : 0;
              api.scrollTo(prevIndex);
            }}
            className="absolute top-1/2 left-2 -translate-y-1/2 z-10"
          >
            ← Prev
          </Button>
        </div>
      </Carousel>
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index ? "bg-violet-500 scale-125" : "bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
