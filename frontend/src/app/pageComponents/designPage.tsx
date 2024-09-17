"use client"

import React from "react";
import BigNav from "@/components/bigNav/navbar";
import MultiLayerParallax from "@/components/mountainParallax/mountainParallax";
import SlideScrollCarousel from "@/components/slideScrollCarousel/slideScrollCarousel";
import { scrollableImages, stickyScrollables } from "@/data/data";
import StickyCarousel from "@/components/stickyCarousel/stickyCarousel";
import PortalContent from "@/components/portalContent/portalContent";
import infinity from '../../../public/media/atom-gif.gif'
const DesignPage = () => {

    return (
        <>
        <BigNav
        excludedLink="Top tier custom web design"
        />
       <main className="mt-[3rem] relative z-[4]">
        {/* <MultiLayerParallax/>
        
      <StickyCarousel
      images={stickyScrollables}
   
      /> */}
       {/* <section className="h-[100vh]"/> */}
      <PortalContent
      image={infinity.src}/>
        <section className="h-[60vh]"/>
       </main>
        </>
    )
}

export default DesignPage