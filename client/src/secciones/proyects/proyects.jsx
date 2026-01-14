import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../../components/proyectCard/proyectCard";
import SideTechStack from "../../components/sideAnimation/SideAnimation.jsx";

// Alternative with image sources

const projects = [
  {
    title: "PLC + AWS IoT",
    description: "Integración industrial entre PLC Siemens y servicios cloud.",
    iconColor: "#706C61",
  },
  {
    title: "Plataforma de Control de Atletas",
    description:
      "Aplicación web para el registro, análisis y visualización de entrenamientos.",
    iconColor: "#67e8f9",
  },
  {
    title: "HermanosJota",
    description:
      "Sistema de gestión comercial completo desarrollado para una empresa real.",
    iconColor: "#F5E6D3",
  },
];

export default function Projects() {
  const [bgColor, setBgColor] = useState("#020617");
  const [iconColor, setIconColor] = useState("#22d3ee");

  return (
    <>
      <motion.section
        id="projects"
        animate={{ backgroundColor: bgColor }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen transition-colors duration-25"
      >
        <div className=" flex justify-between">
          {/* --- BARRA IZQUIERDA (Sticky) --- */}
          <div className="hidden lg:block sticky top-0 h-screen z-20">
            <SideTechStack
              direction="normal"
              background={{ bgColor }}
              iconColor={iconColor}
            />
          </div>
          <div>
            <h1 className=" text-4xl lg:text-4xl text-center pt-20 pb-10  text-white-300 font-bold font-mono borderb-2 border-cyan-400">
              {"<Mis proyectos />"}
            </h1>
            {projects.map((p) => (
              <ProjectCard
                key={p.title}
                project={p}
                setBgColor={(color) => {
                  setBgColor(color);
                  setIconColor(p.iconColor);
                }}
              />
            ))}
          </div>
          {/* --- BARRA DERECHA (Sticky) --- */}
          <div className="hidden lg:block sticky top-0 h-screen z-20">
            <SideTechStack
              direction="reverse"
              background={{ bgColor }}
              iconColor={iconColor}
            />
          </div>
        </div>
      </motion.section>
    </>
  );
}
