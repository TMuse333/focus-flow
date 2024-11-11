"use client"

import React, { useRef, useState, useEffect } from "react";
import {motion, AnimatePresence} from 'framer-motion'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import logo from '../../../public/media/focusFlow-brain-nobg.webp'
import Image from 'next/image'

interface Props {
 title:string,
 description:string
}

const ElectricContainer:React.FC<Props> = ({
    title,description
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const  [waveAmplitude, setWaveAmplitude] = useState(2)

    useEffect(() => {
        const interval = setInterval(() => {
            setWaveAmplitude(Math.random() * (20 - 10) + 1); // Random amplitude between 1 and 4
        }, 1000); // Update every second

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const c = canvas.getContext("2d");
        if (!c) return;
    
        const width = canvas.width = canvas.offsetWidth;
        const height = canvas.height = canvas.offsetHeight;
    
        let offset = 0;
    
        const drawElectricArc = () => {
            c.clearRect(0, 0, width, height);
    
            // Style for the electric outline
            c.lineWidth = 20;
            c.strokeStyle = "#e0f7ff";
            c.shadowBlur = 50;
            c.shadowColor = "#e0f7ff";
    
            // Define path for rounded rectangle with wavy effect
            const radius = 25; // Radius for the rounded corners
           ; // Amplitude of the waviness
            const waveFrequency = 0.05; // Frequency of the waviness
    
            c.beginPath();
    
            // Top edge with waviness
            for (let x = radius; x < width - radius; x++) {
                const yOffset = Math.sin((x + offset) * waveFrequency) * waveAmplitude;
                c.lineTo(x, yOffset);
            }
    
            // Top-right corner
            c.quadraticCurveTo(width, 0, width, radius);
    
            // Right edge with waviness
            for (let y = radius; y < height - radius; y++) {
                const xOffset = Math.sin((y + offset) * waveFrequency) * waveAmplitude;
                c.lineTo(width + xOffset, y);
            }
    
            // Bottom-right corner
            c.quadraticCurveTo(width, height, width - radius, height);
    
            // Bottom edge with waviness
            for (let x = width - radius; x > radius; x--) {
                const yOffset = Math.sin((x + offset) * waveFrequency) * waveAmplitude;
                c.lineTo(x, height - yOffset);
            }
    
            // Bottom-left corner
            c.quadraticCurveTo(0, height, 0, height - radius);
    
            // Left edge with waviness
            for (let y = height - radius; y > radius; y--) {
                const xOffset = Math.sin((y + offset) * waveFrequency) * waveAmplitude;
                c.lineTo(xOffset, y);
            }
    
            // Top-left corner
            c.quadraticCurveTo(0, 0, radius, 0);
    
            c.closePath();
            c.stroke();
    
            offset += 0.5; // Speed of the wave animation
        };
    
        const animate = () => {
            drawElectricArc();
            requestAnimationFrame(animate);
        };
    
        animate();
    }, []);
    

    
    const [selectedIndex, setSelectedIndex] = useState(0)

   


    return (
        <section className="relative  text-white bg-gradient-to-b from-[#00bfff] to-[#679aab] w-[95vw] mx-auto max-w-[900px]
         rounded-2xl overflow-hidden h-[90vh] max-h-[500px]">
                    
                    <section
    className='mx-auto max-w-[1200px]'
    style={{
      background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)'
    }}
    >

  

    <section className='flex flex-col w-screen w-full 
    px-4 justify-center items-center mx-auto '>
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-white">
        , &nbsp; written by Thomas Musial, owner of
        FocusFlow Software</p>
    </section>
      
        <Image
        src={logo}
        alt='The FocusFlow logo for web design in halifax'
        width={600}
        height={1300}
        className='w-[40vw] mx-auto object-contain max-w-[460px] max-h-[460px]'
        />

        <section className='p-4'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-2'>
           {title}</h2>
          <p>
           {description}
          </p>
        </section>

        </section>

            {/* Canvas overlay for electric effect */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 rounded-2xl pointer-events-none
              w-full h-full max-w-[900px] max-h-[500px]"
                style={{ zIndex: 1 }}
            ></canvas>
        </section>
    );
};

export default ElectricContainer;
