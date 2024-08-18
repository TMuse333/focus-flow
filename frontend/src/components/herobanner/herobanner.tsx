import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { laptop3d } from '@/data/data';
import { useGeneralContext } from "@/context/context";

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
  const {isMobile} = useGeneralContext()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    // Adjust the Y position to create a floating effect
    ref.current.position.y = -0.5 + Math.sin(elapsedTime) * 0.1;
  });

  return (
    <primitive 
      ref={ref}
      object={gltf.scene} 
      scale={0.8}
      rotation={[-5.5, Math.PI, 0]}
      position={!isMobile ? [0, -0.5, 0] : [0,0.5,0]}  
    />
  );
};

const Herobanner: React.FC<HerobannerProps> = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const {isMobile} = useGeneralContext()


  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [sections.length]);

  return (
    <section className="w-[95%] mx-auto flex flex-col flex-col-reverse overflow-x-hidden relative h-[80vh]
        md:flex-row md:flex-row-reverse md:border md:border-white rounded-lg relative">
      <section className="relative w-full h-full  md:w-[50vw] mt-auto
      
      ">
        {sections.map((section, index) => (
          <div key={index}
               className={`absolute w-full h-full transition-opacity duration-1000 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}>
                 <h2 key={index} className="text-white text-center w-full my-4 text-xl sm:text-2xl md:text-3xl">
              {section.heading}
            </h2>
            <img className="w-[50vw] mx-auto object-cover rounded-xl
             h-[85%]" src={section.src} alt={section.alt} />
           
          </div>
        ))}
      </section>
      <section className="md:w-[50vw] flex justify-center items-center flex-col
      h-[80vh]">
        <h1 className="text-3xl px-4 sm:text-3xl md:text-4xl font-semibold text-center mb-4 animate-gradient">
          Creative and Custom Web Design in Halifax
        </h1>
        <Canvas className="w-full h-full
      
        
        ">
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Model url={laptop3d} />
          <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
        {isMobile && (
            <button className="bg-[#00bfff]
            p-3 rounded-lg -translate-y-[3rem]">
                Win Today
            </button>
        )}
      </section>
    </section>
  );
};

export default Herobanner;
