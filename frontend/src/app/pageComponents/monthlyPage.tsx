"use client"

import React from "react";
import { monthlyAccordion, monthlyPageOutro } from "@/data/data";
import Accordion from "@/components/accordion/accordion";
import Herobanner from "@/components/herobanner2/herobanner2";
import AppearingSquare from "@/components/appearingSquare/appearingSquare";
import Footer from "@/components/footer/footer";


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
        <main className="mt-4">
            <Herobanner/>
            <Accordion
            hasIntro={false}
           text={monthlyAccordion}
            />
            <AppearingSquare
            {...monthlyPageOutro}
            
            />

            <Footer
            links={links}
            />
           
        </main>
    )
}

export default MonthlyPage