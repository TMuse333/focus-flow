"use client";

import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { ContactOpener } from "@/data/data";

// Lazy load components
const Navbar = dynamic(() => import("@/components/bigNav/navbar"), { ssr: false });
import Herobanner from "@/components/herobanner2/herobanner2";
const Contact = dynamic(() => import("@/components/contactPage/contactPage"), { ssr: false });
const Footer2 = dynamic(() => import("@/components/footer2/footer2"), { ssr: false });

const WorkPage = () => {
    return (
        <>
            <Navbar excludedLink="Contact" />
            <main className="w-screen mt-[6rem]">
                <Herobanner {...ContactOpener} />
                
                <section className="w-full py-6 flex justify-center items-center relative flex-col mx-auto my-10 bg-[#00bfff] bg-opacity-[0.2]">
                    <h3 className="text-3xl mb-4 sm:text-4xl font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-3xl
                    text-center">
                        Here are our direct contacts
                    </h3>
                    <section className="flex w-full justify-center mx-auto flex-col items-center ">
                        <h4 className=" mb-4 text-lg sm:text-xl md:text-2xl ">
                            Email: <span className="font-semibold">Focusflowsoftware@gmail.com</span>
                        </h4>
                        <h4 className=" mb-4 text-lg sm:text-xl md:text-2xl">
                            Phone number: <span className="font-semibold">(902) 999-1006</span>
                        </h4>
                    </section>
                </section>
                
                <Contact />
                
                <Footer2 excludedLink="Contact" />
            </main>
        </>
    );
};

export default WorkPage;
