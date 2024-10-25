"use client"

import BigNav from "@/components/bigNav/navbar"
import GridCarousel from "@/components/gridCarousel/gridCarousel"
import React from "react"
import { artCarousel } from "@/data/data"
import ThreeJSWave from "@/components/threeJsWave/threejsWave"


const ArtPage = () => {


    return (
        <>
        <BigNav
        excludedLink="Art"
        />
        <main className="mt-4 md:mt-[4rem]">

            <ThreeJSWave/>

        <GridCarousel
        isGrid={true}
        images={artCarousel}
        />

        </main>
        </>
    )
}

export default ArtPage