"use client"

import React, { useState, useEffect, useRef } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { useGLTF, OrbitControls } from "@react-three/drei";
// import { coloredLaptop } from '@/data/data';
import { useGeneralContext } from "@/context/context";
import Image from 'next/image'
import { motion, useMotionTemplate, useMotionValue, animate,
useInView } from "framer-motion";
import bg from '../../../public/media/puddle-bg.jpg'
import { useComponentTimeTracker } from "@/lib/componentTracker";

import Link from "next/link";
import brain from '../../../public/media/focusFlow-brain-nobg.webp'

interface HerobannerProps {
  sections: {
    src: string;
    alt: string;
    heading: string;
  }[];
  setTotalPageTime?:React.Dispatch<React.SetStateAction<{name:string,
    time:number}[]>>
  
}


const Herobanner: React.FC<HerobannerProps> = ({ sections,
  setTotalPageTime }) => {



  const COLORS = [
    "#00bfff", 
    '#30a3c9',
    "#5dcff5", 
    "#0080a1", 
    "#3ab7e0", 
    "#00bfff", 
  ];
  
  const color1 = useMotionValue(COLORS[0]);
  const color2 = useMotionValue(COLORS[1]);

  const backgroundImage = useMotionTemplate`linear-gradient(45deg,${color1}, ${color2})`

  const {isMobile} = useGeneralContext()

  useEffect(() => {
    // Animate the colors for the gradient
   
       animate(color1, COLORS, {
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
      });

       animate(color2, COLORS, {
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
      });
    

  
}, []);

const ref = useRef(null)


const inView = useInView(ref,{
  once:false
})

const {totalTimeInView} = useComponentTimeTracker({inView,id:'homepage-herobanner',
setTotalPageTime:setTotalPageTime,
pageTracker:false})

useEffect(() => {
  
    console.log(`Total time spent in Herobanner: ${totalTimeInView} ms`);
  
}, [totalTimeInView]);

  return (
    <section 
    ref={ref}
    id='homepage-herobanner'
    className="w-[95%] 
    
     mx-auto flex flex-col flex-col relative  md:flex-row  rounded-lg relative
     z-[3] max-w-[1200px] md:h-screen text-white"
     style={{
      background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)',
     
    
     }}
     >
      {/* <section className="relative w-full h-full sm:w-[50vw] mt-auto sm:block pl-6">
      
      </section> */}
      <section className=" sm:block w-full flex justify-center items-center flex-col  mb-8
      max-w-[600px] mx-auto
      ">
        <h1 className="text-sm px-4 sm:text-md mb-4 mt-8
        sm:text-md md:text-lg
       
          font-semibold text-center mb-4 animate-gradient">
          Creative and Custom Web Design in Halifax 
        </h1>
      
        <h2 className="
        animate-gradient  font-semibold
        text-4xl mb-4
        sm:text-5xl md:text-6xl">
          FocusFlow Software dev
        </h2>
        <Image src={brain}
            alt='An image of a brain to represent creative web design in halifax'
            width={600}
            height={1300}
            className='mx-auto w-[50vw] object-contain
            max-w-[384px] max-h-[384px]'
            priority
            />
        <p className="text-left px-3 text-sm relative z-[3]
  text-lg sm:text-xl text-white">
         FocusFlow Software specializes in web design based out of Halifax, Nova Scotia, <span className="font-bold">offering custom web design services that are both innovative
          </span> and tailored to your business.
           We are dedicated constantly improving our craft and delivering web page designs that capture your brand and engage your audience, positioning us as <span className='font-bold'>your go-to web designer in Halifax.
          </span>
          <br /><br />
         
        </p>
        <Link
        href='/lets-work'
        passHref
        className="relative z-[15]">

        
         <motion.button
        
         style={{
          backgroundImage
         }}
         whileHover={{
          scale:1.05
      }}
       className="mx-auto mt-8 py-3 px-6  bg-blue-500 text-white rounded-full hover:bg-blue-600 
       shadow-lg shadow-all-around mt-[0rem] mb-[-1rem] relatve z-[15]
       "
         >
           Elevate Your Digital Presence
          </motion.button>
          </Link>

         
           
       
       

      </section>
     
     
    </section>
  );
  
};

export default Herobanner;