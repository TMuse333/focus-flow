import React, { useEffect, useState } from "react";
import { useAnimate, useScroll, motion, useTransform, useMotionValue, useMotionTemplate,
useInView, animate } from 'framer-motion';
import Image from "next/image";
import brain from '../../../public/media/focusFlow-brain-nobg.webp';
import Link from 'next/link'
import AppearingGradient from "../appearingGradient/appearingGradient";
import { useGeneralContext } from "@/context/context";
import { useComponentTimeTracker } from "@/lib/componentTracker";

interface Props {
  title:string,
  description:string,
  buttonText:string,
  buttonDestination:string
  setTotalPageTime?:React.Dispatch<React.SetStateAction<{name:string,
    time:number}[]>>
    id:string
}

const AppearingSquare:React.FC<Props> = ({
  title, description,
  buttonText, buttonDestination,
  setTotalPageTime, id
}) => {
  const [scope, scopeAnimate] = useAnimate();

  const COLORS = [
    "#00bfff", 
    '#30a3c9',
    "#5dcff5", 
    "#0080a1", 
    "#3ab7e0", 
    "#00bfff", 
  ];
  
  const color1 = useMotionValue(COLORS[0]);
  const color2 = useMotionValue(COLORS[1]);

  const backgroundImage = useMotionTemplate`linear-gradient(45deg,${color1}, ${color2})`




  const {isMobile} = useGeneralContext()

  // Ensure you're transforming the y values based on the scroll position

  const inView = useInView(scope,{
   
    amount:!isMobile ? 0.7 : 0.2
  })

  const {totalTimeInView} = useComponentTimeTracker({inView,id:id,
  setTotalPageTime:setTotalPageTime,
  pageTracker:false})


      const handleAnimation = async () => {
       const header = document.getElementById('closing-header')
       const paragraph = document.getElementById('closing-paragraph')
       const button = document.getElementById('closing-button')

       if(header){
        await scopeAnimate(header,{y:0,opacity:1})
     
       }

       if(paragraph){
        await scopeAnimate(paragraph,{opacity:1},
            {delay:1})
       }

       if(button){
        await scopeAnimate(button,{opacity:1},{
            delay:0.5,
            ease:'easeInOut'
            
        },)
       }
      
      }

      useEffect(()=> {
        if(inView){
            console.log('in view!')
            handleAnimation()
        }
    })
      

    useEffect(() => {
        // Animate the colors for the gradient
       
           animate(color1, COLORS, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
          });
    
           animate(color2, COLORS, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
          });
        

      
    }, []);

  
  return (
    <section ref={scope} className=" relative
   "
    style={{
        background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)'
      }}>
     
      

        {/* Motion heading */}
        {/* <h3 id='closing-header'
className="text-center relative pb-4  mr-auto font-semibold mb-2
bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl
translate-y-[4rem] transition-transform opacity-0"
style={{
  backgroundImage: "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)",

}}>
          
        
          Time to elevate your digital presence
        </h3> */}

        <AppearingGradient
        text={title}
        subText=""
        />
     
     

      {/* Optional image */}
      <Image
        src={brain}
        alt="brain"
        className="w-[40vw] object-contain mx-auto relative z-[4]
        max-w-[420px] max-h-[420px] mt-[-5rem]
        "
      />

      {/* Call to action section */}
      <section id='closing-paragraph'
      className="flex flex-col justify-center md:text-lg px-4 relative z-[4] mb-8
      opacity-0 items-center">
      <p className="mx-auto px-4 text-pre-line
      whitespace-pre-line">
  {description}
 </p>

        <Link
        href={buttonDestination}>
        <motion.button id='closing-button'
        style={{
            backgroundImage
        }}
        whileHover={{
            scale:1.05
        }}
         className="mx-auto mt-8 opacity-0 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 
         shadow-lg shadow-all-around
         ">
          {buttonText}
        </motion.button>
        </Link>
      </section>
    </section>
  );
};

export default AppearingSquare;
