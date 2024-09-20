"use client"

import BigNav from "@/components/bigNav/navbar";
import Curtain from "@/components/curtains/curtains";
import React from "react";


const ProcessPage = () => {

    return (
        <>
        <BigNav
        excludedLink="/"
        />
        <main className="mt-[3rem] relative z-[4]
        ">
            <Curtain/>
            <div className="h-[60vh]
            bg-gray-800
            "/>
            </main>
            </>
    )
}

export default ProcessPage