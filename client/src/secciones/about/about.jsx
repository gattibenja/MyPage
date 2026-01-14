import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="w-full max-w-6xl mx-auto flex flex-col px-6 lg:px-20  gap-12 md:gap-16 font-mono py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center md:text-left"
        >
          {/* TITULO */}
          <h1 className="text-4xl lg:text-5xl text-cyan-400 font-bold border-b-4 border-cyan-400 pb-2 w-fit">
            {"<Sobre Mí />"}
          </h1>
        </motion.div>
        {/* INTRO */}
        <div className="flex flex-col gap-6 border-b border-cyan-400/40 pb-10">
          <h2 className="text-xl md:text-2xl font-bold border-l-4 border-cyan-400 pl-4">
            Hola, soy Benja{" "}
            <span className="bg-linear-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              👋🇦🇷
            </span>
          </h2>

          <h3 className="text-base md:text-lg font-semibold text-gray-300">
            Estudiante de Ingeniería Electrónica · Full Stack Developer
          </h3>

          <p className="text-gray-300 leading-relaxed text-justify indent-4">
            Soy estudiante de Ingeniería Electrónica con un fuerte interés en el
            desarrollo de software y sistemas tecnológicos aplicados al mundo
            real. Disfruto diseñar soluciones completas, desde la arquitectura
            hasta la implementación final.
          </p>

          <p className="text-gray-400 leading-relaxed text-justify indent-4">
            He trabajado en proyectos full stack, aplicaciones de gestión,
            sistemas industriales con PLCs e integraciones cloud, combinando
            programación, electrónica y pensamiento lógico.
          </p>
        </div>

        {/* TECNOLOGIAS */}
        <div className="flex flex-col gap-10">
          <h2 className="text-xl font-bold text-white">Tecnologías</h2>

          {/* FRONTEND */}
          <div className="flex flex-col gap-3">
            <h3 className="text-cyan-400 font-bold">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Context API",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-md border border-cyan-400/40 text-cyan-300 bg-cyan-400/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div className="flex flex-col gap-3">
            <h3 className="text-indigo-400 font-bold">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {["Node.js", "Express", "MongoDB", "REST APIs", "JWT"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-md border border-indigo-400/40 text-indigo-300 bg-indigo-400/10"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* TOOLS */}
          <div className="flex flex-col gap-3">
            <h3 className="text-gray-300 font-bold">Herramientas & Deploy</h3>
            <div className="flex flex-wrap gap-3">
              {["Git", "GitHub", "AWS", "Node-RED", "PLC Siemens", "Linux"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-md border border-gray-500/40 text-gray-300 bg-gray-500/10"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* PROYECTOS */}
        <div className="flex flex-col gap-12">
          {/* PROYECTO ACTUAL */}
          <div className="border-l-4 border-cyan-400 pl-4 space-y-3">
            <h2 className="text-xl font-bold text-white">
              Proyecto Actual · Plataforma de Control de Atletas
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Arquitectura MERN (MongoDB, Express, React, Node.js)</li>
              <li>Roles diferenciados: atletas y entrenadores</li>
              <li>Registro y visualización de entrenamientos</li>
              <li>Autenticación y manejo de sesiones</li>
            </ul>
          </div>

          {/* PROYECTO DESTACADO */}
          <div className="border-l-4 border-indigo-400 pl-4 space-y-3">
            <h2 className="text-xl font-bold text-white">
              Proyecto Destacado · NEXUS (Mueblería Hermanos Jota)
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Sistema web de gestión comercial</li>
              <li>Arquitectura MERN</li>
              <li>Gestión de productos, clientes y ventas</li>
              <li>Diseño responsive con enfoque en usabilidad</li>
            </ul>
          </div>
        </div>

        {/* INTERESES */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">
            Aprendizaje Continuo e Intereses
          </h2>

          <p className="text-gray-400">
            Además del desarrollo, me interesa entender los sistemas desde una
            perspectiva integral:
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Arquitectura de software y sistemas distribuidos</li>
            <li>Automatización e industria 4.0</li>
            <li>Cloud computing e IoT</li>
            <li>Inteligencia artificial aplicada</li>
          </ul>
        </div>
      </section>
    </>
  );
}
