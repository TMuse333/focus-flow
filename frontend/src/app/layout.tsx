
import { ContextProvider } from "@/context/context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "FocusFlow Software",
  description: "We offer unique, custom coded and visually appealing websites delivered extremely quickly.",
  keywords: "web design halifax, custom web design services, creative web page design, web designer halifax ",
  openGraph: {
    title: "Focus Flow Software | Creative Web Design",
    description: "Experience the fastest and most creative web design solutions with Focus Flow Software.",
    url: "https://www.focusflowsoftware.com", // Default URL
    images: [
      {
        url: "https://www.focusflowsoftware.com/media/gemeni-two-hand-stick.png", // Global Open Graph image
        width: 1200,
        height: 630,
        alt: "Focus Flow Software - Creative and Fast Web Design"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: 'FocusFlow Software | Creative and Fast Web Design in Halifax'
  },
  icons: {
    icon: ["/favicon.ico?v=4"
   ],
  //  apple:[
  //   '/apple-touch-icon.png?v=4'
  //  ],
  //  shortcut:[
  //   '/apple-touch-icon.png'
  //  ] 
  },
  // manifest:'/site.webmanifest'
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   

   
    <html lang="en">
    
<ContextProvider>


      <body className={inter.className}>{children}
      <Analytics/>
      <SpeedInsights/>
      </body>
      </ContextProvider>
    </html>

  );
}
