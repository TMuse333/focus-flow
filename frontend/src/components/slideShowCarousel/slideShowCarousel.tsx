"use client"


import React, { useState, useEffect, useRef } from 'react';
import { FaPause, FaPlay, FaRedo } from 'react-icons/fa';
import {useIntersectionObserver} from '../intersectionObserver/intersectionObserver'
import {motion, AnimatePresence} from 'framer-motion'
import { useGeneralContext } from '@/context/context';
import Image from 'next/image';


interface CarouselProps {
    images: {
        src: string,
        alt: string,
        description: string
    }[]
    title?: string,
    description?: string
}

interface SliderProps {
    src: string,
    alt: string,
    description: string,
    index: number,
    carouselLength:number,
    currentElement:number,
    shift:number
}

const CarouselController: React.FC<ControllerProps> = ({
  carouselLength,
  currentElement,
  setCurrentElement,

 shift,
 setShift
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideProgress, setSlideProgress] = useState(0);
  const [slideProgressReset, setSlideProgressReset] = useState(false);
  const [showRefreshBar, setShowRefreshBar] = useState(false);
  const [slideShowPaused, setSlideShowPaused] = useState(false);

  const [inView, setInView] = useState(false);

  const {isMobile} = useGeneralContext()

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: !isMobile ? 0.5 : 0.8,
    toggle:true
  };
    
  const componentRef = useIntersectionObserver(setInView, options, false, true);

  // const scrollToElement = (id: string, index: number) => {
  //   if(!inView){
  //     return;
  //   }
  //     setCurrentElement(index)
  //     console.log('inview',inView);
  //     const element = document.getElementById(id);
  //     if (element) {
  //         element.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  //     }
  // };

  function handleCircleClick(index:number){
    if(!inView){
      return
    }
    setCurrentElement(index)
    setShift(-index)
  }



function togglePlay(){
  setSlideShowPaused(!slideShowPaused);
  console.log('pause nation');
}

function resetSlideShow(){
  setCurrentElement(0);
  setShowRefreshBar(false);
  setSlideProgress(0);
  setShift(0)
  // scrollToElement(`carousel-element-${0}`, 0);
}

useEffect(()=> {
  setSlideProgress(0);
  setSlideProgressReset(true);
},[currentElement])

const handleSlide = (interval:NodeJS.Timeout) => {
  if (slideProgress < 100) {
    console.log('filling the bar');
    setShowRefreshBar(false);
    setSlideProgressReset(false);
    setSlideProgress((curr) => curr + 4); // Increment by 8 to reach 100 in a slower time
  } else if (currentElement < carouselLength - 1) {
    setCurrentElement(currentElement + 1);
    setShift((prev) => prev - 1);
    setSlideProgressReset(true);
    clearInterval(interval); // Stop the interval when slideProgress reaches 100
    setSlideProgress(0);
  }
};

useEffect(() => {
  const interval = setInterval(() => {
    if (slideShowPaused || !inView) {
      console.log('not in view');
      return;
    }

    handleSlide(interval);
  }, 250); // Interval of 250ms for smoother transition

  return () => clearInterval(interval); // Clean up the interval on component unmount
}, [slideProgress, currentElement, setCurrentElement, carouselLength, slideShowPaused, inView]);

useEffect(() => {
  if (currentElement === carouselLength - 1 && slideProgress >= 100) {
    console.log('Reached end of carousel with slideProgress at 100');
    setTimeout(() => {
      setShowRefreshBar(true);
    }, 300);
  }
}, [slideProgress, currentElement]);

// useEffect(()=> {
//   console.log('current shift',shift)
// },[shift])


  return (
      <div ref={componentRef}
      className='absolute left-[50%] -translate-x-[50%] flex
      w-[250px] justify-center md:w-[415px]
      bottom-0 
      '>
          <button className='bg-gray-700 ml-auto mr-auto p-4 rounded-xl flex
          md:scale-[1.5]'>
              {Array.from({ length: carouselLength }, (_, index) => (
                  <div
                      key={index}
                      className={`relative bg-gray-400 hover:bg-gray-200 rounded-full h-[15px] w-[15px] mr-2 transition-all ${currentElement === index ? 'w-[60px]' : ''}`}
                      // onClick={() => scrollToElement(`carousel-element-${index}`, index)}
                      onClick={()=>handleCircleClick(index)}
                  >
                    {currentElement === index && (
                       <div className={`absolute  h-full bg-gray-100 rounded-full`}
                       style={{ width:`${slideProgress}%`, transition:!slideProgressReset ? 'width 0.3s ease-in' : 'none' }}/>
                    )}
                  </div>
              ))}
          </button>
          <button className='rounded-full bg-gray-700 h-[50px] w-[50px] mt-auto mb-auto 
          md:scale-[1.5] p-4  '>
            {showRefreshBar ? (
               <FaRedo className="icon ml-auto mr-auto my-auto scale-[1.5] " onClick={resetSlideShow} />
            ) : slideShowPaused ?  (
              <FaPlay className="icon ml-auto mr-auto  my-auto scale-[1.5] " onClick={togglePlay}/>
            ) : (
              <FaPause className="icon ml-auto mr-auto my-auto scale-[1.5] " onClick={togglePlay} />
            )}
          </button>
      </div>
  );
}

const CarouselElement: React.FC<SliderProps> = ({
    src,
    alt,
    description,
    index,
    carouselLength,
    currentElement,
    shift
}) => {
  
const isCurrentSlide = currentElement === index;
const [animationComplete, setAnimationComplete] = useState(false);

function handleAnimationComplete(){
  setAnimationComplete(!animationComplete);
  console.log('animation completed!');



}

const { isMobile } = useGeneralContext()

    return (
        <section 
            
            className=
            {`
         
            w-screen
            
   relative
   
   max-h-[650px]
               ml-auto mr-auto
                h-[105vw] 
               
                flex-shrink-0
               
                
                 `}
           style={{
            transform:`translateX(${(shift * 100)}%)`,
            transition:'transform 1s ease-in'
         
            //  scrollSnapAlign: 'center',
         }}
        >

<AnimatePresence>
  


  
  <motion.p
    // onAnimationComplete={handleAnimationComplete}
    initial={{
      opacity: 0,
      // transform: 'translate(0%,-50%)' // Replace y:30 with translateY
    }}
    animate={{
      opacity: isCurrentSlide ? 1 : 0,
      // transform: isCurrentSlide && isMobile ? 'translate(0%,10%)' : isCurrentSlide ? 'translate(0%,10%)' : 'translate(0%,-50%)', // Use transform for movement
      transition: {
        delay: animationComplete ? 0.4 : 0,
        duration: 0.4
      }
    }}
    exit={{
      opacity: 0,
      // transform: 'translateX(0px)' // Replace x:50 with translateX
    }}
    className='absolute z-[14] top-[20%]  text-white w-[80%] max-w-[600px] text-md sm:text-xl md:text-4xl
    left-1/2 -translate-x-1/2'
    style={{
      // transform: 'translateY(5%) ' // Handle positioning with transform
    }}
  >
    {description}
  </motion.p>

</AnimatePresence>

          
            <Image
            id={`carousel-element-${index}`}
                src={src}
                alt={alt}
                className={`w-[90%] ml-auto mr-auto object-cover 
                h-full max-w-[1200px] 
               `}
                style={{ filter:'brightness(0.6)',
              objectPosition:'50% 50%' }}
              layout="position"
              width={1000} // Base width as a percentage
              height={55} // Base height as a percentage
              objectFit="cover"
            />
        </section>
    );
}

interface ControllerProps {
    carouselLength: number,
    currentElement: number,
    setCurrentElement: (index: number) => void,
    inView?:boolean,
    shift:number,
    setShift:React.Dispatch<React.SetStateAction<number>>;
}



const SlideShowCarousel: React.FC<CarouselProps> = ({ images, title, description }) => {
    const [currentElement, setCurrentElement] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const {isMobile} = useGeneralContext()
    const [shift, setShift] = useState(0)

  




    return (
      <>
      <section className='relative 
      h-[110vw] max-h-[650px] '>


        <section className='relative ml-auto mr-auto w-screen mb-[6rem]
         h-[115vw] overflow-x-hidden overflow-y-hidden
         max-h-[550px] 
        
        '>
          <div 
          className='relative ml-auto mr-auto w-screen '>
            <div 
                className=" flex 
                w-screen relative
                h-[105vw] 
                max-h-[450px]
                
                
                 "
                style={{ scrollSnapType: 'x mandatory' }}
                ref={containerRef}
            >
                {images.map((image, index) => (
                    <CarouselElement
                        {...image}
                        key={index}
                        index={index}
                        carouselLength={images.length}
                        currentElement={currentElement}
                        shift={shift}
                    />
                ))}
            </div>
          </div>
         
        </section>
        <CarouselController
                carouselLength={images.length}
                currentElement={currentElement}
                setCurrentElement={setCurrentElement}
                // inView={inView}
                shift={shift}
                setShift={setShift}
            />
       
                  </section>
        </>
    );
}

export default SlideShowCarousel;