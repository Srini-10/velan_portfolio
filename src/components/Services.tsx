import React, { useState, useRef, useEffect } from "react";
import { MoveUpRight } from "lucide-react";

const Services = () => {
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

  const handleHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="bg-black w-screen h-auto flex flex-col justify-start items-center text-center px-20 py-24 relative">
        <h1 className="w-[460px] text-[45px] font-bold bg-gradient-to-r from-violet-600 to-white bg-clip-text text-transparent">
          My Quality Services
        </h1>
        <p className="w-[650px] text-[16px] font-medium text-gray-300 mt-3">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>

        <div className="w-[90vw] mx-auto max-w-[1440px] flex flex-col justify-start items-center space-y-0 relative mt-14">
          {/* Background highlight element */}
          <div
            ref={bgRef}
            className="absolute mx-auto lg:max-w-[1280px] xl:max-w-[1440px] bg-gradient-to-r from-violet-600 via-violet-700 to-violet-950 transition-all duration-500 ease-in-out pointer-events-none opacity-0"
          />

          {/* Web Development */}
          <div
            ref={(el) => {
              itemsRef.current[0] = el;
            }}
            className="w-full group px-0 py-8 transition duration-300 ease-in-out relative z-10 border-violet-950 border-b-1"
            onMouseEnter={() => handleHover(0)}
          >
            <div className="flex items-start justify-between px-10">
              <div className="flex justify-start items-center space-x-4">
                <p
                  className={`${
                    activeIndex === 0 ? "text-white" : "text-violet-400"
                  } text-[20px] font-bold`}
                >
                  01
                </p>
                <div className="flex justify-start items-center pl-3">
                  <h3 className="text-white font-extrabold text-[28px] flex justify-start items-center min-w-[450px]">
                    Web Development
                  </h3>
                  <p
                    className={`text-[16px] text-white text-start ${
                      activeIndex === 0 ? "text-white" : ""
                    } transition duration-300`}
                  >
                    Ensure your website looks great on any device, with layouts
                    that adapt to different screen sizes seamlessly.
                  </p>
                </div>
              </div>
              <div className="w-[200px] flex justify-end items-center">
                <MoveUpRight
                  className={`w-[30px] h-[30px] transition-transform duration-300 transform ${
                    activeIndex === 0
                      ? "text-white rotate-90"
                      : "text-violet-400 rotate-0"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* UI/UX Design */}
          <div
            ref={(el) => {
              itemsRef.current[1] = el;
            }}
            className="w-full group px-0 py-8 transition duration-300 ease-in-out relative z-10 border-violet-950 border-b-1"
            onMouseEnter={() => handleHover(1)}
          >
            <div className="flex items-start justify-between px-10">
              <div className="flex justify-start items-center space-x-4">
                <p
                  className={`${
                    activeIndex === 1 ? "text-white" : "text-violet-400"
                  } text-[20px] font-bold`}
                >
                  02
                </p>
                <div className="flex justify-start items-center pl-3">
                  <h3 className="text-white font-extrabold text-[28px] flex justify-start items-center min-w-[450px]">
                    UI/UX Design
                  </h3>
                  <p
                    className={`text-[16px] text-white text-start ${
                      activeIndex === 1 ? "text-white" : ""
                    } transition duration-300`}
                  >
                    Set up user-friendly CMS solutions like WordPress or
                    custom-built options so clients can manage content easily.
                  </p>
                </div>
              </div>
              <div className="w-[200px] flex justify-end items-center">
                <MoveUpRight
                  className={`w-[30px] h-[30px] transition-transform duration-300 transform ${
                    activeIndex === 1
                      ? "text-white rotate-90"
                      : "text-violet-400 rotate-0"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Content Writing */}
          <div
            ref={(el) => {
              itemsRef.current[2] = el;
            }}
            className="w-full group px-0 py-8 transition duration-300 ease-in-out relative z-10 border-violet-950 border-b-1"
            onMouseEnter={() => handleHover(2)}
          >
            <div className="flex items-start justify-between px-10">
              <div className="flex justify-start items-center space-x-4">
                <p
                  className={`${
                    activeIndex === 2 ? "text-white" : "text-violet-400"
                  } text-[20px] font-bold`}
                >
                  03
                </p>
                <div className="flex justify-start items-center pl-3">
                  <h3 className="text-white font-extrabold text-[28px] flex justify-start items-center min-w-[450px]">
                    Content Writing
                  </h3>
                  <p
                    className={`text-[16px] text-white text-start ${
                      activeIndex === 2 ? "text-white" : ""
                    } transition duration-300`}
                  >
                    Build and integrate APIs to connect websites with
                    third-party applications, enhancing functionality and
                    performance.
                  </p>
                </div>
              </div>
              <div className="w-[200px] flex justify-end items-center">
                <MoveUpRight
                  className={`w-[30px] h-[30px] transition-transform duration-300 transform ${
                    activeIndex === 2
                      ? "text-white rotate-90"
                      : "text-violet-400 rotate-0"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Digital Marketing */}
          <div
            ref={(el) => {
              itemsRef.current[3] = el;
            }}
            className="w-full group px-0 py-8 transition duration-300 ease-in-out relative z-10 border-violet-950 border-b-1"
            onMouseEnter={() => handleHover(3)}
          >
            <div className="flex items-start justify-between px-10">
              <div className="flex justify-start items-center space-x-4">
                <p
                  className={`${
                    activeIndex === 3 ? "text-white" : "text-violet-400"
                  } text-[20px] font-bold`}
                >
                  04
                </p>
                <div className="flex justify-start items-center pl-3">
                  <h3 className="text-white font-extrabold text-[28px] flex justify-start items-center min-w-[450px]">
                    Digital Marketing
                  </h3>
                  <p
                    className={`text-[16px] text-white text-start ${
                      activeIndex === 3 ? "text-white" : ""
                    } transition duration-300`}
                  >
                    Refresh outdated websites with modern, appealing designs
                    that align with current brand goals and user expectations.
                  </p>
                </div>
              </div>
              <div className="w-[200px] flex justify-end items-center">
                <MoveUpRight
                  className={`w-[30px] h-[30px] transition-transform duration-300 transform ${
                    activeIndex === 3
                      ? "text-white rotate-90"
                      : "text-violet-400 rotate-0"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
