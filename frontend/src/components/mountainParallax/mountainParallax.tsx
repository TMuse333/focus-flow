"use client";

import { useRef } from "react";
import bottom from '../../../public/media/mountain-bg-bottom.webp';
import full from '../../../public/media/mountain-bg-full.webp';

import {useScroll, useTransform } from 'framer-motion';

import Link from "next/link";
import { useGeneralContext } from "@/context/context";
import Head from "next/head";
import dynamic from "next/dynamic";
import { HTMLMotionProps } from 'framer-motion';

// Dynamically import motion components from framer-motion
const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), { ssr: false }) as React.ComponentType<HTMLMotionProps<'h2'>>;
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false }) as React.ComponentType<HTMLMotionProps<'div'>>;

export default function MultiLayerParallax() {
  const ref = useRef(null);

  const {isMobile} = useGeneralContext()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-30%", "200%"]);


  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.focusflowsoftware.com/best-web-design-halifax" />
      </Head>
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <MotionDiv
        style={{ y: !isMobile ?  textY : textY }}
        className="relative z-[20] "
      >
       <h1 className="text-4xl mx-auto
           sm:text-6xl md:text-5xl md:w-[80%] px-4 font-semibold text-center
           mb-4 animate-gradient">Creative Web Design in Halifax by FocusFlow Software</h1>
        <MotionH2
       
       className="text-white text-2xl mx-auto text-center
       h-min "
     >
       Scroll Down to see why we have the most creative web design in halifax
 
      
     </MotionH2>
     <Link href='lets-work'>

     
     {/* <motion.button className="relative bg-[#00bfff] p-3 rounded-xl mt-4
       hover:text-[#00bfff] hover:bg-white z-[200]
       hover:scale-[1.05] transition-all
       mt-5">
         Win today
       </motion.button> */}
       </Link>
      </MotionDiv>


     

      <MotionDiv
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${full.src})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y:!isMobile ?  backgroundY : backgroundY,
        }}
      />

      <div
        className="absolute inset-0 z-[195]"
        style={{
          backgroundImage: `url(${bottom.src})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
    </>
  );
}
