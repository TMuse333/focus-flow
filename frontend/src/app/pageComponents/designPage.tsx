"use client";

import React from "react";
import dynamic from 'next/dynamic';

// Lazy load components
const BigNav = dynamic(() => import("@/components/bigNav/navbar"), { ssr: false });
import MultiLayerParallax from "@/components/mountainParallax/mountainParallax";
const StickyCarousel = dynamic(() => import("@/components/stickyCarousel/stickyCarousel"), { ssr: false });
const PortalContent = dynamic(() => import("@/components/portalContent/portalContent"), { ssr: false });
const CircleInfoGraphic = dynamic(() => import("@/components/circleInfographic/circleInfoGraphic"), { ssr: false });
const AppearingSquare = dynamic(() => import("@/components/appearingSquare/appearingSquare"), { ssr: false });
const Footer2 = dynamic(() => import("@/components/footer2/footer2"), { ssr: false });

import { stickyScrollables, designPageCloser } from "@/data/data";
import infinity from '../../../public/media/atom-gif.gif';

const DesignPage = () => {
    return (
        <>
            <BigNav excludedLink="Top tier custom web design" />
            <main className="mt-[3rem] relative z-[4] text-white">
                <MultiLayerParallax />

                <StickyCarousel images={stickyScrollables} />

                <PortalContent image={infinity.src} />

                <CircleInfoGraphic />

                <AppearingSquare {...designPageCloser} />

                <Footer2 excludedLink="Top tier custom web design" />
            </main>
        </>
    );
};

export default DesignPage;
