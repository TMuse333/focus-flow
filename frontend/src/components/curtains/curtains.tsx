import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useAnimate, useScroll, useTransform,
animate, useMotionTemplate, useMotionValue } from 'framer-motion';
import brain from '../../../public/media/focusFlow-brain-nobg.webp'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger);

const Curtain = () => {
  const leftCurtainRef = useRef<HTMLDivElement | null>(null);
  const rightCurtainRef = useRef<HTMLDivElement | null>(null);
  const newSectionRef = useRef<HTMLDivElement | null>(null); // Reference for the new section

  const [scope, animate] = useAnimate();
  const [curtainsOpen, setCurtainsOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0.1, 1], [1, 600]);

  const [heightValue, setHeightValue] = useState(1);
  const [heightReached, setHeightReached] = useState(false);
  const [arrowColor, setArrowColor] = useState('#00bfff'); // To dynamically control the arrow color
  const [finalHeight, setFinalHeight] = useState(0)

  useEffect(() => {
    const unsubscribe = height.onChange((latestHeight) => {
      setHeightValue(latestHeight);
  
      if (newSectionRef.current) {
        const newSectionTop = newSectionRef.current.getBoundingClientRect().top;
  
        // Detect if the arrow has hit the new section
        if (newSectionTop <= latestHeight) {
          setArrowColor('red'); // Change the arrow color when it hits the new section
          setHeightReached(true); // Trigger heightReached to true
  
          // Only set the final height once when heightReached turns true
          
        } else {
          // Optional: reset if arrow moves away
          // setArrowColor('#00bfff');
          // setHeightReached(false);
        }
      }
    });
  
    return () => unsubscribe();
  }, [height, finalHeight]); // Watch finalHeight to prevent updating it multiple times


  useEffect(() => {
    if (heightReached && finalHeight === 0) {
      setFinalHeight(heightValue); // Stop growing when heightReached is true
    }
  }, [heightReached, heightValue,finalHeight]);
  

  useEffect(() => {
    if (curtainsOpen) {
      handleAnimation();
    }
  }, [curtainsOpen]);

  useEffect(()=>{
    if(heightReached){
        handleAnimation2()
    }
  },[heightReached])

  const handleAnimation = async () => {
    const subHeader = document.getElementById('process-subheader');
    const arrow = document.getElementById('process-arrow');
    const introContainer = document.getElementById('intro-container')
    const image = document.getElementById('process-brain')

    if (introContainer) {
      await animate(introContainer, {
        background: [
          'radial-gradient(circle, #003f7f -10%, rgba(0, 63, 127, 0%) 20%)',   // Darkest blue, smallest circle
          'radial-gradient(circle, #005f9f -30%, rgba(0, 95, 159, 0%) 40%)',   // Darker blue, medium circle
          'radial-gradient(circle, #0080bf -50%, rgba(0, 128, 191, 0%) 60%)',  // Dark blue, medium-large circle
    
          'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)', // Final larger bright circle
        ],
      }, {
        duration: 0.4,  // Increased duration for smoother transitions
        ease: 'easeIn',
      });
    }


    if(image){
      await animate(image, {opacity:1})
    }
    
    

    if (subHeader) {
      await animate(subHeader, { opacity: 1 }, { delay: 0.0 });
    }
    if (arrow) {
      await animate(arrow, { opacity: 1 }, { ease: 'easeInOut' });
    }
  };

  const handleAnimation2 = async () => {
    const top = document.getElementById('top-border')
    const left = document.getElementById('left-border')
    const right = document.getElementById('right-border')
    const bottom = document.getElementById('bottom-border')
    const arrow = document.getElementById('process-arrow');
    const question1 = document.getElementById('question-1')
    const question2 = document.getElementById('question-2')
    const question3 = document.getElementById('question-3')


    if(top){
       
        await animate(top,{width:'100%'}) 
    }

    if(right){
      await animate(right, {height:'100%'})
    }

    if(bottom){
      await animate(bottom, {width:'100%'})
    }
    if(left){
      await animate(left, {height:'100%'})
    }
    if(arrow){
      await animate(arrow,{opacity:0})
    }

    if(question1){
      await animate(question1, {opacity:1},
        {delay:0.3,duration:0.2},)
    }
    if(question2){
      await animate(question2, {opacity:1},
        {delay:0,duration:0.2})
    }
    if(question3){
      await animate(question3, {opacity:1},
        {delay:0,duration:0.2})
    }
  }
  


  useEffect(() => {
    const container = scope.current;
    const leftCurtain = leftCurtainRef.current;
    const rightCurtain = rightCurtainRef.current;
  
    if (container && leftCurtain && rightCurtain) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${container.clientHeight}`,
          pin: true,
          scrub: true,
          markers: true,
          onUpdate: (self) => {
            // Set curtainsOpen to true when progress reaches 70%
            if (self.progress > 0.8) {
              setCurtainsOpen(true);
            }
          },
        },
      });
  
      timeline
        .to(leftCurtain, {
          x: () => `-${container.clientWidth / 2}`,
          duration: 1,
          ease: 'power2.inOut',
        })
        .to(
          rightCurtain,
          {
            x: () => `${container.clientWidth / 2}`,
            duration: 1,
            ease: 'power2.inOut',
          },
          0
        );
    }
  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
    <>
    <section 
      ref={scope}>

   
      <section
        id='intro-container'
        className="relative w-screen h-[90vh] mb-8 z-[3]
       
        "
       
      >
        <h1
          className="font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent relative text-2xl sm:text-3xl md:text-4xl top-[20%] z-[4] text-center
          px-12 mx-auto"
        >
          Planning for your success: Our website process
        </h1>

        <h2
          id="process-subheader"
          className="relative top-[25%] z-[2] text-center opacity-0 px-4
          sm:text-lg md:text-xl "
        >
          Your Growth is Our Mission — Every Step We Take is Tailored for Your Success
        </h2>
        <Image
        id='process-brain'
        src={brain}
        alt='The focusflow brain, here to describe why we have great planning for your website'
        className='w-[40vw]   relative object-contain mx-auto opacity-0 z-[2]
        top-[35%] sm:top-[35%] md:top-[25%]'
        />
        <motion.div
          id="process-arrow"
          className={`bg-[#00bfff] opacity-0 w-[10px] top-0 absolute mx-auto  z-[1] top-[60%] left-1/2 -translate-x-1/2 
           `}
          style={{
            height:height,
          }}
        >
  <motion.div
  id="process-arrow"
  className={`absolute mx-auto z-[15] top-[100%] left-1/2 -translate-x-1/2 transition-all duration-300
    ${heightValue >= 1 ? 'opacity-1' : 'opacity-1'}
    border-l-[15px] h-0 w-0 border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-[#00bfff]`}

/>


        </motion.div>
        <motion.div
          ref={leftCurtainRef}
          className="absolute top-0 left-0 bg-[#00bfff] w-[50.5vw] h-full z-[2]
          border-4 border-white border-r-0"
          style={{
            backgroundImage
          }}
        ></motion.div>
        <motion.div
        style={{
          backgroundImage
        }}
          ref={rightCurtainRef}
          className="absolute top-0 right-0 bg-[#00bfff] w-[50.5vw] h-full z-[2]
          border-4 border-white border-l-0"
        ></motion.div>
      </section>

{/* the section above is the first section, the section below is the second */}

      <section 
      id='section-2-container'
      ref={newSectionRef} className="w-[98vw] bg-black mx-auto
      relative  z-[16] p-4 overflow-x-hidden"
      
      >
         <h3 className='text-center text-2xl mt-8 sm:text-3xl
         mb-4'>Initial plan: User experience</h3>
         <p className='px-8 w-[80%] mx-auto'>When we start the journey of elevating
          your digital presence, we first take into
          account the ideal user experience by asking these three
          questions
         </p>

         

         <section className='flex flex-col justify-center items-center
         mx-auto md:flex-row md:justify-between  relative z-[2]
   
         '>

        <div id='question-1'
        className='      bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 rounded-2xl text-black mb-6 p-4 mt-6
           my-auto opacity-0 relative z-[16] mx-auto 
           md:w-[30vw]   md:h-[80vh] overflow-y-scroll
           '>
          <h4 className='text-2xl text-center mb-4'>
            What do we want users to see?
          </h4>
          <p>
          We’ll talk about what your visitors should notice right away when they land on your website. What’s the most important message or content you want front and center?
We’ll strategically place eye-catching visuals and headlines that quickly communicate your key offerings. Whether it’s a stunning hero image, a catchy headline, or a promotional video, we’ll ensure the first thing they see grabs their attention.
Additionally, we’ll ensure that important elements like your contact information, product highlights, or recent blog posts are easily accessible. We’ll prioritize content that matters most to your business goals.

          </p>
         </div>

  

         <div id='question-2'
        className='      bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 rounded-2xl text-black mb-6 p-4 mt-6
           my-auto opacity-0 relative z-[16] mx-auto 
           md:w-[30vw]    md:h-[80vh]
           '>
          <h4 className='text-2xl text-center mb-4'>
            What do we want the website to do?
          </h4>
          <p>
          First, we’ll discuss your website’s goals. Is it for leads, sales, showcasing work, or providing information?
We’ll cover the core functionalities to make this happen, like speed, navigation, and mobile optimization.
We’ll also plan for the future, ensuring the site can grow with your business and easily integrate new tools.
          </p>
         </div>

         <div id='question-3'
        className='     bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 rounded-2xl text-black mb-6 p-4 mt-6
           my-auto opacity-0 relative z-[16] mx-auto 
           md:w-[30vw]  md:h-[80vh] overflow-y-scroll
           '>
          <h4 className='text-2xl text-center mb-4'>
            What do we want users to feel?
          </h4>
          <p>
          Next, we’ll talk about how you want your visitors to feel when they land on your site. Do you want to project trust and credibility right away? Should they feel inspired, excited, or maybe reassured that they’ve come to the right place?
We’ll work on creating the right vibe for your brand through colors, images, and the overall design. This isn’t just about looking good — it’s about creating an emotional connection with your audience. We’ll think about how to make your site visually engaging while staying true to your brand’s voice and identity.
User experience is key. We’ll make sure everything feels easy and intuitive for your users, so they don’t get frustrated or lost. The goal is for them to enjoy their experience and keep exploring the site.

          </p>
         </div>

         </section>


        <span id='top-border'
         className='absolute top-0 bg-[#00bfff] h-[2px] w-0
         left-1/2 -translate-x-1/2'/>

        <span id='left-border'
        className='absolute left-0 bottom-0 bg-[#00bfff] w-[2px] h-0 '
        style={{
          transformOrigin:'bottom'
        }}/>

        <span id='right-border'
        className='absolute right-0 w-[2px] h-0 top-0 bg-[#00bfff]'/>

        <span id='bottom-border'
        className='absolute bottom-0 right-0 bg-[#00bfff]  h-[2px] w-0 z-[10]'
       
        />

        <p className='max-w-[1000px] px-4 mx-auto my-4'>
        Once we've gathered this information and set clear objectives, we’ll craft a detailed strategy to ensure each goal is effectively achieved. Our approach will be focused, systematic, and tailored to your needs, so every aspect of your website works in harmony to meet and exceed expectations. From design to functionality, we’ll make sure the final product is aligned with your vision and built for success.
        </p>
      </section>
      
      </section>
    </>
  );
};

export default Curtain;
