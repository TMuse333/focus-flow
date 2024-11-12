import { useComponentTimeTracker } from "@/lib/componentTracker";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import brain from '../../../public/media/focusFlow-brain-nobg.webp'

interface props {
    title:string,
    description:string
    setTotalPageTime?:React.Dispatch<React.SetStateAction<{name:string,
        time:number}[]>>,
        id:string
}


const Herobanner:React.FC<props> = ({
    title,description,
    setTotalPageTime,
    id
}) => {

    const ref = useRef(null)


    const inView = useInView(ref,{
      once:false
    })
    const {totalTimeInView} = useComponentTimeTracker({inView,id:id,
    setTotalPageTime:setTotalPageTime,
    pageTracker:false})

    return (
        <section className=" mt-[4rem] bg-['radial-gradient(circle, #0080bf -50%, rgba(0, 128, 191, 0%) 60%)']
      "
        style={{
            background:'radial-gradient(circle, #0080bf -50%, rgba(0, 128, 191, 0%) 60%)'
        }}>
            <h1 className="mt-6 text-center font-semibold text-2xl sm:text-3xl md:text-4xl
    bg-clip-text text-transparent relative z-[2] pb-4
    px-4"
    style={{
        backgroundImage: "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)",
    }}>{title}</h1>
    <Image
    src={brain}
    className='w-[60vw] mx-auto object-contain 
    max-w-[420px] max-h-[420px]
    '
    alt='focusflow brain'
    width={600}
    height={1300}
    />
            <p className="px-6  max-w-[1200px] mx-auto
            whitespace-pre-line sm:text-lg ">
           {description}
            </p>

        </section>
    )
}

export default Herobanner