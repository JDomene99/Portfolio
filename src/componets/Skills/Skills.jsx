import React from "react";
import { AiFillHtml5 } from "react-icons/Ai";
import { SiTailwindcss } from "react-icons/Si";
import { FaCss3Alt } from "react-icons/Fa";
import { GrReactjs } from "react-icons/Gr";
import { IoLogoJavascript } from "react-icons/Io";
import { DiSass } from "react-icons/Di";
import { SiExpress } from "react-icons/Si";
import { SiMongodb } from "react-icons/Si";

export const skills = [
  {
    name: "JavaScript",
    img: <IoLogoJavascript />,
  },
  {
    name: "React",
    img: <GrReactjs />,
  },
  {
    name: "Html",
    img: <AiFillHtml5 />,
  },
  {
    name: "Css",
    img: <FaCss3Alt />,
  },

  {
    name: "Sass",
    img: <DiSass />,
  },
  {
    name: "TailWindCss",
    img: <SiTailwindcss />,
  },
  {
    name: "Express",
    img: <SiExpress />,
  },
  {
    name: "MongoDB",
    img: <SiMongodb />,
  },
];

export default function Skills() {
  return (
    <section className=" text-center lg:px-72 xs:px-5 text-gray-300">
      <article className="flex sm:flex-row  flex-wrap justify-center mx-auto py-40">
        {skills.map((skill, id) => (
          <article
            className="flex flex-col xs:w-[40%] sm:w-[23%] hover:scale-110 ease-in-out duration-300  hover:text-gray-600 
        "
            key={id}
          >
            <div className="text-8xl mx-auto">{skill.img}</div>

            <h3 className="text-xl font-bold">{skill.name}</h3>
          </article>
        ))}
      </article>
    </section>
  );
}
