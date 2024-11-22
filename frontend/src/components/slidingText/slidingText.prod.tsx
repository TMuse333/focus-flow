import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextProps {
    text: string;
    setSlideComplete?: React.Dispatch<React.SetStateAction<boolean>>;
    subText?:string
    toggle?:boolean
}

const SlidingText: React.FC<TextProps> = ({ text, setSlideComplete ,
    subText,toggle}) => {
    // Reference to the target element to track scroll position
    const targetRef = useRef(null);
    
    // State to track when slide is complete
    const [slideComplete, setLocalSlideComplete] = useState(false);

    // Get scroll progress relative to the targetRef
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"], // Adjust these offsets as needed
    });

    // Transform scroll progress to x position, scale, and opacity
    const x = useTransform(scrollYProgress, [0, 0.7], [!slideComplete ? 350 : 0, 0]); // Adjust as needed
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.55],!slideComplete ? [0, 0.0, 1] : [1,1,1]);

    // Monitor changes in the `x` value and set `slideComplete` to true when x reaches 0
    useEffect(() => {
        const unsubscribe = x.on("change", (latestX) => {
            if (latestX === 0 && !slideComplete) {
                setLocalSlideComplete(true);
                console.warn('slide complete')
                if (setSlideComplete) setSlideComplete(true);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [x, slideComplete, setSlideComplete]);

    return (
        <div ref={targetRef}>
            <motion.h2
                className=" bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
                text-3xl sm:text-4xl font-semibold text-center relative transition-colors"
                style={
                   !slideComplete ? { x, opacity }
                : {}} // Apply the animated styles
                // Apply the gradient flow when slideComplete is true
                whileInView={
                    slideComplete
                        ? {
                              backgroundImage: [
                                  "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)", // Default colors
                                  "linear-gradient(to right, #33e8ff, #33b5d6, #33e8ff)", // Brighter colors
                                  "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)",  // Back to default
                              ],
                              transition: {
                                  repeat: Infinity,
                                  repeatType: "mirror",
                                  duration: 3, // Control how fast the gradient oscillates
                              },
                          }
                        : {}
                }
            >
                {text}
            </motion.h2>
            {subText && (
                <motion.h3
                id={`subtext-${subText}`}
                className={`${slideComplete ? 
                'opacity-1' : 'opacity-0'}
                mt-4 text-center transition-opacity
                text-xl sm:text-2xl`}>
                    {subText}
                </motion.h3>
            )}
        </div>
    );
};

export default SlidingText;