// "use client";


import type { Metadata } from 'next';
import WhyUsPage from '../pageComponents/whyUsPage';


export const metadata: Metadata = {
    title: "Why Choose FocusFlow Software | Creative Web Design in Halifax",
    description: "Discover why Focus Flow Software is the top choice for creative, fast, and responsive web design services in Halifax.",
    keywords: "FocusFlow Software, Halifax web design, creative web design, responsive websites, fast web design",
    openGraph: {
      title: "Why Choose Focus Flow Software | Creative and Fast Web Design in Halifax",
      description: "Discover why Focus Flow Software is the top choice for creative, fast, and responsive web design services in Halifax.",
      url: "https://www.focusflowsoftware.com/why-us",
      images: [
        {
          url: "https://www.focusflowsoftware.com/media/gemeni-two-hand-stick.png",
          width: 1200,
          height: 630,
          alt: "Focus Flow Software - Creative and Fast Web Design"
        }
      ],
      type: "website",
      locale: "en_US",
      siteName: "FocusFlow Software | Creative and Fast Web Design in Halifax"
    },
    icons: {
      icon: ["/favicon.ico"]
    },
    // manifest: "/site.webmanifest"
  };

const Page = () => {
   

 
      

    return (
        <>
          <WhyUsPage/>
        </>
    );
}

export default Page;
