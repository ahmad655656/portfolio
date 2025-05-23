"use client";
import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaIdBadge } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const about = {
  title: "Aboute me",
  description:
    "I'm a full stack developer with a passion for building scalable and efficient applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Haedara Salloum",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+963) 983 796 029",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "WhatsApp",
      fieldValue: "(+963) 983 796 029",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Syrian",
    },
    {
      fieldName: "Email",
      fieldValue: "haedarahasan69@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic , English(Middle)",
    },
  ],
};
const experience = {
  icon: <FaIdBadge />,
  title: "My experience",
  description:
    "I have 2+ years of experience in developing scalable and efficient applications.",
  items: [
    {
      company: "Syrian Telecommunication Establishment",
      position: "Junior FrontEnd Developer",
      duration: "2023 - 2025",
    },
  ],
};
const education = {
  icon: <FaGraduationCap />,
  title: "My education",
  description:
    "I have a Bachelor's degree in Computer Science from the University of Latakia.",
  items: [
    {
      institution: "University of Latakia",
      degree: "Bachelor's degree in Computer Science",
      duration: "2026",
    },
  ],
};
const skills = {
  title: "My skills",
  description:
    "I have a strong background in FrontEnd development and a good understanding of BackEnd development.",
  skilList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "tailwind css",
    },
    {
      icon: <RiNextjsFill />,
      name: "next.js",
    },
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]  "
        >
          <TabsList className="flex flex-col w-full xl:flex-col max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger> 
          </TabsList>
          <div className="min-h-[70vh] w-full ">
            <TabsContent value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0  ">{experience.description}</p>
                <ScrollArea className="h-[400px]  ">
                  <ul className="grid grid-cols-1 lg:grid-col-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                        <span className="text-accent-Default">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-w-[60px] text-center lg:text-left ">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-Default "></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education">
            <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0  ">{education.description}</p>
                <ScrollArea className="h-[400px]  ">
                  <ul className="grid grid-cols-1 lg:grid-col-2 gap-[30px] ">
                    {education.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                        <span className="text-accent-Default">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-w-[60px] text-center lg:text-left ">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-Default "></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0  ">{skills.description}</p>
                </div>
                <ScrollArea className="h-[400px]  ">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 xl:gap-[30px] gap-4 ">
                    {skills.skilList.map((item, index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className="text-6xl transition-all duration-500 group-hover:text-accent-Default">{item.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]  ">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{about.description}</p>
                <ul className="grid mx-auto xl:mx-0 grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[628px] ">
                  {about.info.map((item, index) => {
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                     <span className="text-white/60">{item.fieldName}</span>
                     <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
