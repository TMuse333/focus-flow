import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image, { StaticImageData } from 'next/image'; // Assuming you're using Next.js for image optimization
import AppearingGradient from '../appearingGradient/appearingGradient';
import brain from '../../../public/media/focusFlow-brain-nobg.webp'

interface ElementProps {
  title:string,
  description:string,

}


const CarouselElement:React.FC<ElementProps> = ({
  title, description, 
}) =>
{

    return (
      <>
      <section className='  rounded-2xl transition-transform
      bg-gradient-to-br from-blue-500 via-blue-400 to-blue-200
    mx-auto h-[87vh] max-h-[600px] pb-5 rounded-b-2xl
border border-white
      relative z-[5] w-[90vw] md:w-[40vw]'>
        <Image
        src={brain}
        alt='The focusflow brain'
        className='w-[150px] object-contain
        relative  rounded-xl mx-auto'
        />
        <h3 className='text-2xl text-center font-semibold
        py-6'>{title}</h3>
        <p className='text-left px-4'>{description}</p>
      </section>
      </>
    )
}

gsap.registerPlugin(ScrollTrigger);

interface Props {
  title?: string;
  description?: string;
  images: Array<{ src: string|StaticImageData; alt: string,
  title: string, description:string }>;
}

const StickyCarousel: React.FC<Props> = ({ title, description, images }) => {
  const containerRef = useRef<HTMLDivElement | null>(null); // Specify the type of the ref
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const carousel = carouselRef.current;

    if (container && carousel) {
      // Ensure both refs are defined before using them
      gsap.to(carousel, {
        x: () => -(carousel.scrollWidth - container.clientWidth), // Horizontal scroll amount
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${carousel.scrollWidth}`, // Scroll distance
          pin: true,
          scrub: true,
          markers: true, // Remove markers in production
          onLeave: () => {
            ScrollTrigger.refresh(); // Refresh ScrollTrigger when the carousel ends
          },
        },
      });
    }

    // Clean up the ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
    <AppearingGradient
    text='Custom and creative'
    subText='We have the technical expertiese and creativity'
    />
    <section
      ref={containerRef}
      className="relative w-screen  py-8
       z-[4] "
    >
      {title && (
        <>
          <h2 className="text-4xl text-center mb-[3rem] bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent font-semibold pb-4">
            {title}
          </h2>
          <p className="text-2xl text-left w-[80vw] ml-auto mr-auto font-semibold overflow-auto pb-4">
            {description}
          </p>
        </>
      )}

  

      <div ref={carouselRef} className="flex w-max overflow-hidden
      h-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[95vw]  max-h-[600px] md:w-[45vw] max-h-[700px] relative flex-shrink-0 
            mx-auto my-auto" 
          >
            {/* <Image
              src={image.src}
              alt={image.alt}
              className="object-contain h-[85vw] max-h-[500px] rounded-lg transition-transform"
              width={1000}
              height={55}
            /> */}
            <CarouselElement
            {...image}/>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default StickyCarousel;
