"use client";

import React, { useRef } from "react";
import dynamic from 'next/dynamic';
import Head from "next/head";
// Lazy load components
const BigNav = dynamic(() => import("@/components/bigNav/navbar"), { ssr: false });
import MultiLayerParallax from "@/components/mountainParallax/mountainParallax";
const StickyCarousel = dynamic(() => import("@/components/stickyCarousel/stickyCarousel"), { ssr: false });
const PortalContent = dynamic(() => import("@/components/portalContent/portalContent"), { ssr: false });
const CircleInfoGraphic = dynamic(() => import("@/components/circleInfographic/circleInfoGraphic"), { ssr: false });
const AppearingSquare = dynamic(() => import("@/components/appearingSquare/appearingSquare"), { ssr: false });
const Footer2 = dynamic(() => import("@/components/footer2/footer2"), { ssr: false });

import { stickyScrollables, designPageCloser, creativeExperienceCard,
 } from "@/data/data";
import infinity from '../../../public/media/atom-gif.gif';
import { useInView } from "framer-motion";
import { useGeneralContext } from "@/context/context";
// import { useRouterContext } from "@/lib/useRouterContext";
// import { useGeneralContext } from "@/context/context";

const ExperienceCard  = dynamic(() => import("@/components/experienceCard/experienceCard"))



{/* <Head>
  <link rel="preload" href="/_next/static/chunks/critical-chunk.js" as="script" />
</Head> */}


const DesignPage = () => {

    // useRouterContext()

    // const {setTotalPageTime} = useGeneralContext()

    const ref = useRef(null)

    const inView = useInView(ref,{
        once:true
    })

    const ref2 = useRef(null)

    const inView2 = useInView(ref2,
        {
            once:true
        })

        const {isMobile} = useGeneralContext()

    return (
        <>
        
            <BigNav excludedLink="Top tier custom web design" />
            <main 
            className="mt-[3rem] relative z-[4] text-white
            w-screen overflow-x-hidden">
                <MultiLayerParallax
              
                 />

                 <ExperienceCard
                 {...creativeExperienceCard}
                 buttonText='Get your creative solution'
                 />

                <StickyCarousel 
                
                images={stickyScrollables}
                
                 />




             
                    <PortalContent 
             
                image={infinity.src} 
                />


                

<div ref={ref}>


                 {inView && (
                    <CircleInfoGraphic
        
        />
                 )}
                 </div>

                

                 



                <AppearingSquare {...designPageCloser}
               
                />

                <Footer2 excludedLink="Top tier custom web design" />
            </main>
        </>
    );
};

export default DesignPage;
