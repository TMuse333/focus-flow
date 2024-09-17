import React, { useRef, useState, useEffect } from "react";
import { animate, motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from "next/image";
import { useGeneralContext } from "@/context/context";

interface Props {
  image: string;
  alt?: string;
  description?: string;
}

const PortalContent: React.FC<Props> = ({ image, alt, description }) => {
  const ref = useRef(null);

 const [isDesktop, setIsDesktop] = useState(false)

 useEffect(()=>{
    const handleResize = () => {
        setIsDesktop(window.innerWidth >= 750)
    }
 
    window.addEventListener('resize',handleResize)
    handleResize()

    return ()=> {
        window.removeEventListener('resize',handleResize)
    }
 })

  // Capture the scroll position within the referenced element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map the scroll position to height values (e.g., 0px to 300px)
  const height = useTransform(scrollYProgress, [0, 0.15], ["120px", "330px"]);
  const [animationComplete, setAnimationComplete] = useState(false);

  const inView = useInView(ref,{amount: isDesktop ? 0.75 : 0.35})


  useEffect(()=>{
    if(inView && !animationComplete){
      handleAnimation()
    }
  },[inView, animationComplete])

  


  const [atomLanded, setAtomLanded] = useState(false)

  

  // Usage
  const handleAnimation = async () => {
    if (animationComplete) return;

    // Get elements by their IDs
    const portalElement = document.getElementById('portal');
    const portalImageElement = document.getElementById('portal-image');
    const headerElement = document.getElementById('portal-header');
    const article1 = document.getElementById('portal-article-1');
    const article2 = document.getElementById('portal-article-2');
    const article3 = document.getElementById('portal-article-3');

    // Animate only if the portal element exists
    if (portalElement) {
        await animate(portalElement, { width: '90vw' });
    }

    // Animate the portal image if it exists
    if (portalImageElement) {
        await animate(portalImageElement, { y: 0, scale: 1 }, { delay: 1 });
    }

    if (article1) {
      await animate(article1, { opacity: 1, x: 0, y: 0 }, {delay:1});
  }

  if (article2) {
      await animate(article2, { opacity: 1, x: 0, y: 0 }, { delay: 0.5 });
  }

  if (article3) {
      await animate(article3, { opacity: 1, x: 0, y: 0 }, { delay: 0.3 });
  }

  if(headerElement){
    await animate(headerElement, {opacity:1})

 

  
  }

    // Animate the articles sequentially
   

    // Animate the portal to zero width after a delay
    setTimeout(async () => {
        if (portalElement) {
            await animate(portalElement, { width: '0px' });

          

        }
    }, 1500);

    setAnimationComplete(true);
};


  return (
    <>
     
    <div className=" relative z-[4] w-screen 
    mx-auto   flex flex-col items-center justify-center
    
   ">
    
    <motion.div 
  className={`bg-[#00bfff] w-[10px] top-0 absolute mx-auto z-[15]
  transition-opacity
  ${animationComplete ? 'opacity-0' : ''}`}
  style={{
    height:!animationComplete ? height : '0px',
  }}
>
  {/* Arrow pointing downwards at the bottom of the line */}
  <div 
    className={`absolute bottom-[-16px] left-1/2
    -translate-x-1/2 w-[0] h-[0] 
                border-l-[15px] border-r-[15px] border-t-[16px] 
                border-transparent border-t-[#00bfff]
                 scale-[1.3] `}
  />
</motion.div>

<div className={`w-screen  bg-black relative top-0 transition-all
       z-[5] h-[60vh]`}
       />
       
      <section ref={ref}
      className='mx-auto 
      w-screen
      relative 
      md:h-screen
      items-center
      my-auto
     '>
       
     
    
      <div id="portal"
      className={`relative mx-auto bg-gradient-to-br from-[#80d4ff] to-[#00bfff] 
           h-[20px] mb-8 max-w-[600px] rounded-full  shadow-xl shadow-[#00bfff]
           z-[3]  w-[0vw] `}
          style={{
            transition: `width 0.3s linear, height 0.3s linear`, // Longer duration when atomLanded is true
            
          }}
          >
 
</div>
<h3 id='portal-header'

className={`opacity-0  mx-auto
py-4 font-semibold
text-center text-2xl sm:text-3xl md:text-4xl 
${animationComplete ? 'text-glow' : ''}`}

// style={{
//   transition:'opacity 0.2s 0s ease-in'
// }}
>Creative and technically sound</h3>
<section className={`flex transition-none w-screen
justify-evenly items-end ${isDesktop ? 'flex-row' : 'flex-col'} `}>



<article id='portal-article-1'
className={`ml-auto order-2 opacity-0 
${isDesktop ? 'translate-x-1/2' : ''}`}>
<h3 className={`text-left pl-4 mr-auto font-semibold mb-2


${isDesktop ? 'text-red-400' : ''}`}>point 1 </h3>
<p className="w-[95w] md:w-[27vw] lg:w-[30vw] px-4 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita beatae officiis iste aliquid facilis nulla, unde hic! Dolorum necessitatibus exercitationem culpa est voluptatem, unde quos accusantium enim quibusdam maxime?</p>
</article>

  
<Image
id='portal-image'
src={image}
alt='alt'
className={`w-[40vw] object-contain 
mx-auto  z-[2] flex-shrink-0 max-w-[437px]


${!isDesktop ? 'order-0' : 'order-1'}`}
        
width={300}
height={1300}
style={{
    transform:`translateY(${isDesktop ? '-23rem' : '-23rem'}) scale(0.5)`,
    transition: 'transform 1s 1s ease-in',
}} 
 />



<article id='portal-article-2'
className={`mr-auto opacity-0
${isDesktop ? 'translate-x-1/2' : ''}`}>
<h3 className="text-left text-green-300 pl-4 mr-auto font-semibold mb-2">point 1 </h3>
<p className="w-[95w] md:w-[27vw] px-4 mb-4 lg:w-[30vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita beatae officiis iste aliquid facilis nulla, unde hic! Dolorum necessitatibus exercitationem culpa est voluptatem, unde quos accusantium enim quibusdam maxime?</p>
</article>


</section>

<article id='portal-article-3'
className={`mx-auto md:w-[50vw] text-center opacity-0 
${isDesktop ? '-translate-y-1/2' : ''}`}>
<h3 className="text-center text-blue-200  font-semibold mb-2 mx-auto ">point 1 </h3>
<p className="w-[95w] md:w-[50vw] px-4 mb-4 text-left mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita beatae officiis iste aliquid facilis nulla, unde hic! Dolorum necessitatibus exercitationem culpa est voluptatem, unde quos accusantium enim quibusdam maxime?</p>
</article>


        {/* Your content here */}
      </section>
      </div>
    </>
  );
};

export default PortalContent;
