"use client"

import dynamic from "next/dynamic";
import {  useRef, } from "react";
import { Metadata } from "next";

import { useGeneralContext } from "@/context/context";
import { herobannerData, scrollableImages,
blogCarouselData, planningContent,
monthlyContent,RestaurantContentBoxData,
experienceCard1} from "@/data/data";

import BigNav from "@/components/bigNav/navbar";  // Load navbar immediately
import Herobanner from "@/components/herobanner/herobanner"; // Load hero banner immediately
import { SelectedCarouselImage } from "@/components/scrollableCarousel/scrollableCarousel";
import ParticlesComponent from "@/components/particles/particles"; // Particles are essential, load without lazy

import ScrollCarousel from "@/components/scrollCarousel/scrollCarousel";

export const metadata: Metadata = {
  title: "Web Design Halifax | Focusflow Software",
  description: "Focusflow Software offers top-tier web design Halifax services, combining cutting-edge technology and creativity to deliver custom websites quickly.",
  keywords: [
    "web design halifax",
    "custom web design services",
    "creative web page design",
    "web designer halifax"
  ],
  
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
import { useInView } from "framer-motion";
import ExperienceCard from "@/components/experienceCard/experienceCard";
import { experienceCard2 } from "@/data/data2";
import { InlineWidget } from "react-calendly";
// Dynamic imports (lazy-loaded components)

const ScrollableCarousel = dynamic(() => import('@/components/scrollableCarousel/scrollableCarousel'),{ssr:true});
const Content = dynamic(() => import('@/components/content/content'));
// const FlashContent = dynamic(() => import('@/components/flashConent/flashContent'),{ssr:true});
const ContentBox = dynamic(() => import('@/components/contentBox/contentBox'),{ssr:true});

const Testimonials = dynamic(() => import('@/components/testimonials/testimonials'),{ssr:true});
const Footer2 = dynamic(() => import('@/components/footer2/footer2'),{ssr:true});
const AuroraHero = dynamic(() => import('@/components/auroraHero/auroraHero'), {
  ssr: false, // Client-side rendering only
  loading: () => <p>Loading Aurora Hero...</p>,
});

// import infinity from '../../../public/media/infinity.webp';

// import ElectricContainer from "@/canvasComponents/electricContainer/electricContainer";




const Homepage = () => {


  const { selectedCarouselImageIndex } = useGeneralContext();

  const ref = useRef(null)

  const ref2 = useRef(null)

  const ref3 = useRef(null)

  const inView2 = useInView(ref3,{
    once:true
  })

  const inView = useInView(ref,{
    once:true
  })
  


  // const { setTotalPageTime} = useGeneralContext()





  


  

  return (
    <>
    <Head>
        <link rel="canonical" href="https://www.focusflowsoftware.com" />
      </Head>

        
    
      <ParticlesComponent />

      <Herobanner
          // setTotalPageTime={setTotalPageTime}
          
         sections={herobannerData} />


         <ExperienceCard
         {...experienceCard1}
         buttonText='View to tier design'
         />

         <ExperienceCard
         {...experienceCard2}
         reverse
         />
      <SelectedCarouselImage />

      <BigNav excludedLink="Home" />

      <main 
      ref={ref}
      id='homepage'
      className="text-center z-[30]  lg:mt-[2rem]
      text-white w-screen overflow-x-hidden"
        style={{
          filter: selectedCarouselImageIndex !== null ? 'blur(8px)' : 'none',
          overflowY: selectedCarouselImageIndex !== null ? 'hidden' : 'auto',
        }}
      >


       
  



   
        {/* <div className="h-[30vh]" />

       

         <FlashContent
     
        
          src={infinity.src}
          alt="An infinity logo symbolizing limitless possibilities and custom web design services using advanced technologies like React.js to show FocusFlow Software has the most Creative web design in Halifax"
        /> */}

   

        <Content 
      
        {...planningContent}
        image={planningContent.image.src}
     
        
         />
        <Content
        
         {...monthlyContent}
         image={monthlyContent.image.src}
         
          />
        {/* <ContentBox 
       
        {...RestaurantContentBoxData}
       
         /> */}

<section ref={ref3}>
  
   <ScrollableCarousel
      
   images={scrollableImages}
   title="Creating Digital Excellence"
   description="Explore some of our showcased projects. Click on each for detailed insights and excellence in digital creation."
  
 />
  
</section>
     

        <Testimonials
     
       
         />

<section className="relative mx-auto">
<h2 className=" bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
                text-4xl sm:text-5xl font-semibold text-center relative transition-colors
                mb-4">
          The FocusFlow Blog
         </h2>

         <p className="sm:text-lg
         md:text-xl">Learn about website trends and anything
          websites in general with the FocusFlow Blog
         </p>

  </section>
        

<section ref={ref2}
>
{inView && (
 <ScrollCarousel
 title="The FocusFlow Blog"
 images={blogCarouselData}
 bgImage={true}
 />
)}

        
         </section>

        
  
         

         <AuroraHero
        // setTotalPageTime={setTotalPageTime}
      
         />


        <Footer2 
       
      
        excludedLink='Home' /> 


</main>
    </>
  );
}

export default Homepage;
