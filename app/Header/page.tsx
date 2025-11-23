'use client'

import Image from "next/image";
import Link from "next/link";
import Hero from '@/public/hero.png'
import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

export default function Header() {

  const statsData = [
    { value:9, label: "Years of\nExperience" },
    { value:19, label: "Projects\nCompleted" },
    { value:15, label: "Languages\nMastered" },
    { value:87, label: "Code\nCommits" }
  ]

  const countRefs = useRef([]);

  useEffect(() => {
    countRefs.current.forEach((el, i) => {
      if(el){
        const countUp = new CountUp(el, statsData[i].value, {
          duration: 3,
          separator: ",",
        });
        if(!countUp.error){
          countUp.start();
        }else{
          console.log(countUp.error);
        }
          // 1:05:10
      }
    })
  }, []);

  return (
    <header className="heel text-white py-2 relative">
        <div className="hel absolute top-0 left-0 w-[300px] h-[300px] rounded-full 
        blur-[100px] bg-primary-gradient1 -z-10">

        </div>
        <div className="hel absolute top-0 right-0 w-[700px] h-[700px] rounded-full 
        blur-[100px] bg-primary-gradient2 -z-10">

        </div>
        <div className="hel absolute top-0 bottom-0 w-[500px] h-[500px] rounded-full 
        blur-[100px] bg-primary-gradient3 -z-10">

        </div>

        <div className="flex pt-6 flex-col lg:flex-row items-center justify-between px-[8%] lg:px-[8%]">
          <div className="lg:w-1/2 text-start md:text-left">
            <p className="text-lg mb-2 text-gray-400">FullStack Developer</p>
            <h1
            className="text-5xl text-start lg:text-6xl font-unbounded font-normal mb-2"
            >Hi, I'm <span className="spancol">Divinedestiny Ekwom</span></h1>
            <p className="text-gray-400 text-md lg:text-xl font-normal font-sora my-8">
              I specialize in building responsive, production-ready websites —
              from portfolio sites, Python libraries, and MERN stack
              applications to gaming and 3D experiences. My work combines
              speed, precision, and clean design to deliver results that
              works — on time, every time.
            </p>

            <div className="flex flex-wrap gap-8 items-center">
              <Link href="#" 
              className="border linkcol font-bold px-6 py-3 rounded transition-all duration-500"
              >
                <i className="bi bi-download me-5"></i> Download CV
              </Link>

              <div className="flex hero-social gap-4 text-2xl">
                <i className="bi bi-instagram"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-github"></i>
                <i className="bi bi-facebook"></i>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full mt-10 lg:mt-0 flex justify-center relative">
            <div className="relative rounded-full flex items-center justify-center">
              <div className="relative hero-image w-full h-full rounded-full overflow-hidden
              heroy">
                
                <Image alt="PortPicture" 
                className="w-full h-full object-cover rounded-full" 
                src={Hero}/>
              </div>
            </div>
          </div>
        </div>

        <div className="stats px-[8%] lg:px-[8%] mt-12 hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, i) => (
            <div key={i} className="flex gap-2 items-center">
              <h1
              ref={(el) => (countRefs.current[i] = el)}
              className="text-7xl font-unbounded font-bold"
              >
                0
              </h1>
              <p className="text-xl ps-4 text-gray-400 font-semibold whitespace-pre-line">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
    </header>
  )
}
