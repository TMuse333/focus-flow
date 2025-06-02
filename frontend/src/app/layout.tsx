

import { ContextProvider } from "@/context/context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
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

<Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TMTNK53J');
        `}
      </Script>
      <body className={inter.className}>{children}
   
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TMTNK53J"
height="0" width="0" style={{
  display:'none',
  visibility:'hidden'
}}></iframe></noscript>

      <Analytics/>
      <SpeedInsights/>
      </body>
      </ContextProvider>
    </html>

  );
}
