import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";

createRoot(document.getElementById("root")).render(
  // CONECTA REACT A HTML LO RENDERIZA EN EL INDEX HTML ROOT
  <StrictMode>
    <App />
  </StrictMode>
);
