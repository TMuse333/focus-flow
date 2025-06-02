

import { useRouterContext } from "@/lib/useRouterContext";
import { Metadata } from "next";
import { useRouter } from "next/router";
import Homepage from "./pageComponents/homepage";
import {GoogleAnalytics} from '@next/third-parties/google'
import Script from "next/script";
export const metadata: Metadata = {
  title: "Web Design Halifax | Focusflow Software",
  description: "Focusflow Software offers top-tier web design Halifax services, combining cutting-edge technology and creativity to deliver custom websites quickly.",
  keywords: "web design halifax, custom web design services, creative web page design, web designer halifax",
  openGraph: {
    title: "Focus Flow Software | Web Design Halifax",
    description: "Experience the fastest and most creative web design Halifax solutions with Focus Flow Software.",
    url: "https://www.focusflowsoftware.com",
    images: [
      {
        url: "https://www.focusflowsoftware.com/media/focusFlow-logo.png",
        width: 1200,
        height: 630,
        alt: "Focus Flow Software - Creative and Fast Web Design"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: 'FocusFlow Software | Web Design Halifax'
  },
  icons: {
    icon: ["/favicon.ico?v=4"]
  },
  // manifest:'/site.webmanifest'
}







export default function Home() {

 
  return (
    <>
     <Script
        src="https://analytics.ahrefs.com/analytics.js"
        key="s0xdwZuz3jF7QSWqcXIUyQ"
        />
<GoogleAnalytics gaId="G-RP2LH1T5SC"/>
<Homepage/>



    </>
  );
}