"use client"

// import AlternatingText from "@/components/alternatingText/alternatingText";
import Content from "@/components/content/content";
// import MultiLayerParallax from "@/components/mountainParallax/mountainParallax";

import {  RestaurantContentBoxData } from "@/data/data";

import laptop from '../../../public/media/laptop.jpg'
// import CircleList from "@/components/circleListElement/circleList";
import { CircleInfoGraphic } from "@/components/circleInfographic/circleInfoGraphic";

// import Carousel from "@/components/carousel/carousel";
import {ScrollableCarousel, SelectedCarouselImage} from "@/components/scrollableCarousel/scrollableCarousel";
import { useGeneralContext } from "@/context/context";


import { motion } from "framer-motion";
import moneyLaptop from '../../../public/media/nobg-more-money-laptop.png'
import Accordion from "@/components/accordion/accordion";
import { accordion1Text ,herobannerData} from "@/data/data";

import ParticlesComponent from "@/components/particles/particles";
import {useIntersectionObserver} from "@/components/intersectionObserver/intersectionObserver";
import { useState } from "react";

import Head from "next/head";
import { scrollableImages, contentData1 } from "@/data/data";
import ContentBox from "@/components/contentBox/contentBox";
import Herobanner from "@/components/herobanner/herobanner";

import AppearingContent from "@/components/appearingContent/appearingContent";
import { lionSpeech } from "@/data/data";
import dynamic from "next/dynamic";
import BigNav from "@/components/bigNav/navbar";
// import VideoImage from "@/components/videoImg/videoImg";
import goku from '../../public/media/goku-vs-jiren.jpg'
import { focusFlowPromo } from "@/data/data";
import SlideScrollCarousel from "@/components/slideScrollCarousel/slideScrollCarousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Halifax | Focusflow Software",
  description: "Focusflow Software offers top-tier web design Halifax services, combining cutting-edge technology and creativity to deliver custom websites quickly.",
  keywords: "web design halifax, custom web design services, creative web page design, web designer halifax",
  openGraph: {
    title: "Focus Flow Software | Web Design Halifax",
    description: "Experience the fastest and most creative web design Halifax solutions with Focus Flow Software.",
    url: "https://www.focusflowsoftware.com",
    images: [
      {
        url: "https://www.focusflowsoftware.com/media/gemeni-two-hand-stick.png",
        width: 1200,
        height: 630,
        alt: "Focus Flow Software - Creative and Fast Web Design"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: 'FocusFlow Software | Web Design Halifax'
  },
  icons: {
    icon: ["/favicon.ico?v=4"]
  },
  // manifest:'/site.webmanifest'
}


const AuroraHero = dynamic(() => import('@/components/auroraHero/auroraHero'), {
  ssr: false,
  loading: () => <p>Loading Aurora Hero...</p>, // Optional: a loading component
});

const Footer = dynamic(() => import('@/components/footer/footer'), {
  ssr: false,
  loading: () => <p>Loading Footer...</p>, // Optional: a loading component
});




const Homepage = () => {




  


const links = [
  {
    name:'Why us',
    destination:'why-us'
  },
  {
    name:'Lets work!',
    destination:'lets-work'
  },
  {
    name:'Restaurant Software',
    destination:'online-food-ordering-system'
  }
]

const { isMobile, selectedCarouselImageIndex} = useGeneralContext()

          const options = {
            root: null,
            rootMargin: !isMobile ? '-120px' : '0px',
            threshold:!isMobile ?  0.6 : 0.1,
        };

      //   const options2 = {
      //     root: null,
      //     rootMargin: !isMobile ? '-120px' : '-90px',
      //     threshold:!isMobile ?  0.6 : 0.5,
      // };


        const [contentInView, setContentInView] = useState(false)

        const contentRef = useIntersectionObserver(setContentInView,options,false)  
        
        const [contentInView2, setContentInView2] = useState(false)

        // const contentRef2 = useIntersectionObserver(setContentInView2,options,false)  
//


  return (
    <>




<ParticlesComponent/>
   
      <SelectedCarouselImage/>
      
<BigNav
excludedLink="/"
/>


    <main className="text-center z-[30]
    overflow-x-hidden mt-[3rem] lg:mt-[8rem] "
    style={{
      filter:selectedCarouselImageIndex !== null ? 'blur(8px)' : 'none',
      // Ensures full viewport height to avoid scrolling in the main content
      overflowY:selectedCarouselImageIndex !== null ? 'hidden' : 'auto',
    }}
      
   >
  
  

  {/* <SlideScrollCarousel
  /> */}
      
     
      <Herobanner
      sections={herobannerData}/>
     
    
    <AppearingContent
    sliderText="Creative Web Page Design to Elevate Your Online Presence"
    src={focusFlowPromo}
    id='appearing-video'
    isVideo={true}
    />


    
     

      <ContentBox
      {...RestaurantContentBoxData}
      />

<div className="relative"
ref={contentRef}
>
            <motion.h2
            initial={{
              opacity:0,
              y:50
            }} 
            animate={{
              opacity:contentInView ? 1 : 0,
              y: contentInView ? 0 : 50
            }}
            className='text-2xl bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
           text-4xl sm:text-5xl font-semibold text-center'>Creativity and Functionality
           </motion.h2>
            <motion.p
            initial={{
              opacity:0,
              x:50
            }} 
            animate={{
              opacity:contentInView ? 1 : 0,
              x: contentInView ? 0 : 50,
              transition:{
                delay:0.5
              }
            }}
             className='text-left  md:text-center pl-4 pr-5 mt-5
           w-[100%] max-w-[900px] ml-auto mr-auto'>We are very dedicated to our craft
           and are ready to give you a fantastic website that will take your business to the next level.</motion.p>
            </div>

  <Content
  floatingImage={true}
      hasAnimation={false}
      customText={<Accordion
      text={accordion1Text}
      hasIntro={false}
      link='why-us'
      intro='Creativity and Functionality'
      description='We are very dedicated to our craft
      and are ready to give you a fantastic website that will take your business to the next level.'/> }
      reverse={true}
      image={moneyLaptop}
      />
<ScrollableCarousel
images={scrollableImages}
title='Creating Digital Excellence'
description="Explore some of our showcased projects. Click on each for detailed insights and excellence in digital creation."
/>

<CircleInfoGraphic
title='Built to work, work to build'
description='We are ready to work! Here is why we are well 
suited to take your business to the next level'/>

<AuroraHero/>

<Footer
links={links}
/>
    </main>
    </>
  );
}

export default Homepage