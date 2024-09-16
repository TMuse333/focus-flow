"use client"

import React, { useState } from 'react';
import { Variants, motion } from 'framer-motion';
import { useIntersectionObserver } from '../intersectionObserver/intersectionObserver';
import { useGeneralContext } from '../../context/context';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ContentProps {
  image: StaticImageData;
  customText?: React.ReactNode;
  description?: string[];
  reverse?: boolean;
  mainTitle?: string;
  floatingImage?: boolean;
  hasAnimation?: boolean;
  buttonLink?: string;
  buttonText?: string;
  alt?:string
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
  alt
}) => {
  const [inView, setInView] = useState(false);
  const { isMobile } = useGeneralContext();

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
  };

  const componentRef = useIntersectionObserver(setInView, options);
  const MotionImage = motion(Image);

  const baseVariants = (x: number, delay: number): Variants => ({
    initial: { x, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { delay }
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

  const shouldAnimate = hasAnimation && inView;

  return (
    <article
      ref={componentRef}
      className={`flex flex-col justify-center items-center pt-8 pb-8
        relative mr-auto ml-auto 
        md:w-screen md:max-w-[1200px] sm:max-w-[668px] z-1
        md:justify-around
        ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      <MotionImage
        className="rounded-xl w-[90vw] h-[55vw] max-h-[567px] max-w-[668px] ml-auto mr-auto object-contain
        my-auto"
        variants={hasAnimation ? imageVariants : {}}
        initial={hasAnimation ? 'initial' : ''}
        animate={shouldAnimate ? 'animate' : ''}
        src={image.src}
        alt={alt ? alt : 'creative web design halifax'}
        width={1300}
        height={600}
      />

      {customText || (
        <div>
          <motion.h2
            variants={baseVariants(reverse ? -30 : 30, 0)}
            initial={hasAnimation ? 'initial' : ''}
            animate={shouldAnimate ? 'animate' : ''}
            className="text-left pl-5 sm:pl-12 pt-5 sm:text-4xl font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-3xl
            pr-3"
          >
            {mainTitle}
          </motion.h2>
          <motion.p
            variants={baseVariants(reverse ? -30 : 30, 0.45)}
            initial={hasAnimation ? 'initial' : ''}
            animate={shouldAnimate ? 'animate' : ''}
            className="mt-6 pl-5 text-left sm:pl-12 whitespace-pre-line
            pr-4"
          >
            {description[0] || 'Default description text.'}
          </motion.p>
          {description[1] && (
            <motion.p
              variants={baseVariants(reverse ? -30 : 30, 0.65)}
              initial={hasAnimation ? 'initial' : ''}
              animate={shouldAnimate ? 'animate' : ''}
              className="mt-6 text-left pl-5 sm:pl-12 pr-4"
            >
              {description[1]}
              <br/>
              {buttonLink && (
                <Link href={buttonLink}>
                  <motion.button
                    variants={baseVariants(reverse ? -30 : 30, 1.2)}
                    initial={hasAnimation ? 'initial' : ''}
                    animate={shouldAnimate ? 'animate' : ''}
                    className="mt-6 bg-[#00bfff] p-3 rounded-xl hover:bg-white hover:text-[#00bfff] transition-all"
                  >
                    {buttonText}
                  </motion.button>
                </Link>
              )}
            </motion.p>
          )}
        </div>
      )}
    </article>
  );
};

export default Content;
