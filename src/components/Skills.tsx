import React, { useEffect, useRef, useState } from "react";
import figmaIcon from "../assets/figma.png";
import sketchIcon from "../assets/sketch.png";
import xdIcon from "../assets/xd.png";
import wordpressIcon from "../assets/wordpress.png";
import reactIcon from "../assets/react.png";
import jsIcon from "../assets/javascript.png";

const Skills = () => {
  const skills = [
    { name: "Figma", percentage: 92, image: figmaIcon },
    { name: "Sketch", percentage: 80, image: sketchIcon },
    { name: "XD", percentage: 85, image: xdIcon },
    { name: "WordPress", percentage: 99, image: wordpressIcon },
    { name: "React", percentage: 89, image: reactIcon },
    { name: "JavaScript", percentage: 93, image: jsIcon },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);

  // Initialize itemsRef
  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, 4);
  }, []);

  // Update background position when activeIndex changes
  useEffect(() => {
    if (
      activeIndex !== null &&
      itemsRef.current[activeIndex] &&
      bgRef.current
    ) {
      const activeItem = itemsRef.current[activeIndex];
      if (activeItem) {
        const { offsetTop, offsetHeight, offsetLeft, offsetWidth } = activeItem;

        bgRef.current.style.width = `${offsetWidth}px`;
        bgRef.current.style.height = `${offsetHeight}px`;
        bgRef.current.style.top = `${offsetTop}px`;
        bgRef.current.style.left = `${offsetLeft}px`;
        bgRef.current.style.opacity = "1";
      }
    }
  }, [activeIndex]);

  return (
    <div className="bg-[#0a0316] w-screen h-auto flex flex-col justify-start items-center text-center px-20 py-24 relative">
      <h1 className="w-[460px] text-[45px] font-bold bg-gradient-to-r from-violet-600 to-white bg-clip-text text-transparent">
        My Skills
      </h1>
      <p className="w-[650px] text-[16px] font-medium text-gray-300 mt-3">
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and you customers.
      </p>

      <div className="w-[90vw] flex flex-col justify-start items-center space-y-0 relative mt-14">
        <div className="flex justify-between items-center gap-x-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group transition-all duration-500 ease-in-out"
            >
              <div
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className="bg-[#110524] group-hover:bg-[#190836] 
                 border border-transparent group-hover:border-violet-600
                 flex flex-col space-y-6 justify-center items-center 
                 w-[180px] h-[180px] rounded-2xl shadow-sm 
                 transition-all duration-500 ease-in-out"
              >
                <img
                  src={skill.image}
                  className="w-16 h-16 group-hover:scale-105 
                   saturate-0 group-hover:saturate-100 
                   transition-all duration-500 ease-in-out"
                  alt=""
                />
                <span
                  className="text-neutral-400 group-hover:text-violet-600 
                       dark:text-violet-400 font-extrabold 
                       transition-all duration-500 ease-in-out"
                >
                  {skill.percentage}%
                </span>
              </div>
              <h3 className="text-[15px] font-medium text-violet-600 dark:text-white mt-3">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
