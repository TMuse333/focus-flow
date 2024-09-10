import React, { useRef, useEffect } from "react";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Props {
    title?: string,
    description?: string,
    images?: {
        src: string,
        alt: string,
        title: string
    }[]
}

const SlideScrollCarousel: React.FC<Props> = ({ title, description, images }) => {
    const targetRef = useRef(null);
    
    // Capture the vertical scroll progress
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    // Map vertical scroll to horizontal scroll (adjust values to your needs)
    const xTransform = useTransform(scrollYProgress, [0.5, 1], [0, -1000]);

    // Effect to log scroll progress
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            console.log("Scroll Y Progress:", latest);

            // Check when translation starts (for example, when scroll reaches 0.7)
            if (latest >= 0.7 && latest < 1) {
                console.log("Translation is starting!");
            }
        });

        // Cleanup the listener on component unmount
        return () => {
            unsubscribe();
        };
    }, [scrollYProgress]);

    return (
        <section className="relative h-[200vh]"> {/* Increased height to allow more scroll */}
            <motion.section 
                ref={targetRef}
                className="w-screen sticky h-[100vh] bg-blue-600 overflow-hidden"
                style={{
                    top:12
                }}
            >
                <article className="bg-blue-400 h-[30%] w-full">
                    <h3 className="text-2xl text-center py-3">The Slide Scroll Carousel</h3>
                    <p className="px-4">
                        This is the slide scroll carousel. It can be used to display multiple images of a collection, like clothing, art, or any other array of objects you have.
                    </p>
                </article>

                {/* Carousel with horizontal scrolling */}
                <motion.section
                    style={{ x: xTransform }} // Apply horizontal transformation based on scroll
                    className="w-screen overflow-x-scroll flex"
                >
                    {images?.map((image, index) => (
                        <div
                            className="w-[80vw] bg-black h-[150px] relative flex-shrink-0 mx-4"
                            key={index}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={600}
                                height={1300}
                                className="w-full h-[80%] object-contain mb-auto"
                            />
                            <h3 className="text-center">{image.title}</h3>
                        </div>
                    ))}
                </motion.section>
            </motion.section>
        </section>
    );
};

export default SlideScrollCarousel;
