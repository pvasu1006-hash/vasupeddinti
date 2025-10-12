import Image from "next/image";
import React from "react";


export default function About() {
  return (
    <div id="about" className=" bg-neutral-200  md:flex justify-between md:py-16 px-4">
      <div className="hidden md:flex md:w-1/2  justify-center ">
        <div className="h-90 w-80  bg-gradient-to-r from-violet-500  to-pink-500 p-1 rounded-md">
          <div className="flex h-full  w-full items-center justify-center bg-transpartent back p-2 relative">
            <div className=" absolute left-1 top-1 w-80 h-80  bg-white rounded-md">

              <Image
                className="h-100 w-80 object-cover rounded-md  shadow-2xl"
                src="/vasuphoto1.jpeg"
                height={100}
                width={80}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-[70%] px-4 md:px-8 py-16">
        <p className="font-semibold text-sm">Services I Offer to my Clients</p>
        <h1 className="text-2xl ">
         <p> I am <span className="dm-serif bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500 pl-2"> Vasu
          </span></p>
        </h1>
        <p className="text-sm mt-4 text-neutral-500">
          Results-driven Full Stack Developer and Senior Software Engineer with
          7+ years of proven experience delivering scalable web and mobile
          solutions for government and education sectors. Expert in React
          Native, Next.js, Python, and PHP with demonstrated track record of
          reducing operational errors by 60% and contributing to national
          award-winning projects. Skilled in Agile Development, DevOps
          practices, Cloud Architecture, and Microservices with expertise in
          building REST APIs, cross-platform mobile applications, and
          high-performance web systems. Published developer with 5+ mobile apps
          on Google Play Store serving 10,000+ users. Certified in Full Stack
          Development and Python Programming through NxtWave CCBP 4.0 Academy.
        </p>






        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Email:</p>
            <p>pvasu1006@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold">Whatsapp:</p>
            <p>+91 9692384272</p>
          </div>
          <div>
            <p className="font-semibold">Location:</p>
            <p>Visakhapatnam, AP, India</p>
          </div>
          <div>
            <p className="font-semibold">Freelance:</p>
            <p>Available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
