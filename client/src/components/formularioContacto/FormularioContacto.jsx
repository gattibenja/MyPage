import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
/* eslint-disable react/prop-types */
//import { motion } from "framer-motion";
const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL || "";
export default function FormularioContacto({ onRegistrationSuccess }) {
  const [error, SetError] = useState(false);
  const [exito, setExito] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("El nombre es obligatorio")
        .min(3, "El nombre debe tener al menos 2 caracteres"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El email es obligatorio"),
      message: Yup.string().required("El mensaje es obligatorio"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log(`Datos a enviar: ${values}`);
      try {
        SetError("");
        setExito(false);
        const response = await fetch(`${BASE_URL}/api/messages/save`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (!response.ok) {
          const text = await response.text();
          let errorMessage = "El registro del mensaje falló";
          console.log("ERROR");
          try {
            const errorData = JSON.parse(text);
            errorMessage =
              errorData.error?.message ||
              (typeof errorData.error === "string"
                ? errorData.error
                : errorMessage);
          } catch (error) {
            errorMessage = `Error ${response.status}: ${
              response.statusText ||
              error ||
              "Respuesta vacía o inválida del servidor"
            }`;
          }
          throw new Error(errorMessage);
        }
        resetForm();
        setExito(true);
        if (onRegistrationSuccess) {
          setTimeout(() => onRegistrationSuccess(), 2000);
        }
      } catch (e) {
        console.error(e.message);
        setExito(false);
        SetError(e.message);
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <>
      <div className="relative w-[90vw] lg:w-[50vw]">
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-400 via-purple-600 to-indigo-600 rounded-2xl blur-2xl opacity-75 animate-pulse"></div>
        <form
          onSubmit={formik.handleSubmit}
          className="relative flex flex-col w-full  justify-center text-cyan-200 border border-cyan-300 font-mono font-bold shadow-md shadow-cyan-200 items-center rounded-xl bg-linear-to-br from-slate-950 via-indigo-950 to-purple-900 lg:w-220 lg:h-110 p-6 sm:p-6 gap-6"
        >
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {/*"NOMBRE Y APELLIDO"*/}
            <div className="flex flex-1  flex-col justify-center gap-3">
              <label htmlFor="" className=" items-start ">
                Nombre y Apellido
              </label>
              <input
                type="text"
                name="name"
                className="border border-cyan-400 items-start rounded-sm p-1.5"
                placeholder="Juan Perez"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/*"EMAIL"*/}
            <div className="flex flex-1 flex-col justify-center items-start gap-3">
              <label htmlFor="" className="">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="juanPerez@example.com"
                className="border border-cyan-400 rounded-sm p-1.5 w-full"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          {/*"MENSAJE"*/}
          <div className=" flex flex-1  flex-col w-full  justify-start items-start gap-3 ">
            <label htmlFor="" className="">
              Mensaje
            </label>
            <textarea
              name="message"
              className="border w-full rounded-sm p-1.5 focus:border-neon-green focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all resize-none"
              placeholder="Escribe tu mensaje aqui"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows="4"
            />
          </div>
          {error && (
            <div
              className="flex items-center p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
            >
              <svg
                className="w-5 h-5 inline mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div>
                <span className="font-medium">¡Error!</span> {error}
              </div>
            </div>
          )}
          {exito && (
            <div
              className="flex items-center p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
              role="alert"
            >
              <svg
                className="w-5 h-5 inline mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div>
                <span className="font-medium">¡Éxito!</span> Mensaje enviado
                correctamente.
              </div>
            </div>
          )}
          {/*"BOTON ENVIAR"*/}
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="border border-cyan-400 w-full p-4 hover:bg-cyan-200 hover:text-gray-600 hover:transition-all hover:scale-102 active:scale-95 duration-300 rounded-md"
          >
            {formik.isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAJE"}
          </button>
        </form>
      </div>
    </>
  );
}
