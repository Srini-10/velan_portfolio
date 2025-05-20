import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type CounterItem = {
  labelTop: string;
  value: string;
  labelBottom: string;
};

const counterData: CounterItem[] = [
  { value: "14", labelTop: "Years of", labelBottom: "Experience" },
  { value: "50+", labelTop: "Project", labelBottom: "Completed" },
  { value: "1.5K", labelTop: "Happy", labelBottom: "Clients" },
  { value: "14", labelTop: "Years of", labelBottom: "Experience" },
];

const DigitContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-[45px] h-[60px] overflow-hidden flex justify-center items-center">
    {children}
  </div>
);

const AnimatedDigit = ({
  digit,
  delay,
  reverse,
}: {
  digit: string;
  delay: number;
  reverse?: boolean;
}) => {
  const digits = "0123456789".split("");
  const [currentDigit, setCurrentDigit] = useState("0");
  const [isAnimating, setIsAnimating] = useState(true);
  const animationRef = useRef<number | null>(null);
  const targetDigit = parseInt(digit);
  const isNumber = !isNaN(targetDigit);

  useEffect(() => {
    if (!isNumber) return;

    let startTime: number;
    let iterations = 0;
    const totalDuration = 2000;
    const startDelay = delay * 150;
    const slowDownPoint = 0.7;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime - startDelay;

      if (elapsed < 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / totalDuration, 1);

      if (progress < slowDownPoint) {
        const fastSpeed = 80;
        iterations = Math.floor(elapsed / fastSpeed);
        setCurrentDigit(
          digits[reverse ? (10 - (iterations % 10)) % 10 : iterations % 10]
        );
      } else {
        const slowProgress = (progress - slowDownPoint) / (1 - slowDownPoint);
        const easedProgress = easeOutQuad(slowProgress);

        const currentPos = reverse
          ? (10 - (iterations % 10)) % 10
          : iterations % 10;

        let pathToTarget;
        if (reverse) {
          pathToTarget =
            currentPos <= targetDigit
              ? currentPos + (10 - targetDigit)
              : currentPos - targetDigit;
        } else {
          pathToTarget =
            currentPos <= targetDigit
              ? targetDigit - currentPos
              : 10 - currentPos + targetDigit;
        }

        const progressAlongPath = Math.floor(easedProgress * pathToTarget);
        const newDigit = reverse
          ? (currentPos - progressAlongPath + 10) % 10
          : (currentPos + progressAlongPath) % 10;

        setCurrentDigit(digits[newDigit]);

        if (progress > 0.95) {
          setCurrentDigit(digit);
          setIsAnimating(false);
          return;
        }
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentDigit(digit);
        setIsAnimating(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [digit, delay, isNumber, reverse]);

  const easeOutQuad = (t: number) => t * (2 - t);

  return (
    <DigitContainer>
      <motion.div
        key={currentDigit}
        initial={{ y: reverse ? "-100%" : "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: reverse ? "100%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`absolute w-full text-center items-center text-white text-[65px] font-medium ${
          isAnimating ? (reverse ? "mt-40" : "mb-40") : ""
        }`}
      >
        {isNumber ? currentDigit : digit}
      </motion.div>
    </DigitContainer>
  );
};

const AnimatedCounter = () => {
  return (
    <div className="max-w-[calc(1440px-20vw)] w-[80vw] flex justify-between items-center bg-[#0A0314] pt-12 pb-20 text-white">
      {counterData.map((item, index) => (
        <div key={index} className="flex justify-start items-center gap-4">
          <div className="flex items-end">
            {item.value.split("").map((char, i) => (
              <React.Fragment key={i}>
                {char.match(/\d/) ? (
                  <AnimatedDigit
                    digit={char}
                    delay={i}
                    reverse={i === 0} // First digit rolls in reverse
                  />
                ) : (
                  <DigitContainer>
                    <span className="text-white text-[65px] font-medium">
                      {char}
                    </span>
                  </DigitContainer>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="text-justify text-[15px] font-medium text-gray-400 tracking-wider">
            <div>{item.labelTop}</div>
            <div>{item.labelBottom}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedCounter;
