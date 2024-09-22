"use client"

import BigNav from "@/components/bigNav/navbar";
import Curtain from "@/components/curtains/curtains";
import PageCreation from "@/components/pageCreation/pageCreation";
import React from "react";
import { processPageContent } from "@/data/data";


const ProcessPage = () => {

    return (
        <>
        <BigNav
        excludedLink="/"
        />
        <main className="mt-[3rem] relative z-[4]
        ">
            <Curtain/>
           
            <PageCreation
            pageContent={processPageContent}/>
             <div className="h-[60vh]
            bg-gray-800
            "/>
            </main>
            </>
    )
}

export default ProcessPage