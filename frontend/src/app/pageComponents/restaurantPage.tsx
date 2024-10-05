"use client"
import { Metadata } from "next";
import React, { Suspense } from "react";

// const Accordion = React.lazy(() => import("@/components/accordion/accordion"));
const ImageAccordion = React.lazy(() => import("@/components/imageAccordion/imageAccordion"));
const Navbar = React.lazy(() => import("@/components/bigNav/navbar"));
const TextParallaxContentExample = React.lazy(() => import("@/components/parallaxText/parallaxText").then(module => ({ default: module.TextParallaxContentExample })));
const PriceBoxes = React.lazy(() => import("@/components/priceBoxes/priceBoxes"));
const Footer2 = React.lazy(() => import("@/components/footer2/footer2"));

const Closer = React.lazy(()=> import("@/components/appearingSquare/appearingSquare"))

import {  customParallax, restaurantFaq, ownershipParallax, priceBoxesData, restaurantParallax, restaurantCloser,
restaurantPageCloser, RestaurantFeatures, genericSlideShow,
restaurantCarousel, 
restaurantPackageDetails} from "@/data/data";
import Herobanner from "@/components/herobanner3/herobanner";
import FeatureBox from "@/components/featureBoxes/featureBoxes";
import SlideShowCarousel from "@/components/slideShowCarousel/slideShowCarousel";
import Carousel from "@/components/carousel/carousel";
import AppearingGradient from "@/components/appearingGradient/appearingGradient";
import StickyCarousel from "@/components/stickyCarousel/stickyCarousel";
import ScrollCarousel from "@/components/scrollCarousel/scrollCarousel";
import AppearingSquare from "@/components/appearingSquare/appearingSquare";
import Head from "next/head";



  



const RestaurantPage = () => {
  

    return (
        <>
         <Head>
        <link rel="canonical" href="https://www.focusflowsoftware.com/online-food-ordering-system" />
      </Head>
    <main className="w-screen">
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



