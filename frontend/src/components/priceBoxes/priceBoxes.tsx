"use client"

import React, { useState, useEffect } from 'react';
import { useAnimate } from 'framer-motion';
import SlidingText from '../slidingText/slidingText';

interface PriceBoxesProps {
  boxes: {
    src: string;
    alt: string;
    price: string;
  }[];
  title?: string;
  description?: string;
}

const PriceBoxes: React.FC<PriceBoxesProps> = ({ boxes, title, description }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [scope, animate] = useAnimate();

  const animateIntro = async () => {
    // Check if the element exists before animating
    const introTag = document.querySelector('#intro-p-tag');
    if (introTag) {
      await animate(introTag, { opacity: 1 });
    } else {
      console.error('intro-p-tag element not found');
    }

    // Animate box 2 first
    const box2Img = document.querySelector('#box-2-img');
    const box2P = document.querySelector('#box-2-p');
    if (box2Img && box2P) {
      await animate(box2Img, { y: "0%", opacity: 1 });
      await animate(box2P, { opacity: 1 });
    } else {
      console.error('Box 2 elements not found');
    }

    // Then animate box 1
    const box1Img = document.querySelector('#box-1-img');
    const box1P = document.querySelector('#box-1-p');
    if (box1Img && box1P) {
      await animate(box1Img, { y: "0%", opacity: 1 });
      await animate(box1P, { opacity: 1 });
    } else {
      console.error('Box 1 elements not found');
    }

    // Finally animate box 0
    const box0Img = document.querySelector('#box-0-img');
    const box0P = document.querySelector('#box-0-p');
    if (box0Img && box0P) {
      await animate(box0Img, { y: "0%", opacity: 1 });
      await animate(box0P, { opacity: 1 });
    } else {
      console.error('Box 0 elements not found');
    }
  };

  useEffect(() => {
    if (animationComplete) {
      animateIntro();
    }
  }, [animationComplete]);

  return (
    <>
      <section
        ref={scope}
        className="text-left px-4 mb-8 mx-auto max-w-[1200px]
        overflow-x-hidden"
      >
        <SlidingText
          text="Experience the Freedom of More Profits"
          setSlideComplete={setAnimationComplete}
        />
        <p
          id="intro-p-tag"
          className="sm:text-md md:text-lg px-6 opacity-0 mt-8"
        >
          We believe in empowering your business, not taking from it. Unlike other platforms, our online ordering system is built to give you more of what you earn. By integrating Stripe, we’ve ensured that your payments are secure, seamless, and come with a fraction of the fees you’d see elsewhere.
          <br />
          <br />
          No hefty commissions. No unnecessary costs. Just more of what belongs to you.
        </p>
      </section>

      <section
        className="grid grid-cols-3 max-w-[1200px] mx-auto"
      >
        {/* Box 2 */}
        <div className="w-[30vw] max-w-[400px]">
          <img
            src={boxes[2].src}
            id="box-2-img"
            alt={boxes[2].alt}
            className="w-[80%] mx-auto object-contain rounded-xl mt-4 mb-3 max-w-[200px] translate-y-[40%] opacity-0"
          />
          <p id="box-2-p" className="text-center mb-4 opacity-0
          text-red-300">
            Amount taken:&nbsp;{boxes[2].price}
          </p>
        </div>

        <div className="w-[30vw] max-w-[400px]">
          <img
            src={boxes[0].src}
            id="box-0-img"
            alt={boxes[0].alt}
            className="w-[80%] mx-auto object-contain rounded-xl mt-4 mb-3 max-w-[200px] translate-y-[10%] opacity-0"
          />
          <p id="box-0-p" className="text-center mb-4 opacity-0 text-green-300">
            Amount taken:&nbsp;{boxes[0].price}
          </p>
        </div>

        {/* Box 1 */}
        <div className="w-[30vw] max-w-[400px]">
          <img
            src={boxes[1].src}
            id="box-1-img"
            alt={boxes[1].alt}
            className="w-[80%] mx-auto object-contain rounded-xl mt-4 mb-3 max-w-[200px] translate-y-[10%] opacity-0"
          />
          <p id="box-1-p" className="text-center mb-4 opacity-0
          text-red-300">
            Amount taken:&nbsp;{boxes[1].price}
          </p>
        </div>

        {/* Box 0 */}
       
      </section>
    </>
  );
};

export default PriceBoxes;
