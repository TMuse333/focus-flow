import React, {useEffect, useRef} from 'react';
import dynamic from 'next/dynamic'; // Import dynamic

import Link from 'next/link';
import { HTMLMotionProps, useInView } from 'framer-motion';
import { useComponentTimeTracker } from '@/lib/componentTracker';

// Dynamically import motion components from framer-motion
const MotionImg = dynamic(() => import('framer-motion').then(mod => mod.motion.img), {
    ssr: false,
    
  }) as React.ComponentType<HTMLMotionProps<'img'>>;

const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), {
    ssr: false,
  
}) as React.ComponentType<HTMLMotionProps<'p'>>;

const MotionButton = dynamic(() => import('framer-motion').then(mod => mod.motion.button), {
    ssr: false,
    
  }) as React.ComponentType<HTMLMotionProps<'button'>>;

// Dynamically import the AppearingGradient component
const AppearingGradient = dynamic(() => import('../appearingGradient/appearingGradient'), {
    ssr: false, // Set to false if you want to prevent server-side rendering
});

interface Props {
    src: string;
    alt: string;
    id?:string,
    setTotalPageTime?:React.Dispatch<React.SetStateAction<{name:string,
        time:number}[]>>
}



const FlashContent: React.FC<Props> = ({ src, alt,
id, setTotalPageTime }) => {


    const ref = useRef(null)

    const inView = useInView(ref,{
        once:false
    })



    const {totalTimeInView} = useComponentTimeTracker({inView, id:id?id:'flash-content',
setTotalPageTime:setTotalPageTime})

    useEffect(()=>{
        if(totalTimeInView > 0)
        console.log(`time spent in ${id} ${totalTimeInView} ms`)
    },[totalTimeInView])

    return (
        <>
            <section id={id}
            ref={ref}
            className='mx-auto w-screen max-w-[1200px] relative mb-8'>
                <AppearingGradient
                    text='True Custom Web Design'
                    subText='We really are built different'
                />
                <MotionImg
                    src={src}
                    alt={alt}
                    width={600}
                   
                    layout='preserve-aspect'
                    height={1300}
                    className='w-[70vw] mx-auto my-5 md:w-[50vw] h-[205px] sm:h-[223px] md:h-[270px] object-contain'
                   
                />
                <MotionP className='px-4 mx-auto md:w-[80%] md:text-lg rounded-2xl text-white text-left sm:text-center'>
                    In today's web design market, many websites rely on basic drag-and-drop, low-code frameworks. However, we've taken a more <span className='font-bold'>advanced</span> approach by offering custom web design services through <span className='font-bold'>100% custom-coded applications</span> using React.js—the same technology powering platforms like Facebook, Instagram, and Netflix. This ensures that your website stands out from the crowd, providing limitless creativity and control that basic templates can't match.
                    <br />
                    <br />
                    Our creative web page design delivers <span className='font-bold'>superior performance and full customization</span>, driving higher user engagement and <span className='font-bold'>elevating your brand's reputation.</span> As an experienced web designer in Halifax, we specialize in building unique, high-performing websites that take your business to the next level. Visit our design page to see how our expertise can help you stay ahead of the competition.
                    <br /><br />
                    <Link href='best-web-design-halifax'>
                        <MotionButton className='bg-[#00bfff] rounded-xl p-3 text-white'>
                            See What Sets Us Apart
                        </MotionButton>
                    </Link>
                </MotionP>
            </section>
        </>
    );
}

export default FlashContent;
