import React from 'react';
import dynamic from 'next/dynamic'; // Import dynamic

import Link from 'next/link';
import { HTMLMotionProps,motion } from 'framer-motion';

// Dynamically import motion components from framer-motion
const MotionImg = dynamic(() => import('framer-motion').then(mod => mod.motion.img), {
    ssr: false,
    
  }) as React.ComponentType<HTMLMotionProps<'img'>>;

const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), {
    ssr: false,
  
}) as React.ComponentType<HTMLMotionProps<'p'>>;

const MotionButton = dynamic(() => import('framer-motion').then(mod => mod.motion.button), {
    ssr: false,
    
  }) as React.ComponentType<HTMLMotionProps<'button'>>;

// Dynamically import the AppearingGradient component
const AppearingGradient = dynamic(() => import('../appearingGradient/appearingGradient'), {
    ssr: false, // Set to false if you want to prevent server-side rendering
});

interface Props {
    src: string;
    alt: string;
}

const FlashContent: React.FC<Props> = ({ src, alt }) => {
    return (
        <>
            <section className='mx-auto w-screen max-w-[1200px] relative mb-8
            mt-10'
            style={{
                background:'radial-gradient(circle, #0080bf -50%, rgba(0, 128, 191, 0%) 60%)'
            }}>
                <h2 className='text-center font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
                text-lg sm:text-xl md:text-2xl px-2'>
                    Discipline, Focus, Creativity, Tenacity</h2>
     <motion.h1
    className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
    text-4xl sm:text-4xl md:text-5xl font-semibold text-center relative transition-colors
    px-3 mt-2"
    animate={{
        backgroundImage: [
            "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)", // Default colors
            "linear-gradient(to right, #33e8ff, #33b5d6, #33e8ff)", // Brighter colors
            "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)", // Back to default
        ],
    }}
    transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3, // Control how fast the gradient oscillates
    }}
>
    About Focus Flow Software
</motion.h1>

                <MotionImg
                    src={src}
                    alt={alt}
                    width={600}
                   
                    layout='preserve-aspect'
                    height={1300}
                    className='w-[70vw] mx-auto my-5 md:w-[50vw] h-[205px] sm:h-[223px] md:h-[270px] object-contain'
                    animate={{
                        y: [0, -4, 0], // Oscillate up and down
                    }}
                    transition={{
                        duration: 1.5, // Duration of the oscillation
                        repeat: Infinity, // Infinite loop
                        ease: 'easeInOut', // Smooth transition
                    }}
                />
                <MotionP className='px-4 mx-auto md:w-[80%] md:text-lg rounded-2xl text-white text-left sm:text-center'>
                At Focus Flow Software, every project is approached with precision, calculated strategy, and uncompromising standards. We don’t just build websites—we craft tools for domination in the digital space, ensuring your brand stands above the rest.
<br/><br/>
This relentless focus is driven by Thomas Musial, a creator forged through years of discipline, competition, and overcoming adversity. This allows Focus Flow Software to quickly deliver unique and visually appealing websites
quickly to help their clients elevate their digital presence.
                    {/* <Link href='best-web-design-halifax'>
                        <MotionButton className='bg-[#00bfff] rounded-xl p-3 text-white'>
                            See What Sets Us Apart
                        </MotionButton>
                    </Link> */}
                </MotionP>
            </section>
        </>
    );
}

export default FlashContent;
