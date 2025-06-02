import React, { lazy } from "react";
import { Metadata } from "next";
import ArtPage from "../pageComponents/artPage";
import { GoogleAnalytics } from "@next/third-parties/google";


export const metadata: Metadata = {
    title: "Best Creative Web Design Halifax | Focusflow Software",
    description: "Explore how the artistic approach at Focusflow Software defines the best creative web design in Halifax, blending innovation with technology for custom solutions.",
    keywords: "creative web design halifax, web design halifax, artistic web design, custom web design halifax",
    openGraph: {
      title: "Focus Flow Software | Creative Web Design in Halifax",
      description: "See how the unique artistic elements in our designs set Focusflow Software apart as the best creative web design agency in Halifax, combining artistic vision with cutting-edge technology.",
      url: "https://www.focusflowsoftware.com/best-web-design-halifax",
      images: [
        {
          url: "https://www.focusflowsoftware.com/media/focusFlow-logo.png",
          width: 1200,
          height: 630,
          alt: "Focus Flow Software - Best Web Design in Halifax"
        }
      ],
      type: "website",
      locale: "en_US",
      siteName: 'FocusFlow Software | Best Creative Web Design Halifax'
    },
    icons: {
      icon: ["/favicon.ico?v=4"]
    },
  };
  


const Art = () => {

    return (
        <>
       
        <GoogleAnalytics gaId="G-RP2LH1T5SC"/>
        <ArtPage/>
        </>
    )
}


export default Art