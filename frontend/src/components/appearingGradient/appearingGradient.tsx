import React, { useState, useEffect, useCallback } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import { useIntersectionObserver } from "../intersectionObserver/intersectionObserver";

const AppearingGradient = ({ text, subText }: { text: string; subText: string }) => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };

    const [inView, setInView] = useState(false);
    const componentRef = useIntersectionObserver(setInView, options);
    const [scope, animate] = useAnimate();

    const [halfwayDone, setHalfwayDone] = useState(false)
    const [lineComplete, setLineComplete] = useState(false)
    const [startSpring, setStartSpring] = useState(false)

    const isInView = useInView(scope)

    useEffect(()=> {
        if(halfwayDone){
            console.log('halfway done!')
        }
    },[halfwayDone])

    const handleAnimation = async () => {
        if (lineComplete) return;
        // Ensure the line element exists before animating
        const lineElement = document.getElementById(`${text}-line`);
        const coverElement = document.getElementById(`${text}-cover`);
        const subHeaderElement = document.getElementById(`${text}-subHeader`);
        if (lineElement && coverElement && subHeaderElement) {

            await animate(lineElement, {
                width: '100vw',
                height: '50px',
     
            
               
            });

    
            // await animate(headerElement, {
            //     y:0, opacity:1
            // },)
            setStartSpring(true)
            await animate(coverElement,{opacity:0},{duration:1.5}, )

            

            
            setLineComplete(true)

            await animate(lineElement, {
                height:'0px'
            })

            await animate(subHeaderElement, {opacity:1,
            animationDelay:2}
                )

           
        }
    };

    useEffect(() => {
        if (isInView) {
            handleAnimation();
        }
    }, [inView, animate, text]); // Add text to dependencies to avoid stale closures

    return (
        <div ref={componentRef}>
            <section ref={scope}>
                <div
                    id={`${text}-line`}
                    className={`w-[0vw] mx-auto relative z-[3]
                    h-[0px] transition-all bg-gradient-to-b from-[#a6e9ff] to-[#00bfff]
                    shadow-lg shadow-[#00bfff]
                    rounded-b-full`}
                    style={{
                        transition: `width 0.2s, height ${lineComplete ? '2s 2s' : '0.2s'}, border-bottom 1.1s ease-in`,
                       
                    }}
                    
                />
                <div className="relative">
                    <div id={`${text}-cover`}
                    className="absolute z-[2]
                    bg-black rounded-b-full
                    h-[120px]
                    w-[60vw]
                    -translate-y-[0.75rem]
                    left-1/2 -translate-x-1/2
                    top-0
       
                   
                    "
                    
                    />
                   
              
                <motion.h2
                    id={`${text}-header`}
                    className="mt-6 text-center font-semibold text-3xl sm:text-5xl md:text-6xl
                    bg-gradient-to-r from-[#00e0ff] via-[#00a2e4] to-[#00e0ff] pb-3
                    relative z-[2]
    bg-clip-text text-transparent "
    initial={{ translateY: "-2rem", opacity: 0 }} // Initial position and opacity
    animate={startSpring ? { translateY: "0rem", opacity: 1 } : {}} // Animation when in view
    transition={{
        type: "spring", // Use spring transition
        stiffness: 500, // Control the stiffness of the spring
        damping: 7, // Control the damping of the spring
    }} 
                
            
                >
                    {text}
                </motion.h2>
                <h3 id={`${text}-subHeader`} 
                className="text-center mt-4 text-xl
                sm:text-2xl md:text-3xl
                opacity-0"
                
                >
                    {subText}
                </h3>
                </div>
            </section>
        </div>
    );
};

export default AppearingGradient;
