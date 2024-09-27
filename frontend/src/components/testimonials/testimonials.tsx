import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import AppearingGradient from '../appearingGradient/appearingGradient';

interface TestimonialProps {
    testimonials?: {
        title?: string,
        quote: string,
        author: string,
        effect:string
    }[]
}

const testimonialsData = [
    {
        title: 'CEO of Sainey Media',
        quote: 'Hard working, disciplined and fast.',
        author: 'Sainey Take',
        effect: `Working with FocusFlow Software and more specifically their CEO, Thomas Musial, was nothing short of a seamless and amazing process while having my website designed through him!\n
          Thomas made sure to keep me in the loop for every single detail put into the website and ensured that it was exactly how I envisioned it, his ability to create original designs that make my brand stand out alongside the price he offers makes him by far the best option on the market!  If you are on the fence about working with Thomas and FocusFlow Software, take this message as your sign to pull the trigger and invest in yourself or your business!` // Example effect
    },
    {
        title:'Senior Financial Advisor',
        effect:"We recently had the pleasure of working with Thomas to develop our offices' new website. \n"+
        "We found Thomas to be professional and he was quick in his response times to our requests for changes.\n"+
        "We are happy with the completed website and look forward to working with him in the future, to expand on the base he has started for us.",
        author:'Darryl Smith',
        quote:'Professional with fast response times'
    },
    {
       quote:'Thomas is the man', 
       effect:`I'd like to thank FocusFlow Software so much for creating my new website! I am so excited.  I'm a Real estate investing coach with a busy schedule. They were patient with me and my busy schedule and gave me gentle reminders which I needed.  If you're looking for someone who will give 110% to them... Thomas is THE man!`,
       author:'Theresa Beneteau',
       title:'Owner of Ontario Cash for Houses'

    }
    // {
    //     title: 'Satisfied Customer',
    //     quote: '“Selling my home was a breeze. The team was professional and made everything so easy.”',
    //     author: 'J. Smith',
    //     effect: 'Closed the sale with minimal hassle and paperwork' // Example effect
    // },
    // {
    //     title: 'Satisfied Customer',
    //     quote: '“I was skeptical at first, but the process was smooth and I got a fair price for my home.”',
    //     author: 'A. Johnson',
    //     effect: 'Achieved a fair market price in just 3 weeks' // Example effect
    // },
    // {
    //     title: 'Great Experience',
    //     quote: '“I was able to sell my home quickly and without any hassle. Highly recommend their service!”',
    //     author: 'L. Williams',
    //     effect: 'Sold my home in record time with no complications' // Example effect
    // },
    // {
    //     title: 'Wealth genius member',
    //     quote: '“The team handled everything perfectly and I got a great deal for my house. Thank you!”',
    //     author: 'M. Brown',
    //     effect: 'Secured an excellent deal within 2 weeks' // Example effect
    // }
];


const Testimonials: React.FC<TestimonialProps> = ({ testimonials = testimonialsData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };


    return (
        <>
        <AppearingGradient
        text='Client Success, Delivered'
        subText="Explore feedback from clients who've experience the power of custom web design"
        />

        <section className='bg-gradient-to-b from-[#00a2e4] via-[#00a2e4] to-[#00e0ff]
        ml-auto mr-auto max-w-[1200px] w-screen 
          relative mb-8 rounded-lg
         h-[80vh] max-h-[600px] sm:w-[90vw]
        '>
           <IoIosArrowForward className="absolute sm:text-5xl top-[40%] right-0 text-2xl hover:text-blue-200
           hover:scale-[1.15] transition-all" onClick={nextTestimonial} />
            <IoIosArrowBack className="absolute top-[40%] left-0 text-2xl
            hover:text-blue-200
            hover:scale-[1.15] transition-all sm:text-5xl" onClick={prevTestimonial} />
            
            <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="font-bold mb-4 pl-8 pr-8 mt-8
          text-lg sm:text-xl md:text-2xl sm:pl-12 sm:pr-12 pt-8"
            initial={{ opacity: 0,x: -10 }}
            animate={{ opacity: 1, x:0 }}
             exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].quote}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="pl-8 pr-8 sm:pl-12 sm:pr-12 sm:text-xl
          whitespace-pre-line text-left"
           initial={{ opacity: 0, }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
             >
            {testimonials[currentTestimonial].effect}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="mt-8 pl-6 sm:pl-12 pr-8
          sm:text-lg text-left"
           initial={{ opacity: 0, y:30 }}
            animate={{ opacity: 1, y:0,transition: { delay: 0.7 } }}
             exit={{ opacity: 0 }}>
           -{testimonials[currentTestimonial].author}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <motion.p key={currentTestimonial} className="pl-8 pr-8 sm:pl-12 sm:text-lg
          text-left"
          initial={{ opacity: 0, y:30 }}
          animate={{ opacity: 1, y:0,transition: { delay: 0.8 } }}
            exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].title}
          </motion.p>
        </AnimatePresence>
       

        </section>
        </>
    );
};

export default Testimonials;
