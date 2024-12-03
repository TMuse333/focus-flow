"use client"

import BigNav from "@/components/bigNav/navbar";
import Closer from "@/components/closer/closer";
import Content from "@/components/content/content";
import FlashContent from "@/components/flashConent/flashContent";
import Footer2 from "@/components/footer2/footer2";
import Herobanner from "@/components/herobanner2/herobanner2";
import { aboutCloser, aboutData1, aboutData2, aboutData3 } from "@/data/data2";
import React from "react";
import brain from '../../../public/media/focusFlow-brain-nobg.webp'

const AboutPage = () => {


    return (
        <>
        <BigNav
        excludedLink="About the Founder"
        />
        <main className="w-screen overflow-x-hidden mt-8">
            {/* <Herobanner
            title="About Focus Flow Software"
            description={`At Focus Flow Software, every project is approached with precision, calculated strategy, and uncompromising standards. We don’t just build websites—we craft tools for domination in the digital space, ensuring your brand stands above the rest.

            This relentless focus is driven by Thomas Musial, a creator forged through years of discipline, competition, and overcoming adversity. Thomas doesn’t rely on inspiration—he executes with laser focus and methodical action, delivering solutions that are built to perform at the highest level.`}
            /> */}
              <FlashContent
            src={brain.src}
            alt='The focusFlow brain'
            />

            <Content
            {...aboutData1}
            />
             <Content
            {...aboutData2}
            bgColor
            />

            <Content
            {...aboutData3}
            />

            <Closer
            {...aboutCloser}
            />

            <Footer2
            excludedLink="About the Founder"
            />

          
            
            </main>

        </>
    )
}

export default AboutPage