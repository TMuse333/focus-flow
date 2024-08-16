
import { ContextProvider } from "@/context/context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Focus Flow Software",
  description: "The fastest and most creative web design solutions.",
  keywords: "web design, creative solutions, fastest web design",
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
    siteName: 'FocusFlow Software'
  },
  // icons: {
  //   icon: "/favicon.ico" // Path to your favicon.ico file
  // }
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
      </body>
      </ContextProvider>
    </html>

  );
}
