"use client"

import CircleList from "@/components/circleListElement/circleList"
import SlideShowCarousel from "@/components/slideShowCarousel/slideShowCarousel"
import React from "react"

import Footer from "@/components/footer/footer"
import Navbar from "@/components/navbar2/navbar"
import { SlideFlip } from "@/components/fancyText/fancyText"
import Head from "next/head"
import { slideShowImages } from "@/data/data"
import type { Metadata } from 'next'

 const Page = () => {







    const links = [
        {
            name:'Home',
            destination:'/'
        },
        {
            name:'Work with us',
            destination:'/lets-work'
        },
        {
            name:'Restaurant Software',
            destination:'/online-food-ordering-system'
          }
        
       
    ]



    //bg-gradient-to-b from-[#0D66B3] via-[#0e60a7] to-[#08365f]
    

    
    return (
        <>
         <Head>
      <title>Why Choose Focus Flow Software | Creative Web Design in Halifax</title>
      <meta name="description" content="Discover why Focus Flow Software is the top choice for creative, fast, and responsive web design services in Halifax." />
      <meta name="keywords" content="FocusFlow Software, Halifax web design, creative web design, responsive websites, fast web design" />
      <meta property="og:title" content="Why Choose FocusFlow | Creative and Fast Web Design in Halifax" />
      <meta property="og:description" content="Discover why FocusFlow Software is the top choice for creative, fast, and responsive web design services in Halifax." />
      <meta property="og:url" content="https://www.focusflowsoftware.com/why-us" />
      {/* <meta property="og:image" content="https://q3-visuals.vercel.app/images/og-image.jpg" /> */}
       {/* Replace with your actual image URL */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Why Choose Focus Flow Software | Creative Web Design in Halifax" />
      <meta name="twitter:description" content="Discover why Focus Flow Software is the top choice for creative, fast, and responsive web design services in Halifax." />
      {/* <meta name="twitter:image" content="https://q3-visuals.vercel.app/images/og-image.jpg" /> */}
      <link rel="canonical" href="https://focusflowsoftware.com/why-us" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
            <Navbar
        links={links}
        transparentBg={false}
        absolute={true}
        
        />
        <main className="mt-[6rem] ">
            
        
            <SlideShowCarousel
            images={slideShowImages}
            />



            <CircleList/>

            {/* <SlideFlip
            startLeft={false}
            text={"Slide Nation"}
            /> */}

            <Footer
            links={links}
            />

           

            
        </main>
        </>
    )

}

export default Page
