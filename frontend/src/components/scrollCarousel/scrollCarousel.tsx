"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useIntersectionObserver } from '../intersectionObserver/intersectionObserver';
import Image, { StaticImageData } from "next/image";

// Define the props interface with title, description, and images array
interface Props {
    title?: string;
    description?: string;
    images: {
        src: string| StaticImageData;
        alt: string;
        title:string,
        description:string
       
    }[];
}

// ScrollableCarousel component without onClick features
const ScrollCarousel: React.FC<Props> = ({ title, description, images }) => {
    const [inView, setInView] = useState(false);

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    };

    // Use the custom hook to get a ref and observe intersection
    const componentRef = useIntersectionObserver(setInView, options);

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
                ref={componentRef}
                className={`relative w-screen ml-auto mb-[5rem] mt-[5rem] overflow-x-hidden
                bg-[#00bfff] bg-opacity-[0.2] py-8`}
            >
              

                <div
                    className="w-screen pr-[3rem] pl-[3rem] flex ml-auto sm:ml-0 sm:mr-0 overflow-x-scroll overflow-y-hidden
                    "
                >
                    {images.map((image, index) => (
                        <div
                            className="w-[50vw] border border-white rounded-2xl max-h-[800px] relative flex-shrink-0   mr-10
                            pb-6 max-w-[500px]"
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
             <h5 className="text-white my-4 text-center  relative font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-xl
             sm:text-2xl md:text-3xl">{image.title}</h5>

                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="relative ml-auto mr-auto mt-auto 
                                z-[5] object-contain  transition-all   rounded-lg
                                h-[90%]
                                max-h-[500px]"
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
                            <p className="mt-4 text-center
                            sm:text-lg md:text-2xl">{image.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ScrollCarousel;
