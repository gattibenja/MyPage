/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectConfig } from "./proyectConfig.js";
import PropTypes from "prop-types";

export default function ProjectCard({ project, setBgColor }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const config = projectConfig[project.title] || projectConfig.default;

  useEffect(() => {
    if (isInView) setBgColor(config.theme);
  }, [isInView, setBgColor, config.theme]);

  return (
    <motion.div
      ref={ref}
      className="h-screen flex flex-col justify-center items-center px-6 lg:px-20"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative">
        {project.title === "PLC + AWS IoT" && (
          <div className="absolute top-0 -left-10 -mt-4 bg-cyan-400 text-slate-900 font-bold py-2 px-6 rounded-full text-sm transform -rotate-12 shadow-lg">
            PROYECTO DESTACADO
          </div>
        )}
        {/* Columna de Información */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h3
            className="text-4xl md:text-5xl font-bold font-mono tracking-tight"
            style={{ color: config.color }}
          >
            {project.title}
          </h3>

          <p
            className="uppercase tracking-widest font-mono text-lg md:text-xl font-bold"
            style={{ color: config.accent }}
          >
            {config.subtitle}
          </p>

          <div className="space-y-4 text-left">
            <p style={{ color: config.color }}>
              <strong className="font-bold">Rol:</strong> {config.role}
            </p>
            <p style={{ color: config.color }}>
              <strong className="font-bold">Problema:</strong> {config.problem}
            </p>
            <p style={{ color: config.color }}>
              <strong className="font-bold">Solución:</strong> {config.solution}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {config.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-md"
                style={{
                  backgroundColor: `${config.accent}20`,
                  color: config.accent,
                  border: `1px solid ${config.accent}40`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Columna de Imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative group rounded-2xl max-h-170 overflow-hidden border border-white/10"
        >
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-md flex items-center justify-center gap-6 transition z-10">
            <a className="btn-primary">
              <FaGithub /> Código
            </a>
            {project.demo && (
              <a className="btn-outline">
                <FaExternalLinkAlt /> Demo
              </a>
            )}
          </div>

          <img
            src={config.image}
            alt={project.title}
            className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
  }).isRequired,
  setBgColor: PropTypes.func.isRequired,
};
