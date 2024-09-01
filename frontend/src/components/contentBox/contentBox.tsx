import React, {useState} from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from 'next/image'
import Link from "next/link";

import {useIntersectionObserver} from "../intersectionObserver/intersectionObserver";
import {lionSpeech} from '@/data/data'

interface ContentBoxProps {

    title:string,
    subTitle:string,
    description:string,
    src:StaticImageData,
    alt:string,
    destination:string,
    buttonText:string
}


const ContentBox:React.FC<ContentBoxProps> = (
    {title,subTitle,description, src, alt, destination,
    buttonText}
) => {

const [inView, setInView] = useState(false)

const options = {
    root:null,
    rootMargin:'0px',
    threshold:0.2
}

const componentRef = useIntersectionObserver(setInView,options)


    return (
            <section ref={componentRef}
            className="w-screen
            text-white relative mb-8 bg-[#00bfff]
            bg-opacity-[0.2] py-8">
             
               
                <motion.p
                initial={{
                    x:20,
                    opacity:0
                }}
                animate={{
                    x:inView ? 0 : 20,
                    opacity: inView ? 1 : 0
                }}
                 className=" bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
           text-xl sm:text-2xl font-semibold text-center
           mb-4">{subTitle}</motion.p>
            <motion.h3
            initial={{
                y:20,
                opacity:0
            }}
            animate={{
                y: inView ? 0 : 20,
                opacity:inView ? 1 : 0,
                transition:{
                    delay:0.3
                }
            }}
             className="text-2xl bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
           text-4xl sm:text-5xl font-semibold text-center
           mb-4">{title}</motion.h3>
               
                <motion.div
                 initial={{
                   
                    opacity:0
                }}
                animate={{
                    
                    opacity:inView ? 1 : 0,
                    transition:{
                        delay:0.8
                    }
                }}
                 className="flex mt-4 mb-4 ml-auto mr-auto justify-center">
                    <Link href={destination}>
                            <button className="
                            bg-[#00bfff] mr-6
                            rounded-xl p-3
                            hover:text-[#00bfff]
                            hover:bg-white transition-all">
                                {buttonText}
                            </button>
                    </Link>
                    <Link href='/lets-work'>
                        <button
                        className="rounded-xl p-3
                        border border-[#00bfff]
                        hover:bg-[#00bfff]
                        hover:border-white
                        transition-all">
                            Get yours today
                        </button>
                    </Link>
                </motion.div>
                <motion.div
                  initial={{
                   
                    opacity:0
                }}
                animate={{
                    
                    opacity:inView ? 1 : 0,
                    transition:{
                        delay:0.8
                    }
                }}
                
                className="mx-auto max-w-[1000px] flex flex-col
                flex-col-reverse mt-0 justify-center
                sm:flex-row-reverse  ">
                    {/* <ul className="mx-auto md:text-left md:ml-0 md:mr-auto md:mt-8
                    ">
                        <li className="mb-4 text-xl sm:text-2xl md:text-3xl">Save money</li>
                        <li className="mb-4 text-xl sm:text-2xl md:text-3xl">Track orders more efficiently</li>
                        <li className="mb-4 text-xl sm:text-2xl md:text-3xl">Gain insights on orders</li>
                        <li className="mb-4 text-xl sm:text-2xl md:text-3xl">Bring in more orders</li>

                    </ul> */}
                    <video controls
                    className="w-[90vw] object-contain
                    mx-auto md:w-[50vw] md:h-[45vw]  max-h-[385px]
                    bg-black
                    ">
                            <source src={lionSpeech}/>


                    </video>
                    <Image
                src={src}
                alt={alt}
                className='mx-auto
                my-auto object-contain
                w-[90vw]
                md:w-[50vw] md:h-[45vw] max-w-[420px] max-h-[385px]'
                />

                </motion.div>
               
                 <motion.p
                   initial={{
                   
                    opacity:0
                }}
                animate={{
                    
                    opacity:inView ? 1 : 0,
                    transition:{
                        delay:0.8
                    }
                }}
                  className="w-[90vw] text-left md:w-4/5 ml-auto mr-auto
                 max-w-[1000px] md:text-lg mt-2 ">{description}<br/>
                 <Link href='https://focusflowrestaurant.vercel.app'>
                    <button className="p-3 rounded-xl bg-[#00bfff]
                    text-white hover:text-[#00bfff] hover:bg-white
                    mt-3 text-md">
                        View a demo
                    </button>
                 </Link>
                 

               
                 </motion.p>

            </section>
    )
}


export default ContentBox

