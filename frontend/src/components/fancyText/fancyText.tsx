import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {useIntersectionObserver} from "../intersectionObserver/intersectionObserver";

interface TextProp {
  text: string;
  startLeft: boolean;
}

export const SlideFlip: React.FC<TextProp> = ({ text, startLeft }) => {
  const [inView, setInView] = useState(false);
  const controls = useAnimation();
  const textRef = useRef<HTMLHeadingElement>(null);

  const options = {
    root: null,
    rootMargin: "-200px",
    threshold: 0.1,
  };

  const offset = 100

  useIntersectionObserver(setInView, options);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const startScroll = rect.top - windowHeight;
        const endScroll = rect.bottom;

        if (startScroll < 0 && endScroll > 0) {
          const progress = (windowHeight - rect.top) / windowHeight;
          const newTranslateX = startLeft ? -offset * (1 - progress) : offset * (1 - progress);

          // Ensure text stays visible when centered
          if (Math.abs(newTranslateX) < 10) {
            controls.start({ x: 0 });
          } else {
            controls.start({ x: newTranslateX });
          }
        } else if (rect.top >= windowHeight) {
          controls.start({ x: startLeft ? -offset : offset });
        } else if (rect.bottom <= 0) {
          controls.start({ x: 0 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startLeft, controls]);

  return (
    <motion.h1
      ref={textRef}
      className="ml-auto mr-auto text-white text-7xl"
      animate={controls}
      initial={{ x: startLeft ? -offset : offset }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {text}
    </motion.h1>
  );
};
