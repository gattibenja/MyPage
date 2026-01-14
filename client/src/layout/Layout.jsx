import Navbar from "../components/nav/Nav.jsx";
import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/footer/Footer.jsx";
export default function MainLayout({ children }) {
  return (
    <div className=" w-full min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-purple-900 text-gray-100 selection:bg-cyan-300 selection:text-black">
      <Navbar />
      <main className="w-full ">{children}</main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
