import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";

// Lazy load DesignPage
import DesignPage from "../pageComponents/designPage";
import { GoogleAnalytics } from "@next/third-parties/google";

// Metadata for the Design page
export const metadata: Metadata = {
  title: "Best Web Design Halifax | Focusflow Software",
  description: "Discover why Focusflow Software offers the best web design services in Halifax, combining creativity and technology for custom solutions.",
  keywords: "creative web design halifax, web design halifax",
  openGraph: {
    title: "Focus Flow Software | Best Web Design in Halifax",
    description: "Experience the finest web design Halifax solutions with Focusflow Software, blending creativity with cutting-edge technology.",
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
    siteName: 'FocusFlow Software | Best Web Design Halifax'
  },
  icons: {
    icon: ["/favicon.ico?v=4"]
  },
 
};


const Design = () => {
  return (
    <>
    <GoogleAnalytics gaId="G-RP2LH1T5SC"/>
      <DesignPage />
    </>
  );
};

export default Design;
