"use client"

import Contact from "@/components/contactPage/contactPage";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/bigNav/navbar";
import React from "react";
import Head from "next/head";
import { Metadata } from "next";
import { useGeneralContext } from "@/context/context";
import Footer2 from "@/components/footer2/footer2";
import Herobanner from "@/components/herobanner2/herobanner2";
import { ContactOpener } from "@/data/data";


  ////


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
     <Herobanner
     {
        ...ContactOpener
     }/>  
      
     <section className="w-full py-6 flex justify-center
     items-center relative flex-col
     mx-auto my-10 bg-[#00bfff] bg-opacity-[0.2]">
        <h3 className="text-3xl mb-4">
           Here are our direct contacts

        </h3>
        <section className="flex w-full justify-center mx-auto
        flex-col items-center ">
        <h4 className=" mb-4 text-lg sm:text-xl md:text-2xl ">Email: <span className="font-semibold">Focusflowsoftware@gmail.com</span></h4>
        <h4 className=" mb-4 text-lg sm:text-xl md:text-2xl">Phone number: <span className="font-semibold">(902) 999-1006</span> </h4>
        </section>
       
     </section>
<Contact/>
<Footer2
excludedLink='Contact'
/>
        </main>
        </>
    )
}

export default WorkPage