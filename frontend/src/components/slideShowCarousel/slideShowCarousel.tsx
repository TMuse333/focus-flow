"use client"


import React, { useState, useEffect, useRef } from 'react';
import { FaPause, FaPlay, FaRedo } from 'react-icons/fa';
import {useIntersectionObserver} from '../intersectionObserver/intersectionObserver'

import { useGeneralContext } from '@/context/context';
import Image from 'next/image';


interface CarouselProps {
    images: {

        src: string,
        alt: string,
        description: string
        isVideo?:boolean
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
    shift:number,
    title?:string,
    isVideo?:boolean
}

interface ControllerProps {
  carouselLength: number;
  currentElement: number;
  setCurrentElement: (index: number) => void;
  inView: boolean;
  shift: number;
  setShift: (value: number) => void;
  scrollPercent: number; // Add this prop for scroll percentage
  scrollDirection:string | null,
  isScrolling:boolean
}

const CarouselController: React.FC<ControllerProps> = ({
  carouselLength,
  currentElement,
  setCurrentElement,
  inView,
  shift,
  setShift,
  scrollPercent,
  scrollDirection,
  isScrolling
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideProgress, setSlideProgress] = useState(0);
  const [slideProgressReset, setSlideProgressReset] = useState(false);
  const [showRefreshBar, setShowRefreshBar] = useState(false);
  const [slideShowPaused, setSlideShowPaused] = useState(false);





  
  

  const scrollToElement = (id: string, index: number) => {
    if (!inView) {
      return;
    }
    setCurrentElement(index);
    // console.log('inview', inView);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  };

  const relativeScrollPercent = () => {
    const offset = currentElement * (100 / (carouselLength - 1));
    return Math.max(0, Math.min(100, scrollPercent - offset));
  };

  function handleCircleClick(index: number) {
    if (!inView) {
      return;
    }
    setCurrentElement(index);
    scrollToElement(`carousel-element-${index}`, index);
    
  }

  useEffect(()=>{
    console.log('current element',currentElement)
  },[currentElement])

  function togglePlay() {
    setSlideShowPaused(!slideShowPaused);
    // console.log('pause nation');
  }

  function resetSlideShow() {
    setCurrentElement(0);
    setShowRefreshBar(false);
    setSlideProgress(0);
    setShift(0);
    scrollToElement(`carousel-element-${0}`, 0);
  }

  useEffect(() => {
    setSlideProgress(0);
    setSlideProgressReset(true);
  }, [currentElement]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideShowPaused || !inView || isScrolling) {
        return;
      }

      if (slideProgress < 100) {
        // console.log('filling the bar');
        setShowRefreshBar(false);
        setSlideProgressReset(false);
        setSlideProgress((curr) => curr + 4); // Increment by 8 to reach 100 in a slower time

      } else if (currentElement < carouselLength - 1) {
        setCurrentElement(currentElement + 1);
        scrollToElement(`carousel-element-${currentElement + 1}`, currentElement + 1);
        setSlideProgressReset(true);
        clearInterval(interval); // Stop the interval when slideProgress reaches 100
        setSlideProgress(0);
      }
    }, 250); // Interval of 250ms for smoother transition

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [slideProgress, currentElement, setCurrentElement, carouselLength, slideShowPaused, inView]);

  useEffect(() => {
    if (currentElement === carouselLength - 1 && slideProgress >= 100) {
      // console.log('Reached end of carousel with slideProgress at 100');
      setTimeout(() => {
        setShowRefreshBar(true);
      }, 300);
    }
  }, [slideProgress, currentElement]);

  const [prevScrollPercent, setPrevScrollPercent] = useState(0);
const adjustedScrollPercent = relativeScrollPercent();

useEffect(() => {
  setPrevScrollPercent(adjustedScrollPercent);
}, [adjustedScrollPercent]);

  // Function to calculate width based on scroll percentage
const getCircleWidth = (index: number) => {
  const baseWidth = 15; // Base width for non-current elements
  const currentWidth = 60; // Width for the current element

  // Ensure the scroll direction is valid
  if (!scrollDirection) return baseWidth;

  // For the current element
  if (index === currentElement) {
    return Math.max(currentWidth - (adjustedScrollPercent / 50) * currentWidth, 0);
  } 
  
  // For the left neighbor of the current element when scrolling right
  if (scrollDirection === 'left' && index === currentElement - 1 && currentElement > 0) {
    return Math.min(baseWidth + (adjustedScrollPercent / 20) * (currentWidth - baseWidth), currentWidth);
  }
  
  // For the right neighbor of the current element when scrolling left
  if (scrollDirection === 'right' && index === currentElement + 1 && currentElement < carouselLength - 1) {
    return Math.min(baseWidth + (adjustedScrollPercent / 20) * (currentWidth - baseWidth), currentWidth);
  }
  
  // Default for other elements
  return baseWidth;
};



  //only scroll in direction should change

  return (
    <div className='absolute left-[50%] -translate-x-[50%] flex bottom-0'>
      <button className='bg-gray-700 ml-auto mr-auto p-4 rounded-xl flex w-[200px]
      justify-center'>
        {Array.from({ length: carouselLength }, (_, index) => (
          <div
            key={index}
            className={`relative bg-gray-400 hover:bg-gray-200 rounded-full
              h-[15px] mr-2 transition-all`}
            style={{ width: index === currentElement ? '60px' : '15px' }} // Set dynamic width
            onClick={() => handleCircleClick(index)}
          >
            {index === currentElement && (
              <div className={`absolute h-full bg-gray-100 rounded-full`}
                style={{ width: `${slideProgress}%`, transition: !slideProgressReset ? 'width 0.3s ease-in' : 'none' }} />
            )}
          </div>
        ))}
      </button>
      <button className='rounded-full bg-gray-700 h-[50px] w-[50px] mt-auto mb-auto ml-6'>
        {showRefreshBar ? (
          <FaRedo className="icon ml-auto mr-auto scale-[1.5]" onClick={resetSlideShow} />
        ) : slideShowPaused ? (
          <FaPlay className="icon ml-auto mr-auto scale-[1.5]" onClick={togglePlay} />
        ) : (
          <FaPause className="icon ml-auto mr-auto scale-[1.5]" onClick={togglePlay} />
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
  shift,
  title,
  isVideo
}) => {
  const [scrollMarginTop, setScrollMarginTop] = useState(0);
  const isCurrentSlide = currentElement === index;
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const { isMobile } = useGeneralContext();

  const updateScrollMargin = () => {
    const element = document.getElementById(`carousel-element-${index}`);
    if (element) {
        const rect = element.getBoundingClientRect();
        const distanceFromTop = rect.top; // Distance from the viewport top
        setScrollMarginTop(distanceFromTop);
        // console.warn('scroll margin top', distanceFromTop);
    }
};

useEffect(() => {
  // Initial calculation of scroll margin
  updateScrollMargin();

  // Add scroll event listener
  const handleScroll = () => {
      updateScrollMargin();
  };

  window.addEventListener('scroll', handleScroll);

  // Clean up event listener on component unmount
  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
}, [index]); 



  return (
      <section 
          id={`carousel-element-${index}`}
          className={`w-[95vw] pt-8  relative md:max-h-[800px]  h-[90vh]
             flex-shrink-0 overflow-y-hidden
     `}
          style={{
              transform: `translateX(${(shift * 75)}%)`,
              transition: 'transform 1s ease-in',
              scrollSnapAlign: 'center',
              scrollMarginTop: `${scrollMarginTop}px`, // Use the calculated scroll margin
              scrollBehavior: 'smooth'
          }}
      >

<div className='flex mx-auto flex-col items-center
justify-center  bg-[#00bfff] bg-opacity-[0.2] rounded-2xl mr-4 ml-4
h-[90vh] bg-red-200 md:max-h-[800px] overflow-y-visible py-4'>


       <p className='mt-6 px-4 sm:text-lg
       md:text-xl px-8 '>{description}</p>
         
         {isVideo ? (
  <video
    src={src}
    autoPlay
    loop
    muted
    className={`w-full mt-8 ml-auto mr-auto object-contain
                h-[70vh] overflow-y-visible
                md:max-h-[600px]
                rounded-2xl`}
    style={{ filter: 'brightness(0.6)', objectPosition: '50% 50%' }}
     // Add controls to allow play/pause
    width={1000} // Base width as a percentage
    height={55} // Base height as a percentage
  />
) : (
  <Image
    src={src}
    alt={alt}
    className={`w-full mt-8 ml-auto mr-auto object-contain
                h-[70vh] overflow-y-visible
                md:max-h-[600px]
                rounded-2xl`}
    style={{ filter: 'brightness(0.6)', objectPosition: '50% 50%' }}
    width={1000} // Base width as a percentage
    height={55} // Base height as a percentage
  />
)}

          </div>
      </section>
  );
}





const SlideShowCarousel: React.FC<CarouselProps> = ({ images, title, description }) => {
    const [currentElement, setCurrentElement] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const {isMobile} = useGeneralContext()
    const [shift, setShift] = useState(0)

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: !isMobile ? 0.5 : 0.8,
      toggle:true
    };

    const [inView, setInView] = useState(false);

    
    const componentRef = useIntersectionObserver(setInView, options, false, true);

    const [relativeScrollPosition, setRelativeScrollPosition] = useState(0)

    const [scrollDirection, setScrollDirection] = useState<'left' | 'right' | null>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        const currentScrollPos = container.scrollLeft;

        // Compare the previous scroll position with the current one
        if (currentScrollPos > prevScrollPos) {
          // Scrolling to the right
          setScrollDirection('right');
        } else if (currentScrollPos < prevScrollPos) {
          // Scrolling to the left
          setScrollDirection('left');
        }

        // Update the previous scroll position
        setPrevScrollPos(currentScrollPos);
        console.warn('we are scrolling',scrollDirection)
      }
    };

    if (container) {
      // Add the scroll event listener
      container.addEventListener('scroll', handleScroll);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [prevScrollPos]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.id.replace('carousel-element-', ''));
                        setCurrentElement(index);
                    }
                });
            },
            {
                root: containerRef.current,
                threshold: 0.8,
            }
        );

        const elements = document.querySelectorAll('[id^="carousel-element-"]');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);


    useEffect(()=>{
      setCurrentElement(0)
      const element = document.getElementById('carousel-element-0');
      if (element && inView) {
          element.scrollIntoView({ behavior: 'smooth', inline: 'center' });
      }
     
    },[])

    useEffect(() => {
      const handleScroll = () => {
        const container = containerRef.current;
        if (container) {
          // Log the horizontal scroll position
          // console.log('Scroll position:', container.scrollLeft);
          
          // Optional: You can calculate and log the percentage scrolled
          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          const scrollPercentage = (container.scrollLeft / maxScrollLeft) * 100;
          setScrollPercentage(scrollPercentage);
          console.log('Scrolled percentage:', scrollPercentage );
        }
      };
  
      const container = containerRef.current;
      if (container) {
        // Add scroll event listener to the container
        container.addEventListener('scroll', handleScroll);
      }
  
      // Cleanup the event listener on component unmount
      return () => {
        if (container) {
          container.removeEventListener('scroll', handleScroll);
        }
      };
    }, []);

    const [scrollPercentage, setScrollPercentage] = useState(0); 


    return (
        <section className='relative ml-auto mr-auto w-screen mb-[10rem]
   h-[90vh] overflow-x-hidden
        md:max-h-[800px]
      
        '>
          <div ref={componentRef}
          className='relative ml-auto mr-auto w-screen 
       h-[90vh] 
          md:max-h-[800px]'>
            <div 
                className=" flex 
                w-screen relative
                h-[90vh] 
                md:max-h-[800px]
                overflow-y-scroll
                px-[0rem]
                sm:px-[4rem]

               
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
            <CarouselController
                carouselLength={images.length}
                currentElement={currentElement}
                setCurrentElement={setCurrentElement}
                inView={inView}
                shift={shift}
                setShift={setShift}
                scrollPercent={scrollPercentage}
                scrollDirection={scrollDirection}
                isScrolling={isScrolling}
            />
        </section>
    );
}

export default SlideShowCarousel;