


import React from "react";

import { Metadata } from "next";

import dynamic from 'next/dynamic'

const WorkPage = dynamic(()=>import('../pageComponents/workPage'))

export const metadata: Metadata = {
    title: "Let's Work Together | Halifax Web Design by Focus Flow Software",
    description: "Ready to elevate your online presence? Let's work together to create a fast, creative, and responsive website that meets your business needs.",
    keywords: "Halifax web design, collaborate with Focus Flow Software, responsive web design, creative web development, fast website design",
    openGraph: {
      title: "Let's Work Together | Halifax Web Design by Focus Flow Software",
      description: "Ready to elevate your online presence? Let's work together to create a fast, creative, and responsive website that meets your business needs.",
      url: "https://www.focusflowsoftware.com/lets-work",
      // Uncomment and replace with your actual image URL
      // images: [
      //   {
      //     url: "https://q3-visuals.vercel.app/images/og-image.jpg",
      //     width: 1200,
      //     height: 630,
      //     alt: "Let's Work Together - Focus Flow Software"
      //   }
      // ],
      type: "website",
      locale: "en_US",
      siteName: "Focus Flow Software | Halifax Web Design"
    },
    twitter: {
      card: "summary_large_image",
      title: "Let's Work Together | Halifax Web Design by Focus Flow Software",
      description: "Ready to elevate your online presence? Let's work together to create a fast, creative, and responsive website that meets your business needs.",
      // Uncomment and replace with your actual image URL
      // images: ["https://q3-visuals.vercel.app/images/og-image.jpg"]
    },
    icons: {
      icon: ["/favicon.ico"]
    },
    alternates: {
      canonical: "https://www.focusflowsoftware.com/lets-work"
    }
  };
  


const Work = () => {

   







    return (
        <>
        
    <WorkPage/>
        </>
    )
}

export default Work