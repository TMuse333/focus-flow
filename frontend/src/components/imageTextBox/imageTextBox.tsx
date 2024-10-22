'use client'; // Mark this file as a client component

import React, { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';
import Link from "next/link";
import SlidingText from "../slidingText/slidingText";
import { useGeneralContext } from "@/context/context";
import { HTMLMotionProps, animate, useInView ,motion} from "framer-motion";
import Image from 'next/image'

// Dynamically import framer-motion's motion components with type assertion


// Define props interface
interface Props {
  src?: string;
  alt?: string;
  title: string;
  description: string;
  buttonText?: string;
  destination?: string;
  reverse?: boolean;
  iframe?:React.ReactNode
  slidingText?:boolean
}

const ImageTextBox: React.FC<Props> = ({
  src, alt, title, description,
  buttonText, destination,
  reverse, iframe,
  slidingText
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.8, once: true });
  const [slideComplete, setSlideComplete] = useState(false);
  const { isMobile } = useGeneralContext();

  const handleAnimation = async () => {
    const image = document.getElementById(`${title}-image`);
    const paragraph = document.getElementById(`${title}-paragraph`);
    const button = document.getElementById(`${title}-button`);

    if (image) {
      await animate(image, { opacity: 1 });
    }

    if (paragraph) {
      await animate(paragraph, { opacity: 1, y: 0 }, { ease: 'easeInOut' });
    }

    if (button) {
      await animate(button, { opacity: 1, x: 0 }, { ease: 'easeInOut' });
    }
  };

  useEffect(() => {
    if (slideComplete) {
      handleAnimation();
    }
  }, [slideComplete]);

  const MotionImage = motion(Image)


  const imageSlide = {
    initial:{
      opacity:0,
      x: reverse ? -40 : 40
    },
    animate:{
      opacity:1,
      x:0
    }
  }

  const textSlide = (delay:number) => {
    return {
      initial:{
        opacity:0,
        x: reverse ? -40 : 40
      },
      animate:{
        opacity:1,
        x:0,
        transition:{
          delay:delay
        }
      }
    }
  }

  return (
    <section
      ref={ref}
      className={`w-screen flex flex-col md:flex-row items-center
        justify-center text-white ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
        mb-14 max-w-[1200px] mx-auto`}
    >
      {isMobile &&  (
        <SlidingText
          text={title}
          setSlideComplete={setSlideComplete}
          reverse={reverse}
        />

      )}

        {src && alt ? (

<MotionImage
        src={src}
        alt={alt}
        id={`${title}-image`}
        className="mx-auto object-contain w-[90vw] h-[55vw] max-h-[567px] max-w-[668px] md:w-[45vw] opacity-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
        ) : iframe ? (
            iframe
        ) : null}

      

      <section className="w-full md:w-[50vw]">
        {!isMobile && (
          <SlidingText
            text={title}
            setSlideComplete={setSlideComplete}
            reverse={reverse}
          />
        )}

        <motion.p
          id={`${title}-paragraph`}
          className="px-4 mt-4 font-semibold
            sm:text-md md:text-lg transition-[transform]
            opacity-0 translate-y-[4rem]"
        >
          {description}
        </motion.p>

        {destination && buttonText && (
          <Link href={destination}>
            <motion.button
              id={`${title}-button`}
              className={`mt-4 p-3
                rounded-2xl bg-[#00bfff]
                text-white hover:text-[#00bfff]
                hover:bg-white hover:scale-[1.05] 
                transition-transform transition-colors opacity-0
                ${!reverse ? 'translate-x-[8rem]' : '-translate-x-[8rem]'} ml-4`}
            >
              {buttonText}
            </motion.button>
          </Link>
        )}
      </section>
    </section>
  );
}

export default ImageTextBox;