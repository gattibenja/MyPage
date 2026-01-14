import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur border-b border-gray-800 z-50">
      <nav className="max-w-full px-4 md:px-8 h-16 flex items-center justify-between">
        <span className="font-bold text-xl font-mono">
          <strong className="font-black text-cyan-300">{"</>"} </strong>Benjamín
          Gatti
        </span>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-mono">
          <li className=" cursor-pointer uppercase text-sm font-black hover:text-cyan-300 transition-all duration-300">
            <a href="#home">Inicio</a>
          </li>
          <li className=" cursor-pointer uppercase text-sm font-black hover:text-cyan-300 transition-all duration-300">
            <a href="#about">Sobre Mí</a>
          </li>
          <li className=" cursor-pointer uppercase text-sm font-black hover:text-cyan-300 transition-all duration-300">
            <a href="#mindset">Como pienso</a>
          </li>
          <li className=" cursor-pointer uppercase text-sm font-black hover:text-cyan-300 transition-all duration-300">
            <a href="#projects">Proyectos</a>
          </li>
          <li className=" cursor-pointer uppercase text-sm font-black hover:text-cyan-300 transition-all duration-300">
            <a href="#trayectoria">Trayectoria</a>
          </li>
          <li className="cursor-pointer uppercase text-sm font-black hover:text-cyan-300 transition-all duration-300">
            <a href="#contacto">Contacto</a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-screen bg-gray-950/90 md:hidden"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col items-center gap-6 text-xl font-mono">
                <li>
                  <a
                    href="#home"
                    className="hover:text-cyan-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-cyan-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-cyan-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="hover:text-cyan-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
