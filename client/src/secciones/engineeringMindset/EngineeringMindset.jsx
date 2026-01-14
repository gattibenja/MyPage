import React from "react";
import { motion } from "framer-motion";
import { FaBroadcastTower, FaCogs, FaDraftingCompass, FaInfinity } from "react-icons/fa";

const concepts = [
  {
    icon: <FaBroadcastTower className="text-cyan-400 text-4xl" />,
    title: "Pensamiento Sistémico",
    description:
      "Veo más allá del código. Analizo cómo cada componente, desde la base de datos hasta la interfaz de usuario, interactúa para formar un sistema cohesivo y robusto. Mi objetivo es crear arquitecturas que sean escalables y fáciles de mantener.",
  },
  {
    icon: <FaCogs className="text-indigo-400 text-4xl" />,
    title: "Integración Hardware-Software",
    description:
      "Mi experiencia en electrónica me permite diseñar soluciones donde el software controla el mundo físico. Disfruto creando el puente entre un sensor en el campo y una base de datos en la nube, asegurando que la comunicación sea fluida y confiable.",
  },
  {
    icon: <FaDraftingCompass className="text-purple-400 text-4xl" />,
    title: "Diseño de Arquitectura",
    description:
      "Antes de escribir la primera línea de código, dedico tiempo a diseñar la arquitectura. Pienso en patrones de diseño, en la separación de responsabilidades y en cómo la estructura del software impactará en su rendimiento y flexibilidad a futuro.",
  },
  {
    icon: <FaInfinity className="text-gray-300 text-4xl" />,
    title: "Optimización y Eficiencia",
    description:
      "Tanto en hardware como en software, busco la eficiencia. Ya sea optimizando una consulta a la base de datos para que sea más rápida o diseñando un circuito para que consuma menos energía, siempre estoy buscando la forma de hacer más con menos.",
  },
];

export default function EngineeringMindset() {
  return (
    <section
      id="mindset"
      className="w-full max-w-6xl mx-auto flex flex-col px-6 lg:px-20 gap-12 md:gap-16 font-mono py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl lg:text-5xl text-white font-bold pb-2">
          Cómo Pienso
        </h1>
        <p className="text-lg text-cyan-400">Mi Enfoque de Ingeniería</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {concepts.map((concept, index) => (
          <motion.div
            key={concept.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center text-center p-6 border border-white/10 rounded-lg bg-slate-900/20"
          >
            <div className="mb-4">{concept.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {concept.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {concept.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
