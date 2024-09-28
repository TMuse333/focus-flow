"use client"

import React from "react";
import { monthlyAccordion, monthlyOpener, monthlyPageOutro } from "@/data/data";
import Accordion from "@/components/accordion/accordion";
import Herobanner from "@/components/herobanner2/herobanner2";
import AppearingSquare from "@/components/appearingSquare/appearingSquare";
import Footer from "@/components/footer2/footer2";
import BigNav from "@/components/bigNav/navbar";


const MonthlyPage = () => {

    const links = [
        {
            name:'home',
            destination:'/'
        },
        {
            name:'Our design',
            destination:'best-web-design-halifax'
          },
       
        {
          name:'Restaurant Software',
          destination:'online-food-ordering-system'
        },
        {
            name:'Lets work!',
            destination:'lets-work'
          },
      
      ]


    return (
      <>
      <BigNav
      excludedLink="Your long term success"
      />
        <main className="mt-6">
            <Herobanner
            {
                ...monthlyOpener
            }
            />
            <Accordion
            hasIntro={false}
           text={monthlyAccordion}
            />
           <p className="px-6 mx-auto max-w-[1200px] mb-[8rem]">
           At FocusFlow, we believe that building a successful website is not a one-time project but an ongoing journey. With our monthly maintenance package, we’re dedicated to ensuring your site thrives, evolves, and stays ahead of the competition. Our comprehensive services — from SEO optimization to competitor analysis, hosting, and regular content updates — are all designed to drive measurable growth and long-term success.
           </p>
            <AppearingSquare
            {...monthlyPageOutro}
            
            />

            <Footer
           excludedLink='Your long term success'
            />
           
        </main>
        </>
    )
}

export default MonthlyPage