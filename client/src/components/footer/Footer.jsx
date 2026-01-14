import React from "react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-slate-950 via-indigo-950 to-purple-900 text-white py-6 font-mono selection:bg-emerald-300 selection:text-black border-t border-cyan-900">
      <div className="container mx-auto text-center flex flex-col lg:flex-row gap-4 lg:justify-between lg:px-20 lg:items-center">
        <p className="text-sm text-gray-300">
          <strong className="text-emerald-300">{"</>  "}</strong>
          <strong className="text-gray-500  text-sm">
            Desarrollado por
          </strong>{" "}
          <strong className="text-emerald-300">Benjamin Pablo Gatti</strong>
        </p>
        <p className="text-sm text-emerald-300">
          © 2026 Todos los derechos reservados.
        </p>
        <p className="text-sm  text-emerald-300">
          Hecho con{" "}
          <span role="img" aria-label="corazón latiendo">
            💓
          </span>{" "}
          y stack MERN
        </p>
      </div>
    </footer>
  );
}
