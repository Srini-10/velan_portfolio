import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Button } from "@heroui/react";

const NavbarAnimated = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-[9999] fixed top-0 left-0 w-screen transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-[75px] py-[22px] bg-black/90 backdrop-blur-lg relative">
        {/* Gradient shadow effect */}
        <div
          className={`absolute left-0 w-full h-[20px] bg-gradient-to-b from-violet-950/30 to-transparent ${
            isVisible ? "-bottom-[20px]" : "bottom-0"
          }`}
        ></div>

        {/* Logo on the left */}
        <div className="flex justify-start items-center h-[60px] space-x-[35px]">
          <a href="_" className="h-full w-auto">
            <img src={Logo} alt="" className="h-full w-auto" />
          </a>
          <a href="_" className="text-[15px] font-[600] text-white">
            mail@gerolddesign.com
          </a>
        </div>

        {/* Links and button on the right */}
        <div className="flex items-center space-x-[55px]">
          <div className="flex items-center space-x-11">
            <a
              href="_"
              className="relative text-[15px] text-white font-[600] transition group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-violet-950 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="_"
              className="relative text-[15px] text-white font-[600] transition group"
            >
              Works
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-violet-950 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="_"
              className="relative text-[15px] text-white font-[600] transition group active-nav-link"
            >
              Resume
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-violet-950 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="_"
              className="relative text-[15px] text-white font-[600] transition group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-violet-950 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="_"
              className="relative text-[15px] text-white font-[600] transition group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-violet-950 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="_"
              className="relative text-[15px] text-white font-[600] transition group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-violet-950 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <Button
            className="bg-gradient-to-r from-violet-500 to-violet-950 hover:from-violet-950 hover:to-violet-500 text-white font-[600] text-[15px] shadow-lg px-9 py-[25px] hover:shadow-xl transition-all duration-300"
            radius="full"
          >
            Hire Me!
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAnimated;
