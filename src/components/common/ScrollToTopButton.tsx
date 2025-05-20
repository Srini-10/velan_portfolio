import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`z-[9999] fixed bottom-10 right-10 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${
        visible ? "translate-y-0" : "translate-y-[90px]"
      }`}
    >
      <button
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className="w-10 h-10 backdrop-blur-md border-1.5 border-violet-600 rounded-full flex justify-center items-center"
      >
        <ArrowUp size={20} className="text-violet-600" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
