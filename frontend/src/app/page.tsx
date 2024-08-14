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
     <title>Focus Flow Software - Creative and Fast Web Design Halifax</title>
<meta property="og:title" content="Focus Flow Software - Creative and Fast Web Design Halifax" />
<meta name="description" content="Experience the fastest and most creative web design in Halifax. We use the newest technologies along laser focus to make sure your website is custom created to fit your needs and delivered quickly" />
<meta property="og:description" content="The fastest and most creative web design in Halifax" />
<meta property="og:url" content="https://focusflowsoftware.vercel.app" />


<meta property="og:image" content="https://focusflowsoftware.vercel.app/media/gemeni-two-hand-stick.webp" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<meta name="keywords" content="Halifax web design, web development, responsive design, SEO services" />

        <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Focus Flow Software",
    "description": "Focus Flow Software is a leading software development company based in Nova Scotia, Canada, specializing in creating fast, creative, and customized web solutions for businesses.",
    "image": "https://focusflowsoftware.vercel.app/media/gemeni-two-hand-stick.webp",  // Add your logo or a relevant image
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Software St",  // Add your street address if available
      "addressLocality": "Nova Scotia",
      "addressRegion": "NS",  // Add region/state code
      "postalCode": "B1A2B3",  // Add postal/ZIP code if available
      "addressCountry": "Canada"
    },
    "telephone": "902-999-1006",
    "email": "info@focusflowsoftware.com",  // Add your business email
    "url": "https://focusflowsoftware.vercel.app",
    "logo": "https://focusflowsoftware.vercel.app/media/gemeni-two-hand-stick.webp",
    "sameAs": [
      "https://www.linkedin.com/company/focus-flow-software",  // Add social profiles if available
      "https://twitter.com/focusflowsoftware"
    ],
    "priceRange": "$$$",  // Indicate the general price range of your services
    "openingHours": [
      "Mo-Fr 09:00-17:00"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.6488",  // Add your latitude
      "longitude": "-63.5752"  // Add your longitude
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "24"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://focusflowsoftware.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  })}
</script>


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
