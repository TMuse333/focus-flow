"use client"

import AlternatingText from "@/components/alternatingText/alternatingText";
import Content from "@/components/content/content";
import MultiLayerParallax from "@/components/mountainParallax/mountainParallax";

import { contentData1, RestaurantContentBoxData } from "@/data/data";
import dynamic from "next/dynamic";
import Image from "next/image";
import laptop from '../../public/media/laptop.jpg'
// import CircleList from "@/components/circleListElement/circleList";
import { CircleInfoGraphic } from "@/components/circleInfographic/circleInfoGraphic";

// import Carousel from "@/components/carousel/carousel";
import {ScrollableCarousel, SelectedCarouselImage} from "@/components/scrollableCarousel/scrollableCarousel";
import { useGeneralContext } from "@/context/context";

import { AuroraHero } from "@/components/auroraHero/auroraHero";
import { motion } from "framer-motion";
import moneyLaptop from '../../public/media/nobg-more-money-laptop.png'
import Accordion from "@/components/accordion/accordion";
import { accordion1Text } from "@/data/data";

import ParticlesComponent from "@/components/particles/particles";
import {useIntersectionObserver} from "@/components/intersectionObserver/intersectionObserver";
import { useState } from "react";
import Navbar from "@/components/navbar2/navbar";
import { SlideFlip } from "@/components/fancyText/fancyText";
import Footer from "@/components/footer/footer";
import Head from "next/head";
import { scrollableImages } from "@/data/data";
import ContentBox from "@/components/contentBox/contentBox";


export default function Home() {






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

 const {
  selectedCarouselImageIndex, isMobile    
          } = useGeneralContext();

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
        
        // const [contentInView2, setContentInView2] = useState(false)

        // const contentRef2 = useIntersectionObserver(setContentInView2,options,false)  



  return (
    <>
    <Head>
  <title>Let's Work Together | Halifax Web Design by Focus Flow Software</title>
  <meta name="description" content="Ready to elevate your online presence? Let's work together to create a fast, creative, and responsive website that meets your business needs." />
  <meta name="keywords" content="Halifax web design, collaborate with Q3 Visuals, responsive web design, creative web development, fast website design" />
  <meta property="og:title" content="Let's Work Together | Halifax Web Design by Focus Flow Software" />
  <meta property="og:description" content="Ready to elevate your online presence? Let's work together to create a fast, creative, and responsive website that meets your business needs." />
  <meta property="og:url" content="https://www.focusflowsoftware.com/lets-work" />
  <meta property="og:image" content="https://focusflowsoftware.com/media/gemeni-two-hand-stick.webp" /> 
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Let's Work Together | Halifax Web Design by Focus Flow Software" />
  <meta name="twitter:description" content="Ready to elevate your online presence? Let's work together to create a fast, creative, and responsive website that meets your business needs." />
  <meta name="twitter:image" content="https://focusflowsoftware.com/media/gemeni-two-hand-stick.webp" /> 
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  <link rel="canonical" href="https://focusflowsoftware.com/lets-work" />
</Head>


<ParticlesComponent/>
   
      <SelectedCarouselImage/>
      



    <main className="text-center z-[30]
    overflow-x-hidden "
    style={{
      filter:selectedCarouselImageIndex !== null ? 'blur(8px)' : 'none',
      // Ensures full viewport height to avoid scrolling in the main content
      overflowY:selectedCarouselImageIndex !== null ? 'hidden' : 'auto',
      
    }}>
  
  <section>

  
      <Navbar
      links={links}
      transparentBg={true}
      absolute={false}
      />
     
      
      <MultiLayerParallax/>
      </section>
      <AlternatingText/>
      <Content
      {...contentData1}
      reverse={false}
      hasAnimation={true}
      customText={null}
      floatingImage={true}
      image={laptop}
      />
     

      <ContentBox
      {...RestaurantContentBoxData}
      />

<div className="relative"
ref={contentRef}>
            <motion.h3
            initial={{
              opacity:0,
              y:50
            }} 
            animate={{
              opacity:contentInView ? 1 : 0,
              y: contentInView ? 0 : 50
            }}
            className='text-2xl bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
           text-4xl sm:text-5xl font-semibold text-center'>Creativity and Functionality</motion.h3>
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

      {/* <SlideFlip
      startLeft={false}
      text={'Flip Nation'}
      /> */}

    

<ScrollableCarousel
images={scrollableImages}
title='Creating Digital Excellence'
description="Explore some of our showcased projects. Click on each for detailed insights and excellence in digital creation."
/>




           
        

<CircleInfoGraphic
title='Built to work, work to build'
description='We are ready to work! Here is why we are well 
suited to take your business to the next level'/>




{/* <CircleList/> */}









<AuroraHero/>

<Footer
links={links}
/>
    </main>
    </>
  );
}
