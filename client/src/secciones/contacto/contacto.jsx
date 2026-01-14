import React from "react";
import FormularioContacto from "../../components/formularioContacto/FormularioContacto";
import { motion } from "framer-motion";
export default function Contacto() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }} //estado inicial
        whileInView={{ opacity: 1, scale: 1 }} // es como el animate, pero este sirve para cuando el div este en pantalla
        viewport={{ once: false, amount: 0.5 }} // es una prop del whileIn view, para saber cuando se activa el whileInview, once(una vez o siempre), y amount que % se ve del div
        //animate={{ opacity: 1, scale: 1 }}
        exit={{}}
        transition={{ duration: 0.4, ease: "easeOut" }} // duracion de la animacion y ease atributo para el suavizado de la transicion
      >
        <section
          className="relative px-0 md:px-5 bg-dark-bg text-white min-h-[91vh] flex justify-center items-center flex-col w-full "
          id="contacto"
        >
          <div className="absolute top-0 left-0 w-full  h-0.5 bg-linear-to-r from-transparent via-fuchsia-600 to-transparent  "></div>
          <div className=" w-full flex flex-col items-center gap-10">
            <h2 className="text-center text-4xl font-bold font-mono text-cyan-200 border-b-4 border-cyan-300 pb-2">
              {"<Contactame />"}
            </h2>
            <p className="text-gray-400 ">
              Hablemos de tu próximo proyecto.
            </p>
            <FormularioContacto />
          </div>
        </section>
      </motion.div>
    </>
  );
}
