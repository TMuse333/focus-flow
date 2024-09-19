import React from 'react'
import AppearingGradient from '../appearingGradient/appearingGradient'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'

interface Props {

    src:string,
    alt:string,

}




const FlashContent:React.FC<Props> = (
    {src,alt}
) => {


    const MotionImage = motion(Image)

    return (
        <>
        <section className='mx-auto w-screen max-w-[1200px] relative
        mb-8'>

  
        <AppearingGradient
        text='True Custom Web Design'
        subText='We really are built different'
        />
        
        <MotionImage
        src={src}
        alt={alt}
        width={600}
        height={1300}
        className='w-[70vw] mx-auto my-5 
        md:w-[50vw] h-[175px] sm:h-[200px] md:h-[250px] object-cover 
        '
        animate={{
            y: [0, -4, 0], // Oscillate up and down
          }}
          transition={{
            duration: 1.5, // Duration of the oscillation
            repeat: Infinity, // Infinite loop
            ease: 'easeInOut', // Smooth transition
          }}
        />
        <p className='px-4 mx-auto md:w-[80%] md:text-lg
       rounded-2xl text-white text-left sm:text-center'>
        In today's web design market, many websites rely on basic drag-and-drop, low-code frameworks. However, we've taken a more <span className='font-bold'>
        advanced  </span>  approach by offering custom web design services through <span className='font-bold'>100% custom-coded applications</span> using React.js—the same technology powering platforms like Facebook, Instagram, and Netflix. This ensures that your website stands out from the crowd, providing limitless creativity and control that basic templates can't match.
        <br/>
        <br/>
Our creative web page design delivers <span className='font-bold'>superior performance and full customization</span>, driving higher user engagement and <span className='font-bold'>elevating your brand's reputation.</span> As an experienced web designer in Halifax, we specialize in building unique, high-performing websites that take your business to the next level. Visit our design page to see how our expertise can help you stay ahead of the competition.
<br/><br/>
<Link href='best-web-design-halifax'>


<button className='bg-[#00bfff] rounded-xl p-3'>
See What Sets Us Apart
</button>
</Link>
        </p>
        </section>
        </>
    )
}

export default FlashContent