"use client";

import { useRef } from "react";
import bottom from '../../../public/media/mountain-bg-bottom.webp';
import full from '../../../public/media/mountain-bg-full.webp';
import q3 from '../../../public/media/q3-words.webp';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { useGeneralContext } from "@/context/context";

export default function MultiLayerParallax() {
  const ref = useRef(null);

  const {isMobile} = useGeneralContext()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-30%", "200%"]);
  const textY2 = useTransform(scrollYProgress, [0, 1], ["-180%", "200%"])

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.div
        style={{ y: !isMobile ?  textY : "-40%" }}
        className="relative z-[200] "
      >
       <h1 className="text-4xl 
           sm:text-6xl md:text-8xl font-semibold text-center
           mb-4 animate-gradient">Focus Flow Software</h1>
        <motion.h2
       
       className="text-white text-2xl 
       h-min "
     >
       Elevating Brands with discipline and creativity
 
      
     </motion.h2>
     <Link href='lets-work'>

     
     <motion.button className="relative bg-[#00bfff] p-3 rounded-xl mt-4
       hover:text-[#00bfff] hover:bg-white z-[200]
       hover:scale-[1.05] transition-all
       mt-5">
         Win today
       </motion.button>
       </Link>
      </motion.div>


     

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${full.src})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y:!isMobile ?  backgroundY : undefined,
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
  );
}
