"use client"
import { Metadata } from "next";
import React, {  } from "react";

// const Accordion = React.lazy(() => import("@/components/accordion/accordion"));

const Navbar = React.lazy(() => import("@/components/bigNav/navbar"));

const Footer2 = React.lazy(() => import("@/components/footer2/footer2"));

import {  
restaurantPageCloser, RestaurantFeatures,
restaurantCarousel, 
restaurantPackageDetails} from "@/data/data";
import Herobanner from "@/components/herobanner3/herobanner";
import FeatureBox from "@/components/featureBoxes/featureBoxes";

const Carousel = dynamic(()=>import("@/components/carousel/carousel"))

const ScrollCarousel = dynamic(()=>import('@/components/scrollCarousel/scrollCarousel'))

const AppearingGradient = dynamic(()=>import('@/components/appearingGradient/appearingGradient'))
const AppearingSquare = dynamic(()=>import("@/components/appearingSquare/appearingSquare"))

import Head from "next/head";
import dynamic from "next/dynamic";



  



const RestaurantPage = () => {
  

    return (
        <>
         <Head>
        <link rel="canonical" href="https://www.focusflowsoftware.com/online-food-ordering-system" />
        
      </Head>
    <main className="w-screen text-white">
        <Navbar
        excludedLink="Restaurant software"
        />
        <Herobanner/>

        <FeatureBox
       boxData={RestaurantFeatures}
       />
     
        <AppearingGradient
        text="Effortless Ordering, From Start to Finish"
        subText="Guide your customers from their first click to pickup with ease and real-time updates."
        description={true}
        />

       <Carousel
       images={restaurantCarousel}
       hasDescription={true}
       style= "repeating-linear-gradient(45deg, #001F3F, #001F3F 10%, black 20%, black 30%)"
       />

       <ScrollCarousel
       images={restaurantPackageDetails}
       />

       <AppearingSquare
       {...restaurantPageCloser}
       />

       <Footer2
       excludedLink="Pre built Software"/>
    </main>
           
        </>
    );
};

export default RestaurantPage;



