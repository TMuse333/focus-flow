"use client"; // Enable client-side rendering for this component

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import { useInView, Variants } from 'framer-motion';

import Link from 'next/link';

// Import HTMLMotionProps for type safety
import { HTMLMotionProps } from 'framer-motion';
import { useComponentTimeTracker } from '@/lib/componentTracker';

// Dynamically import motion components from framer-motion
const MotionImage = dynamic(() => import('framer-motion').then(mod => mod.motion.img), {
  ssr: false,
}) as React.ComponentType<HTMLMotionProps<'img'>>;

const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), {
  ssr: false,
}) as React.ComponentType<HTMLMotionProps<'h2'>>;

const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), {
  ssr: false,
}) as React.ComponentType<HTMLMotionProps<'p'>>;

const MotionButton = dynamic(() => import('framer-motion').then(mod => mod.motion.button), {
  ssr: false,
}) as React.ComponentType<HTMLMotionProps<'button'>>;

interface ContentProps {
  image?: string ;
  customText?: React.ReactNode;
  description?: string[];
  reverse?: boolean;
  mainTitle?: string;
  floatingImage?: boolean;
  hasAnimation?: boolean;
  buttonLink?: string;
  buttonText?: string;
  alt?: string;
  iframe?: React.ReactNode,
  id?:string
  setTotalPageTime?:React.Dispatch<React.SetStateAction<{name:string,
    time:number}[]>>
    bgColor?:boolean
}


const Content: React.FC<ContentProps> = ({
  image,
  customText,
  description = [],
  reverse = false,
  mainTitle,
  floatingImage = false,
  hasAnimation = true,
  buttonLink,
  buttonText = 'button',
  alt,
  iframe,
  id,
  setTotalPageTime,
  bgColor
}) => {


  const baseVariants = (x: number, delay: number): Variants => ({
    initial: { x, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { delay, ease: 'easeIn' },
    },
  });

  const imageVariants: Variants = {
    initial: { x: reverse ? 180 : -150, opacity: 0 },
    animate: {
      opacity: 1,
      x: 0,
      y: floatingImage ? [0, -5, 0] : 0,
      transition: floatingImage
        ? { y: { delay: 2.45, duration: 2, repeat: Infinity, ease: 'easeInOut' } }
        : {}
    },
  };

const ref = useRef(null);

  const inView = useInView(ref,{
    once:false
  })

  const shouldAnimate = hasAnimation && inView;

  const {totalTimeInView} = useComponentTimeTracker({inView,id:id?id:'content',
setTotalPageTime:setTotalPageTime})

  useEffect(()=>{
    if(totalTimeInView > 0)
    console.log(`time spent in ${id} ${totalTimeInView} ms`)
},[totalTimeInView])

  return (

    <article
      id={id}
      ref={ref}
      className={`flex flex-col justify-center items-center pt-8 pb-8
        relative mr-auto ml-auto
        max-w-[1200px] z-1
       
        ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
        ${bgColor ? `bg-[#00bfff] bg-opacity-[0.2] ` : ''}`
        
     }
    >
      <MotionH2
            variants={baseVariants(reverse ? -30 : 30, 0)}
            initial={hasAnimation ? 'initial' : ''}
            animate={shouldAnimate ? 'animate' : ''}
            className="text-left pl-5 sm:pl-12 pt-5 sm:text-4xl font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-3xl
            mb-6
            pr-3 md:hidden"
            
          >
            {mainTitle}
          </MotionH2>

      {iframe ? (
        <div className='relative rounded-xl w-[90vw] h-[55vw] md:w-[45vw] max-h-[367px] max-w-[568px]  mr-auto object-contain
        ml-auto my-auto '
        >

       
       {  iframe}
         </div>
      ) : (
<MotionImage
        className="rounded-xl w-[90vw] h-[55vw] max-h-[567px] max-w-[668px] ml-auto mr-auto object-contain
        my-auto md:w-[48vw]"
        variants={hasAnimation ? imageVariants : {}}
        initial={hasAnimation ? 'initial' : ''}
        animate={shouldAnimate ? 'animate' : ''}
        src={image ? image : ''}
        alt={alt ? alt : 'creative web design halifax'}
        width={1300}
        height={600}
      />
      )}
      

      {customText || (
        <div className='w-screen md:w-[45vw]
        pr-4 md:pr-0'>
          <MotionH2
            variants={baseVariants(reverse ? -30 : 30, 0)}
            initial={hasAnimation ? 'initial' : ''}
            animate={shouldAnimate ? 'animate' : ''}
            className="hidden md:block text-left pl-5 sm:pl-12 pt-5 sm:text-4xl font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-3xl
            pr-3"
            
          >
            {mainTitle}
          </MotionH2>
          <MotionP
            variants={baseVariants(reverse ? -30 : 30, 0.45)}
            initial={hasAnimation ? 'initial' : ''}
            animate={shouldAnimate ? 'animate' : ''}
            className="mt-6 pl-5 text-left sm:pl-12 whitespace-pre-line
            pr-4 text-white"
          >
            {description[0] || 'Default description text.'}
          </MotionP>
          {description[1] && (
            <MotionP
              variants={baseVariants(reverse ? -30 : 30, 0.65)}
              initial={hasAnimation ? 'initial' : ''}
              animate={shouldAnimate ? 'animate' : ''}
              className="mt-6 text-left pl-5 sm:pl-12 pr-4"
            >
              {description[1]}
              <br />
              {buttonLink && (
                <Link href={buttonLink}>
                  <MotionButton
                    variants={baseVariants(reverse ? -30 : 30, 1.2)}
                    initial={hasAnimation ? 'initial' : ''}
                    animate={shouldAnimate ? 'animate' : ''}
                    className="mt-6 bg-[#00bfff] p-3 rounded-xl hover:bg-white hover:text-[#00bfff] "
                  >
                    {buttonText}
                  </MotionButton>
                </Link>
              )}
            </MotionP>
          )}
        </div>
      )}
    </article>
  );
};

export default Content;