import React, { useEffect, useState } from "react";
import { useAnimate, useScroll, motion, useTransform, useMotionValue, useMotionTemplate,
useInView, animate } from 'framer-motion';
import Image from "next/image";
import brain from '../../../public/media/focusFlow-brain-nobg.webp';

const AppearingSquare = () => {
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


  const [animationComplete, setAnimationComplete] = useState(false);

  const { scrollY } = useScroll();

  // Ensure you're transforming the y values based on the scroll position

  const inView = useInView(scope,{
   
    amount: 0.7
  })


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
        <h3 id='closing-header'
className="text-center relative pb-4  mr-auto font-semibold mb-2
bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl
translate-y-[4rem] transition-transform opacity-0"
style={{
  backgroundImage: "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)",

}}>
          
        
          Time to elevate your digital presence
        </h3>
     
     

      {/* Optional image */}
      <Image
        src={brain}
        alt="brain"
        className="w-[40vw] object-contain mx-auto relative z-[4]
        "
      />

      {/* Call to action section */}
      <section id='closing-paragraph'
      className="flex flex-col justify-center md:text-lg px-4 relative z-[4] mb-8
      opacity-0">
      <p className="mx-auto px-4">
  Now that you've seen firsthand why FocusFlow stands above the rest, it's time to take the next step. Your website is more than just an online presence — it's a crucial part of your business's success. It deserves to be built and managed by a team with the technical expertise and creative vision to set you apart from the competition.
   <br/><br/>
   Don't settle for average when you can have a website that truly reflects the heart of your brand and drives results. We’re ready to design a site that not only captures your audience's attention but also elevates your business to new heights.
   <br/><br/>
   Start your project with us today and let's bring your vision to life. Click below to get started — we're excited to work with you and create something extraordinary.
 </p>

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
          Get Started with FocusFlow
        </motion.button>
      </section>
    </section>
  );
};

export default AppearingSquare;
