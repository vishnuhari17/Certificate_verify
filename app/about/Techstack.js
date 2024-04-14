
import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiNextdotjs, SiVercel, SiGithub, SiTailwindcss, SiVisualstudiocode, SiCanva, SiStackoverflow, SiYoutube } from "react-icons/si";


function Techstack() {
  const technologies = [
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl" /> },
    { name: "Python", icon: <DiPython className="text-4xl" /> },
    { name: "MongoDB", icon: <DiMongodb className="text-4xl" /> },
    { name: "React", icon: <DiReact className="text-4xl" /> },
    { name: "Node.js", icon: <DiNodejs className="text-4xl" /> },
    { name: "Vercel", icon: <SiVercel className="text-4xl" /> },
    { name: "GitHub", icon: <SiGithub className="text-4xl" /> },
    { name: "Git", icon: <DiGit className="text-4xl" /> },
    { name: "HTML", icon: <DiHtml5 className="text-4xl" /> },
    { name: "CSS", icon: <DiCss3 className="text-4xl" /> },
    { name: "JavaScript", icon: <DiJavascript1 className="text-4xl" /> },
    { name: "VSCode", icon: <SiVisualstudiocode className="text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl" /> },
    { name: "Canva", icon: <SiCanva className="text-4xl" /> },
    { name: "Stack Overflow", icon: <SiStackoverflow className="text-4xl" /> },
    { name: "YouTube", icon: <SiYoutube className="text-4xl" /> },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 py-6 justify-center">
      {technologies.map((tech, index) => (
        <div key={index} className="flex flex-col justify-center items-center p-3 m-2 hover:bg-black hover:invert rounded-lg shadow-md">
          {tech.icon}
          <span className="mt-2">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
