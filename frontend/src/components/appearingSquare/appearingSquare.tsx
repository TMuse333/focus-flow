import React, { useEffect, useState } from "react";
import { useAnimate, useScroll, motion, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
import Image from "next/image";
import brain from '../../../public/media/focusFlow-brain-nobg.webp';

const AppearingSquare = () => {
  const [scope, animate] = useAnimate();

  const COLORS = ["#00bfff", "#08bffc", "#12c4ff", "#1bc3fa"];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`linear-gradient(to top, ${color}, #001b24)`;

  const [animationComplete, setAnimationComplete] = useState(false);

  const { scrollY } = useScroll();

  // Ensure you're transforming the y values based on the scroll position
  const translateY = useTransform(scrollY, [0, 300], ['4rem', '0rem']); // 72px is 4.5rem
  const scale = useTransform(scrollY, [0, 150], [0.7, 1]);

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
    });
  }, [color]);

  return (
    <section ref={scope} className=" relative">
      {/* <div className="relative h-[70px] "> */}
        {/* <div className="absolute bg-red-200 h-full w-full z-[2]"></div> */}

        {/* Motion heading */}
        <h3 
className="text-center   mr-auto font-semibold mb-2
bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl"
style={{
  backgroundImage: "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)",
}}>
          
        
          Time to elevate your digital presence
        </h3>
      {/* </div> */}

      {/* Optional image */}
      <Image
        src={brain}
        alt="brain"
        className="w-[40vw] object-contain mx-auto relative z-[4]"
      />

      {/* Call to action section */}
      <section className="flex flex-col justify-center md:text-lg px-4 relative z-[4] mb-8">
      <p className="mx-auto px-4">
  Now that you've seen firsthand why FocusFlow stands above the rest, it's time to take the next step. Your website is more than just an online presence — it's a crucial part of your business's success. It deserves to be built and managed by a team with the technical expertise and creative vision to set you apart from the competition.
   <br/><br/>
   Don't settle for average when you can have a website that truly reflects the heart of your brand and drives results. We’re ready to design a site that not only captures your audience's attention but also elevates your business to new heights.
   <br/><br/>
   Start your project with us today and let's bring your vision to life. Click below to get started — we're excited to work with you and create something extraordinary.
 </p>

        <button className="mx-auto mt-8 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all">
          Get Started with FocusFlow
        </button>
      </section>
    </section>
  );
};

export default AppearingSquare;
