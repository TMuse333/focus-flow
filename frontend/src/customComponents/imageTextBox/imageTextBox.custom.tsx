"use client"

import React, {useState, useRef} from "react";
import {motion, useInView} from 'framer-motion'
import Image from 'next/image'
import Link from "next/link";

const ImageTextBoxUI = () => {
    const [src, setSrc] = useState("");
    const [alt, setAlt] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [buttonText, setButtonText] = useState("");
    const [destination, setDestination] = useState("");
    const [reverse, setReverse] = useState(false);

    const ref = useRef(null);
    const inView = useInView(ref, {
        once: false,
        amount: 0.8
    });

    const textSlide = (delay: number) => ({
        initial: {
            x: reverse ? -40 : 40,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.4
            }
        }
    });

    const imageSlide = {
        initial: {
            opacity: 0,
            x: reverse ? 40 : -40
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4
            }
        }
    };

    return (
        <>
            {/* Input fields for user to enter content */}
            <section className="flex flex-col items-center mb-8">
                <input 
                    className="mb-2 p-2 border"
                    type="text" 
                    placeholder="Image Source URL" 
                    value={src} 
                    onChange={(e) => setSrc(e.target.value)} 
                />
                <input 
                    className="mb-2 p-2 border"
                    type="text" 
                    placeholder="Image Alt Text" 
                    value={alt} 
                    onChange={(e) => setAlt(e.target.value)} 
                />
                <input 
                    className="mb-2 p-2 border"
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <textarea 
                    className="mb-2 p-2 border"
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <input 
                    className="mb-2 p-2 border"
                    type="text" 
                    placeholder="Button Text" 
                    value={buttonText} 
                    onChange={(e) => setButtonText(e.target.value)} 
                />
                <input 
                    className="mb-2 p-2 border"
                    type="text" 
                    placeholder="Button Destination URL" 
                    value={destination} 
                    onChange={(e) => setDestination(e.target.value)} 
                />
                <label className="mb-2 p-2 flex items-center">
                    <input 
                        type="checkbox" 
                        checked={reverse} 
                        onChange={(e) => setReverse(e.target.checked)} 
                    /> 
                    Reverse Layout
                </label>
            </section>

            {/* The dynamic content section */}
            <section
                ref={ref}
                className='flex flex-col w-screen items-center justify-center text-white md:flex-row md:px-6 max-w-[1200px] mx-auto'
            >
                <motion.h3
                    variants={textSlide(0)}
                    initial='initial'
                    animate={inView ? 'animate' : 'initial'}
                    className="font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-3xl mb-8 md:hidden"
                >
                    {title}
                </motion.h3>

                <motion.div
                    variants={imageSlide}
                    initial='initial'
                    animate={inView ? 'animate' : 'initial'}
                    className="mx-auto object-contain w-[90vw] h-[55vw] max-h-[567px] max-w-[668px] md:w-[45vw]"
                >
                    {src && (
                        <Image 
                            width={600} 
                            height={1300} 
                            src={src} 
                            alt={alt} 
                        />
                    )}
                </motion.div>

                <section className="w-full md:w-[50vw] mb-auto">
                    <motion.h3
                        variants={textSlide(0)}
                        initial='initial'
                        animate={inView ? 'animate' : 'initial'}
                        className="hidden md:block font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-5xl mb-8 pl-4 pb-4"
                    >
                        {title}
                    </motion.h3>

                    <motion.p
                        variants={textSlide(0.3)}
                        initial='initial'
                        animate={inView ? 'animate' : 'initial'}
                        className="px-4 mt-4 font-semibold sm:text-md md:text-lg"
                    >
                        {description}

                        {destination && buttonText && (
                            <Link href={destination}>
                                <br />
                                <motion.button
                                    variants={textSlide(0.8)}
                                    initial='initial'
                                    animate={inView ? 'animate' : 'initial'}
                                    className="mt-4 p-3 rounded-2xl bg-[#00bfff] text-white hover:text-[#00bfff] hover:bg-white transition-colors"
                                >
                                    {buttonText}
                                </motion.button>
                            </Link>
                        )}
                    </motion.p>
                </section>
            </section>
        </>
    )
}

export default ImageTextBoxUI;
