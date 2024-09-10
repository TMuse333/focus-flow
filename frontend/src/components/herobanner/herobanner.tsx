import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { laptop3d, coloredLaptop } from '@/data/data';
import { useGeneralContext } from "@/context/context";
import brain from '../../../public/media/focusFlow-brain-nobg.webp';
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

  // State for floating effect
  const [floatY, setFloatY] = useState(0); // State to control Y position for floating
  const [scale, setScale] = useState(0.1); // Initialize scale at 0.1
  const targetScale = isMobile ? 1.2 : 1; // The target scale you want to reach
  const lerpFactor = 0.05; // Factor for lerping both scale and rotation

  const targetRotation = [
    (14.5 ) , // Target rotation around the x-axis (converted to radians)
    Math.PI , // Target rotation around the y-axis (180 degrees)
    0.1, // No rotation on the z-axis
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
      position={[0, 5, 0]} // Initial position
      rotation={[0, 0, 0]} // Start rotation at 0, 0, 0
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
      <section className=" sm:block sm:w-[50vw] flex justify-center items-center flex-col  h-[60vh] md:h-[80vh] mb-8">
        <h1 className="text-3xl px-4 sm:text-3xl sm:text-4xl font-semibold text-center mb-4 animate-gradient">
          Creative and Custom Web Design in Halifax
        </h1>
        <Canvas className="w-full h-full flex items-start
        bg-gray-200 bg-opacity-[0.1] md:bg-transparent rounded-xl ">
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