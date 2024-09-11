"use client"

import BigNav from "@/components/bigNav/navbar";
import SlideScrollCarousel from "@/components/slideScrollCarousel/slideScrollCarousel";
import React from "react";
import { slideScrollImages } from "@/data/data";
import Content from "@/components/content/content";
import placeholder from '../../../public/media/placeholder.jpeg'
import { genericContent, genericSlideShow, genericAccordion } from "@/data/data";
import SlideShowCarousel from "@/components/slideShowCarousel/slideShowCarousel";
import Accordion from "@/components/accordion/accordion";

const Canvas = () => {

    

    return (
        <>
        <BigNav
        excludedLink="Canvas"/>

        <main className="mt-[4rem] w-screen">
            <section className="h-[60vh]">
                filler
            </section>
            {/* <SlideScrollCarousel
            images={slideScrollImages}/> */}

            <Content
            image={placeholder}
            mainTitle='The content component'
            description={genericContent.description}
            />
              <section className="h-[60vh]">
                
            </section>
            <div className="w-[80vw] mx-auto
           ">

  
            <h3 className="text-2xl md:text-4xl
            text-center">This is the slideshow carousel</h3>
            <p className="
            mx-auto text-center my-6 ">This carousel can be great for describing how a process works within your business
                each slide can represent a different part of the process. 
                <br/>
                <br/>It can be controlled by
                the clicking on the slide buttons
                and by clicking the pause/start button 
                so you have full control over the viewing.
            </p>
            </div>
            <SlideShowCarousel
            title="he"
            images={genericSlideShow}
            />
            <div className="h-[30vh]">

            </div>
            <Accordion
            hasIntro={true}
            intro='The accordion'
            description='This component is great for answer frequently asked questions as you can condense multiple answers into one part of the website, expanding them to answers when needed.'
            text={genericAccordion}
            />

<div className="h-[30vh]">

</div>



        </main>
        </>
    )
}

export default Canvas