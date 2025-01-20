"use client"

import AppearingSquare from "@/components/appearingSquare/appearingSquare";
import BigNav from "@/components/bigNav/navbar";
import DisplayBoxes from "@/components/displayBox/displayBox";
import ExperienceCard from "@/components/experienceCard/experienceCard";
import FeatureBoxes from "@/components/featureBoxes/featureBoxes";
import Footer2 from "@/components/footer2/footer2";
import Herobanner from "@/components/herobanner3/herobanner";
import ImageAccordion from "@/components/imageAccordion/imageAccordion";
import Pricing from "@/components/pricing/pricing";
import SlidingText from "@/components/slidingText/slidingText.prod";
import Testimonials from "@/components/testimonials/testimonials";
import TextAndList from "@/components/textAndList/textAndList";
import { realEstateExperienceCard, realEstateFeatures, realEstateHerobanner,
realEstateFaq,realEstatePrices,monthlyDisplay,
infoExperienceCard,
realEstateCloser,realEstateTextList } from "@/data/data2";
import React from "react";

const RealEstate = () => {


    return (
        <>
        <BigNav
        excludedLink="Real estate agent websites"
        />
        <section className="w-screen overflow-x-hidden">
           
            <Herobanner
            {...realEstateHerobanner}
            pTag='Eleate your real estate practice with a professional website designed to showcase properties, attract clients, and streamline your business operations.'
            destination='https://focusflowrealtorpage.vercel.app'
            buttonText="See a sample"
            destination2="/lets-work"
            buttonText2="Get your own"
           
            />
            <ExperienceCard
            {...realEstateExperienceCard}
            buttonText='See a sample'
            />

            <ExperienceCard
            {...infoExperienceCard}
            buttonText=''
            />

            <TextAndList
           
            {...realEstateTextList}
            />
           
            <FeatureBoxes
            title='Secure your advantage with Focus Flow'
            description='Your website can have a huge impact on your business. Here is why we are best equipped for the job'
           boxData={realEstateFeatures}
            />

            <div className="h-[40vh]"
            />

           

            <Testimonials
            />

<SlidingText
text="Pricing"
subText="While the price of a website can vary greatly,
Here are some general packages that we offer."
/>

            <Pricing
            priceData={realEstatePrices}
            />

            <DisplayBoxes
            data={monthlyDisplay}
            />

            <ImageAccordion
            items={realEstateFaq}
            />

            <AppearingSquare
            {...realEstateCloser}
            />

            <Footer2
            excludedLink="Real Estate Agent Websites"
            />
        </section>
        </>
    )
}

export default RealEstate