"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";
import ImageDrop from "../utils/imageDrop";
import ImageUploader from "../utils/imageDrop";

interface Props {
  
}

const ImageTextBoxUI: React.FC<Props> = () => {
    
    const [alt, setAlt] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [buttonText, setButtonText] = useState("");
    const [destination, setDestination] = useState("");


    const [reverse, setReverse] = useState(false);
    const [fadeIn, setFadeIn] = useState(true)
    const [hasTilt, setHasTilt] = useState(false)
    const [allSlide, setAllSlideIn] = useState(false)

    const ref = useRef(null);
    const inView = useInView(ref, {
        once: false,
        amount: 0.8
    });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"] // Adjust based on when you want the animation to start/end
      });

      const tilt = useTransform(scrollYProgress, [0.4, 0.6], [30, 0]);

      const x = useTransform(scrollYProgress, [0, 0.6], [200, 0]);

      const [tiltAngle, setTiltAngle] = useState(40)

      const [selectedAnimation, setSelectedAnimation] = useState({});

      const handleSelectTilt = () => {
        setSelectedAnimation({
          transform: `perspective(1000px) rotateX(${tilt.get()}deg)`
        });
        setFadeIn(false)
        setHasTilt(true)
      };
    
      const handleSelectSlide = () => {
        setSelectedAnimation({ x });
        setFadeIn(false)
        setAllSlideIn(true)
        setHasTilt(false)
      };

   
      useEffect(()=>{
        console.log('current animation',selectedAnimation)
      },[selectedAnimation])

      useEffect(() => {
        
        const unsubscribe = tilt.on("change", (latest) => {
          // Update the tilt angle
         
          setTiltAngle(latest);
      
        
          
        
        });
        
      
        // Cleanup the subscription when the component unmounts
        return () => {
          unsubscribe();
        };
      }, [tilt, ]);
      
      




 
    

    const textSlide = (delay: number) => {
        return {
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
        }
    };

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
        <section className="px-4 mb-8 relative">
            <h1>Customize your own image-text box</h1>
            <p>Here is where you can customize your own image text box
                with your own text, images and animations, get creative!
            </p>
            <p><br/>Below is the area where you can input the text, you want and Below
                is where you can select what animations and scroll properties you would like
            </p>

        </section>
            {/* Section for user inputs */}
            <section className="flex flex-col items-center mb-8 w-[90vw] max-w-[1200px] mx-auto
            text-black">
              
                <input
                    className="mb-4 p-2 border w-full rounded-2xl"
                    type="text"
                    placeholder="Image Alt Text"
                    value={alt}
                    onChange={(e) => setAlt(e.target.value)}
                />
                <input
                    className="mb-4 p-2 border w-full rounded-2xl"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="mb-4 p-2 border w-full rounded-2xl"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    className="mb-4 p-2 border w-full rounded-2xl"
                    type="text"
                    placeholder="Button Text"
                    value={buttonText}
                    onChange={(e) => setButtonText(e.target.value)}
                />
                <input
                    className="mb-4 p-2 border w-full rounded-2xl"
                    type="text"
                    placeholder="Button Destination URL"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
               <button className="hidden md:block text-red-200
               bg-[#00bfff] p-3 rounded-2xl"
               onClick={()=>setReverse(!reverse)}>
                    
                    
                  Reverse Layout
                </button>
                <h3>Animations here</h3>
                <button className="text-white bg-[#00bfff]
                p-3 rounded-2xl"
                onClick={handleSelectTilt}
                >Tilting feature</button>
                  <button className="text-white bg-[#00bfff]
                p-3 rounded-2xl"
                onClick={handleSelectSlide}
                >Slide-in feature</button>
            </section>

            {/* Original content section */}
            <motion.section
                
                ref={ref}
                className={`relative flex flex-col w-screen border
                 items-center justify-center text-white md:px-6 max-w-[1200px]
                 mx-auto ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                 style={ !hasTilt && allSlide ? {x} : hasTilt ? {
                    transform:`perspective(1000px) rotateX(${tiltAngle}deg)`
                 } : {} }
            >
                <motion.h3
                    variants={fadeIn ? textSlide(0) : {}}
                    initial='initial'
                    animate={inView ? 'animate' : 'initial'}
                    className="font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-3xl mb-8 md:hidden"
                >
                     {title.trim() ? title : "Place title here"}
                </motion.h3>

               <ImageUploader
               animationVariants={!hasTilt ? imageSlide : {}}
               inView={inView}
                className="mx-auto object-contain w-[90vw] h-[55vw] max-h-[567px] max-w-[668px] md:w-[45vw]
                border"
                />

                <section className="w-full md:w-[50vw] mb-auto">
                    <motion.h3
                        variants={fadeIn ? textSlide(0) : {}}
                        initial='initial'
                        animate={inView ? 'animate' : 'initial'}
                        className="hidden md:block font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-5xl mb-8 pl-4 pb-4"
                    >
                       {title.trim() ? title : "Place title here"}
                    </motion.h3>

                    <motion.p
                        variants={fadeIn ? textSlide(0.3) : {}}
                        initial='initial'
                        animate={inView ? 'animate' : 'initial'}
                        className="px-4 mt-4 font-semibold sm:text-md md:text-lg"
                    >
                        {description.trim() ? description : "Place description here"}

                        { buttonText && (
                           <>
                                <br />
                                <motion.button
                                    variants={fadeIn ? textSlide(0.8) : {}}
                                    initial='initial'
                                    animate={inView ? 'animate' : 'initial'}
                                    className="mt-4 p-3 rounded-2xl bg-[#00bfff] text-white hover:text-[#00bfff] hover:bg-white transition-colors"
                                >
                                   {buttonText.trim() ? buttonText : "Place buttonText here"}
                                </motion.button>
                                </>
                        )}
                    </motion.p>
                </section>
            </motion.section>
        </>
    );
}

export default ImageTextBoxUI;
