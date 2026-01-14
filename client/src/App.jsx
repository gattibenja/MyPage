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
        <Projects />
        <Contacto />
      </MainLayout>
    </>
  );
}

export default App;
