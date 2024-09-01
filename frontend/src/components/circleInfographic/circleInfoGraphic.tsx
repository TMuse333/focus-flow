import React, {useState} from "react";
import ball from '../../media/futuristic-money-ball-removebg-preview.png'
import { motion,Variants} from 'framer-motion'
import {useIntersectionObserver} from "../intersectionObserver/intersectionObserver";
import {workTenets} from '../../data/data'
import {StaticImageData} from 'next/image'
import Image from 'next/image'
import stair from '../../media/quantum-staircase.jpg'
import { useGeneralContext } from "@/context/context";

// import functional from '../../media/gemeni-functional.jpg'
import builder from '../../../public/media/gemeni-builder.webp'
import twoHands from '../../../public/media/gemeni-two-hand-stick.webp'
import coder from '../../../public/media/focused-coder.webp'
import thinker from '../../../public/media/quantum-thinker.webp'
import sprinter from '../../../public/media/gemeni-sprinter.webp'
import communicator from '../../../public/media/gemeni-communicator.webp'

interface CircleProps {

    image:StaticImageData,
    title:string,
    description:string,
    index:number,
    titleInView:boolean
   
}

const CircleElement: React.FC<CircleProps> = ({image,
title, description, index,titleInView}) => {

    const [inView, setInView] = useState<boolean>(false)

    const {isMobile} = useGeneralContext()


    //-120px
    const options = {
        root: null,
        rootMargin: !isMobile ? '-120px' : '-120px',
        threshold:!isMobile ?  0.5 : 0.2,
    };


    const MotionImage = motion(Image);


    const componentRef = useIntersectionObserver(setInView, options,false);

    const containerVariants = {
        initial:{
            opacity:0,
            y:-90
        },
        animate:{
            opacity:1,
            y:0
        },
        hover: {
            scale: 1.05, // Slightly scale up on hover
            // rotate: 2, 
        },
        exit: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.3
            }
        }
    }

    const imageVariants = (index:number) => {
        return {
            initial:{
                filter:'brightness(1)'
            },
            animate:{
                filter:'brightness(0.3)',
                transition:{
                    delay:0.5
                }
            }
        }
    }


    const [animationComplete, setAnimationComplete] = useState(false)

   


    return (
        <motion.div
        ref={componentRef}
        id={`infographic-container-${index}`}
        variants={containerVariants}
        initial='initial'
        animate={inView  && titleInView? 'animate' : 'initial'}
        
        whileHover='hover'
        whileTap="hover"
        exit="exit"
         className={`mt-5 mb-[4rem] p-0
        
         overflow-x-hidden
            rounded-xl
        mr-auto ml-auto 
        h-[95vw] w-[95vw] border border-[#2dc0eb]
        flex flex-col  shadow-xl max-w-[360px] 
        max-h-[360px]
        sm:w-[45vw] sm:h-[50vw]
        xl:w-[32vw] xl:h-[32vw]
        relative z-10
       
      `}
      
    //   style={{
    //     backgroundImage: `url(${image.src})`,
    //     backgroundPosition:'center',
    //     backgroundSize:'cover'
    // }}
    
        >
            <MotionImage className="absolute h-full w-full object-cover"
            variants={imageVariants(index)}
            initial='initial'
            animate={inView ? 'animate' : 'initial'}
            onAnimationComplete={()=>setAnimationComplete(true)}
            src={image.src}
            width={100}
            height={100}
            alt="lol"
            />
        {/*        ${inView ? 'glow' : ''}`}*/}
            <div className="relative flex flex-col justify-center
            items-center mt-auto mb-auto"
           >
            {/* <Image className="w-[20%]
           h-[50%]
            max-w-[115px] max-h-[115px] 
            sm:w-[10vw]  object-cover 
            mr-auto ml-auto text-center mb-5
            mt-[-2rem]"
            src={image}
            alt='image'
            /> */}
            <section className="h-[200px]  flex flex-col
            items-center justify-center mb-auto mt-auto">

            
            <motion.h1
            initial={{
                opacity:0,
                y:60
            }}
            animate={{
                opacity:animationComplete ? 1 : 0,
                y:animationComplete ? 0 : 30
            }}
             className="text-3xl ml-auto mr-auto pr-2 pl-2 ">{title}</motion.h1>
            <motion.p 
            initial={{
                opacity:0
            }}
            animate={{
                opacity: animationComplete ? 1 : 0,
                transition:{
                    delay:0.33
                }
            }}
            className=" ml-auto mr-auto text-md  pr-5 pl-5 mt-3 sm:mt-6">
                {description}
            </motion.p>
            </section>
            </div>
        </motion.div>
    )
}

interface Props {
    title?:string,
    description?:string
}

export const CircleInfoGraphic:React.FC<Props> = ({
    title, description
}) => {


    const [inView, setInView] = useState(false)

    const {isMobile} = useGeneralContext()

    const options = {
        root: null,
        rootMargin: !isMobile ? '500px' : '80px',
        threshold:!isMobile ?  0.6 : 0.1,
    };

    const contentRef = useIntersectionObserver(setInView, options, false)

    const images = [
        coder,
        twoHands,
        sprinter,
        communicator,
        builder,
       
        
        thinker,
     
    ]

    return (
        <>

        

          {/* <div 
           className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-[#003647] via-[#3e7384] to-[#003647]
        ml-auto mr-auto rounded-[200rem]
        mb-8
        ">
           
       </div> */}

       <div className="w-screen"
       ref={contentRef}>
       {title && (
            <>
             <motion.h1
             initial={{
               opacity:0,
               y:50
             }} 
             animate={{
               opacity:inView ? 1 : 0,
               y: inView ? 0 : 50
             }}
             className='relative text-2xl bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
            text-4xl sm:text-5xl font-semibold text-center'>Built to work, work to build</motion.h1>
              <motion.p
            initial={{
              opacity:0,
              x:50
            }} 
            animate={{
              opacity:inView ? 1 : 0,
              x: inView ? 0 : 50,
              transition:{
                delay:0.5
              }
            }}
             className='text-left relative z-[20]  md:text-center md:text-2xl pl-4 pr-5 mt-[2rem]
             mb-[2rem]
           w-[100%] max-w-[900px] ml-auto mr-auto'>{description}</motion.p>
            </>
        )}
       </div>


        <section ref={contentRef}
         className={`flex relative
         justify-center flex-col items-center
          sm:grid sm:grid-cols-2 xl:grid-cols-3
           gap-4 lg:gap-0 w-screen max-w-[1500px]  ml-auto mr-auto
          `}>
          



            {workTenets.map((tenet, index)=> (
                <CircleElement
                index={index}
                title={tenet.title}
                description={tenet.description}
                image={images[index]}
                key={index}
                titleInView={inView}
                />

            ))}
            
        </section>
        <div className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-[#003647] via-[#3e7384] to-[#003647]
        ml-auto mr-auto rounded-[200rem] mb-8">
           
       </div>
       </>
    )
}