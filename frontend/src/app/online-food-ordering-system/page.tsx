// "use client"
import { Metadata } from "next";
import React, { Suspense } from "react";
import Head from "next/head";
import RestaurantPage from "../pageComponents/restaurantPage";


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
}
  


const Restaurant = () => {
   

    return (
        <>
 
           <RestaurantPage/>
        </>
    );
};

export default Restaurant;



