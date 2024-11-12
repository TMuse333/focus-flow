"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useIntersectionObserver } from '../intersectionObserver/intersectionObserver';
import Image, { StaticImageData } from "next/image";
import { useComponentTimeTracker } from "@/lib/componentTracker";
import Link from 'next/link'

// Define the props interface with title, description, and images array
interface Props {
    title?: string;
    description?: string;
    bgImage?:boolean
    images: {
        src: string| StaticImageData;
        alt: string;
        title:string,
        description:string,
        link?:string,
        date?:string
       
    }[];
    setTotalPageTime?:React.Dispatch<React.SetStateAction<{name:string,
        time:number}[]>>
}

// ScrollableCarousel component without onClick features
const ScrollCarousel: React.FC<Props> = ({ title, description, images,
    bgImage, 
setTotalPageTime, }) => {

    const ref = useRef(null)

    const inView = useInView(ref,{
        once:false
      })
      const {totalTimeInView} = useComponentTimeTracker({inView,id:'restaurant-feature-boxes',
      setTotalPageTime:setTotalPageTime,
      pageTracker:false})

    // Variants for the animation of images
    const imageVariants = (index: number): Variants => {
        return {
            initial: {
                opacity: 0,
                y: -100,
            },
            animate: {
                opacity: 1,
                y: 0,
                transition: {
                    delay: index * 0.5,
                },
            },
        };
    };

    const [hoveredImage, setHoveredImage] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredImage(index);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    return (
        <>
            <section
                ref={ref}
                className={`relative w-screen ml-auto mb-[5rem] mt-[5rem] overflow-x-hidden
                bg-[#00bfff] bg-opacity-[0.2] py-8`}
            >
              

                <div
                    className="w-screen pr-[3rem] pl-[3rem] flex ml-auto sm:ml-0 sm:mr-0 overflow-x-scroll overflow-y-hidden
                    "
                >
                    {images.map((image, index) => (
                        <div
                            className={`w-[80vw] border border-white rounded-2xl max-h-[800px] relative flex-shrink-0   mr-10
                            pb-6 max-w-[500px] z-[2]
                            ${bgImage ? 'bg-[#00bfff] bg-opacity-[0.3]' : ''}`}
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                           
                        >
             <h5 className="text-white my-4 text-center px-2 relative font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-xl
             sm:text-2xl md:text-3xl">{image.title}</h5>

             {image.date && (
                <span className="text-white px-2">
                    {image.date}
                </span>
             )}


 <Image
 src={image.src}
 alt={image.alt}
 className={`relative ml-auto mr-auto mt-auto 
 z-[5] object-contain  transition-all   rounded-lg
 
 max-h-[500px]
 ${bgImage ? 'h-[40%]' : 'h-[90%]'}`}
 width={1000}
 height={55}
 style={{
     transform: `translateY(${inView ? '0' : '-12rem'}) ${
         hoveredImage === index ? 'scale(1.05)' : ''
     }`,
     transitionDelay: `${(images.length - 1 - index) * 0.2}s, ${
         0.2 + (images.length - 1 - index) * 0.2
     }s`,
     opacity: inView ? 1 : 0,
     transitionProperty: 'transform, opacity',
     transitionDuration: '0.5s',
     transitionTimingFunction: 'ease-in-out',
 }}
/>

                           
                            {/* <h5 className="text-white my-4  relative font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-xl">{image.title}</h5> */}
                            <p className="mt-4 text-center px-4
                            sm:text-lg md:text-2xl">{image.description}</p>

                            {image.link && (
                                <>
                               
                                   
                                    <Link href={image.link}
                                   
                                    >
                                        <button
                                         className='mt-8 bg-[#00bfff] py-3 px-6 rounded-2xl
                                         relative z-[4] hover:bg-white hover:text-[#00bfff]'>
Read
                                        </button>
                                        


                                    </Link>
                                    </>
                                    

                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ScrollCarousel;
