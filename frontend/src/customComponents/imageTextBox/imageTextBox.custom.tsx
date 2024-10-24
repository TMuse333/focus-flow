"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform,
animate } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";
import ImageDrop from "../utils/imageDrop";
import ImageUploader from "../utils/imageDrop";
import SlidingTextBox from '../../components/slidingText/slidingText'
import logo from '../../../public/media/focusFlow-brain-nobg.webp'
import { useGeneralContext } from "@/context/context";
import { text } from "stream/consumers";
import SlidingText from "../../components/slidingText/slidingText";




// Define Props interface
interface FadeInInterfaceProps {
  titleVariants: AnimationVariants;
  descriptionVariants: AnimationVariants;
  buttonVariants: AnimationVariants;
  imageVariants: AnimationVariants
  setTitleVariants:React.Dispatch<React.SetStateAction<AnimationVariants>>;
  setDescriptionVariants:React.Dispatch<React.SetStateAction<AnimationVariants>>;
  setButtonVariants:React.Dispatch<React.SetStateAction<AnimationVariants>>;
  setImageVariants:React.Dispatch<React.SetStateAction<AnimationVariants>>;
}

interface AnimationVariants {
  xOffset: number;
  yOffset: number;
  hasFade: boolean;
  duration: number;
  delay: number;

}

interface ElementOption {
    name: string;
    variants: AnimationVariants;
    setVariants: React.Dispatch<React.SetStateAction<AnimationVariants>>;
  }

  const FadeInInterface: React.FC<FadeInInterfaceProps> = ({
    titleVariants,
    setTitleVariants,
    descriptionVariants,
    imageVariants,
    setDescriptionVariants,
    buttonVariants,
    setButtonVariants,
    setImageVariants
  }) => {
    const [selectedElementIndex, setSelectedElementIndex] = useState(0);
  
    const elementOptions: ElementOption[] = [
      {
        name: "Title",
        variants: titleVariants, // Variants for title
        setVariants: setTitleVariants, // Setter for title
      },
      {
        name: "Description",
        variants: descriptionVariants, // Variants for description
        setVariants: setDescriptionVariants, // Setter for description
      },
      {
        name: "Button",
        variants: buttonVariants, // Variants for button
        setVariants: setButtonVariants, // Setter for button
      },
      {
        name:'Image',
        variants: imageVariants,
        setVariants:setImageVariants
      }
    ];
  
    const [selectedElement, setSelectedElement] = useState<ElementOption>(
      elementOptions[0]
    );
  
    // Handle next/previous selection
    const handleNext = () => {
      setSelectedElementIndex((prev) => (prev + 1) % elementOptions.length);
    };
  
    const handlePrevious = () => {
      setSelectedElementIndex((prev) =>
        prev === 0 ? elementOptions.length - 1 : prev - 1
      );
    };
  
    useEffect(() => {
      const newSelectedElement = elementOptions[selectedElementIndex];
      setSelectedElement(newSelectedElement);
    }, [selectedElementIndex]);
  
    // Update functions using the correct setter
    const updateXOffset = (delta: number) => {
      selectedElement.setVariants((prev) => ({
        ...prev,
        xOffset: prev.xOffset + delta,
      }));
    };
  
    const updateYOffset = (delta: number) => {
      selectedElement.setVariants((prev) => ({
        ...prev,
        yOffset: prev.yOffset + delta,
      }));
    };
  
    const toggleHasFade = () => {
      selectedElement.setVariants((prev) => ({
        ...prev,
        hasFade: !prev.hasFade,
      }));
    };
  
    const updateDuration = (delta: number) => {
      selectedElement.setVariants((prev) => ({
        ...prev,
        duration: Math.max(0, +(prev.duration + delta).toFixed(1)), // Ensure duration stays non-negative
      }));
    };
  
    const updateDelay = (delta: number) => {
        selectedElement.setVariants((prev) => ({
          ...prev,
          delay: Math.max(0, +(prev.delay + delta).toFixed(1)), // Ensure delay stays non-negative and to 1 decimal place
        }));
      };
      

    useEffect(() => {
        // Force re-render when selectedElement's variants are updated
      console.log('use effect activated, variants changed')
      console.log(selectedElement.variants)
      }, [selectedElement.variants,]);

      const [instructionsClicked, setInstructionsClicked] = useState(false)


  
    return (
      <section className="  relative w-[90vw] bg-[#00bfff] bg-opacity-[0.4] mt-4
  
      ">
        <section className="flex mx-auto flex-col
        justify-center">

        
     <h2 className="font-semibold text-2xl text-center">Fade in animations</h2>
     <button 
     onClick={()=>setInstructionsClicked(!instructionsClicked)}
     className="mx-auto text-center">
        Instructions
     </button>
     </section>
     <ul className={`px-4 mt-4 absolute bg-[#00bfff] transition-opacity
     ${instructionsClicked ? 'opacity-1 z-[4]' : 'opacity-0 z-0'}
     `}>
        <li className="mb-4">X offset = how far the element starts in x direction from the center</li>
        <li className="mb-4">Y offset = how far the element starts in Y direction from the center</li>
        <li className="mb-4">Has fade = A yes or no option signifying wether you want the element to start invisible
        and gradually increase opacity</li>
        <li className="mb-4">Duration: Controls the speed of the animation</li>
        <li className="mb-4">Delay: Controls the delay of when the animation 
        starts</li>
        <li><button
        onClick={()=>setInstructionsClicked(!instructionsClicked)}>
            Hide instructions
            </button></li>
     </ul>
        <section className={`relative w-full text-center pt-4`}> 
          {/* Display current selection */}
          <h3 className="font-semibold">Current element: {selectedElement.name}</h3>
          {/* Toggle buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              className="bg-[#00bfff] text-white px-4 py-2 rounded"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="bg-[#00bfff] text-white px-4 py-2 rounded"
              onClick={handleNext}
            >
              Next
            </button>
          </div>

         
  
          {/* Display current animation options with span controls */}
          <ul className="mt-4 relative">
  <li className="mb-2 pl-2 relative w-[75vw] flex justify-around">
    <span className="mr-auto">X offset: {elementOptions[selectedElementIndex].variants.xOffset}</span>
    <div>
      <button
        className="p-2 rounded-2xl text-white bg-blue-500"
        onClick={() => updateXOffset(-10)}
      >
        -
      </button>
      <button
        className="p-2 rounded-2xl text-white bg-blue-500 ml-2"
        onClick={() => updateXOffset(10)}
      >
        +
      </button>
    </div>
  </li>

  <li className="mb-2 pl-2 relative w-[75vw] flex justify-around">
    <span className="mr-auto">Y offset: {elementOptions[selectedElementIndex].variants.yOffset}</span>
    <div>
      <button
        className="p-2 rounded-2xl text-white bg-blue-500"
        onClick={() => updateYOffset(-10)}
      >
        -
      </button>
      <button
        className="p-2 rounded-2xl text-white bg-blue-500 ml-2"
        onClick={() => updateYOffset(10)}
      >
        +
      </button>
    </div>
  </li>

  <li className="mb-2 pl-2 relative w-[75vw] flex justify-around">
    <span className="mr-auto">Has Fade? {elementOptions[selectedElementIndex].variants.hasFade ? "Yes" : "No"}</span>
    <button
      className="p-2 rounded-2xl text-white bg-blue-500"
      onClick={toggleHasFade}
    >
      Toggle
    </button>
  </li>

  <li className="mb-2 pl-2 relative w-[75vw] flex justify-around">
    <span className="mr-auto">Duration: {elementOptions[selectedElementIndex].variants.duration}s</span>
    <div>
      <button
        className="p-2 rounded-2xl text-white bg-blue-500"
        onClick={() => updateDuration(-0.1)}
      >
        -
      </button>
      <button
        className="p-2 rounded-2xl text-white bg-blue-500 ml-2"
        onClick={() => updateDuration(0.1)}
      >
        +
      </button>
    </div>
  </li>

  <li className="mb-2 pl-2 relative w-[75vw] flex justify-around">
    <span className="mr-auto">Delay: {elementOptions[selectedElementIndex].variants.delay}s</span>
    <div>
      <button
        className="p-2 rounded-2xl text-white bg-blue-500"
        onClick={() => updateDelay(-0.1)}
      >
        -
      </button>
      <button
        className="p-2 rounded-2xl text-white bg-blue-500 ml-2"
        onClick={() => updateDelay(0.1)}
      >
        +
      </button>
    </div>
  </li>
</ul>

        </section>
      </section>
    );
  };
  
  const animationDescriptions = [
    {
        title:'SlidingHeader',
        description:'This is the sliding header, it slides in place to activate the animations'
    },
    {
        title:'Trigger once option',
        description:'When this is set to true, the animations will only trigger once, other wise the eements will toggle on and off when they are out of the screens view'
    },
    {
        title:'Reverse Layout',
        description:'Applicable for the direction of the sliding header and the horizontal layout on the desktop version, when selected to true the '+
         'sliding header will slide in from the left side of the screen '+
         'and the image will be on the right side of the screen and vice versa if false'
    }
  ]





const ImageTextBoxUI = () => {
    
    // const [alt, setAlt] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [buttonText, setButtonText] = useState("");
    // const [destination, setDestination] = useState("");

    const {isDesktop} = useGeneralContext()
    const [reverse, setReverse] = useState(false);
    const [fadeIn, setFadeIn] = useState(true)
    const [hasTilt, setHasTilt] = useState(false)
    const [allSlide, setAllSlideIn] = useState(false)
    const [slideComplete, setSlideComplete] = useState(false)

    const [imageSrc,setImageSrc] = useState('')

   const [triggerOnce, setTriggerOnce] = useState(false)

   const [animationDescriptionIndex, setAnimationDescriptionIndex]
   = useState<number | null>(null)

    const [slidingHeader, setSlidingHeader] = useState(false)


   

    const ref = useRef(null);
    const inView = useInView(ref, {
        once: triggerOnce,
        amount: 0.8
    });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"] // Adjust based on when you want the animation to start/end
      });

      const tilt = useTransform(scrollYProgress, [0.4, 0.6], [30, 0]);

      const x = useTransform(scrollYProgress, [0, 0.6], [200, 0]);

      const [tiltAngle, setTiltAngle] = useState(40)

      const [selectedAnimation, setSelectedAnimation] = useState({});

     

      const handleFadeIn = () => {
        setFadeIn(true)
        setSlidingHeader(false)
        setAnimationDescriptionIndex(null)
      }

   
 

      useEffect(() => {
        
        const unsubscribe = tilt.on("change", (latest) => {
          // Update the tilt angle
         
          setTiltAngle(latest);
      
        
          
        
        });
        
      
        // Cleanup the subscription when the component unmounts
        return () => {
          unsubscribe();
        };
      }, [tilt, ]);
      
      
        const handleAnimation = async () => {
            console.log('animation sequence starting')
            const image = document.getElementById('image-text-box-img')
            const p = document.getElementById('image-text-box-p')
            const button = document.getElementById('image-text-box-button')

            if(image && slidingHeader){
                await animate(image,{x:0, opacity:1},
                    {ease:'easeIn'})
            }

            if(p && slidingHeader){
               
                await animate(p,{y:0, opacity:1,},
                    {ease:'easeIn'})
            }

          

            if(button){
                await animate(button,{opacity:1, x:0},
                    {ease:'easeInOut'})
            }

            
        }

        const handleDeAnimation = async () => {
            console.log('animation sequence starting')
            const image = document.getElementById('image-text-box-img')
            const p = document.getElementById('image-text-box-p')
            const button = document.getElementById('image-text-box-button')

            if(image && slidingHeader){
                await animate(image,{x:-20, opacity:0},
                    {ease:'easeIn'})
            }

            if(p && slidingHeader){
               
                await animate(p,{y:40, opacity:0,},
                    {ease:'easeIn'})
            }

          

            if(button){
                await animate(button,{opacity:0, x:20, y:0},
                    {ease:'easeInOut'})
            }

            
        }



        // State for title animation
const [titleVariants, setTitleVariants] = useState({
    xOffset: reverse ? -40 : 40, // Can be dynamically adjusted
    yOffset: 0,                  // Vertical offset
    hasFade: true,                // Whether it fades in
    duration: 0.4,                // Animation duration
    delay: 0                      // Delay before the animation starts
  });
  
  // State for description animation
  const [descriptionVariants, setDescriptionVariants] = useState({
    xOffset: reverse ? -40 : 40,  // Horizontal slide like the title
    yOffset: 10,                  // Slight vertical offset for description
    hasFade: true,                // Fades in
    duration: 0.6,                // A bit longer duration for description
    delay: 0.2                    // Slight delay before the animation starts
  });
  
  // State for button animation
  const [buttonVariants, setButtonVariants] = useState({
    xOffset: reverse ? -60 : 60,  // More significant horizontal slide for button
    yOffset: 0,                   // No vertical movement for button
    hasFade: true,                // Fades in
    duration: 0.5,                // Slightly longer animation for button
    delay: 0.3                    // More delay to make the button appear last
  });

  const [imageVariants, setImageVariants] = useState({
    xOffset: reverse ? 40 : -40,
    yOffset:0,
    hasFade:true,
    duration:0.4,
    delay:0
  })
  

       

    

  const textSlide = ({
    xOffset,
    yOffset,
    hasFade,
    duration,
    delay
  }: {
    xOffset: number;
    yOffset: number;
    hasFade: boolean;
    duration: number;
    delay: number;
  }) => {
    return {
      initial: {
        x: xOffset,
        opacity: hasFade ? 0 : 1,
        y: yOffset
      },
      animate: {
        x: 0,
        opacity: 1,
        y:0,
        transition: {
          delay: delay,
          duration: duration
        }
      }
    };
  };
  


    const handleSlidingHeaderClick = () => {
        setSlidingHeader(!slidingHeader)
        setFadeIn(false)
        setAnimationDescriptionIndex(0)
    }

    useEffect(()=>{
        if(slideComplete && slidingHeader){

        
        console.log('starting animations')
        handleAnimation()
        }

        else if(!triggerOnce){
            handleDeAnimation()
        }
        
    },[slideComplete])

  

 
 

    

    return (
        <>
       
            {/* Section for user inputs */}
           


            
            <section className="flex flex-col items-center mb-8 w-[90vw] max-w-[1200px] mx-auto
            justify-center items-center
           
            ">
                 <div className="w-screen
             bg-[#00bfff] bg-opacity-[0.2]
             py-6 relative flex flex-col items-center
             justify-center ">
              
               <h3 className="font-semibold text-2xl
            sm:text-3xl md:text-4xl text-white mb-2"
            >
                Content options
            </h3>
            <p className="mb-8 text-center">
                You type what ever you want below in the inputs
            </p>
              
                <input
                    className="mb-4 p-2 border w-[90%] rounded-2xl
                    max-w-[800px] mx-auto text-black"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <ImageDrop
                className="mb-4 p-2 border w-[90%]
                text-white rounded-2xl
                max-w-[800px] mx-auto"
                setSrc={setImageSrc}
                />
                <textarea
                    className="mb-4 p-2 border w-[90%] rounded-2xl
                    max-w-[800px] mx-auto text-black"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    className="mb-4 p-2 border w-[90%] rounded-2xl
                    max-w-[800px] mx-auto text-black"
                    type="text"
                    placeholder="Button Text"
                    value={buttonText}
                    onChange={(e) => setButtonText(e.target.value)}
                />
                
                </div>
<section className="text-center mx-auto mt-4
">

        
<h3 className="font-semibold text-2xl
sm:text-3xl md:text-4xl text-white
mb-2"
>
    Animation and layout options
</h3>
<p className="mb-8">
    You type what ever you want below in the inputs,
    scroll down to see your own image text box!
</p>
</section>

<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                justify-center items-center
                px-4 mx-auto 
                ">
           
                
  <button
    className={`text-white 
    p-3 rounded-2xl mt-6
   
   mx-auto w-[200px] transition-colors
   bg-[#00bfff]
   hover:bg-white hover:text-[#00bfff]
   
   `}
//    style={{
//     backgroundColor: slidingHeader === true ? '#4eaccc' : '#00bfff'
//    }}
    onClick={handleSlidingHeaderClick}>
      Sliding header
  </button>
                
  <button
    className="text-white  mx-auto bg-[#00bfff]
    hover:bg-white hover:text-[#00bfff]
    p-3 rounded-2xl mt-6  w-[200px]" 
    onClick={handleFadeIn}
    // style={{
    //     backgroundColor: fadeIn === true ? '#4eaccc' : '#00bfff'
    //    }}
       >
      Fade in
  </button>

  <button
    className="text-white  mx-auto bg-[#00bfff]
    hover:bg-white hover:text-[#00bfff]
    p-3 rounded-2xl mt-6  w-[200px]" 
    onClick={() => {
        setTriggerOnce(!triggerOnce)
    setAnimationDescriptionIndex(1)}
    }>
      Trigger once: {triggerOnce ? 'True' : 'False'}
  </button>
              
  {/* <button
    className="text-white  mx-auto bg-[#00bfff]
    p-3 rounded-2xl mt-6  w-[200px]" 
    onClick={handleSelectSlide}>
      Slide-in feature
  </button> */}

  <button
    className=" md:mr-2 
    bg-[#00bfff]
   hover:bg-white hover:text-[#00bfff] text-white
    p-3 rounded-2xl mt-6 mx-auto w-[200px]
    "  
    onClick={() => {setAnimationDescriptionIndex(2)
        setReverse(!reverse)}}>
      Reverse Layout: {reverse ? 'True' : 'False'}
  </button>
</div>




{animationDescriptionIndex !== null ? (
    <>
     <section className="w-[90vw] bg-[#00bfff] mt-3 pb-4
     bg-opacity-[0.4]">
         <h3 className="font-semibold
         text-center text-2xl my-5">{animationDescriptions[animationDescriptionIndex].title}</h3>
         <p className="px-2" >{animationDescriptions[animationDescriptionIndex].description}</p>
         </section>
         </>
) : (
<FadeInInterface
titleVariants={titleVariants}
setTitleVariants={setTitleVariants}
descriptionVariants={descriptionVariants}
setDescriptionVariants={setDescriptionVariants}
buttonVariants={buttonVariants}
setButtonVariants={setButtonVariants}
setImageVariants={setImageVariants}
imageVariants={imageVariants}
/>
)}




   



                
               
                
               
            </section>
            

            {/* Original content section */}
            <motion.section
                
                ref={ref}
                className={`relative flex flex-col w-[90vw] 
                 mx-auto items-center justify-center
               text-white md:px-6 max-w-[1200px]
               mb-12
                 
                ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                //  style={ !hasTilt && allSlide && !slidingHeader ? {x} 
                //   : {} }
            >

                {!isDesktop && slidingHeader ? (
                    <SlidingText
                    text={title || "Place title here"}
                    setSlideComplete={setSlideComplete}
                    reverse={reverse}
                    />                ) : (

                        <motion.h3
                        id='image-text-box-h3'
                        variants={fadeIn && !slidingHeader ? textSlide(titleVariants) : {}}
                        initial='initial'
                        animate={inView ? 'animate' : 'initial'}
                        className="font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-3xl mb-8 md:hidden"
                    >
                         {title.trim() ? title : "Place title here"}
                    </motion.h3>
                    )}
               

               {/* <ImageUploader
               animationVariants={!hasTilt ? imageSlide : {}}
               inView={inView}
                className="mx-auto object-contain w-[90vw] h-[55vw] max-h-[567px] max-w-[668px] md:w-[45vw]
                border relative"
                /> */}
                <motion.img
                id='image-text-box-img'
                 variants={fadeIn && !slidingHeader ? textSlide({...imageVariants}) : {}}
                 initial={fadeIn && !slidingHeader ? 'initial' : ''}
                 animate={inView  && !slidingHeader? 'animate' : 'initial'}
                src={imageSrc !== '' ? imageSrc : logo.src}
                alt='image'
                className={`mx-auto  object-contain w-[90vw] h-[55vw] max-h-[567px] max-w-[668px] md:w-[45vw]
                ${slidingHeader && !slideComplete ? 'opacity-0' : 'opacity-1'}`}
                width={600}
                height={1300}
                />


                <section className="w-full md:w-[50vw] mb-auto
               
                 ">
                    {isDesktop && slidingHeader ? (
                         <SlidingText
                         text={title || "Place title here"}
                         setSlideComplete={setSlideComplete}
                         reverse={reverse}
                         />   
                    ) : (
                        <motion.h3
                        id='image-text-box-h3'
                           variants={fadeIn ? textSlide({...titleVariants}) : {}}
                           initial='initial'
                           animate={inView ? 'animate' : 'initial'}
                           className="hidden md:block font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-5xl mb-8 pl-4 pb-4"
                       >
                          {title.trim() ? title : "Place title here"}
                       </motion.h3>
                    )}
                  

                    <motion.p
                     id='image-text-box-p'
                     variants={fadeIn && !slidingHeader ? textSlide({...descriptionVariants}) : {}}
                     initial={fadeIn && !slidingHeader ? 'initial' : ''}
                     animate={inView && !slidingHeader? 'animate' :!slidingHeader ?  'initial' : ''}
                        className={` px-4 md:pr-3 mt-4 font-semibold sm:text-md md:text-lg

                        
                       
                        text-center md:text-left ml-0  `}
                      
                    >
                        {description.trim() ? description : "Place description here"}

                       
                           <>
                                <br />
                                <motion.button
                                    id='image-text-box-button'
                                    variants={fadeIn && !slidingHeader ? textSlide({...buttonVariants}) : {}}
                                    initial={fadeIn && !slidingHeader ?'initial' : ''}
                                    animate={inView ? 'animate' : 'initial'}
                                    className={`mt-4 p-2 rounded-2xl bg-[#00bfff] text-white hover:text-[#00bfff] hover:bg-white transition-colors
                                    font-medium text-md
                                    ${slidingHeader ? `translate-x-[${reverse ? '-4rem' : '4rem'}] opacity-0` : ''}`}
                                >
                                   {buttonText.trim() ? buttonText : "Place buttonText here"}
                                </motion.button>
                                </>
                        
                    </motion.p>
                </section>
            </motion.section>
        
           
        </>
    );
}

export default ImageTextBoxUI;
