"use client";

import React from "react";
import dynamic from 'next/dynamic';

// Lazy load components
const BigNav = dynamic(() => import("@/components/bigNav/navbar"), { ssr: true });
import Curtain from "@/components/curtains/curtains";
const PageCreation = dynamic(() => import("@/components/pageCreation/pageCreation"), { ssr: false });
const SlideShowCarousel = dynamic(() => import("@/components/slideShowCarousel/slideShowCarousel"), { ssr: false });
const AppearingSquare = dynamic(() => import("@/components/appearingSquare/appearingSquare"), { ssr: false });
const Footer2 = dynamic(() => import("@/components/footer2/footer2"), { ssr: false });
import Head from "next/head";
import { processPageCloser, processPageContent, processSlideShow } from "@/data/data";
import { useGeneralContext } from "@/context/context";


const ProcessPage = () => {

const {setTotalPageTime} = useGeneralContext()

    return (
        <>
        <Head>
        <link rel="canonical" href="https://www.focusflowsoftware.com/process" />
      </Head>
            <BigNav excludedLink="Our Process" />
            <main className="mt-[3rem] relative z-[4] overflow-x-hidden
            text-white">
                <Curtain 
                  setTotalPageTime={setTotalPageTime}
                  />

                <PageCreation pageContent={processPageContent}
                  setTotalPageTime={setTotalPageTime}
                />

                <SlideShowCarousel images={processSlideShow}
                  setTotalPageTime={setTotalPageTime}
                  id={'process-slideshow-carousel'}
                 />

                <AppearingSquare {...processPageCloser}
                  setTotalPageTime={setTotalPageTime}
                  id='process-closer'
                 />

                <Footer2 excludedLink="Our Process" />
            </main>
        </>
    );
};

export default ProcessPage;
