import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'; // Assuming you're using Next.js for image optimization
import AppearingGradient from '../appearingGradient/appearingGradient';


interface ElementProps {
  title:string,
  description:string
}


const CarouselElement:React.FC<ElementProps> = ({
  title, description
}) =>
{
    return (
      <>
      <section className='h-[120vw] max-h-[500px] rounded-lg transition-transform
      bg-[linear-gradient(to_bottom_right,#80d4ff,#00bfff)]
      relative z-[5]'>
        <h3 className='text-2xl text-center font-semibold
        py-6'>Title here</h3>
        <p className='text-left px-4'>Lorem ipsum dolor, sit amet
          
           consectetur adipisicing elit. Rem ipsam laborum soluta cumque asperiores laboriosam repellendus aliquid provident. Officiis suscipit, placeat libero laboriosam ea qui maiores ut nostrum laborum tempore?</p>
      </section>
      </>
    )
}

gsap.registerPlugin(ScrollTrigger);

interface Props {
  title?: string;
  description?: string;
  images: Array<{ src: string; alt: string }>;
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
    <section
      ref={containerRef}
      className="relative w-screen  py-8
      h-[100vh] z-[4]"
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

      <AppearingGradient
      text='Custom and creative'
      subText='We have the technical expertiese and creativity'
      />

      <div ref={carouselRef} className="flex w-max overflow-hidden
      ">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[70vw] h-[120vw] max-h-[700px] relative flex-shrink-0 mr-10"
          >
            {/* <Image
              src={image.src}
              alt={image.alt}
              className="object-contain h-[85vw] max-h-[500px] rounded-lg transition-transform"
              width={1000}
              height={55}
            /> */}
            <CarouselElement
            title=''
            description=''/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StickyCarousel;
