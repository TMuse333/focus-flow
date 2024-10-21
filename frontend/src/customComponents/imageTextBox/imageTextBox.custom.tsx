"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform,
animate } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";
import ImageDrop from "../utils/imageDrop";
import ImageUploader from "../utils/imageDrop";
import SlidingTextBox from '../../components/slidingText/slidingText'
import logo from '../../../public/media/focusFlow-brain-nobg.webp'
import { useGeneralContext } from "@/context/context";
import { text } from "stream/consumers";
import SlidingText from "../../components/slidingText/slidingText";

interface Props {
  
}

const ImageTextBoxUI: React.FC<Props> = () => {
    
    // const [alt, setAlt] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [buttonText, setButtonText] = useState("");
    // const [destination, setDestination] = useState("");

    const {isDesktop} = useGeneralContext()

    const [reverse, setReverse] = useState(false);
    const [fadeIn, setFadeIn] = useState(true)
    const [hasTilt, setHasTilt] = useState(false)
    const [allSlide, setAllSlideIn] = useState(false)

    const [slideComplete, setSlideComplete] = useState(false)

    const [imageSrc,setImageSrc] = useState('')

   const [triggerOnce, setTriggerOnce] = useState(false)


    const [slidingHeader, setSlidingHeader] = useState(false)

    const ref = useRef(null);
    const inView = useInView(ref, {
        once: triggerOnce,
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

      const MotionImage = motion(Image)
    
      const handleSelectSlide = () => {
        setSelectedAnimation({ x });
        setFadeIn(false)
        setAllSlideIn(true)
        setHasTilt(false)
      };

      const handleFadeIn = () => {
        setFadeIn(true)
        setSlidingHeader(false)
      }

   
 

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
      
      
        const handleAnimation = async () => {
            console.log('animation sequence starting')
            const image = document.getElementById('image-text-box-img')
            const p = document.getElementById('image-text-box-p')
            const button = document.getElementById('image-text-box-button')

            if(image && slidingHeader){
                await animate(image,{x:0, opacity:1},
                    {ease:'easeIn'})
            }

            if(p && slidingHeader){
               
                await animate(p,{y:0, opacity:1,},
                    {ease:'easeIn'})
            }

          

            if(button){
                await animate(button,{opacity:1, x:0},
                    {ease:'easeInOut'})
            }

            
        }

        const handleDeAnimation = async () => {
            console.log('animation sequence starting')
            const image = document.getElementById('image-text-box-img')
            const p = document.getElementById('image-text-box-p')
            const button = document.getElementById('image-text-box-button')

            if(image && slidingHeader){
                await animate(image,{x:-20, opacity:0},
                    {ease:'easeIn'})
            }

            if(p && slidingHeader){
               
                await animate(p,{y:40, opacity:0,},
                    {ease:'easeIn'})
            }

          

            if(button){
                await animate(button,{opacity:0, x:20, y:0},
                    {ease:'easeInOut'})
            }

            
        }



 
    

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

    const handleSlidingHeaderClick = () => {
        setSlidingHeader(!slidingHeader)
        setFadeIn(false)
    }

    useEffect(()=>{
        if(slideComplete && slidingHeader){

        
        console.log('starting animations')
        handleAnimation()
        }

        else if(!triggerOnce){
            handleDeAnimation()
        }
        
    },[slideComplete])

  

 

    

    return (
        <>
       
            {/* Section for user inputs */}
            <section className="flex flex-col items-center mb-8 w-[90vw] max-w-[1200px] mx-auto
            text-black">
              
              
                <input
                    className="mb-4 p-2 border w-full rounded-2xl"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <ImageDrop
                className="mb-4 p-2 border w-full rounded-2xl"
                setSrc={setImageSrc}
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


<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                justify-center items-center
                px-4 mx-auto 
                ">
                
  <button
    className={`text-white 
    p-3 rounded-2xl mt-6
   mx-auto w-[200px] transition-colors
   
   `}
   style={{
    backgroundColor: slidingHeader === true ? '#4eaccc' : '#00bfff'
   }}
    onClick={handleSlidingHeaderClick}>
      Sliding header
  </button>
                
  <button
    className="text-white  mx-auto bg-[#00bfff]
    p-3 rounded-2xl mt-6  w-[200px]" 
    onClick={handleFadeIn}
    style={{
        backgroundColor: fadeIn === true ? '#4eaccc' : '#00bfff'
       }}
       >
      Fade in
  </button>

  <button
    className="text-white  mx-auto bg-[#00bfff]
    p-3 rounded-2xl mt-6  w-[200px]" 
    onClick={() => setTriggerOnce(!triggerOnce)}>
      Trigger once: {triggerOnce ? 'True' : 'False'}
  </button>
              
  <button
    className="text-white  mx-auto bg-[#00bfff]
    p-3 rounded-2xl mt-6  w-[200px]" 
    onClick={handleSelectSlide}>
      Slide-in feature
  </button>

  <button
    className=" md:mr-2 bg-[#00bfff] text-white
    p-3 rounded-2xl mt-6 mx-auto w-[200px]"  
    onClick={() => setReverse(!reverse)}>
      Reverse Layout: {reverse ? 'True' : 'False'}
  </button>
</div>

                <h3>Animations here</h3>
               
                
               
            </section>

            {/* Original content section */}
            <motion.section
                
                ref={ref}
                className={`relative flex flex-col w-screen border
                 items-center justify-center text-white md:px-6 max-w-[1200px]
                 
                 mx-auto ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                //  style={ !hasTilt && allSlide && !slidingHeader ? {x} 
                //   : {} }
            >

                {!isDesktop && slidingHeader ? (
                    <SlidingText
                    text={title || "Place title here"}
                    setSlideComplete={setSlideComplete}
                    reverse={reverse}
                    />                ) : (

                        <motion.h3
                        id='image-text-box-h3'
                        variants={fadeIn && !slidingHeader ? textSlide(0) : {}}
                        initial='initial'
                        animate={inView ? 'animate' : 'initial'}
                        className="font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-3xl mb-8 md:hidden"
                    >
                         {title.trim() ? title : "Place title here"}
                    </motion.h3>
                    )}
               

               {/* <ImageUploader
               animationVariants={!hasTilt ? imageSlide : {}}
               inView={inView}
                className="mx-auto object-contain w-[90vw] h-[55vw] max-h-[567px] max-w-[668px] md:w-[45vw]
                border relative"
                /> */}
                <motion.img
                id='image-text-box-img'
                 variants={fadeIn && !slidingHeader ? imageSlide : {}}
                 initial={fadeIn && !slidingHeader ? 'initial' : ''}
                 animate={inView  && !slidingHeader? 'animate' : 'initial'}
                src={imageSrc !== '' ? imageSrc : logo.src}
                alt='image'
                className={`mx-auto object-contain w-[90vw] h-[55vw] max-h-[567px] max-w-[668px] md:w-[45vw]
                ${slidingHeader && !slideComplete ? 'opacity-0' : 'opacity-1'}`}
                width={600}
                height={1300}
                />


                <section className="w-full md:w-[50vw] mb-auto
               
                 ">
                    {isDesktop && slidingHeader ? (
                         <SlidingText
                         text={title || "Place title here"}
                         setSlideComplete={setSlideComplete}
                         reverse={reverse}
                         />   
                    ) : (
                        <motion.h3
                        id='image-text-box-h3'
                           variants={fadeIn ? textSlide(0) : {}}
                           initial='initial'
                           animate={inView ? 'animate' : 'initial'}
                           className="hidden md:block font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-5xl mb-8 pl-4 pb-4"
                       >
                          {title.trim() ? title : "Place title here"}
                       </motion.h3>
                    )}
                  

                    <motion.p
                     id='image-text-box-p'
                     variants={fadeIn && !slidingHeader ? textSlide(0.4) : {}}
                     initial={fadeIn && !slidingHeader ? 'initial' : ''}
                     animate={inView && !slidingHeader? 'animate' :!slidingHeader ?  'initial' : ''}
                        className={` px-4 md:pr-3 mt-4 font-semibold sm:text-md md:text-lg

                        
                       
                        text-center md:text-left ml-0  `}
                      
                    >
                        {description.trim() ? description : "Place description here"}

                       
                           <>
                                <br />
                                <motion.button
                                    id='image-text-box-button'
                                    variants={fadeIn && !slidingHeader ? textSlide(0.8) : {}}
                                    initial={fadeIn && !slidingHeader ?'initial' : ''}
                                    animate={inView ? 'animate' : 'initial'}
                                    className={`mt-4 p-2 rounded-2xl bg-[#00bfff] text-white hover:text-[#00bfff] hover:bg-white transition-colors
                                    font-medium text-md
                                    ${slidingHeader ? `translate-x-[${reverse ? '-4rem' : '4rem'}] opacity-0` : ''}`}
                                >
                                   {buttonText.trim() ? buttonText : "Place buttonText here"}
                                </motion.button>
                                </>
                        
                    </motion.p>
                </section>
            </motion.section>
            <div className="h-[40vh]"
            />
        </>
    );
}

export default ImageTextBoxUI;
