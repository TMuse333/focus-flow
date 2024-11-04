"use client"

import dynamic from "next/dynamic";
import { useContext, useEffect, useRef, useState } from "react";
import { Metadata } from "next";

import { useGeneralContext } from "@/context/context";
import { herobannerData, RestaurantContentBoxData, planningContent, monthlyContent, scrollableImages,
electricContainerData } from "@/data/data";

import BigNav from "@/components/bigNav/navbar";  // Load navbar immediately
import Herobanner from "@/components/herobanner/herobanner"; // Load hero banner immediately
import { SelectedCarouselImage } from "@/components/scrollableCarousel/scrollableCarousel";
import ParticlesComponent from "@/components/particles/particles"; // Particles are essential, load without lazy



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
};
import Head from "next/head";
// Dynamic imports (lazy-loaded components)

const ScrollableCarousel = dynamic(() => import('@/components/scrollableCarousel/scrollableCarousel'),{ssr:true});
const Content = dynamic(() => import('@/components/content/content'));
const FlashContent = dynamic(() => import('@/components/flashConent/flashContent'),{ssr:true});
const ContentBox = dynamic(() => import('@/components/contentBox/contentBox'),{ssr:true});
// const AppearingContent = dynamic(() => import('@/components/appearingContent/appearingContent'),{ssr:true});
const Testimonials = dynamic(() => import('@/components/testimonials/testimonials'),{ssr:true});
const Footer2 = dynamic(() => import('@/components/footer2/footer2'),{ssr:true});
const AuroraHero = dynamic(() => import('@/components/auroraHero/auroraHero'), {
  ssr: false, // Client-side rendering only
  loading: () => <p>Loading Aurora Hero...</p>,
});

import infinity from '../../../public/media/infinity.webp';
import { useInView } from "framer-motion";
import { useComponentTimeTracker } from "@/lib/componentTracker";
import { useRouterContext } from "@/lib/useRouterContext";
import { useRouter } from "next/router";
// import ElectricContainer from "@/canvasComponents/electricContainer/electricContainer";






const Homepage = () => {


  const { selectedCarouselImageIndex } = useGeneralContext();

  const ref = useRef(null)

  const inView = useInView(ref,{
    once:false
  })

  const { setTotalPageTime} = useGeneralContext()


useRouterContext()

  // const {totalTimeInView} = useComponentTimeTracker({
  //   inView,
  //   id:'homepage',
  //   setTotalPageTime:setTotalHomePageTime,
  //   totalPageTime:totalHomePageTime,
  //   pageTracker:true
  //   })

  


  

  return (
    <>
    <Head>
        <link rel="canonical" href="https://www.focusflowsoftware.com" />
      </Head>
      <ParticlesComponent />
      <SelectedCarouselImage />

      <BigNav excludedLink="Home" />

      <main 
      ref={ref}
      id='homepage'
      className="text-center z-[30] overflow-x-hidden lg:mt-[2rem]
      text-white"
        style={{
          filter: selectedCarouselImageIndex !== null ? 'blur(8px)' : 'none',
          overflowY: selectedCarouselImageIndex !== null ? 'hidden' : 'auto',
        }}
      >
       
        <Herobanner
          setTotalPageTime={setTotalPageTime}
          
         sections={herobannerData} />

   
        <div className="h-[30vh]" />

        <FlashContent
        setTotalPageTime={setTotalPageTime}
        id='homepage-flash-content'
          src={infinity.src}
          alt="An infinity logo symbolizing limitless possibilities and custom web design services using advanced technologies like React.js to show FocusFlow Software has the most Creative web design in Halifax"
        />

        {/* <ElectricContainer
        data={electricContainerData}
        /> */}

        <Content 
        id='homepage-content-1'
        {...planningContent}
        setTotalPageTime={setTotalPageTime}
         />
        <Content
        id='homepage-content-2'
         {...monthlyContent}
         setTotalPageTime={setTotalPageTime}
          />
        <ContentBox 
        id='homepage-content-box'
        {...RestaurantContentBoxData}
        setTotalPageTime={setTotalPageTime}
         />

        <ScrollableCarousel
        id='homepage-scrollable-carousel'
          images={scrollableImages}
          title="Creating Digital Excellence"
          description="Explore some of our showcased projects. Click on each for detailed insights and excellence in digital creation."
          setTotalPageTime={setTotalPageTime}
        />

        <Testimonials
        setTotalPageTime={setTotalPageTime}
       
         />

        <AuroraHero
        setTotalPageTime={setTotalPageTime}
      
         />

       

        <Footer2 
       
        id="homepage-footer"
        excludedLink='Home' />
      </main>
    </>
  );
}

export default Homepage;
