"use client"

import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import arrow icons
import {motion, AnimatePresence} from 'framer-motion'
interface AccordionProps {
    title?: string;
    description?: string;
    items: {
        src: string;
        alt: string;
        title:string,
        description: string;
    }[];
}

const ImageAccordion: React.FC<AccordionProps> = ({ title, description, items }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setExpandedIndex(index === expandedIndex ? expandedIndex : index);
    };

    const [largeScreen, setLargeScreen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setLargeScreen(window.innerWidth >= 900)
        }

        window.addEventListener('scroll',handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    })

    const tempImage = largeScreen && expandedIndex === null ? 0 : expandedIndex !== null ? expandedIndex : 0

    return (
        <>
        <section className="mx-auto max-w-[1300px] my-4
        ">

       
          {title && <h2 className="text-2xl bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
           text-4xl sm:text-5xl font-semibold text-left pl-8
           max-w-[1300px] pb-3
           mb-8">{title}</h2>}
            {description && <p className="text-left  pl-8 pr-5 mt-5
            mb-8
           
           ">{description}</p>}
            </section>
            <section className=" lg:flex w-screen lg:justify-center
            max-w-[1300px] mx-auto 
            ">

            
        <section className="bg-gray-800 rounded-xl mx-auto w-[90vw] p-5
        lg:w-[40vw] lg:max-w-[550px] mb-7   ">
          
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="bg-gray-700 rounded-lg overflow-hidden">
                        <button
                            className="w-full flex justify-between items-center text-left text-white p-4 font-semibold bg-gray-600 rounded-t-lg focus:outline-none"
                            onClick={() => handleClick(index)}
                        >
                            <span>{item.title}</span>
                            <span>
                                {expandedIndex === index ? (
                                    <FaChevronUp />
                                ) : (
                                    <FaChevronDown />
                                )}
                            </span>
                        </button>
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden
                            ${expandedIndex === index ? 'h-[600px] lg:h-[300px] ' : 'h-[0px]'}`}
                            // style={{
                            //     height: expandedIndex === index ? "600px lg:300px" : "0px",
                            //     opacity: expandedIndex === index ? 1 : 0,
                            // }}
                        >
                            <div className="p-4">
                                <p className="text-gray-300 mb-3">{item.description}</p>
                                <img src={item.src} alt={item.alt} className="
                                w-[50%] mx-auto h-auto rounded-lg
                                max-w-[390px] max-h-[390px] object-contain
                                lg:hidden
                                " />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        {largeScreen && (
            <div className="w-[45vw] flex items-center ">

      <AnimatePresence
      mode="wait"
      >

      
  <motion.img 
   key={items[tempImage].src}
  className="w-[40vw] object-contain
 mx-auto max-w-[400px] max-h-[400px]
 my-auto rounded-2xl
"
  src={items[tempImage].src}
  alt={items[tempImage].alt}
  initial={{
    opacity:0,
    x:0
  }}
  animate={{
    opacity:1,
    x:0
  }}
  exit={{
    opacity:0,
    x:0
  }}
  />
  </AnimatePresence>
        </div>
        )}
        </section>
      
        </>
    );
};

export default ImageAccordion;
