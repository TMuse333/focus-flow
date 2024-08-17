import React, { useState, useEffect } from "react";


interface HerobannerProps {
    sections: {
        src: string,
        alt: string,
        heading: string
    }[];
}

const Herobanner: React.FC<HerobannerProps> = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
        }, 3000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [sections.length]);

    return (
        <>
        
     
        <section className="w-[95%] mx-auto flex flex-col flex-col-reverse overflow-x-hidden relative h-[80vh]
        md:flex-row md:flex-row-reverse md:border md:border-white rounded-lg
        ">


            <section className="relative w-full h-[80%]
            mb-auto
            md:w-[50vw] my-auto ">
                {sections.map((section, index) => (
                    <div key={index}
                    className={` absolute w-full  transition-opacity duration-1000 ${
                        index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                   
                    >
                        

                        

                   
                    <img
                    className='w-[50vw] mx-auto object-contain
                    rounded-xl'
                    src={section.src}
                    alt={section.alt}
                    />
                     <h2
                        key={index}
                        className={`text-white text-center  w-full
                        my-4 text-xl sm:text-2xl md:text-3xl`}>
                        {section.heading}
                    </h2>
                
                    </div>
                ))}
            </section>
            <section className="md:w-[50vw]">
               <h1 className="text-3xl  px-4
           sm:text-3xl md:text-4xl font-semibold text-center
           mb-4 animate-gradient">Creative and Custom Web Design in Halifax </h1>
            </section>

        </section>
        </>
    );
};

// Default export
export default Herobanner;

// Example usage

