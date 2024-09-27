"use client"

// import AlternatingText from "@/components/alternatingText/alternatingText";
import Content from "@/components/content/content";
// import MultiLayerParallax from "@/components/mountainParallax/mountainParallax";

import {  RestaurantContentBoxData } from "@/data/data";



import { CircleInfoGraphic } from "@/components/circleInfographic/circleInfoGraphic";


import {ScrollableCarousel, SelectedCarouselImage} from "@/components/scrollableCarousel/scrollableCarousel";
import { useGeneralContext } from "@/context/context";


import { motion } from "framer-motion";
import moneyLaptop from '../../../public/media/nobg-more-money-laptop.png'
import Accordion from "@/components/accordion/accordion";
import { accordion1Text ,herobannerData, planningContent
,monthlyContent} from "@/data/data";

import ParticlesComponent from "@/components/particles/particles";
import {useIntersectionObserver} from "@/components/intersectionObserver/intersectionObserver";
import { useState } from "react";


import { scrollableImages } from "@/data/data";
import ContentBox from "@/components/contentBox/contentBox";
import Herobanner from "@/components/herobanner/herobanner";

import AppearingContent from "@/components/appearingContent/appearingContent";

import dynamic from "next/dynamic";
import BigNav from "@/components/bigNav/navbar";


import { focusFlowPromo } from "@/data/data";

import { Metadata } from "next";
import infinity from '../../../public/media/infinity.webp'
import FlashContent from "@/components/flashConent/flashContent";
import Testimonials from "@/components/testimonials/testimonials";
import Navbar from "@/components/navbar2/navbar";

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
    name:'Restaurant Software',
    destination:'/online-food-ordering-system'
  },
  {
    name:'Our design',
    destination:'/best-web-design-halifax'
  },
  {
    name:'Lets work!',
    destination:'/lets-work'
  },
  {
    name:'Your long term success',
    destination:'/long-term-success'
  },

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
excludedLink=""
/>

{/* <Navbar links={links}
/> */}


    <main className="text-center z-[30]
    overflow-x-hidden  lg:mt-[8rem] "
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
 <div className="h-[30vh]"
     />
   
< FlashContent
    src={infinity.src}
    alt={`An infinity logo symbolizing limitless possibilities and custom web design services using advanced technologies like React.js to show FocusFlow Software has the most Creative web design in Halifax `}
    />

    <Content
    {...planningContent}
    />

    <Content
    {...monthlyContent}
    />

    
     

   



  
  

            <ContentBox
      {...RestaurantContentBoxData}
      />

  
<ScrollableCarousel
images={scrollableImages}
title='Creating Digital Excellence'
description="Explore some of our showcased projects. Click on each for detailed insights and excellence in digital creation."
/>

<Testimonials/>



<AuroraHero/>

{/* <Footer
links={links}
/> */}
    </main>
    </>
  );
}

export default Homepage