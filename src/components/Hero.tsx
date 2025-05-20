import React from "react";
import { Button } from "@heroui/react";
import { Download, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Person from "../assets/person.png";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  return (
    <section className="mx-auto h-auto flex-col items-center justify-between px-[75px] pb-0 pt-52 top-0 space-y-20 bg-[#0a0316] text-white relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] flex items-center justify-between">
        {/* Background elements */}
        <div className="absolute right-[350px] bottom-10 w-[500px] h-[500px] rounded-full bg-violet-900/20 blur-[100px]"></div>
        <div className="absolute -right-24 -top-44 w-[400px] h-[400px] rounded-full bg-violet-600/50 blur-[120px]"></div>

        {/* Animated "HI" text decoration */}
        <div className="absolute left-0 top-0 mx-auto w-screen max-h-[1080px] h-full flex justify-center items-center pointer-events-none">
          <h1 className="text-[260px] font-bold bg-gradient-to-b from-violet-900 to-transparent bg-clip-text text-transparent -ml-20 animate-pulse-slow">
            HI
          </h1>
        </div>

        {/* Left side - Text content and button */}
        <div className="max-w-[550px] space-y-3 z-10">
          <h1 className="text-[40px] font-bold">I am Hero</h1>
          <h1 className="text-[65px] font-bold bg-gradient-to-r from-violet-600 to-gray-300 bg-clip-text text-transparent leading-[75px]">
            Next-Level Web Developer.
          </h1>

          <p className="text-[20px] font-medium text-gray-300">
            I break down complex user experience problems to create
            integrity-focused solutions that connect billions of people.
          </p>

          <div className="flex items-center pt-10 gap-4">
            <Button
              variant="bordered"
              className="border-1 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white font-medium text-[16px] px-9 py-[27px] rounded-full transition-all duration-300"
            >
              Download CV <Download className="w-4 h-4" />
            </Button>

            {/* Social Icons */}
            <div className="flex space-x-5 ml-2">
              <a
                href="_"
                className="flex items-center justify-center w-8 h-8 border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white rounded-full transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="_"
                className="flex items-center justify-center w-8 h-8 border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white rounded-full transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="_"
                className="flex items-center justify-center w-8 h-8 border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white rounded-full transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="_"
                className="flex items-center justify-center w-8 h-8 border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white rounded-full transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-full h-auto flex justify-center items-center z-10">
          <div className="relative w-[430px] h-[460px] rotate-6 group hover:rotate-0 ml-20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-transparent rounded-[55px] blur-xl"></div>
            <img
              src={Person}
              alt="Web Developer"
              className="relative z-10 w-full h-full object-cover rounded-[55px] border-2 border-violet-900/30 group-hover:border-violet-900 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Counter Component */}
      <div className="mx-auto max-w-[1440px]">
        <AnimatedCounter />
      </div>
    </section>
  );
};

export default Hero;
