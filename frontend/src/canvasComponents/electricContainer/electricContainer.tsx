import React, { useRef, useState, useEffect } from "react";
import {motion, AnimatePresence} from 'framer-motion'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Props {
    data:{
        src:string,
        alt:string,
        title:string,
        description:string
    }[]
}

const ElectricContainer:React.FC<Props> = ({
    data
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

    const increaseIndex = () => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    // Function to decrease the index
    const decreaseIndex = () => {
        setSelectedIndex((prevIndex) => 
            (prevIndex - 1 + data.length) % data.length
        );
    };


    return (
        <section className="relative  text-gray-200 bg-gradient-to-b from-[#00bfff] to-[#679aab] w-[95vw] mx-auto max-w-[900px]
         rounded-2xl overflow-hidden h-[90vh] max-h-[500px]">
                    
              <AnimatePresence mode="wait">
              <h2 className="text-2xl sm:text-3xl md:text-4xl pt-4">title here</h2>
                <motion.img
                    key={selectedIndex}  // Triggers AnimatePresence animation on change
                    src={data[selectedIndex].src}
                    alt="brain"
                    className="w-[50%] mx-auto object-contain my-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                />
            </AnimatePresence>
            
            <motion.p 
             key={selectedIndex}  // Triggers AnimatePresence animation on change
           
           
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, scale: 0.9 }}
             transition={{ duration: 0.5,
            delay:1 }}
            className="pb-8 ">{data[selectedIndex].description}</motion.p>
          
            <section className="absolute top-1/2 left-0 z-[3] w-full 
            flex justify-evenly items-end text-black">
                  <button className=" 
             mr-auto "
             onClick={decreaseIndex}>
            <IoIosArrowBack
            size={48}
            />
            </button>
            <button className=" 
             ml-auto"
             onClick={increaseIndex}>
            <IoIosArrowForward
            size={48}/>
            </button>
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
