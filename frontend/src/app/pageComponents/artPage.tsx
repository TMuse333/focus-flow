"use client"

import BigNav from "@/components/bigNav/navbar"
import GridCarousel from "@/components/gridCarousel/gridCarousel"
import React from "react"
import { artCarousel } from "@/data/data"
import ThreeJSWave from "@/components/threeJsWave/threejsWave"
import Footer2 from "@/components/footer2/footer2"


const ArtPage = () => {


    return (
        <>
        <BigNav
        excludedLink="Artwork"
        />
        <main className="mt-4 md:mt-[4rem]
        bg-[#00bfff] bg-opacity-[0.2]">

            <ThreeJSWave/>

            

        <GridCarousel
      
        isGrid={true}
        images={artCarousel}
        />

        <Footer2
        excludedLink="Artwork"
        />

        </main>
        </>
    )
}

export default ArtPage