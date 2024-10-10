

import { ContextProvider } from "@/context/context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

{/* <meta name="google-site-verification" content="SVVgC1gEFw6eo2gimpl7oudHF2MFExUUlsdeB1Jg1dM" /> */}





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   

   
    <html lang="en">

      {/* <Head
      >
       <meta name="google-site-verification" content="SVVgC1gEFw6eo2gimpl7oudHF2MFExUUlsdeB1Jg1dM" />
      </Head> */}

    
<ContextProvider>


      <body className={inter.className}>{children}
      <Analytics/>
      <SpeedInsights/>
      </body>
      </ContextProvider>
    </html>

  );
}
