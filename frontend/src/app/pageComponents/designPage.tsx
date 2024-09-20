"use client"

import React from "react";
import BigNav from "@/components/bigNav/navbar";
import MultiLayerParallax from "@/components/mountainParallax/mountainParallax";
import SlideScrollCarousel from "@/components/slideScrollCarousel/slideScrollCarousel";
import { scrollableImages, stickyScrollables, designCloser,
genericAccordion  } from "@/data/data";
import StickyCarousel from "@/components/stickyCarousel/stickyCarousel";
import PortalContent from "@/components/portalContent/portalContent";
import infinity from '../../../public/media/atom-gif.gif'
import { CircleInfoGraphic } from "@/components/circleInfographic/circleInfoGraphic";
import AppearingSquare from "@/components/appearingSquare/appearingSquare";
import Closer from "@/components/closer/closer";
import Footer from "@/components/footer/footer";
import Accordion from "@/components/accordion/accordion";
const DesignPage = () => {

  const links = [
    {
      name:'Home',
      destination:'/best-web-design-halifax'
    },
    {
      name:'Why us',
      destination:'/why-us'
    },
    {
      name:'Lets work!',
      destination:'/lets-work'
    },
    {
      name:'Restaurant Software',
      destination:'/online-food-ordering-system'
    },
   
  ]

    return (
        <>
        <BigNav
        excludedLink="Top tier custom web design"
        />
       <main className="mt-[3rem] relative z-[4]
   ">
        <MultiLayerParallax/>
        
      <StickyCarousel
      images={stickyScrollables}
   
      />

    
    
      <PortalContent
      image={infinity.src}/>



      <CircleInfoGraphic/>

      {/* <section className="h-[50vh]"
      /> */}

      <AppearingSquare/>

      <Footer
      links={links}
      />


  
  {/* <Closer
  {...designCloser}
  /> */}



       
       </main>
        </>
    )
}

export default DesignPage