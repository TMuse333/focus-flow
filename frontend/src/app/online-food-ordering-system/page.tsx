"use client"

import Accordion from "@/components/accordion/accordion"
import ImageAccordion from "@/components/imageAccordion/imageAccordion"
import Navbar from "@/components/navbar2/navbar"
import { TextParallaxContentExample } from "@/components/parallaxText/parallaxText"
import PriceBoxes from "@/components/priceBoxes/priceBoxes"
import { accordion1Text, customParallax,
    restaurantFaq, ownershipParallax, priceBoxesData, restaurantParallax } from "@/data/data"
import React from "react"
import Head from "next/head"


const Restaurant = () => {

    const links = [
        {
            name:'Home',
            destination:'/'
          },
       
        {
          name:'Lets work!',
          destination:'/lets-work'
        },
        {
            name:'Why us',
            destination:'/why-us'
          },
      ]


    return (
        <>
         <Head>
        <title>Best Online Food Ordering System for Restaurants in Nova Scotia – Boost Profits”</title>
        <meta name="description" content="Discover the best online food ordering system for restaurants. Our software enhances your operations, secures your payments, and drives your business growth." />
        <meta name="keywords" content="online food ordering system, restaurant software, food delivery software, restaurant online ordering" />
        <meta property="og:title" content="Online Food Ordering System for Restaurants" />
        <meta property="og:description" content="Elevate your restaurant’s online presence with our secure and efficient food ordering software. Start boosting your profits today." />
        <meta property="og:url" content="https://www.focusflowsoftware.com/online-food-ordering-system" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://focusflowsoftware.vercel.app/media/generic-logo.png" /> */}
        <link rel="canonical" href="https://www.focusflowsoftware.com/online-food-ordering-system" />
        <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Focus Flow Software",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nova Scotia",
      "addressCountry": "Canada"
    },
    "telephone": "902-999-1006",
    "url": "https://www.focusflowsoftware.com",
    // "logo": "https://q3-visuals.vercel.app/logo.png",
    "sameAs": "", // No Facebook or other social media profiles
    "openingHours": "Mo-Su 00:00-23:59" // Open 24/7
  })}
</script>

<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Online Food Ordering System for Restaurants",
    "url": "https://www.focusflowsoftware.com/online-food-ordering-system",
    "description": "Our online food ordering system for restaurants helps streamline operations and boost profits with secure, seamless payments. Built with React.js and MongoDB, this software ensures high performance and scalability. Maximize your earnings with minimal transaction fees and get started quickly.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "softwareVersion": "1.0",
    "author": {
      "@type": "Organization",
      "name": "Your Company Name"
    },
    "datePublished": "2024-08-14",
    // "screenshot": "https://q3-visuals.vercel.app/screenshot.png",
    "featureList": [
      "Secure online payments with Stripe integration",
      "Built with React.js and MongoDB for high performance and scalability",
      "Retain a higher percentage of profits with minimal fees",
      "Quick and easy implementation, get started in no time",
      "Customizable digital menu",
      "Real-time order tracking and updates",
      "Detailed sales analytics and reporting"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Restaurant Owners",
      "geographicArea": {
        "@type": "Place",
        "name": "Nova Scotia"
      }
    },
    "inLanguage": "en",
    "softwareRequirements": "Compatible with modern web browsers, requires an active internet connection",
    "programmingLanguage": "React.js",
    "database": "MongoDB",
    "profitRetention": {
      "@type": "PropertyValue",
      "name": "Higher Profit Retention",
      "value": "Maximize your earnings with minimal transaction fees"
    },
    "implementationTime": {
      "@type": "PropertyValue",
      "name": "Quick Implementation",
      "value": "Get your system up and running quickly with easy integration"
    },
    "potentialAction": {
      "@type": "OrderAction",
      "target": "https://www.focusflowsoftware.com",
      "actionStatus": "PotentialActionStatus",
      "expectsAcceptanceOf": {
        "@type": "Offer",
        "priceCurrency": "CAD",
        "price": "2000",
        "eligibleRegion": {
          "@type": "Place",
          "name": "Worldwide"
        }
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.focusflowsoftware.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Online Food Ordering System",
          "item": "https://www.focusflowsoftware.com/online-food-ordering-system"
        }
      ]
    },
    "video": {
      "@type": "VideoObject",
      "name": "Introduction to Our Online Food Ordering System",
      "description": "Watch this video to learn how our online food ordering system can help boost your restaurant's sales and efficiency.",
      "thumbnailUrl": "https://www.focusflowsoftware.com/thumbnail.jpg",
      "uploadDate": "2024-08-01",
      "contentUrl": "https://focusflowsoftware.com/video",
      "embedUrl": "https://focusflowsoftware.com/video-embed"
    },
    "faq": [
      {
        "@type": "Question",
        "name": "How are payments secured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To accept payments we use Stripe, one of the world's leading payment processors. It is a secure and trusted source, so security is completely taken care of."
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://focusflowsoftware.com/media/stripe-integration.webp",
          "caption": "the stripe logo"
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can this be ready to go?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Very fast. The software is fully functional and ready to be distributed. All you have to do is create a Stripe account so we can hook up your new website to your account and you can start receiving your money!"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://focusflowsoftware.com/media/lightning-plug.webp",
          "caption": "the stripe logo"
        }
      },
      {
        "@type": "Question",
        "name": "What technologies are used?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use React.js, the most popular user interface software in the world, which is also used by Instagram, Facebook, and many other big tech companies. The data is stored on MongoDB."
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://focusflowsoftware.com/media/react-logo.webp",
          "caption": "the stripe logo"
        }
      },
      {
        "@type": "Question",
        "name": "How will this help increase sales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By offering an intuitive and seamless online ordering experience, your customers can easily place orders with just a few clicks. This convenience not only enhances customer satisfaction but also increases order frequency, leading to a substantial boost in sales. Plus, with integrated analytics, you can continuously optimize your offerings and marketing strategies to drive even more revenue."
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://focusflowsoftware.com/media/dollar-sign-logo.webp",
          "caption": "Stripe logo"
        }
      }
    ]
  })}
</script>

      </Head>
    <Navbar
    links={links}
    />
        <main className=" mt-[4rem]">
          
            <TextParallaxContentExample
            {...restaurantParallax}
            />

            <TextParallaxContentExample
            {...customParallax}
            />

            <TextParallaxContentExample
            {...ownershipParallax}
            />
            <section className="text-left px-4 mb-8
            mx-auto max-w-[1200px]">

            
            <h2 className="text-2xl bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
           text-4xl sm:text-5xl font-semibold text-center
           mb-4">Experience the Freedom of More Profits
                </h2>

<p className="sm:text-md md:text-lg
px-6">We believe in empowering your business, not taking from it. Unlike other platforms, our online ordering system is built to give you more of what you earn. By integrating Stripe, we’ve ensured that your payments are secure, seamless, and come with a fraction of the fees you’d see elsewhere.
    <br/><br/>
    No hefty commissions. No unnecessary costs. Just more of what belongs to you.

</p>
</section>




            <PriceBoxes
           boxes={priceBoxesData}
            />

           <ImageAccordion
           title='Unleash Your Restaurant’s Potential: Key Insights About Our Software'
           description="Elevate your restaurant’s online presence and streamline your operations with our cutting-edge software. Designed for efficiency and ease of use, our solution goes beyond a simple digital menu—it’s a comprehensive tool that propels your business forward. Explore the following answers to some of the most common questions about our software, and discover how it enhances your operations, ensures security, and drives growth."
           items={restaurantFaq}
           />
           
        </main>
        </>
    )
}

export default Restaurant