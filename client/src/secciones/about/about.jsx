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
            De la Ingeniería de Hardware al Desarrollo Full Stack
          </h2>

          <p className="text-gray-300 leading-relaxed text-justify indent-4">
            Mi carrera comenzó con la electrónica y la automatización
            industrial, donde aprendí a pensar en sistemas, optimizar procesos y
            trabajar con hardware como PLCs. Esa base me dio una perspectiva
            única cuando me adentré en el desarrollo de software: no solo veo
            código, veo la arquitectura completa que conecta el mundo digital
            con el físico.
          </p>

          <p className="text-gray-400 leading-relaxed text-justify indent-4">
            Hoy, como desarrollador Full Stack, mi pasión es construir
            soluciones donde el software y el hardware dialogan. Me especializo
            en crear aplicaciones robustas, desde sistemas de gestión web hasta
            plataformas IoT que capturan y procesan datos del mundo real. Me
            mueve la curiosidad por entender cómo funcionan las cosas y el
            desafío de diseñar sistemas eficientes, escalables y que resuelven
            problemas complejos.
          </p>
        </div>

        {/* TECNOLOGIAS */}
        <div className="flex flex-col gap-10">
          <h2 className="text-xl font-bold text-white">Mi Stack Tecnológico</h2>

          {/* FRONTEND */}
          <div className="flex flex-col gap-3">
            <h3 className="text-cyan-400 font-bold">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "JavaScript (ES6+)",
                "Tailwind CSS",
                "Framer Motion",
                "HTML5",
                "CSS3",
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
          <div className="flex flex-col gap-3">
            <h3 className="text-purple-400 font-bold">Cloud & IoT</h3>
            <div className="flex flex-wrap gap-3">
              {["AWS", "MQTT", "Node-RED", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-md border border-purple-400/40 text-purple-300 bg-purple-400/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* INDUSTRIAL & HARDWARE */}
          <div className="flex flex-col gap-3">
            <h3 className="text-gray-300 font-bold">
              Industrial & Hardware
            </h3>
            <div className="flex flex-wrap gap-3">
              {["PLC Siemens LOGO!", "Arduino", "Electrónica Analógica/Digital"].map(
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

        {/* INTERESES */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">
            Intereses y Aprendizaje
          </h2>

          <p className="text-gray-400">
            Mi curiosidad va más allá del código. Me apasiona:
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>
              El diseño de arquitecturas de software resilientes y escalables.
            </li>
            <li>
              La exploración espacial y los sistemas embebidos que la hacen
              posible.
            </li>
            <li>
              La automatización de procesos, desde la industria hasta el hogar.
            </li>
            <li>
              La física detrás de la tecnología y cómo la computación cuántica
              podría cambiarlo todo.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
