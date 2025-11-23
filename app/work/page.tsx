"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { FaJsSquare, FaReact } from "react-icons/fa"
import { SiCss3, SiFramer, SiHtml5, SiMongodb, SiTailwindcss } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa6"
import Link from "next/link"

export default function workSlide() {
    const projects = [
        {
            id: "01",
            title: "Green Motive Frontend Dev.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis odit quas a?",
            tech: ["HTML5", "CSS3"],
            img:"/v1.mp4",
        },
        {
            id: "02",
            title: "Portfolio Project",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis odit quas a?",
            tech: ["HTML5", "CSS3", "JavaScript", "Motion"],
            img:"/v2.mp4",
        },
        {
            id: "03",
            title: "SnacXpress Food Delivery",
            desc: "Tap, Eat, Repeat",
            tech: ["ReactJs", "NodeJs", "TailwindCSS", "MongoDB"],
            img:"/v3.mp4",
        },
        {
            id: "04",
            title: "AUC Accommodation Portal ",
            desc: "Pay for your respective rooms you desire in Anchor University",
            tech: ["ReactJs", "TailwindCSS"],
            img:"/v4.mp4",
        },
        {
            id: "05",
            title: "JayTrify Music Site",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis odit quas a?",
            tech: ["ReactJs", "TailwindCSS", "JavaScript"],
            img:"/v5.mp4",
        },
        {
            id: "06",
            title: "Urban Green Tech Frontend",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis odit quas a?",
            tech: ["HTML5", "CSS3"],
            img:"/v6.mp4",
        }
    ]

  return (
    <div className="px-[8%] lg:px-[8%] py-15 text-white">
        <Swiper modules={[Navigation]}
        loop={true}
        navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next"
        }}
        spaceBetween={40}
        slidesPerView={1}
        >
            {projects.map((proj)=> (
                <SwiperSlide key={proj.id}>
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="w-tent">
                            <h2 className="text-8xl font-bold stroke-text">{proj.id}</h2>
                            <h3 className="text-5xl font-semibold font-unbounded mt-4">{proj.title}</h3>
                            <p className="text-gray-400 mt-3 text-lg leading-relaxed">{proj.desc}</p>

                            <div className="flex gap-4 mt-4">
                                {proj.tech.map((tech, i) => {
                                    let IconComponent
                                    switch(tech.toLocaleLowerCase()){
                                        case "reactjs":
                                            IconComponent = FaReact;
                                            break;
                                        case "tailwindcss":
                                            IconComponent = SiTailwindcss;
                                            break;
                                        case "javascript":
                                            IconComponent = FaJsSquare;
                                            break;
                                        case "motion":
                                            IconComponent = SiFramer;
                                            break;
                                        case "nodejs":
                                            IconComponent = FaNodeJs;
                                            break;
                                        case "mongodb":
                                            IconComponent = SiMongodb;
                                            break;
                                        case "html5":
                                            IconComponent = SiHtml5;
                                            break;
                                        case "css3":
                                            IconComponent = SiCss3;
                                            break;
                                        default:
                                            IconComponent = null;
                                    }
                                    return IconComponent ? (
                                        <div key={i} className="w-icons text-4xl spancoll cursor-pointer 
                                        transition-all duration-300" title={tech}>
                                            <IconComponent />
                                        </div>
                                    ) : null;

                                })}
                            </div>

                            <div className="w-share flex gap-4 mt-6 border-t border-gray-500 pt-5">
                                <Link href="#"
                                className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black
                                hover:bg-white transition-all duration-500">
                                    <i className="bi bi-arrow-up-right text-2xl"></i>
                                </Link>
                                <Link href="#"
                                className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black
                                hover:bg-white transition-all duration-500">
                                    <i className="bi bi-github text-2xl"></i>
                                </Link>
                            </div>
                        </div>
                        

                        <div className="relative w-img">
                            <video
                            src={proj.img}
                            autoPlay 
                            width={650}
                            height={300}
                            className="rounded-lg shadow-lg"
                            ></video>
                        </div>
                    </div>
                </SwiperSlide>
            ))}

            <div className="flex gap-3 justify-end mt-6">
                <button className="custom-prev w-12 h-12 flex items-center justify-center secs rounded shadow
                cursor-pointer transition-all duration-500">
                    <i className="bi bi-arrow-left text-2xl"></i>
                </button>
                <button className="custom-next w-12 h-12 flex items-center justify-center secs rounded shadow
                cursor-pointer transition-all duration-500">
                    <i className="bi bi-arrow-right text-2xl"></i>
                </button>
            </div>
        </Swiper>
    </div>
  )
}
