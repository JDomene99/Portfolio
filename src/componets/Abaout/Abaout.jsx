import React, { useState } from "react";
import cv from "./cv.pdf";
import img from "./img/icon.png";
import './style.css'
export default function About() {
  

  return (
    <section
      id="about"
      className="flex md:flex-row flex-wrap xs:flex-col md:gap-20 lg:gap-0 text-center md:pt-32 xs:py-10 xs:px-4 h-[90%]"
    >
      <div className="abaoutimg xs:w-6/12 xs:pb-6 sm:pb-0 xs:mx-auto xs:h-auto md:w-3/12 lg:w-2/12 lg:mr-0">
        <img src={img} alt="icon" className="" />
        
      </div>

      <div className="xs:6/12 md:8/12 xs:mx-auto lg:ml-12">
        <h1 className="xs:text-6xl sm:text-8xl font-bold text-gray-300">José</h1>
        <h1 className="text-indigo-500 xs:text-5xl sm:text-8xl font-bold">
          Domene
        </h1>
        <h3 className="xs:text-lg sm:text-2xl pt-3 text-gray-300">
          Desarollador Web 🖥️ apasionado por la tecnología y la programación. 
        </h3>
        <h3 className="xs:text-lg sm:text-2xl pt-3 text-gray-300 mb-8 ">
          Estoy en busca de Experiencia realizando proyectos como Freelance.
          </h3>
        <a className="text-white bg-indigo-500 border-0 py-3 px-7 focus:outline-none hover:bg-indigo-600 rounded text-lg" href={cv} download="cv.pdf">
        Descargar mi CV
        </a>
       
      </div>
      
    </section>
  );
}
