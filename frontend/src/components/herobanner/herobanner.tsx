import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { laptop3d, coloredLaptop } from '@/data/data';
import { useGeneralContext } from "@/context/context";
import brain from '../../../public/media/no-bg-brain.webp';
import { motion, AnimatePresence } from "framer-motion";
import { lerp } from 'three/src/math/MathUtils';
import {Vector3} from 'three'

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
  
  // State for scale and floating effect
  const [scale, setScale] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [floatY, setFloatY] = useState(0); // State to control Y position for floating

  useEffect(() => {
    // Animate the scale to 1 over 1 second
    const scaleInterval = setInterval(() => {
      setScale((prevScale) => {
        if (prevScale >= 1) {
          clearInterval(scaleInterval);
          setIsAnimating(false);
          return 1;
        }
        return prevScale + 0.05;
      });
    }, 50);

    return () => clearInterval(scaleInterval);
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      // Calculate a new Y position using a sine wave for a floating effect
      const newY = Math.sin(clock.getElapsedTime()) * 1.5; // Adjust amplitude for subtlety
      setFloatY(newY);

      // Only animate the scale if it's still scaling up
      if (isAnimating) {
        ref.current.scale.set(scale, scale, scale);
      }

      // Apply the floating effect by adjusting the Y position
      ref.current.position.y = 5 + floatY; // Original Y position (5) + floating effect
    }
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={new Vector3(scale, scale, scale)}
      position={[0, 5, 0]} // Initial position
      rotation={[21, Math.PI, 0]} // Initial rotation
    />
  );
};


const CameraControls = () => {
  const { camera } = useThree();
  const { isMobile } = useGeneralContext();
  useEffect(() => {
    // Set initial camera position and zoom
    camera.position.set(0,50, isMobile? 80 : 120); // Adjust as needed
    camera.lookAt(0, 0, 0); // Ensure the camera looks at the model
  }, [camera]);

  return null; // No visual representation needed
};

const Herobanner: React.FC<HerobannerProps> = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isMobile } = useGeneralContext();

  return (
    <section className="w-[95%] mx-auto flex flex-col flex-col-reverse overflow-hidden relative sm:h-[80vh] sm:flex-row sm:flex-row-reverse rounded-lg relative">
      <section className="relative w-full h-full sm:w-[50vw] mt-auto sm:block">
        <h2 className="text-3xl px-4 sm:text-3xl sm:text-4xl font-semibold text-center mb-4 animate-gradient">
          FocusFlow Software
        </h2>
        <img className="w-[50vw] max-w-[200px] max-h-[200px] mx-auto object-cover rounded-xl" src={brain.src} alt='le brain' />
        <h2 className="text-left px-3 text-4xl my-4 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent font-semibold">
          Stunning websites, delivered quickly
        </h2>
        <p className="text-left px-3 text-lg">
          FocusFlow Software specializes in delivering unique, attention-grabbing websites with the latest technologies all in a quick manner to elevate your status and take your brand to the next level.
          <br /><br />
          <button className="bg-[#00bfff] p-3 rounded-lg">
            Win Today
          </button>
        </p>
      </section>
      <section className=" sm:block sm:w-[50vw] flex justify-center items-center flex-col sm:h-[80vh] mb-8">
        <h1 className="text-3xl px-4 sm:text-3xl sm:text-4xl font-semibold text-center mb-4 animate-gradient">
          Creative and Custom Web Design in Halifax
        </h1>
        <Canvas className="w-full h-full flex items-start">
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
