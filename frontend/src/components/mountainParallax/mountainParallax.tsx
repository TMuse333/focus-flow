"use client";

import { useRef } from "react";
import bottom from '../../../public/media/mountain-bg-bottom.webp';
import full from '../../../public/media/mountain-bg-full.webp';
import Image from "next/image";
import {useScroll, useTransform, motion } from 'framer-motion';

import Link from "next/link";
// import { useGeneralContext } from "@/context/context";
import Head from "next/head";
import dynamic from "next/dynamic";
import { HTMLMotionProps } from 'framer-motion';

// Dynamically import motion components from framer-motion
const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), { ssr: false }) as React.ComponentType<HTMLMotionProps<'h2'>>;
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false }) as React.ComponentType<HTMLMotionProps<'div'>>;

export default function MultiLayerParallax() {
  const ref = useRef(null);

  const MotionImage = motion(Image)

  // const {isMobile} = useGeneralContext()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) 
  const textY = useTransform(scrollYProgress, [0, 1], ["-30%", "200%"]) 


  return (
    <>
  <Head>
  <link rel="canonical" href="https://www.focusflowsoftware.com/best-web-design-halifax" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>

    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <MotionDiv
        style={{ y: textY}}
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

     
    
       </Link>
      </MotionDiv>


     

      <MotionImage
      priority
        className="absolute inset-0 z-0  
        w-full object-cover h-full"
        // style={{
        //   backgroundImage: `url(${full.src})`,
        //   backgroundPosition: "bottom",
        //   backgroundSize: "cover",
        //   y:backgroundY
        // }}
        src={full.src}
        width={600}
        height={1300}
        alt='A mountain of greatness to represent creative web design halifax'
        style={{
          y:backgroundY
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 100vw"
      />

<Image
  src={bottom.src}
  alt="Hero Banner"
  className="object-cover z-[195]"
  layout="fill"
  priority
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 100vw"
  
  // placeholder="blur"
  // blurDataURL={desktopImage.lowResSrc} // Low-res image URL for blur effect
/>

    </div>
    </>
  );
}
