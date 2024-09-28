"use client"

import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { laptop3d, coloredLaptop } from '@/data/data';
import { useGeneralContext } from "@/context/context";
import brain from '../../../public/media/focusFlow-brain-nobg.webp';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { lerp } from 'three/src/math/MathUtils';
import {Vector3} from 'three'
import Link from "next/link";


interface HerobannerProps {
  sections: {
    src: string;
    alt: string;
    heading: string;
  }[];
}

const Model: React.FC<{ url: string }> = ({ url }) => {
  const gltf: any = useGLTF(url);
  const ref = useRef<any>();
  const { isMobile } = useGeneralContext();

  // State for floating effect
  const [floatY, setFloatY] = useState(0); // State to control Y position for floating
  const [scale, setScale] = useState(0.1); // Initialize scale at 0.1
  const targetScale = isMobile ? 1.2 : 1.3; // The target scale you want to reach
  const lerpFactor = 0.05; // Factor for lerping both scale and rotation

  const targetRotation = [
    (14.5 + 7 ) , // Target rotation around the x-axis (converted to radians)
    Math.PI , // Target rotation around the y-axis (180 degrees)
    0, // No rotation on the z-axis
  ];

  useFrame(({ clock }) => {
    if (ref.current) {
      // Floating effect
      const newY = Math.sin(clock.getElapsedTime()) * 1.5;
      setFloatY(newY);

      // Smooth scaling from 0.1 to 1
      const newScale = scale + (targetScale - scale) * lerpFactor;
      setScale(newScale);
      ref.current.scale.set(newScale, newScale, newScale);

      // Smooth rotation towards the target rotation
      ref.current.rotation.x += (targetRotation[0] - ref.current.rotation.x) * lerpFactor;
      ref.current.rotation.y += (targetRotation[1] - ref.current.rotation.y) * lerpFactor;
      ref.current.rotation.z += (targetRotation[2] - ref.current.rotation.z) * lerpFactor;

      // Ensure the model ends up in its correct Y position
      ref.current.position.y = 5 + floatY;
    }
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={[0, -50, 20]} // Initial position
      rotation={[0, 0, 0]} // Start rotation at 0, 0, 0
    />
  );
};










const CameraControls = () => {
  const { camera } = useThree();
  const { isMobile } = useGeneralContext();
  useEffect(() => {
    // Set initial camera position and zoom
    camera.position.set(0,-59, isMobile? 80 : 160); // Adjust as needed
    camera.lookAt(0, 0, 0); // Ensure the camera looks at the model
  }, [camera]);

  return null; // No visual representation needed
};

const Herobanner: React.FC<HerobannerProps> = ({ sections }) => {

  const { isMobile } = useGeneralContext();

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

  return (
    <section className="w-[95%] 
     mx-auto flex flex-col flex-col relative  sm:flex-row sm:flex-row-reverse rounded-lg relative
     z-[3] "
     >
      {/* <section className="relative w-full h-full sm:w-[50vw] mt-auto sm:block pl-6">
      
      </section> */}
      <section className=" sm:block w-full flex justify-center items-center flex-col  mb-8
      ">
        <h1 className="text-sm px-4 sm:text-md mb-4 mt-3
       
          font-semibold text-center mb-4 animate-gradient">
          Creative and Custom Web Design in Halifax
        </h1>
        <h2 className="
        animate-gradient  font-semibold
        text-4xl mb-4
        sm:text-5xl md:text-6xl">
          FocusFlow Software
        </h2>
        <p className="text-left px-3 text-sm relative z-[3]">
        At FocusFlow Software, we specialize in web design in Halifax, Nova Scotia, <span className="font-bold">offering custom web design services that are both innovative
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
        <Canvas className="w-full  flex items-start
        mt-[2rem]
        sm:mt-auto z-[4] relative
        md:bg-transparent rounded-xl
        pb-[6rem]
        sm:pb-[10rem] h-[40vh]
        min-h-[300px] max-h-[600px] "
        style={{
          background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)'
        }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <CameraControls /> 
          <Model url={coloredLaptop} />
          <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
     
      </section>
    </section>
  );
  
};

export default Herobanner;