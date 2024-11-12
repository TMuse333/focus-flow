import React, { useRef, useState } from 'react';
import { AnimatePresence, useInView } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import dynamic from 'next/dynamic';
import { HTMLMotionProps } from 'framer-motion';
import { useComponentTimeTracker } from '@/lib/componentTracker';

const SlidingText = dynamic(() => import('../slidingText/slidingText.prod'))

const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), {
  ssr: false,
}) as React.ComponentType<HTMLMotionProps<'p'>>;


interface TestimonialProps {
  testimonials?: {
    title?: string;
    quote: string;
    author: string;
    effect: string;
  }[];
  id?:string,
  setTotalPageTime?:React.Dispatch<React.SetStateAction<{name:string,
    time:number}[]>>
}

const testimonialsData = [
  {
    title: 'CEO of Sainey Media',
    quote: 'Hard working, disciplined and fast.',
    author: 'Sainey Take',
    effect: `Working with Thomas Musial at FocusFlow Software to design my website was an incredible experience! Thomas kept me involved in every detail, ensuring the final result matched my vision. His ability to create unique designs that make my brand stand out, combined with his competitive pricing, makes him the best choice. If you're unsure about working with Thomas, consider this your sign to take the leap and invest in your business!`, // Example effect
  },
  {
    title: 'Senior Financial Advisor',
    effect: 'We recently had the pleasure of working with Thomas to develop our offices\' new website. \n' +
      'We found Thomas to be professional and he was quick in his response times to our requests for changes.\n' +
      'We are happy with the completed website and look forward to working with him in the future, to expand on the base he has started for us.',
    author: 'Darryl Smith',
    quote: 'Professional with fast response times',
  },
  {
    quote: 'Thomas is the man',
    effect: `I'd like to thank FocusFlow Software so much for creating my new website! I am so excited.  I'm a Real estate investing coach with a busy schedule. They were patient with me and my busy schedule and gave me gentle reminders which I needed.  If you're looking for someone who will give 110% to them... Thomas is THE man!`,
    author: 'Theresa Beneteau',
    title: 'Owner of Ontario Cash for Houses',
  },
];

const Testimonials: React.FC<TestimonialProps> = ({ testimonials = testimonialsData,
id, setTotalPageTime }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const componentRef = useRef(null)

    const inView = useInView(componentRef,
        {
            once:false
        })

    const {totalTimeInView} = useComponentTimeTracker({inView,id:id?id:'content',
    setTotalPageTime:setTotalPageTime})

  return (
    <>
      {/* <AppearingGradient
        text='Client Success, Delivered'
        subText="Explore feedback from clients who've experienced the power of custom web design"
      /> */}

      <SlidingText
      text='Client Success, Delivered'
      />

      <section 
      id={id}
      className='bg-gradient-to-b from-[#00a2e4] via-[#00a2e4] to-[#00e0ff]
        ml-auto mr-auto max-w-[1200px] w-screen 
        relative mb-8 rounded-lg text-white
        h-[80vh] max-h-[600px] sm:w-[90vw]'
      >
        <IoIosArrowForward className="absolute sm:text-5xl top-[40%] right-0 text-2xl hover:text-blue-200
          hover:scale-[1.15] transition-all" onClick={nextTestimonial} />
        <IoIosArrowBack className="absolute top-[40%] left-0 text-2xl
          hover:text-blue-200
          hover:scale-[1.15] transition-all sm:text-5xl" onClick={prevTestimonial} />

        <AnimatePresence mode='wait'>
          <MotionP key={currentTestimonial} className="font-bold mb-4 pl-8 pr-8 mt-8
            text-lg md:text-xl lg:text-2xl sm:pl-12 sm:pr-12 pt-8"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
          >
            {testimonials[currentTestimonial].quote}
          </MotionP>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <MotionP key={currentTestimonial} className="pl-8 pr-8 sm:pl-12 sm:pr-12 sm:text-xl
            whitespace-pre-line text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
          >
            {testimonials[currentTestimonial].effect}
          </MotionP>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <MotionP key={currentTestimonial} className="mt-8 pl-6 sm:pl-12 pr-8
            sm:text-lg text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
            exit={{ opacity: 0 }}
          >
            -{testimonials[currentTestimonial].author}
          </MotionP>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <MotionP key={currentTestimonial} className="pl-8 pr-8 sm:pl-12 sm:text-lg
            text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
            exit={{ opacity: 0 }}
          >
            {testimonials[currentTestimonial].title}
          </MotionP>
        </AnimatePresence>
      </section>
    </>
  );
};

export default Testimonials;
