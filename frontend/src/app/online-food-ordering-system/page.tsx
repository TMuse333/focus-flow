"use client";
import { Metadata } from "next";
import React, { Suspense } from "react";
import Head from "next/head";
const Accordion = React.lazy(() => import("@/components/accordion/accordion"));
const ImageAccordion = React.lazy(() => import("@/components/imageAccordion/imageAccordion"));
const Navbar = React.lazy(() => import("@/components/bigNav/navbar"));
const TextParallaxContentExample = React.lazy(() => import("@/components/parallaxText/parallaxText").then(module => ({ default: module.TextParallaxContentExample })));
const PriceBoxes = React.lazy(() => import("@/components/priceBoxes/priceBoxes"));
const Footer = React.lazy(() => import("@/components/footer/footer"));
const Closer = React.lazy(() => import("@/components/closer/closer"));

import { accordion1Text, customParallax, restaurantFaq, ownershipParallax, priceBoxesData, restaurantParallax, restaurantCloser } from "@/data/data";


export const metadata: Metadata = {
  
  title: "Best Online Food Ordering System for Restaurants in Nova Scotia – Boost Profits",
  description: "Discover the best online food ordering system for restaurants. Our software enhances your operations, secures your payments, and drives your business growth.",
  keywords: "online food ordering system, restaurant software, food delivery software, restaurant online ordering",
  openGraph: {
    title: "Online Food Ordering System for Restaurants",
    description: "Elevate your restaurant’s online presence with our secure and efficient food ordering software. Start boosting your profits today.",
    url: "https://www.focusflowsoftware.com/online-food-ordering-system",
    type: "website",
    images: [
      {
        url: "https://focusflowsoftware.com/media/generic-logo.png",
        width: 1200,
        height: 630,
        alt: "Focus Flow Software - Online Food Ordering System"
      }
    ],
    locale: "en_US",
    siteName: "Focus Flow Software | Online Food Ordering System"
  },
  icons: {
    icon: ["/favicon.ico"]
  },
  
  // Structured data for LocalBusiness
  // additionalMetaTags: [
  //   {
  //     name: "application/ld+json",
  //     content: JSON.stringify({
  //       "@context": "https://schema.org",
  //       "@type": "LocalBusiness",
  //       name: "Focus Flow Software",
  //       address: {
  //         "@type": "PostalAddress",
  //         addressLocality: "Nova Scotia",
  //         addressCountry: "Canada"
  //       },
  //       telephone: "902-999-1006",
  //       url: "https://www.focusflowsoftware.com",
  //       openingHours: "Mo-Su 00:00-23:59"
  //     })
  //   },
  //   // Structured data for SoftwareApplication
  //   {
  //     name: "application/ld+json",
  //     content: JSON.stringify({
  //       "@context": "https://schema.org",
  //       "@type": "SoftwareApplication",
  //       name: "Online Food Ordering System for Restaurants",
  //       url: "https://www.focusflowsoftware.com/online-food-ordering-system",
  //       description:
  //         "Our online food ordering system for restaurants helps streamline operations and boost profits with secure, seamless payments. Built with React.js and MongoDB, this software ensures high performance and scalability.",
  //       applicationCategory: "BusinessApplication",
  //       operatingSystem: "Web",
  //       softwareVersion: "1.0",
  //       author: {
  //         "@type": "Organization",
  //         name: "Focus Flow Software"
  //       },
  //       datePublished: "2024-08-14",
  //       featureList: [
  //         "Secure online payments with Stripe integration",
  //         "Built with React.js and MongoDB for high performance and scalability",
  //         "Retain a higher percentage of profits with minimal fees",
  //         "Quick and easy implementation, get started in no time",
  //         "Customizable digital menu",
  //         "Real-time order tracking and updates",
  //         "Detailed sales analytics and reporting"
  //       ],
  //       aggregateRating: {
  //         "@type": "AggregateRating",
  //         ratingValue: "4.8",
  //         reviewCount: "150"
  //       },
  //       audience: {
  //         "@type": "Audience",
  //         audienceType: "Restaurant Owners",
  //         geographicArea: {
  //           "@type": "Place",
  //           name: "Nova Scotia"
  //         }
  //       },
  //       softwareRequirements: "Compatible with modern web browsers, requires an active internet connection",
  //       programmingLanguage: "React.js",
  //       database: "MongoDB",
  //       potentialAction: {
  //         "@type": "OrderAction",
  //         target: "https://www.focusflowsoftware.com",
  //         actionStatus: "PotentialActionStatus",
  //         expectsAcceptanceOf: {
  //           "@type": "Offer",
  //           priceCurrency: "CAD",
  //           price: "2000",
  //           eligibleRegion: {
  //             "@type": "Place",
  //             name: "Worldwide"
  //           }
  //         }
  //       },
  //       breadcrumb: {
  //         "@type": "BreadcrumbList",
  //         itemListElement: [
  //           {
  //             "@type": "ListItem",
  //             position: 1,
  //             name: "Home",
  //             item: "https://www.focusflowsoftware.com"
  //           },
  //           {
  //             "@type": "ListItem",
  //             position: 2,
  //             name: "Online Food Ordering System",
  //             item: "https://www.focusflowsoftware.com/online-food-ordering-system"
  //           }
  //         ]
  //       },
  //       video: {
  //         "@type": "VideoObject",
  //         name: "Introduction to Our Online Food Ordering System",
  //         description:
  //           "Watch this video to learn how our online food ordering system can help boost your restaurant's sales and efficiency.",
  //         thumbnailUrl: "https://www.focusflowsoftware.com/thumbnail.jpg",
  //         uploadDate: "2024-08-01",
  //         contentUrl: "https://focusflowsoftware.com/video",
  //         embedUrl: "https://focusflowsoftware.com/video-embed"
  //       },
  //       faq: [
  //         {
  //           "@type": "Question",
  //           name: "How are payments secured?",
  //           acceptedAnswer: {
  //             "@type": "Answer",
  //             text: "To accept payments we use Stripe, one of the world's leading payment processors. It is a secure and trusted source, so security is completely taken care of."
  //           }
  //         },
  //         {
  //           "@type": "Question",
  //           name: "How quickly can this be ready to go?",
  //           acceptedAnswer: {
  //             "@type": "Answer",
  //             text: "Very fast. The software is fully functional and ready to be distributed. All you have to do is create a Stripe account so we can hook up your new website to your account and you can start receiving your money!"
  //           }
  //         },
  //         {
  //           "@type": "Question",
  //           name: "What technologies are used?",
  //           acceptedAnswer: {
  //             "@type": "Answer",
  //             text: "We use React.js, the most popular user interface software in the world, which is also used by Instagram, Facebook, and many other big tech companies. The data is stored on MongoDB."
  //           }
  //         },
  //         {
  //           "@type": "Question",
  //           name: "How will this help increase sales?",
  //           acceptedAnswer: {
  //             "@type": "Answer",
  //             text: "By offering an intuitive and seamless online ordering experience, your customers can easily place orders with just a few clicks. This convenience not only enhances customer satisfaction but also increases order frequency, leading to a substantial boost in sales. Plus, with integrated analytics, you can continuously optimize your offerings and marketing strategies to drive even more revenue."
  //           }
  //         }
  //       ]
  //     })
  //   }
  // ]
};


const Restaurant = () => {
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
                    <Closer {...restaurantCloser} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Footer links={links} />
                </Suspense>
            </main>
        </>
    );
};

export default Restaurant;



