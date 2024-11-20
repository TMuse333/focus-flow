"use client"

import { useGeneralContext } from "../../context/context";
import React, { useState } from "react";
import dynamic from 'next/dynamic';
import { AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from '../intersectionObserver/intersectionObserver';
import Link from "next/link";
import Image from "next/image";
import { HTMLMotionProps } from 'framer-motion';
// Dynamically import motion components from framer-motion
const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), {
  ssr: false,
}) as React.ComponentType<HTMLMotionProps<'h2'>>;

const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), {
  ssr: false,
}) as React.ComponentType<HTMLMotionProps<'p'>>;

const MotionSection = dynamic(() => import('framer-motion').then(mod => mod.motion.section), {
  ssr: false,
}) as React.ComponentType<HTMLMotionProps<'section'>>;

const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), {
  ssr: false,
}) as React.ComponentType<HTMLMotionProps<'div'>>;

interface Props {
    title?: string,
    description?: string,
    images: {
        src: string,
        alt: string,
        details: {
            mainImage: string,
            secondaryImage: string,
            title: string,
            alt: string,
            alt2: string,
            description: string[],
            link: string
        }
    }[],
}

const ScrollableCarousel: React.FC<Props> = ({ title, description, images }) => {
    const {
        setSelectedCarouselImageMainImage,
        setSelectedCarouselImageSecondaryImage,
        setSelectedCarouselImageTitle,
        setSelectedCarouselImageDescription,
        setSelectedCarouselImageLink,
        setSelectedCarouselImageIndex,
        setSelectedCarouselImageAlt,
        setSelectedCarouselImageAlt2
    } = useGeneralContext();

    function handleImageClick(index: number) {
        setSelectedCarouselImageMainImage(images[index].details.mainImage);
        setSelectedCarouselImageSecondaryImage(images[index].details.secondaryImage);
        setSelectedCarouselImageTitle(images[index].details.title);
        setSelectedCarouselImageDescription(images[index].details.description);
        setSelectedCarouselImageLink(images[index].details.link);
        setSelectedCarouselImageIndex(index);
        setSelectedCarouselImageAlt(images[index].details.alt);
        setSelectedCarouselImageAlt2(images[index].details.alt2);
    }

    const [inView, setInView] = useState(false);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    };

    const componentRef = useIntersectionObserver(setInView, options);
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
                className={`relative w-screen ml-auto mb-[5rem] mt-[5rem] overflow-x-hidden bg-[#00bfff] bg-opacity-[0.2] py-8`}
            >
                {title && (
                    <>
                        <MotionH2
                            className="text-4xl text-center mb-[3rem] sm:text-6xl md:text-left md:ml-8 lg:ml-12 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent font-semibold overflow-auto pb-4"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40, transition: { duration: 0.5 } }}
                        >
                            {title}
                        </MotionH2>
                        <MotionP
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 40, transition: { duration: 0.5, delay: 0.5 } }}
                            className="text-2xl text-left w-[80vw] ml-auto mr-auto sm:text-xl md:text-left md:ml-8 lg:ml-12 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent font-semibold overflow-auto pb-4"
                        >
                            {description}
                        </MotionP>
                    </>
                )}
                <div className="w-screen pr-[3rem] pl-[3rem] flex ml-auto sm:ml-0 sm:mr-0 overflow-x-scroll overflow-y-hidden">
                    {images.map((image, index) => (
                        <div
                            className="w-[70vw] relative flex-shrink-0 h-[90vw] max-h-[600px] mr-10"
                            key={index}
                           
                        >
                            <h3 className="mb-8 text-3xl" style={{ opacity: hoveredImage === index ? 1 : 0, transition: 'opacity 0.3s ease-in' }}>
                                {image.details.title}
                            </h3>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className='relative ml-auto mr-auto mt-auto z-[5] object-contain object-center transition-all h-[85vw] max-h-[500px] rounded-lg'
                                width={1000}
                                height={55}
                                
                                sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 500px"
                                onClick={() => handleImageClick(index)}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export const SelectedCarouselImage = () => {
    const {
        selectedCarouselImageMainImage,
        selectedCarouselImageSecondaryImage,
        selectedCarouselImageTitle,
        selectedCarouselImageDescription,
        selectedCarouselImageLink,
        selectedCarouselImageIndex,
        setSelectedCarouselImageIndex,
        selectedCarouselImageAlt,
        setSelectedCarouselImageAlt,
        selectedCarouselImageAlt2,
        setSelectedCarouselImageAlt2
    } = useGeneralContext();

    function handleExitClick() {
        setSelectedCarouselImageIndex(null);
    }

    let imageSelected = selectedCarouselImageIndex !== null;

    return (
        <AnimatePresence mode='wait'>
            <MotionSection
                initial={{ opacity: 0 }}
                animate={{ opacity: imageSelected ? 1 : 0, transition: { duration: 1, delay: imageSelected ? 0 : 0 } }}
                exit={{ opacity: 0 }}
                className="w-screen bg-gray-600 fixed top-[5%] left-[50%] translate-x-[-50%] md:rounded-3xl border-t-4 md:border-4 border-[#00bfff] p-2 text-center overflow-x-hidden"
                style={{
                    overflowY: 'scroll',
                    zIndex: imageSelected ? 250 : -1,
                    height: imageSelected ? '95vh' : '0vh',
                    transition: `height 0.3s ease-in, ${!imageSelected ? 'z-index 1s ease-in' : ''}`,
                    transitionDelay: imageSelected ? '0.1s' : '0'
                }}
            >
                <h5 className="text-center mt-5 mb-5 text-xl md:text-2xl">{selectedCarouselImageTitle}</h5>
                <article className="lg:flex bg-gray-400 lg:w-[90vw] ml-auto mr-auto max-w-[1200px] sm:w-[75vw] rounded-xl pb-5">
                    <img
                        src={selectedCarouselImageMainImage}
                        className='w-[90vw] mr-auto ml-auto object-cover mb-5 sm:w-[70vw] lg:w-[60vw] lg:max-w-[750px] max-w-[640px] rounded-2xl'
                        alt={selectedCarouselImageAlt}
                    />
                    <p className="sm:w-[70vw] pl-3 pr-3 mb-5 text-left max-w-[650px] ml-auto mr-auto lg:mt-[5rem] lg:text-center">
                        {selectedCarouselImageDescription[0]}
                    </p>
                </article>
                <article className="lg:flex lg:flex-row-reverse lg:w-[90vw] ml-auto mr-auto max-w-[1200px] bg-gray-400 sm:w-[75vw] rounded-xl">
                    <img
                        alt={selectedCarouselImageAlt2}
                        src={selectedCarouselImageSecondaryImage}
                        className='w-[90vw] mr-auto ml-auto object-cover mb-5 sm:w-[70vw] max-w-[640px] lg:w-[60vw] lg:max-w-[750px] rounded-2xl'
                    />
                    <p className="sm:w-[70vw] pl-3 pr-3 mb-5 text-left max-w-[650px] ml-auto mr-auto lg:mt-[5rem] lg:text-center">
                        {selectedCarouselImageDescription[1]}
                    </p>
                </article>
                <button className="absolute top-4 right-4 text-white" onClick={handleExitClick}>
                    X
                </button>
            </MotionSection>
        </AnimatePresence>
    );
};

export default ScrollableCarousel;
