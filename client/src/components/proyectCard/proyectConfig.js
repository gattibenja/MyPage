import CASSTImg from "../../assets/CASST.png";
import nexusImg from "../../assets/nexus.png";
import plcImg from "../../assets/plc.png";
import cabañaImg from "../../assets/cabaña.png";

export const projectConfig = {
  "Plataforma de Control de Atletas": {
    theme: "#031C36",
    color: "#D9D7D7",
    accent: "#67e8f9",
    subtitle: "Plataforma de Rendimiento Deportivo",
    image: CASSTImg,
    role: "Desarrollador Full Stack",
    problem:
      "Los entrenadores carecían de una herramienta centralizada para monitorear el progreso de sus atletas, asignar entrenamientos y analizar datos de rendimiento de forma eficiente.",
    solution:
      "Desarrollé una aplicación web completa (MERN Stack) que permite a los entrenadores gestionar atletas, crear planes de entrenamiento personalizados y visualizar datos a través de dashboards interactivos. Los atletas pueden registrar sus sesiones y recibir feedback.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Context API",
      "Tailwind CSS",
    ],
  },
  HermanosJota: {
    theme: "#A0522D",
    color: "#D4A437",
    accent: "#F5E6D3",
    subtitle: "Sistema de Gestión Comercial",
    image: nexusImg,
    role: "Desarrollador Full Stack",
    problem:
      "Una mueblería local necesitaba digitalizar su gestión de ventas, inventario y clientes, que hasta el momento se realizaba de forma manual, generando ineficiencias y errores.",
    solution:
      "Creé un sistema de gestión interna (MERN Stack) a medida que centraliza el inventario, automatiza el proceso de ventas y genera reportes. El sistema cuenta con una interfaz intuitiva para facilitar la adopción por parte del personal.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Material UI"],
  },
  "PLC + AWS IoT": {
    theme: "#D1FBFF",
    color: "#1F71AD",
    accent: "#F5E6D3",
    subtitle: "Integración IoT Industrial",
    image: plcImg,
    role: "Tecnico de Automatización y Cloud",
    problem:
      "Se necesitaba desarollar un sistema que permitiese prevenir el rebalse de estaciones de bombeo para sistemas de aguas grises en tiempo real",
    solution:
      "Junto a mi equipo diseñamos e implementamos una arquitectura que envía datos desde un PLC Siemens LOGO! a AWS IoT Core usando el protocolo MQTT. Los datos son procesados por Node-RED y almacenados, permitiendo su visualización y análisis en una plataforma cloud.",
    stack: ["PLC Siemens LOGO!", "AWS IoT Core", "MQTT", "Node-RED", "Linux"],
  },
  "Cabaña Abrazo del Cielo": {
    theme: "#58A352",
    color: "#7EE0C3",
    accent: "#825937",
    subtitle: "Cabaña Turistica",
    image: cabañaImg,
    role: "Desarrollador Full Stack",
    problem:
      "Se necesitaba desarollar un sitio web para una cabaña turistica que permitiese mostrar sus servicios, galeria de fotos y un formulario de contacto para atraer clientes y facilitar la comunicación.",
    solution:
      "Desarolle un sitio web con React que permite mostrar los servicios, galeria de fotos y un formulario de contacto para facilitar la comunicación y atraer clientes.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Material UI"],
  },
  default: {
    theme: "#020617",
    color: "#e5e7eb",
    accent: "#94a3b8",
    subtitle: "Software Project",
    image: CASSTImg,
    role: "Developer",
    problem: "N/A",
    solution: "N/A",
    stack: [],
  },
};
