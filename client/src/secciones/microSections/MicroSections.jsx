import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaCloud,
  FaTools,
  FaUniversity,
  FaBrain,
  FaSpaceShuttle,
} from "react-icons/fa";

// NARRATIVE CHANGE: La línea de tiempo ahora refleja una visión completa: pasado, presente y futuro.
// Se posiciona el perfil como un futuro ingeniero de sistemas complejos con una visión clara.
const timeline = [
  {
    year: "2018-2024",
    icon: <FaTools className="text-cyan-400" />,
    title: "Fundamentos en Sistemas y Automatización",
    description:
      "Inicio mi camino en la ingeniería, desarrollando una base en electrónica, PLCs y sistemas IoT end-to-end, uniendo hardware y software.",
  },
  {
    year: "2025",
    icon: <FaCloud className="text-gray-300" />,
    title: "Arquitectura de Software Full Stack",
    description:
      "Aplico mi mentalidad de sistemas al mundo del software, especializándome en construir aplicaciones robustas, escalables y conectadas.",
  },
  {
    year: "PRESENTE",
    icon: <FaUniversity className="text-purple-400" />,
    title: "Ingeniería Electrónica y Sistemas Complejos",
    description:
      "Actualmente curso Ingeniería Electrónica, profundizando en arquitecturas de control, comunicaciones y el diseño de sistemas que integran múltiples disciplinas.",
  },
  {
    year: "FUTURO",
    icon: (
      <div className="flex gap-2">
        <FaBrain className="text-pink-400" />
        <FaSpaceShuttle className="text-orange-400" />
      </div>
    ),
    title: "IA, Bio-aumentación y Exploración Espacial",
    description:
      "Mi visión es aplicar la ingeniería de sistemas y la IA para resolver desafíos en la interfaz humano-máquina y en la exploración y automatización de sistemas espaciales.",
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
    <section className="w-full max-w-7xl mx-auto flex flex-col px-6 lg:px-20 gap-20 font-mono py-24">
      {/* UX/NARRATIVE CHANGE: El título ahora enfoca en la visión y la trayectoria, no solo en el pasado. */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl lg:text-4xl text-white font-bold text-center mb-12">
          Visión, Presente y Futuro
        </h2>
        <div className="relative">
          {/* Línea de tiempo visual para desktop */}
          <div className="hidden md:block absolute top-4 left-0 w-full h-0.5 bg-white/10"></div>

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
                    {item.year}
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
        {/* NARRATIVE CHANGE: CTA actualizado para reflejar la ambición y el enfoque en ingeniería de alto nivel. */}
        <h2 className="text-3xl lg:text-4xl text-white font-bold">
          ¿Construimos la próxima generación de sistemas?
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Busco colaborar en proyectos que desafíen los límites de la
          tecnología. Si tu visión involucra la integración de IA, hardware
          complejo o sistemas autónomos, estamos en la misma sintonía. Hablemos.
        </p>
      </motion.div>
    </section>
  );
}
