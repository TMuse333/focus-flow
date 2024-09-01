
import { useGeneralContext } from "../../context/context";
import React, { useEffect, useState  } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {useIntersectionObserver} from '../intersectionObserver/intersectionObserver'
import Link from "next/link";
import Image from "next/image";

// import { motion, Variants } from 'framer-motion'

interface props {
    title?:string 
    ,
    description?:string,
    images:{
        src:string ,
        alt:string,
        details:{
            mainImage:string,
            secondaryImage:string,
            title:string,
            description:string[]
            link:string
        }
       
    }[],


}

//img version






 export const ScrollableCarousel:React.FC<props> = 
({title, description, images}) => {


    const {
      
        setSelectedCarouselImageMainImage,

        setSelectedCarouselImageSecondaryImage,
 
        setSelectedCarouselImageTitle,
       
        setSelectedCarouselImageDescription,
    
        setSelectedCarouselImageLink,
        setSelectedCarouselImageIndex,
        
      } = useGeneralContext();

// const {setSelectedCarouselImageIndex, selectedCarouselImageIndex}= useGeneralContext()

function handleImageClick(index: number) {
    setSelectedCarouselImageMainImage(images[index].details.mainImage);
    setSelectedCarouselImageSecondaryImage(images[index].details.secondaryImage);
    setSelectedCarouselImageTitle(images[index].details.title);
    setSelectedCarouselImageDescription(images[index].details.description);
    setSelectedCarouselImageLink(images[index].details.link);
    setSelectedCarouselImageIndex(index)
    
}






    const [inView, setInView] = useState(false);


  const options = {
    root: null,
    rootMargin: '0px',
    threshold:  0.2,
  };

  // Use the custom hook to get a ref and observe intersection
  const componentRef = useIntersectionObserver(setInView, options);


  const imageVariants = (index: number): Variants => {
    return {
      initial: {
        opacity: 0,
        y: -100,
        x: 0
      },
      animate: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          delay: index * 0.5
        }
      }
    };
  };

  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  const handleMouseEnter = (index:number) => {
    setHoveredImage(index)
  }

  const handleMouseLeave = () => {
    setHoveredImage(null)
  }
  


    return (
        <>

   

        <section ref={componentRef}
        className={`relative w-screen
         ml-auto  mb-[5rem] mt-[5rem]
         overflow-x-hidden
         bg-[#00bfff]
            bg-opacity-[0.2]
            py-8
     
        
  
        
       `} >

{title && (
            <>
           

      
            <motion.h2 className="text-4xl text-center mb-[3rem]
            sm:text-6xl md:text-left md:ml-8  lg:ml-12
            bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
           text-4xl sm:text-5xl font-semibold overflow-auto pb-4"
            initial={{
              opacity:0,
              y:40
            }}
            animate={{
              opacity:inView ?  1 : 0,
              y: inView ? 0 : 40,
              transition:{
                duration:0.5
              }
            }}>
                   
                {title}
            </motion.h2>
            <motion.p 
             initial={{
              opacity:0,
              x:40
            }}
            animate={{
              opacity:inView ?  1 : 0,
              x: inView ? 0 : 40,
              transition:{
                duration:0.5,
                delay:0.5
              }
            }}
            className="text-2xl text-left 
            w-[80vw] ml-auto mr-auto
            sm:text-xl md:text-left md:ml-8  lg:ml-12
            bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
  font-semibold overflow-auto pb-4">{description}</motion.p>
            
            </>
        )}
            <div className="w-screen
            pr-[3rem] pl-[3rem]
            
            
      
            flex 
            ml-auto
            sm:ml-0 sm:mr-0
           overflow-x-scroll
            overflow-y-hidden
            
         
           
           "
          //  style={{ scrollSnapType: 'x mandatory' }}
           >

        

            {images.map((image, index) => (
                <div className="w-[70vw]
                relative
              flex-shrink-0
                h-[90vw] 
                max-h-[600px]
                  mr-10
                "
                
                key={index}
                onMouseEnter={inView ? ()=>handleMouseEnter(index) : undefined}
                onMouseLeave={handleMouseLeave}
                // style={{ scrollSnapAlign: 'start' }}
                >
                   <h3 className="mb-8 text-3xl

                   "
                   style={{
                    opacity:hoveredImage === index ? 1 : 0,
                    transition:'opacity 0.3s ease-in'
                   }}>{image.details.title}</h3>
                <Image
                // variants={imageVariants(index)}
                // initial='initial'
                // animate={inView ? 'animate' : 'initial'}
               
               
              
                src={image.src}
                alt={image.alt}
                className=' 
                relative
                 ml-auto mr-auto
               mt-auto 
                z-[5]
                object-contain
                 object-center
               transition-all
               h-[85vw]
               max-h-[500px]

              
           '
          
      width={1000} // Base width as a percentage
      height={55} // Base height as a percentage
    
              
                style={{
                    transform: `
                   
                      translateY(${inView ? '0' : '-12rem'}) ${hoveredImage ===
                    index ? 'scale(1.05)' : ''}
                    `,
                   
                    transitionDelay: `${  ((images.length - 1 - index) * 0.2)}s, ${  (0.2+ (images.length - 1 - index) * 0.2)}s `,
                    opacity: inView ? 1 : 0,
                    transitionProperty: 'transform, opacity',
                    transitionDuration: '0.5s', // Adjust durations if needed
                    transitionTimingFunction: 'ease-in-out',

                   
                  }}
                onClick={()=>handleImageClick(index)}

                /> 
                 </div>
            ))}
            </div>
        </section>
        </>
    )
}


// interface SelectedCarouselImageProps {
//     mainImage:string,
//     secondaryImage:string,
//     title:string,
//     description:string[]
//     link:string
// }



    export const SelectedCarouselImage = ({
       
    }) => {


        const {
            selectedCarouselImageMainImage,
           
            selectedCarouselImageSecondaryImage,
          
            selectedCarouselImageTitle,
         
            selectedCarouselImageDescription,
           
            selectedCarouselImageLink,

            selectedCarouselImageIndex,

            setSelectedCarouselImageIndex
           
          } = useGeneralContext();

          function handleExitClick(){
            setSelectedCarouselImageIndex(null)
          }

          let imageSelected = selectedCarouselImageIndex !== null

        return (
            <AnimatePresence mode='wait'>

           
            <motion.section 
            initial={{
                opacity:0,
                
           
            }}
            animate={{
                opacity:imageSelected ? 1 : 0,
                transition: { duration: 1,
                delay: imageSelected ? 0 : 0 }
                
            }}
            exit={{
                opacity:0,

               
            }}
            className="w-screen bg-gray-600 fixed top-[5%]
            left-[50%] translate-x-[-50%] 
            md:rounded-3xl border-t-4  md:border-4  border-[#00bfff]
             p-2 text-center overflow-x-hidden"
            style={{
                overflowY:'scroll',
                zIndex:imageSelected ? 250 : -1,
                height:imageSelected ? '95vh' : '0vh',
                transition:`height 0.3s ease-in, ${!imageSelected ? 'z-index 1s ease-in' : ''}  `,
                transitionDelay: imageSelected ? '0.1s' : '0'
            }}>
                    <h1 className="text-center mt-5 mb-5 text-xl md:text-2xl">{selectedCarouselImageTitle}</h1>
                    <article className="lg:flex bg-gray-400 lg:w-[90vw] ml-auto mr-auto
                    max-w-[1200px] sm:w-[75vw] rounded-xl pb-5">

                    
                    <img src={selectedCarouselImageMainImage}
                    className='w-[90vw]   mr-auto ml-auto object-cover
                    mb-5 sm:w-[70vw] lg:w-[60vw]  lg:max-w-[750px] max-w-[640px] rounded-2xl '
                    />
                    <p className=" sm:w-[70vw] pl-3 pr-3 mb-5 text-left max-w-[650px]
                    ml-auto mr-auto  lg:mt-[5rem] lg:text-center
                    ">{selectedCarouselImageDescription[0]}</p>
                    </article>
                    <article className="lg:flex lg:flex-row-reverse lg:w-[90vw] ml-auto mr-auto
                    max-w-[1200px] bg-gray-400 sm:w-[75vw] rounded-xl ">

                    
                    <img src={selectedCarouselImageMainImage}
                    className='w-[90vw]  mr-auto ml-auto object-cover
                    mb-5 sm:w-[70vw] max-w-[640px] lg:w-[60vw]  lg:max-w-[750px] rounded-2xl 
                    lg:mb-0'
                    />
                    <p className="pl-3 pr-3 mb-5 text-left max-w-[650px]
                    ml-auto mr-auto  sm:w-[70vw] lg:mt-[5rem] 
                    ">{selectedCarouselImageDescription[1]}
                    <br/>
                    <Link
                     href={selectedCarouselImageLink}

                     >
                        <button className="mt-5 rounded-[1rem]
                        bg-[#00bfff] pr-4 pl-4 pt-2 pb-2 mb-5

                        hover:bg-white hover:scale-[1.05] hover:text-[#00bfff]
                        transition-all">
                            View Here
                        </button>
                     </Link></p>
                    </article>
                     

                     <button onClick={handleExitClick}
                     className="absolute top-[2%] right-[2%]
                     text-white text-4xl bg-black p-2 rounded-full
                     hover:text-black hover:bg-white transition-colors">
                        X
                     </button>

            </motion.section>
            </AnimatePresence>
        )
    }









