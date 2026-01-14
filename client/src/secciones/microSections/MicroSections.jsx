import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaCogs,
  FaUniversity,
  FaBrain,
  FaSpaceShuttle,
  FaProjectDiagram,
  FaGlobe,
} from "react-icons/fa";

// NARRATIVE REWRITE: La línea de tiempo se reestructura para seguir una lógica clara y natural:
// PASADO (Formación técnica) -> APLICACIÓN (Proyectos) -> PRESENTE (Universidad) -> FUTURO (Visión).
// Se añade el hito del idioma como un pilar de competencia profesional.
const timeline = [
  {
    step: "01",
    icon: <FaCogs className="text-cyan-400" />,
    title: "Base de Ingeniería: Sistemas y Control",
    description:
      "Finalizo mi formación técnica (2024) con una base sólida en electrónica, automatización con PLC y el diseño de sistemas de control para aplicaciones reales.",
  },
  {
    step: "02",
    icon: <FaProjectDiagram className="text-indigo-400" />,
    title: "Aplicación: Proyectos E2E",
    description:
      "Llevo la teoría a la práctica, diseñando y construyendo soluciones completas que integran desde sensores y hardware hasta la nube (AWS, Node.js, MQTT).",
  },
  {
    step: "03",
    icon: <FaGlobe className="text-gray-300" />,
    title: "Competencia Global: Inglés B2+",
    description:
      "Apruebo el examen Cambridge, consolidando el inglés como herramienta clave para trabajar con documentación técnica avanzada y en equipos internacionales.",
  },
  {
    step: "04",
    icon: <FaUniversity className="text-purple-400" />,
    title: "Presente: Carrera de Ingeniería Electrónica",
    description:
      "Actualmente, profundizo mi conocimiento académico para dominar los sistemas complejos donde software, control y comunicaciones convergen.",
  },
  {
    step: "05",
    icon: (
      <div className="flex gap-2">
        <FaBrain className="text-pink-400" />
        <FaSpaceShuttle className="text-orange-400" />
      </div>
    ),
    title: "Visión: IA en Sistemas de Frontera",
    description:
      "Mi objetivo es aplicar esta visión de ingeniería integral en la creación de interfaces humano-máquina y sistemas autónomos para la exploración espacial.",
  },
];

const stats = [
  {
    icon: <FaRocket className="text-cyan-400 text-4xl" />,
    end: 5,
    label: "Proyectos E2E",
  },
  {
    icon: <FaCode className="text-indigo-400 text-4xl" />,
    end: 20,
    label: "Tecnologías Aplicadas",
  },
  {
    icon: <FaGraduationCap className="text-purple-400 text-4xl" />,
    end: 4,
    label: "Áreas de Expertise",
  },
];

export default function MicroSections() {
  return (
    <section
      id="trayectoria"
      className="w-full max-w-7xl mx-auto flex flex-col px-6 lg:px-20 gap-20 font-mono py-24"
    >
      {/* NARRATIVE CHANGE: Título más claro y profesional que engloba toda la trayectoria. */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl lg:text-4xl text-white font-bold text-center mb-16">
          Trayectoria y Visión de Ingeniería
        </h2>
        <div className="relative">
          {/* Línea de tiempo visual para desktop */}
          <div className="hidden md:block absolute top-4 left-1/2 -translate-x-1/2 w-[85%] h-0.5 bg-white/10"></div>

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex-1 text-center flex flex-col items-center"
              >
                <div className="relative flex flex-col items-center">
                  <div className="hidden md:flex w-8 h-8 bg-slate-800 border-2 border-cyan-400 rounded-full items-center justify-center z-10 text-xl">
                    {item.icon}
                  </div>
                  <div className="md:hidden text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-cyan-400 mt-4 mb-2">
                    {item.step}
                  </h3>
                  <h4 className="text-xl font-bold text-white mb-2 h-14 flex items-center justify-center">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 max-w-xs">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="p-6 border border-white/10 rounded-lg bg-slate-900/20"
          >
            <div className="mb-4">{stat.icon}</div>
            <h3 className="text-5xl font-bold text-white">
              <CountUp end={stat.end} duration={3} enableScrollSpy />+
            </h3>
            <p className="text-gray-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center space-y-4"
      >
        {/* NARRATIVE CHANGE: CTA final alineado con una visión de ingeniería madura y colaborativa. */}
        <h2 className="text-3xl lg:text-4xl text-white font-bold">
          ¿Tu visión resuena con la mía?
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Siempre estoy abierto a colaborar en proyectos que buscan resolver
          problemas complejos en la intersección del hardware, el software y la
          IA. Si crees que podemos construir algo significativo, hablemos.
        </p>
      </motion.div>
    </section>
  );
}
