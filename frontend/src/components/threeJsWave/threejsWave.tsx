import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import logo from '../../../public/media/focusFlow-brain-nobg.webp'
import { motion } from 'framer-motion';
const ThreeJSWave: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const frameId = useRef<number | null>(null);

 

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Create waves
    const createWaveMesh = (amplitude: number, frequency: number, color: number, segments: number, lineWidth: number) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(segments * 3);

      for (let i = 0; i < segments; i++) {
        positions[i * 3] = (i / segments) * 20 - 10; // x, span the entire width
        positions[i * 3 + 1] = 0; // y
        positions[i * 3 + 2] = 0; // z
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.LineBasicMaterial({ color, linewidth: lineWidth });
      const line = new THREE.Line(geometry, material);

      return { line, amplitude, frequency, offset: 0 };
    };

    const waves = [
      createWaveMesh(1, 0.03, 0x00bfff, 200, 5), // Sky Blue
      createWaveMesh(0.8, 0.06, 0x4b0082, 200, 5), // Indigo
      createWaveMesh(0.6, 0.09, 0x8a2be2, 200, 5), // Blue Violet
      createWaveMesh(0.9, 0.045, 0x483d8b, 200, 5), // Dark Slate Blue
      createWaveMesh(0.75, 0.07, 0x0000ff, 200, 5), // Blue
    ];

    waves.forEach(wave => scene.add(wave.line));

    const animate = () => {
        waves.forEach(wave => {
          const positions = wave.line.geometry.attributes.position.array as Float32Array;
          for (let i = 0; i < positions.length / 3; i++) {
            positions[i * 3 + 1] = Math.sin(i * wave.frequency + wave.offset) * wave.amplitude;
          }
          wave.line.geometry.attributes.position.needsUpdate = true;
          wave.offset += 0.005; // Reduced speed for slower movement
        });
      
        renderer.render(scene, camera);
        frameId.current = requestAnimationFrame(animate);
      };
      

    animate();

    const handleResize = () => {
      if (container) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (frameId.current !== null) {
        cancelAnimationFrame(frameId.current);
      }
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <header className='w-screen h-screen md:h-screen'>

<section className='flex flex-col md:flex-row
'>


<div className='flex flex-col
md:items-center justify-center'>


<motion.h1 
whileInView={{
    backgroundImage: [
        "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)", // Default colors
        "linear-gradient(to right, #33e8ff, #33b5d6, #33e8ff)", // Brighter colors
        "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)",  // Back to default
    ],
    transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3, // Control how fast the gradient oscillates
    },
}}
className='text-3xl font-semibold
bg-clip-text text-transparent
bg-gradient-to-b from-white to-gray-300 pl-4'>Artist at heart</motion.h1>
<p className='px-4 mt-4'>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem molestias obcaecati animi tenetur dicta. Vel tempore explicabo odio unde ducimus!
</p>
</div>
<Image
src={logo}
alt='THe focusFlow logo'
width={600}
height={1300}
className='w-[40vw] object-contain relative 
z-[3] max-w-[445px] max-h-[445px]'

/>
</section>
       
      <div className='w-screen absolute bottom-0 h-[50vh]
      z-[22]' ref={containerRef}></div>
    </header>
  );
};

export default ThreeJSWave;
