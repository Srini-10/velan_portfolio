import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#0B0514] text-white py-16 space-y-10 text-center">
      {/* Logo */}
      <div className="mb-6">
        <img src={Logo} className="w-16 mx-auto" alt="" />
      </div>

      {/* Navigation Links */}
      <nav className="mb-6 flex justify-center space-x-8 text-lg font-medium">
        <a href="#about" className="hover:text-purple-400">
          About
        </a>
        <a href="#services" className="hover:text-purple-400">
          Services
        </a>
        <a href="#portfolios" className="hover:text-purple-400">
          Portfolios
        </a>
        <a href="#contact" className="hover:text-purple-400">
          Contact
        </a>
      </nav>

      {/* Copyright */}
      <div className="text-sm text-gray-400">
        © {new Date().getFullYear()} All rights reserved by{" "}
        <span className="text-white font-semibold">Velan</span>
      </div>
    </footer>
  );
};

export default Footer;
