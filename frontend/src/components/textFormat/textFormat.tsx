import React, {  useState } from "react";
import { motion, Variants } from "framer-motion";
import {useIntersectionObserver} from '../intersectionObserver/intersectionObserver'

interface TextFormatProps {
  isAnimated: boolean ,
  reverse: boolean 
}

const TextFormat: React.FC<TextFormatProps> = ({ isAnimated, reverse  }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  };
  const componentRef = useIntersectionObserver(setIsVisible,options)


  

  const pointVariants = (index: number): Variants => {
    return {
      initial: {
        opacity: 0,
        x: reverse ? 25 : -25
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          delay: index * 0.3
        }
      }
    };
  };

  const textVariants: Variants = {
    initial: {
      opacity: 0,
      x: reverse ? 25 : -25
    },
    animate: {
      opacity: 1,
      x: 0,
     
    }
  }


  const nullVariants: Variants = {
        initial:{

        },
        animate:{

        }
  }

  const points: string[] = [
    'Finding new clients through seo',
    'Being able to fully display your products',
    'Closing existing clients',
    'Scheduling through your website',
    'Answering commonly asked questions 24/7',
    'Much more'
  ];

  return (
    <motion.article
      ref={componentRef}
      className="w-[90vw] pl-0 pr-4 relative mt-5 
   
      mr-auto
      max-h-[567px]
    ml-auto
      sm:mt-8  
       md:pl-8
     text-left
     sm:pl-0
       sm:max-w-[668px]
      md:max-w-[350px] "   
      
    >
       
     
      {/* <div className={`${reverse ? 'md:-translate-x-0' : 'md:translate-x-6'}`}> */}
      <motion.h1 className="text-2xl pb-5 text-left ml-0 font-bold ">
       Elevate your brand.</motion.h1>
      <motion.p variants={isAnimated ? textVariants : nullVariants}
       initial="initial" 
       animate={isVisible ? "animate" : "initial"}
      className="text-lg w-screen pr-2 pl-0  text-left w-[90vw] 
      sm:max-w-[650px]
      ml-auto
    
      md:w-[50vw] md:max-w-[350px]">
<br/>

    When implemented correctly, your website can be a huge contributing factor to your success, saving you time
    elevating your status, saving you time and showing your product to the entire world.

      </motion.p>
      <motion.ul className="text-left  pl-4 pt-5 list-disc
     ">
        {points.map((point, index) => (
          <motion.li className="text-white disc-none mb-2"
           key={index} 
          variants={isAnimated ? pointVariants(index) : nullVariants}
           initial="initial" 
           animate={isVisible ? "animate" : "initial"}
           >
            {point}
          </motion.li>
        ))}
         <motion.button
        className="mt-5 w-[150px] ml-0  rounded-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: points.length * 0.3 }}
      >
        Learn more
      </motion.button>
      </motion.ul>
      {/* </div> */}
    </motion.article>
  );
};

export default TextFormat;
