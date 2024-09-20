import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useAnimate, useScroll, useTransform } from 'framer-motion';
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
  const height = useTransform(scrollYProgress, [0.8, 1], [1, 500]);

  const [heightValue, setHeightValue] = useState(1);
  const [heightReached, setHeightReached] = useState(false);
  const [arrowColor, setArrowColor] = useState('#00bfff'); // To dynamically control the arrow color

  useEffect(() => {
    const unsubscribe = height.onChange((latestHeight) => {
      setHeightValue(latestHeight);

      if (newSectionRef.current) {
        const newSectionTop = newSectionRef.current.getBoundingClientRect().top;

        // Detect if the arrow has hit the new section
        if (newSectionTop <= latestHeight) {
          setArrowColor('red'); // Change the arrow color when it hits the new section
          setHeightReached(true);
        } else {
          setArrowColor('#00bfff'); // Default color
          setHeightReached(false);
        }
      }
    });

    return () => unsubscribe();
  }, [height]);

  useEffect(() => {
    if (curtainsOpen) {
      handleAnimation();
    }
  }, [curtainsOpen]);

  const handleAnimation = async () => {
    const subHeader = document.getElementById('process-subheader');
    const arrow = document.getElementById('process-arrow');
    if (subHeader) {
      await animate(subHeader, { opacity: 1 }, { delay: 0.0 });
    }
    if (arrow) {
      await animate(arrow, { opacity: 1 }, { ease: 'easeInOut' });
    }
  };

  useEffect(() => {
    const container = scope.current;
    const leftCurtain = leftCurtainRef.current;
    const rightCurtain = rightCurtainRef.current;

    if (container && leftCurtain && rightCurtain) {
      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${container.clientHeight}`,
          pin: true,
          scrub: true,
          markers: true,
        },
      })
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
            onComplete: () => {
              setCurtainsOpen(true);
            },
          },
          0
        );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
    <section 
      ref={scope}>

   
      <section
      
        className="relative w-screen h-[90vh] mb-8"
        style={{
          background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)',
        }}
      >
        <h1
          className="relative text-2xl sm:text-3xl md:text-4xl top-[20%] z-[3] text-center"
        >
          Planning for your success: Our website process
        </h1>

        <h2
          id="process-subheader"
          className="relative top-[25%] z-[2] text-center opacity-0 px-4"
        >
          Your Growth is Our Mission — Every Step We Take is Tailored for Your Success
        </h2>
        <Image
        src={brain}
        alt='The focusflow brain, here to describe why we have great planning for your website'
        className='w-[20vw] relative object-contain mx-auto
        top-[35%]'
        />
        <motion.div
          id="process-arrow"
          className={`bg-[${arrowColor}] opacity-0 w-[10px] top-0 absolute mx-auto z-[15] z-[1] top-[60%] left-1/2 -translate-x-1/2 ${
            heightReached ? 'bg-red-200' : `bg-[${arrowColor}]`
          }`}
          style={{
            height: height,
          }}
        >
          <div
  className={`absolute  left-1/2 -translate-x-1/2 z-[4] 
  ${heightReached ? 'w-[80vw] bottom-0 h-[4px] bg-red-200' : 'w-[0] h-[0] bottom-[-16px] border-l-[15px] scale-[1.3] border-r-[15px] border-t-[16px] border-transparent'} 
 ${heightValue >= 2 ? 'opacity-1' : 'opacity-0'}`}
/>

        </motion.div>
        <div
          ref={leftCurtainRef}
          className="absolute top-0 left-0 bg-blue-500 w-[50vw] h-full z-[2]"
        ></div>
        <div
          ref={rightCurtainRef}
          className="absolute top-0 right-0 bg-blue-500 w-[50vw] h-full z-[2]"
        ></div>
      </section>
      <section ref={newSectionRef} className="w-[95vw] bg-blue-800 mt-[5rem]
      relative">
        <h3>This is the new section</h3>
        <section>

        </section>
      </section>
      </section>
    </>
  );
};

export default Curtain;
