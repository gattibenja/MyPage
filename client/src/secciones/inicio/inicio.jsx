import React from "react";
import myPic from "../../assets/mypic.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Inicio() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center min-h-screen w-full py-20 md:flex-row px-6 lg:px-16 mx-auto gap-10 overflow-hidden"
    >
      {/* Noise background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://res.cloudinary.com/db60chvpz/image/upload/v1717984365/noise_gyy1p5.png')] opacity-10"></div>
      <motion.div
        // Animación de entrada con Framer Motion: aparece desde la izquierda.
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:flex-1 space-y-4 md:space-y-6 text-center md:text-left z-10"
      >
        {/* TEXTO */}
        <div className="flex flex-col justify-center items-center w-full py-10 gap-5 font-mono text-center md:items-start md:justify-center md:text-left md:gap-8">
          <h1 className="text-xl md:text-3xl text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.35)] ">
            {"<Full-Stack Developer/>"}
          </h1>
          <div className="flex gap-4 md:flex flex-col md:gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-white to-cyan-300 bg-clip-text text-transparent ">
                {"Benjamín Gatti"}
              </h2>
              <div className="w-24 h-1 bg-cyan-400 rounded-full mt-4" />
            </div>
            {/* Animación de texto que simula escritura */}
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-cyan-400 md:h-12.5">
              <TypeAnimation
                sequence={[
                  "Engineering Mindset",
                  2000,
                  "Hardware Integration",
                  2000,
                  "IoT Solutions",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-neon-green"
                repeat={Infinity}
              />
            </div>
          </div>
          {/*SECCION BOTONES CV-CONTACTAME*/}
          <p className="max-w-md text-md text-gray-300 leading-loose font-mono ">
            Desarrollador Full Stack con mentalidad de ingeniero, especializado
            en la integración de software y hardware para crear soluciones
            robustas y eficientes.
          </p>

          <div className="flex flex-row gap-4">
            {/*BOTON CONTACTAME */}
            <a
              href="#contacto"
              className="px-6 py-3 border font-mono drop-shadow-[0_0_40px_rgba(34,211,238,0.35)]
             border-cyan-400 text-cyan-400 font-medium  hover:bg-cyan-400 hover:text-indigo-950  rounded shadow-cyan-400 transition-all duration-300  "
            >
              Contáctame
            </a>
            {/* BOTON CV */}
            <a
              href="CV"
              className="px-6 py-3 border-2 border-gray-600 text-gray-300 font-mono hover:border-white hover:text-white transition-all duration-300 rounded flex items-center gap-2 text-sm sm:text-base"
            >
              CV
            </a>
          </div>

          {/*SECCION REDES SOCIALES*/}
          <div className="flex flex-col gap-5 items-center">
            <p className="text-sm text-gray-500 font-mono uppercase">
              Redes Sociales
            </p>
            <div className="flex flex-row gap-5">
              <a
                href="https://github.com/gattibenja"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center border border-gray-700 rounded-lg bg-[#111] text-gray-400 text-xl hover:border-neon-green hover:text-neon-green hover:shadow-[0_0_10px_rgba(34,211,238,0.35)] transition-all duration-300"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/benjamin-gatti-8a8274339"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center border border-gray-700 rounded-lg bg-[#111] text-gray-400 text-xl hover:border-neon-green hover:text-neon-green hover:shadow-[0_0_10px_rgba(34,211,238,0.35)] transition-all duration-300"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className=" flex justify-center items-center w-full md:flex-1 relative"
      >
        <div className="absolute w-80 h-80 md:w-130 md:h-130 bg-cyan-400/70 rounded-full blur-3xl  opacity-20 animate-pulse"></div>
        {/* IMAGEN */}
        <div className="w-80 h-80 lg:w-130 lg:h-130 rounded-full border-2 p-2 border-indigo-500/10 bg-indigo-950/30 backdrop-blur-xl flex items-center justify-center md:w-100 md:h-100 shadow-2xl shadow-cyan-400/10">
          <img
            src={myPic}
            alt="My pic"
            className=" w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500  "
          />
        </div>
      </motion.div>
    </section>
  );
}
