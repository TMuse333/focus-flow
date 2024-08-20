import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { laptop3d, coloredLaptop } from '@/data/data';
import { useGeneralContext } from "@/context/context";
import brain from '../../../public/media/no-bg-brain.webp';
import { motion, AnimatePresence } from "framer-motion";
import { lerp } from 'three/src/math/MathUtils';

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
    
    // State for scale and rotation
    const [scale, setScale] = useState(0);
    const [rotation, setRotation] = useState([0, 0, 0]);
    const [isAnimating, setIsAnimating] = useState(true);
  
    // useEffect(() => {
    //   // Animate scale from 0 to 0.8
    //   let startTime: number = performance.now();
    //   const duration: number = 1000; // Duration of the scale animation in milliseconds
  
    //   const animate = (time: number) => {
    //     const elapsed = time - startTime;
    //     const progress = Math.min(elapsed / duration, 1); // Ensure progress doesn't exceed 1
  
    //     const newScale = lerp(0, 0.8, progress);
    //     const newRotation = [
    //       lerp(0, -5.5, progress),
    //       lerp(0, Math.PI, progress),
    //       lerp(0, 0, progress),
    //     ];
  
    //     setScale(newScale);
    //     setRotation(newRotation);
  
    //     if (progress < 1) {
    //       requestAnimationFrame(animate);
    //     } else {
    //       setIsAnimating(false); // Stop animating after reaching full scale
    //     }
    //   };
  
    //   requestAnimationFrame(animate);
    // }, []);
  
    // useFrame(({ clock }) => {
    //   if (!isAnimating) {
    //     // Ensure final rotation position after scaling completes
    //     ref.current.rotation.set(-5.5, Math.PI, 0);
    //   } else {
    //     // Apply rotation updates only during scaling animation
    //     ref.current.rotation.set(rotation[0], rotation[1], rotation[2]);
    //   }
      
    //   // Adjust the Y position to create a floating effect
    //   ref.current.position.y = -0.5 + Math.sin(clock.getElapsedTime()) * 0.1;
    // });
  
    return (
      <primitive
  ref={ref}
  object={gltf.scene}
  scale={[1, 1, 1]}
  position={[0, 5, 0]} // Apply the animated scale
  rotation={[21, Math.PI,0]} // Rotate downwards
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
    <section className="w-[95%] mx-auto flex flex-col flex-col-reverse overflow-x-hidden relative md:h-[80vh] md:flex-row md:flex-row-reverse rounded-lg relative">
      <section className="relative w-full h-full md:w-[50vw] mt-auto sm:block">
        <h2 className="text-3xl px-4 sm:text-3xl md:text-4xl font-semibold text-center mb-4 animate-gradient">
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
      <section className="md:block md:w-[50vw] flex justify-center items-center flex-col md:h-[80vh] mb-8">
        <h1 className="text-3xl px-4 sm:text-3xl md:text-4xl font-semibold text-center mb-4 animate-gradient">
          Creative and Custom Web Design in Halifax
        </h1>
        <Canvas className="w-full h-full flex items-start">
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <CameraControls /> {/* Add CameraControls here */}
          <Model url={coloredLaptop} />
          <OrbitControls enablePan={false} enableZoom={true} />
        </Canvas>
        {isMobile && (
          <>
            <p className="text-left px-3 text-lg md:hidden">
              FocusFlow Software specializes in delivering unique, attention-grabbing websites with the latest technologies all in a quick manner to elevate your status and take your brand to the next level.
              <br /><br />
              <button className="bg-[#00bfff] p-3 rounded-lg md:hidden">
                Win Today
              </button>
            </p>
          </>
        )}
      </section>
    </section>
  );
};

export default Herobanner;
