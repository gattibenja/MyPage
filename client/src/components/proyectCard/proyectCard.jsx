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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col justify-center items-center px-6 lg:mt-4 py-20"
    >
      <div className="w-full max-w-5xl text-center space-y-4">
        <h3
          className="text-4xl md:text-6xl font-bold font-mono tracking-tight "
          style={{ color: config.color }}
        >
          {project.title}
        </h3>

        <p
          className="uppercase tracking-widest font-mono text-xl md:text-2xl font-bold lg:tracking-widest"
          style={{ color: config.accent }}
        >
          {config.subtitle}
        </p>

        <p
          style={{ color: config.color }}
          className=" max-w-3xl mx-auto text-base md:text-lg font-mono leading-loose font-bold"
        >
          {project.description}
        </p>

        {/* IMAGE */}
        <div className="relative group rounded-2xl max-h-170 overflow-hidden border border-white/10 mt-6 lg:mt-10">
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
        </div>
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
