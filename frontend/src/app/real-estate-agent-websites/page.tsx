import FeatureBoxes from "@/components/featureBoxes/featureBoxes";
import React from "react";
import RealEstate from "../pageComponents/realEstate";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Best Real Estate Agent Websites | Focusflow Software",
    description: "Check out Focus Flow softwares real estate packages built to help real estate agents elevate their status, close deals faster and display their listings",
    keywords: "real estate agent websites, real estate website design, web design for real estate agents, custom real estate websites",
    openGraph: {
      title: "Focus Flow Software | Best Real Estate Agent Websites",
      description: "Check out Focus Flow softwares real estate packages built to help real estate agents elevate their status, close deals faster and display their listings",
      url: "https://www.focusflowsoftware.com/real-estate-agent-websites",
      images: [
        {
          url: "https://www.focusflowsoftware.com/media/focusFlow-logo.png",
          width: 1200,
          height: 630,
          alt: "Focus Flow Software - Best Real Estate Agent Websites"
        }
      ],
      type: "website",
      locale: "en_US",
      siteName: 'FocusFlow Software | Best Real Estate Agent Websites'
    },
    icons: {
      icon: ["/favicon.ico?v=4"]
    }
  };
  



const Page = () => {

    

    return (
      
            <RealEstate/>
           
      
    )
}

export default Page