"use client";

import React, { Suspense } from "react";
import Head from "next/head";
import type { Metadata } from 'next';
import { slideShowImages } from "@/data/data"; 


const Navbar = React.lazy(() => import("@/components/bigNav/navbar"));
const SlideShowCarousel = React.lazy(() => import("@/components/slideShowCarousel/slideShowCarousel"));
const CircleList = React.lazy(() => import("@/components/circleListElement/circleList"));
const Footer = React.lazy(() => import("@/components/footer/footer"));

export const metadata: Metadata = {
    title: "Why Choose Focus Flow Software | Creative Web Design in Halifax",
    description: "Discover why Focus Flow Software is the top choice for creative, fast, and responsive web design services in Halifax.",
    keywords: "FocusFlow Software, Halifax web design, creative web design, responsive websites, fast web design",
    openGraph: {
      title: "Why Choose Focus Flow Software | Creative and Fast Web Design in Halifax",
      description: "Discover why Focus Flow Software is the top choice for creative, fast, and responsive web design services in Halifax.",
      url: "https://www.focusflowsoftware.com/why-us",
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
      siteName: "FocusFlow Software | Creative and Fast Web Design in Halifax"
    },
    icons: {
      icon: ["/favicon.ico"]
    },
    // manifest: "/site.webmanifest"
  };

const Page = () => {
    const links = [
        { name: 'Home', destination: '/' },
        { name: 'Work with us', destination: '/lets-work' },
        { name: 'Restaurant Software', destination: '/online-food-ordering-system' }
    ];

 
      

    return (
        <>
            {/* <Head>
                <title>Why Choose Focus Flow Software | Creative Web Design in Halifax</title>
                <meta name="description" content="Discover why Focus Flow Software is the top choice for creative, fast, and responsive web design services in Halifax." />
                <meta name="keywords" content="FocusFlow Software, Halifax web design, creative web design, responsive websites, fast web design" />
                <meta property="og:title" content="Why Choose FocusFlow | Creative and Fast Web Design in Halifax" />
                <meta property="og:description" content="Discover why FocusFlow Software is the top choice for creative, fast, and responsive web design services in Halifax." />
                <meta property="og:url" content="https://www.focusflowsoftware.com/why-us" />
                <link rel="canonical" href="https://focusflowsoftware.com/why-us" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head> */}

            <Suspense fallback={<div>Loading...</div>}>
                <Navbar
                    excludedLink="Why Us"
                />
            </Suspense>

            <main className="mt-[6rem]">
                <Suspense fallback={<div>Loading slideshow...</div>}>
                    <SlideShowCarousel images={slideShowImages} />
                </Suspense>

                <Suspense fallback={<div>Loading content...</div>}>
                    <CircleList />
                </Suspense>

                <Suspense fallback={<div>Loading footer...</div>}>
                    <Footer links={links} />
                </Suspense>
            </main>
        </>
    );
}

export default Page;
