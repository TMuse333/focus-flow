import React from "react";
import Image from 'next/image'
import Link from "next/link";



interface ElementProps {
    title:string,
    src:string,
    alt:string,
    description:string,
    buttonText?:string,
    destination?:string
    price?:string
}

const Element:React.FC<ElementProps> = ({
    title,src,alt,description,buttonText,
    destination,price
}) => {

    return (
        <section className="w-[90vw] mx-auto flex
        my-8
        flex-col justify-center items-center relative
       
        sm:w-[45vw] max-w-[500px] mb-8">
            <h2 className="text-white text-center
            text-2xl mb-4 font-semibold">{title}</h2>
            <Image 
            src={src}
            alt={alt}
            width={600}
            height={1300}
            className='w-[45vw]  h-[25vw]
            max-h-[150px] mx-auto object-contain
            max-w-[250px]  rounded-2xl'
            />
            <p className="text-white my-4 font-semibold">{description}
            </p>
            {price && (
 <p className="text-2xl sm:text-3xl md:text-4xl">
    {price}
 </p>
            )}
           
            {buttonText && destination && (
                <button className="bg-[#00bfff]
            p-2 rounded-2xl text-white">
                <Link href={destination}>
                    {buttonText}
                </Link>
            </button>
            )}
            


        </section>

    )
}

interface DisplayBoxProps {
    data:ElementProps[]
}

    const DisplayBoxes:React.FC<DisplayBoxProps> = ({
        data
    }) => {

        return (
            <section className="w-screen relative
            bg-gradient-to-b from-[#4992AC] to-[#00759F]
            mt"
            >

           
            <section className="flex flex-col
            sm:grid grid-cols-2 justify-center
            items-center max-w-[1200px]
            mx-auto bg-gradient-to-b from-[#4992AC] to-[#00759F]
            bg-opacity-[0.4]
             pt-5">
                <div className="absolute
                top-1/2 w-full
                 sm:top-0
                left-1/2 -translate-x-1/2 h-[5px]
                 md:h-full
                sm:w-[5px] bg-white"/>
                {data.map((data, index) => (
                    <Element
                    {...data}
                    key={index}
                    />
                ))}
            </section>
            </section>

        )
    }


    export default DisplayBoxes