import React, {useState} from "react";
import Image from 'next/image'


interface serviceBoxElements {
    title:string,
    image:{
        src:string,
        alt:string
    },
    description:string

}



const ServiceBox: React.FC<serviceBoxElements> = (
    {title, image, description}
) => {


    return (
        <section className="w-screen sm:w-[50%]
        h-[300px] sm:h-[400px] md:h-[500px]"
        >



<div className="w-full h-[25%]">


            <h1 className="ml-auto mr-auto">
                {title}
            </h1>
            <p className="ml-auto mr-auto">
                {description}
            </p>
            </div>

            <Image src={image.src}
            alt={image.alt}
            className='object-cover
            h-[70%] w-full'
            
            />




        </section>
    )

}