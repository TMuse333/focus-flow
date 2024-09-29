"use client";

import React from "react";
import dynamic from 'next/dynamic';

// Lazy load components
const BigNav = dynamic(() => import("@/components/bigNav/navbar"), { ssr: false });
const Herobanner = dynamic(() => import("@/components/herobanner2/herobanner2"), { ssr: false });
const Accordion = dynamic(() => import("@/components/accordion/accordion"), { ssr: false });
const AppearingSquare = dynamic(() => import("@/components/appearingSquare/appearingSquare"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer2/footer2"), { ssr: false });

import { monthlyAccordion, monthlyOpener, monthlyPageOutro } from "@/data/data";

const MonthlyPage = () => {
    return (
        <>
            <BigNav excludedLink="Your long term success" />
            <main className="mt-6">
                <Herobanner {...monthlyOpener} />
                
                <Accordion
                    hasIntro={false}
                    text={monthlyAccordion}
                />

                <p className="px-6 mx-auto max-w-[1200px] mb-[8rem]">
                    At FocusFlow, we believe that building a successful website is not a one-time project but an ongoing journey. With our monthly maintenance package, we’re dedicated to ensuring your site thrives, evolves, and stays ahead of the competition. Our comprehensive services — from SEO optimization to competitor analysis, hosting, and regular content updates — are all designed to drive measurable growth and long-term success.
                </p>

                <AppearingSquare {...monthlyPageOutro} />

                <Footer excludedLink="Your long term success" />
            </main>
        </>
    );
};

export default MonthlyPage;
