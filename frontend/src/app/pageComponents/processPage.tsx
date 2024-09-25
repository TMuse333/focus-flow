"use client"

import BigNav from "@/components/bigNav/navbar";
import Curtain from "@/components/curtains/curtains";
import PageCreation from "@/components/pageCreation/pageCreation";
import React from "react";
import { designPageCloser, processPageCloser, processPageContent, processSlideShow } from "@/data/data";
import SlideShowCarousel from "@/components/slideShowCarousel/slideShowCarousel";
import AppearingSquare from "@/components/appearingSquare/appearingSquare";
import Footer from "@/components/footer/footer";


const ProcessPage = () => {

    const links = [
        {
            name:'home',
            destination:'/'
        },
        {
            name:'Our design',
            destination:'best-web-design-halifax'
          },
       
        {
          name:'Restaurant Software',
          destination:'online-food-ordering-system'
        },
        {
            name:'Lets work!',
            destination:'lets-work'
          },
      
      ]

    return (
        <>
        <BigNav
        excludedLink="/"
        />
        <main className="mt-[3rem] relative z-[4]
        
        ">
            <Curtain/>
           
            <PageCreation
            pageContent={processPageContent}/>
          

            <SlideShowCarousel
            images={processSlideShow}
            />

            <AppearingSquare
            {...processPageCloser}/>

            <Footer
            links={links}
            />


            </main>
            </>
    )
}

export default ProcessPage