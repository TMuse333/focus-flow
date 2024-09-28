"use client"
import { Metadata } from "next";
import React, { Suspense } from "react";
import Head from "next/head";
const Accordion = React.lazy(() => import("@/components/accordion/accordion"));
const ImageAccordion = React.lazy(() => import("@/components/imageAccordion/imageAccordion"));
const Navbar = React.lazy(() => import("@/components/bigNav/navbar"));
const TextParallaxContentExample = React.lazy(() => import("@/components/parallaxText/parallaxText").then(module => ({ default: module.TextParallaxContentExample })));
const PriceBoxes = React.lazy(() => import("@/components/priceBoxes/priceBoxes"));
const Footer = React.lazy(() => import("@/components/footer2/footer2"));

const Closer = React.lazy(()=> import("@/components/appearingSquare/appearingSquare"))

import { accordion1Text, customParallax, restaurantFaq, ownershipParallax, priceBoxesData, restaurantParallax, restaurantCloser,
restaurantPageCloser } from "@/data/data";



  



const RestaurantPage = () => {
    const links = [
        { name: 'Home', destination: '/' },
        { name: 'Lets work!', destination: '/lets-work' },
        { name: 'Why us', destination: '/why-us' },
    ];

    return (
        <>
 
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar 
                excludedLink="Products" />
            </Suspense>
            <main className="mt-[4rem]">
                <Suspense fallback={<div>Loading...</div>}>
                    <TextParallaxContentExample {...restaurantParallax} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <TextParallaxContentExample {...customParallax} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <TextParallaxContentExample {...ownershipParallax} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <PriceBoxes boxes={priceBoxesData} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <ImageAccordion
                        title="Unleash Your Restaurant’s Potential: Key Insights About Our Software"
                        description="Elevate your restaurant’s online presence and streamline your operations with our cutting-edge software. Designed for efficiency and ease of use, our solution goes beyond a simple digital menu—it’s a comprehensive tool that propels your business forward. Explore the following answers to some of the most common questions about our software, and discover how it enhances your operations, ensures security, and drives growth."
                        items={restaurantFaq}
                    />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Closer
                    {...restaurantPageCloser}
                    />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Footer excludedLink="Restaurant Software" />
                </Suspense>
            </main>
        </>
    );
};

export default RestaurantPage;



