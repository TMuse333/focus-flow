"use client"

import Contact from "@/components/contactPage/contactPage";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/bigNav/navbar";
import React from "react";
import Head from "next/head";
import { Metadata } from "next";
import { useGeneralContext } from "@/context/context";


  


const WorkPage = () => {

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
        
    <Navbar 
    excludedLink="Contact"/>
        <main className="w-screen mt-[6rem]"> 
       
<Contact/>
<Footer
links={links}
/>
        </main>
        </>
    )
}

export default WorkPage