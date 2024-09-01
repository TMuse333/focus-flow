

import React, { useState, } from 'react';
import { Variants, motion } from 'framer-motion';
import {useIntersectionObserver} from '../intersectionObserver/intersectionObserver'
import { useGeneralContext } from '../../context/context';
import Image from 'next/image'
import Link from 'next/link';


import {StaticImageData} from 'next/image'
interface contentProps {
  image:  StaticImageData;
  customText: React.ReactNode;
  description?: string[] | null  ;
  reverse: boolean | null;
  mainTitle?: string | null;
  floatingImage?: boolean;
  hasAnimation?: boolean;
  buttonLink?:string,
  buttonText?:string
}

const Content: React.FC<contentProps> = ({
  image,
  customText,
  description,
  reverse,
  mainTitle,
  floatingImage,
  hasAnimation,
  buttonLink,
  buttonText
}) => {
  const [inView, setInView] = useState(false);

 const {isMobile} = useGeneralContext()

  // Configure intersection observer options
  const options = {
    root: null,
    rootMargin: '0px',
    threshold:  0.7,
  };

  const MotionImage = motion(Image);

  // Use the custom hook to get a ref and observe intersection
  const componentRef = useIntersectionObserver(setInView, options);


  const imageVariants: Variants = {
    initial: {
        opacity:0,
        x:150
    },
    animate:{
        opacity:1,
        x:0,
        y: floatingImage ? [0, -5, 0] : 0
    }
  }














  const textVariants = (delay: number): Variants => {
    return {
      initial: {
        x: reverse ? -30 : 30,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
        },
      },
    };
  };

  const headerVariants = (delay:number): Variants => {
    return {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            delay:delay
        }
    }
  }
}

const nullVariant: Variants = {

}




  

  return (
    <article
      ref={componentRef}
      className={`flex flex-col justify-center align-center pt-8 pb-8
       relative mr-auto ml-auto
       md:w-[95vw] md:max-w-[1200px] sm:max-w-[668px] z-1
       
        ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >

   
     

      
      {/* <motion.img */}

    <motion.img
      className="rounded-md w-[90vw] h-[55vw] max-h-[567px] max-w-[668px] ml-auto mr-auto
      object-contain"
      variants={hasAnimation ? imageVariants : nullVariant}
      initial={hasAnimation ? 'initial' : ''}
      animate={hasAnimation && inView ? 'animate' : ''}
      src={image.src}
      alt='lol'
      // Ensures the image fills the container
    />


      {customText ? (
        <>
          {customText}
        </>
      ) : (
        <div >
          <motion.h2
          variants={headerVariants(0)}
          initial={hasAnimation ? 'initial' : ''}
          animate={hasAnimation && inView ? 'animate' : ''}
           className="text-left pl-5 sm:pl-12 pt-5
           sm:text-4xl font-semibold
           bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
           text-3xl">{mainTitle}</motion.h2>
          <motion.p
          variants={textVariants(0.45)}
       initial={hasAnimation ? 'initial' : ''}
       animate={inView && hasAnimation? 'animate' : ''}
          className="mt-6 pl-5 text-left sm:pl-12 whitespace-pre-line">
            {description != null ? description[0] :
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate rem distinctio veniam doloribus placeat volup tatibus dolores deleniti consequuntur harum asperiores?'}
               </motion.p>
            <motion.p
             variants={textVariants(0.65)}
             initial={hasAnimation ? 'initial' : ''}
             animate={inView && hasAnimation? 'animate' : ''}
             className="mt-6 text-left pl-5 sm:pl-12"
             >
              {description != null ? description[1] :
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident odio labore recusandae est accusantium voluptatibus ad doloremque! Quo corrupti cum delectus ad praesentium minus voluptates soluta consectetur perspiciatis veniam? Pariatur vel, error cum possimus ad asperiores inventore obcaecati suscipit.'}
                <br/>

                {/* <Link href={buttonLink ? buttonLink : ''}>

                
                <motion.button
                  variants={headerVariants(1.2)}
                  initial={hasAnimation ? 'initial' : ''}
                  animate={hasAnimation && inView ? 'animate' : ''}
                 className="mt-6 bg-[#00bfff] p-3 rounded-xl hover:bg-white
                 hover:text-[#00bfff] transition-all">{buttonText  ? buttonText : 'button'}</motion.button>
                  </Link> */}
            </motion.p>
            
         
        </div>
      )}
    </article>
  );
};

export default Content;
