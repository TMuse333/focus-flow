"use client"

import Contact from "@/components/contactPage/contactPage";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar2/navbar";
import React from "react";
import Head from "next/head";



const Work = () => {

    //rgb(13,102,179)

    const links = [
        {
            name:'Home',
            destination:'/'
        },
        {
            name:'why-us',
            destination:'/why-us'
        },
        {
            name:'Restaurant Software',
            destination:'/online-food-ordering-system'
          }
        
    ]

    return (
        <>
         <Head>
      <title>Let's Work Together | Halifax Web Design by Focus Flow Software</title>
      <meta name="description" content="Ready to elevate your online presence? Let's work together to create a fast, creative, and responsive website that meets your business needs." />
      <meta name="keywords" content="Halifax web design, collaborate with Q3 Visuals, responsive web design, creative web development, fast website design" />
      <meta property="og:title" content="Let's Work Together | Halifax Web Design by Q3 Visuals" />
      <meta property="og:description" content="Ready to elevate your online presence? Let's work together to create a fast, creative, and responsive website that meets your business needs." />
      <meta property="og:url" content="https://www.focusflowsoftware.com/lets-work" />
      {/* <meta property="og:image" content="https://q3-visuals.vercel.app/images/og-image.jpg" />  */}
      {/* Replace with your actual image URL */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Let's Work Together | Halifax Web Design by Focus Flow Software" />
      <meta name="twitter:description" content="Ready to elevate your online presence? Let's work together to create a fast, creative, and responsive website that meets your business needs." />
      {/* <meta name="twitter:image" content="https://q3-visuals.vercel.app/images/og-image.jpg" /> */}
       {/* Replace with your actual image URL */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="canonical" href="https://focusflowsoftware.com/lets-work" />
    </Head> <Navbar links={links}/>
        <main className="w-screen mt-[6rem]"> 
       
<Contact/>
<Footer
links={links}
/>
        </main>
        </>
    )
}

export default Work