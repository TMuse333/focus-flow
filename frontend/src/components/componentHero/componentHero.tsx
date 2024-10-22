import React from "react";

interface props {
    title:string,
    description:string,
    subTitle:string
}



const ComponentHero:React.FC<props> = ({
    title,description, subTitle
}) => {



    return (
        <header className="bg-gradient-to-br from-[#00bfff] to-black h-screen flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-2xl md:text-4xl text-white font-semibold mb-4">
            {subTitle}
        </h2>
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
            {title}
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl">
            {description}
        </p>
    </header>
    
    )
}


export default ComponentHero