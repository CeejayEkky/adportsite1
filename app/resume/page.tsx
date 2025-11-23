'use client'

import { useState } from "react"
import { FaBootstrap, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiC, SiCplusplus, SiCss3, SiHtml5, SiMongodb, SiNextdotjs, SiPython, SiTailwindcss } from "react-icons/si";

export default function resume() {

  const [actTab, setActTab] = useState("About me");

  const tabs = ["About me", "Education", "Skills", "Experience"]

  const educations = [
    {
      year: "2023 - 2027",
      degree: "B.Sc Computer Science",
      institute: "Anchor Uni."
    },
    {
      year: "2017 - 2023",
      degree: "High School",
      institute: "Woodland Hills"
    },
    {
      year: "2015 - 2017",
      degree: "School",
      institute: "W.N.P.S"
    }
  ];

  const skills = [
    {name: "HTML", icon: <SiHtml5/>},
    {name: "CSS", icon: <SiCss3/>},
    {name: "JavaScript", icon: <FaJs/>},
    {name: "Reactjs", icon: <FaReact/>},
    {name: "Nodejs", icon: <FaNodeJs/>},
    {name: "Bootstrap", icon: <FaBootstrap/>},
    {name: "NextJs", icon: <SiNextdotjs/>},
    {name: "C", icon: <SiC/>},
    {name: "C++", icon: <SiCplusplus/>},
    {name: "Tailwind CSS", icon: <SiTailwindcss/>},
    {name: "MongoDB", icon: <SiMongodb/>},
    {name: "Python", icon: <SiPython/>},
  ];

  const experiences = [
    {
      Date: "2025 - Present",
      role: "Full Stack / AI Developer",
      company: "JASAT Tech Inc."
    },
    {
      Date: "2020 - 2022",
      role: "Frontend Developer",
      company: "Web startup"
    },
    {
      Date: "2017 - 2020",
      role: "Game Developer (Scratch3.0/Unity)",
      company: "My persona💯"
    },
    {
      Date: "2014 - 2016",
      role: "Data Analyst (Intern)",
      company: "Database Collection"
    },
  ];

  return (
    <section className="px-[8%] lg:px-[8%] py-15 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-4xl font-unbounded font-bold mb-4">Why Hire Me?</h2>
          <p className="text-gray-400 mt-6 mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora veritatis deserunt nulla maiores fugiat? Modi!</p>
          <div className="flex flex-col gap-5">
            {tabs.map((tab) => (
              <button key={tab}
              onClick={() => setActTab(tab)}
              className={`px-6 py-4 text-left rounded-md font-semibold transition-all cursor-pointer
              ${actTab === tab ? "change" : "bg-gray-500/50 text-gray-400 hover:bg-gray-500/20 hover:text-white"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-4xl font-unbounded font-bold mb-4">
            {actTab}
          </h2>
          <p className="text-gray-400 mb-20">
            My work combines speed, precision, and clean design to
            deliver results that just work — on time, every time.          
          </p>
          {actTab === "Experience" && (
            <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map((exp, i) => (
                  <div key={i}
                  className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg
                  px-5 py-10 chane transition-all duration-500 cursor-pointer">
                    <h3 className="chan font-semibold my-2">
                      {exp.Date}
                    </h3>
                    <h4 className="text-3xl font-normal font-unbounded mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-gray-400 flex items-center text-sm mt-2">
                      <span className="chan text-2xl pe-2">•</span> 
                      {exp.company}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {actTab === "Education" && (
            <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educations.map((edu, i) => (
                  <div key={i}
                  className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg
                  px-5 py-10 chane transition-all duration-500 cursor-pointer">
                    <h3 className="chan font-semibold my-2">
                      {edu.year}
                    </h3>
                    <h4 className="text-3xl font-normal font-unbounded mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-400 flex items-center text-sm mt-2">
                      <span className="chan text-2xl pe-2">•</span> 
                      {edu.institute}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {actTab === "Skills" && (
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-gray-200 mt-4">
              {skills.map((ski, i) => (
                <li key={i} className="relative cursor-pointer bg-gray-500/5 rounded
                py-11 flex flex-col items-center changec group">
                  <span className="absolute top-[5px] scale-0 rounded bg-gray-500 px-2 py-1
                  font-semibold text-xl text-white transition-all duration-300 group-hover:scale-100
                  changec">{ski.name}</span>
                  <i className="text-6xl transition-all duration-500">
                    {ski.icon}
                  </i>
                  
                </li>
              ))}
            </ul>
          )}
          {actTab === "About me" && (
            <div className="text-gray-400 space-y-4">
              <p className="text-xl">Hi! I'm <span className="spancol font-semibold">Divinedestiny Ekwom </span>
              &nbsp;also known as Ceejay Ekky, an effective and a very passionate fullstack developer who
              loves building up user-friendly sites and apps for unique uses and solutions.
              I specialize in building responsive, production-ready websites — from portfolio
              sites, Python libraries, and MERN stack applications to gaming and 3D
              experiences. 
              </p>
              <ul className="space-y-2 grid grid-cols-2">
                <li><strong>Experience:</strong>&nbsp; 9+ Years In FullStack Development</li>
                <li><strong>Nationality:</strong> Nigerian</li>
                <li><strong>Phone Number:</strong> (+234) 907 461 4559</li>
                <li><strong>Email:</strong> ekwomdivinedestiny300@gmail.com</li>
                <li><strong>Freelance:</strong> Available for projects</li>
                <li><strong>Github:</strong> https://github.com/CeejayEkky</li>
                <li><strong>Language(s):</strong> English</li>
              </ul>
              <p>I specialize in Nextjs, Reactjs, TailwindCSS, MongoDB and Nodejs. I really engage in getting
                real life solutions to problems and building up functional and elegant user-engaging sites.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

// 1:24:38
