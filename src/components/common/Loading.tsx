import React, { useEffect, useState } from "react";

const Loading = () => {
  const [startExit, setStartExit] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setStartExit(true);

      setTimeout(() => {
        setIsGone(true);
        document.body.style.overflow = "auto";
      }, 1300);
    }, 200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (isGone) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-[99999] bg-black text-white flex justify-center items-center ${
        startExit ? "circle-hide" : ""
      }`}
    >
      <h1 className="text-[25px] font-extralight text-transparent bg-clip-text bg-gradient-to-r from-[#aaa] via-[#ddd] to-[#aaa] animate-gradient tracking-[30px]">
        LOADING
      </h1>
    </div>
  );
};

export default Loading;
