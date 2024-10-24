import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useGeneralContext } from "@/context/context";

interface TextProps {
    text: string;
    setSlideComplete?: React.Dispatch<React.SetStateAction<boolean>>;
    reverse?:boolean,
    activated?:boolean
}

const SlidingText: React.FC<TextProps> = ({ text, setSlideComplete,
reverse,activated }) => {
    // Reference to the target element to track scroll position
    const targetRef = useRef(null);

    const {isDesktop} = useGeneralContext()
    
    // State to track when slide is complete
    const [slideComplete, setLocalSlideComplete] = useState(false);

    // Get scroll progress relative to the targetRef
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"], // Adjust these offsets as needed
    });

    // Transform scroll progress to x position, scale, and opacity
    const x = useTransform(scrollYProgress, [0, isDesktop ? 0.8 : 0.6], [!reverse ? 350 : -350, 0]); // Adjust as needed
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.55], [0, 0.0, 1]);

    // Monitor changes in the `x` value and set `slideComplete` to true when x reaches 0
    useMotionValueEvent(x,"change",(latest)=>{
        if(latest === 0){
            setLocalSlideComplete(true)
            if(setSlideComplete){
                console.warn('slide should initial')
                setSlideComplete(true)
            }
           
        }
        else {
            setLocalSlideComplete(false)
            if(setSlideComplete){
                console.error('slide complete is set to false')
                setSlideComplete(false)
            }
          
        }
    })

    return (
       
            <motion.h2
            ref={targetRef}
                className="block text-center font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-3xl md:text-5xl mb-8 md:pl-12 pb-4"
                // style={!slideComplete ? { x, opacity } : {}} // Apply the animated styles
                style={{ x, opacity }}
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
                        : {
                            backgroundImage: 'linear-gradient(to bottom, #FFFFFF, #D1D5DB)'
                        }
                }
            >
                {text}
            </motion.h2>
       
    );
};

export default SlidingText;