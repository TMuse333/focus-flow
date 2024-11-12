import { useComponentTimeTracker } from "@/lib/componentTracker";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import AppearingGradient from "../appearingGradient/appearingGradient";

interface BoxProps {
    src:string,
    alt:string,
    title:string,
    description:string
    bigBox:boolean
}

interface Data {
    boxData:{
        src:string,
    alt:string,
    title:string,
    description:string
    bigBox:boolean
    }[]
    setTotalPageTime?:React.Dispatch<React.SetStateAction<{name:string,
        time:number}[]>>
}


const FeatureBox:React.FC<BoxProps> = ({
    src,alt,title,description,
    bigBox
}) => {

    return (
        <div className={`w-[90vw] mx-auto p-4 mb-8
        border border-[#0251a1] rounded-xl sm:w-[40vw]
        bg-gradient-to-b from-[#001F3F] to-[#0356a8] 
        `}>
            <Image
            src={src}
            alt={alt}
            width={600}
            height={1300}
            className='w-[30px] sm:w-[35px] md:h-[40px] mx-auto mb-4 object-contain
            '
            />
            <h3 className="text-lg font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">{title}</h3>
            <p>{description}</p>
        </div>
    )
}


const FeatureBoxes:React.FC<Data> = ({
    boxData, setTotalPageTime
}) => {

    const ref = useRef(null)
  
    const inView = useInView(ref,{
      once:false
    })
    const {totalTimeInView} = useComponentTimeTracker({inView,id:'restaurant-feature-boxes',
    setTotalPageTime:setTotalPageTime,
    pageTracker:false})

    return (
        <section className="md:h-screen">
        <AppearingGradient
  text="Elevate Your Restaurant"
  subText="Reimagine service. Delight every customer."
  

/>


        <section className="flex flex-col mx-auto
        justify-center items-center
        sm:grid grid-cols-2
        "
        ref={ref}>

            {boxData.map((box, index) => (
                <FeatureBox
                {...box}
                key={index}
                />

            ))}

</section>
        </section>
    )
}

export default FeatureBoxes






