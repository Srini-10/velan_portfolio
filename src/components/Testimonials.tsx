import React, { useState, useEffect, useRef, useCallback } from "react";
import timBaileyImg from "../assets/people/timbailey.png";
import brandonFraserImg from "../assets/people/brandonfraser.png";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote:
        "Taylor is a professional Designer he really helps my business by providing value to my business.",
      name: "Tim Bailey",
      position: "SEO Specialist",
      company: "Theme Junction",
      image: timBaileyImg,
    },
    {
      quote:
        "Taylor is a professional Designer he really helps my business by providing value to my business.",
      name: "Brandon Fraser",
      position: "Senior Software Dev",
      company: "Cosmic Sport",
      image: brandonFraserImg,
    },
    {
      quote:
        "Taylor is a professional Designer he really helps my business by providing value to my business.",
      name: "Tim Bailey",
      position: "SEO Specialist",
      company: "Theme Junction",
      image: timBaileyImg,
    },
    {
      quote:
        "Taylor is a professional Designer he really helps my business by providing value to my business.",
      name: "Brandon Fraser",
      position: "Senior Software Dev",
      company: "Cosmic Sport",
      image: brandonFraserImg,
    },
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    resetInterval();
  };

  const startInterval = useCallback(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  }, [nextSlide]);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startInterval]);

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="md:max-w-[50%]">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-white bg-clip-text text-transparent mb-4">
            My Client's Stories
          </h1>
          <p className="text-lg text-gray-300">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full md:w-[600px]">
          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl" ref={carouselRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  activeIndex * (50 / testimonials.length)
                }%)`,
                width: `${testimonials.length * 100}%`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-[300px]">
                  <div className="bg-gradient-to-br from-violet-900/30 to-violet-950/30 p-6 rounded-2xl border border-violet-800/30 h-full mx-2">
                    <div className="w-full h-24 mb-4 overflow-hidden rounded-lg flex justify-end items-start">
                      <img
                        src={testimonial.image}
                        className="w-auto h-full object-cover rounded-bl-[80px] rounded-tl-[5px]"
                        alt={testimonial.name}
                      />
                    </div>
                    <div className="mb-4">
                      <span className="text-5xl font-serif text-violet-500 leading-none">
                        "
                      </span>
                      <p className="text-gray-300 mt-2">{testimonial.quote}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-200 text-sm">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                title="!"
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeIndex === index ? "bg-violet-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
