import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

// Lazy load MonthlyPage
const MonthlyPage = dynamic(()=>import("../pageComponents/monthlyPage"))

// Metadata for the Long Term Success page
export const metadata: Metadata = {
  title: "Website Maintenance Subscription | Long Term Success",
  description: "Learn why a monthly subscription to website maintenance is essential for ensuring the long-term success and performance of your website.",
  keywords: "website maintenance, monthly subscription, long term success, website success",
  openGraph: {
    title: "Focus Flow Software | Monthly Website Maintenance Subscription",
    description: "Discover how a monthly subscription to website maintenance ensures the long-term success of your website with Focusflow Software.",
    url: "https://www.focusflowsoftware.com/long-term-success",
    images: [
      {
        url: "https://www.focusflowsoftware.com/media/focusFlow-logo.png",
        width: 1200,
        height: 630,
        alt: "Focus Flow Software - Monthly Website Maintenance"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: 'FocusFlow Software | Long Term Success'
  },
  icons: {
    icon: ["/favicon.ico?v=4"]
  },
};

const LongTermSuccess = () => {
  return (
    <>
    <GoogleAnalytics gaId="G-RP2LH1T5SC"/>
      <MonthlyPage />
    </>
  );
};

export default LongTermSuccess;
