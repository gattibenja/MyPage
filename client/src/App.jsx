import MicroSections from "./secciones/microSections/MicroSections";
import EngineeringMindset from "./secciones/engineeringMindset/EngineeringMindset";
import "./App.css";
import React from "react";
import MainLayout from "./layout/Layout";
import Inicio from "./secciones/inicio/inicio";
import About from "./secciones/about/about";
import Contacto from "./secciones/contacto/contacto";
import Projects from "./secciones/proyects/proyects";
function App() {
  //DEFINE QUE SE RENDERIZA Y QUE NO
  return (
    <>
      <MainLayout>
        <Inicio />
        <About />
        <EngineeringMindset />
        <Projects />
        <MicroSections />
        <Contacto />
      </MainLayout>
    </>
  );
}

export default App;
