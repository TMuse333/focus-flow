"use client";

import React, { useRef, useState } from "react";
import {   Variants } from "framer-motion";

import Image, { StaticImageData } from "next/image";

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
   
}

// ScrollableCarousel component without onClick features
const ScrollCarousel: React.FC<Props> = ({ title, description, images,
    bgImage, 
 }) => {

    const ref = useRef(null)

    // const inView = useInView(ref,{
    //     once:false
    //   })
     

    // Variants for the animation of images
    // const imageVariants = (index: number): Variants => {
    //     return {
    //         initial: {
    //             opacity: 0,
    //             y: -100,
    //         },
    //         animate: {
    //             opacity: 1,
    //             y: 0,
    //             transition: {
    //                 delay: index * 0.5,
    //             },
    //         },
    //     };
    // };

    // const [hoveredImage, setHoveredImage] = useState<number | null>(null);

    // const handleMouseEnter = (index: number) => {
    //     setHoveredImage(index);
    // };

    // const handleMouseLeave = () => {
    //     setHoveredImage(null);
    // };

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
                           
                           
                        >
             <h5 className="text-white my-4 text-center px-2 
             relative font-semibold bg-gradient-to-b from-white to-gray-300 
             bg-clip-text text-transparent text-xl
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
 sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 500px"
 
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
                                         text-black
                                         relative z-[4] hover:bg-black hover:text-[#00bfff]'>
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