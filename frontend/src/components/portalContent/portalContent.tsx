import React, { useRef, useState, useEffect, Suspense, lazy } from "react";
import { animate, useScroll, useTransform, useInView } from 'framer-motion';
import Image from "next/image";


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

  const initialTranslate = isDesktop ? '-23rem' : '15rem'

  


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
      await animate(portalImageElement, {opacity:1})
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

  if (portalElement) {
    await animate(portalElement, { width: '0px' },
    {delay:1.5});

  

}

    // Animate the articles sequentially
   

    // Animate the portal to zero width after a delay
   

    setAnimationComplete(true);
};


  return (
    <>
     
    <div className=" relative z-[4] w-screen 
    mx-auto   flex flex-col items-center justify-center
   
    
   ">
    
  

    {/* <div className="bg-red-200 h-[60px] w-screen mx-auto 2 
z-[20] top-[-5%]"/> */}
       
      <section ref={ref}
      className='mx-auto 
      w-screen
      relative 
      md:h-screen
      items-center
      my-auto z-[4]
     '>
       

<div className="bg-black h-[30px] sm:h-[60px] md:h-[80px] w-screen
relative z-[4]"
/>
    
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
py-4 font-semibold px-3
text-center text-2xl sm:text-3xl md:text-4xl 
${animationComplete ? 'text-glow' : ''}`}

>More than a website: A piece of art</h3>


<section className={`flex transition-none w-screen
justify-evenly items-end ${isDesktop ? 'flex-row' : 'flex-col'} `}>



<article id='portal-article-1'
className={`ml-auto order-2 opacity-0 
${isDesktop ? 'translate-x-1/2' : ''}`}>

<h3 
className="text-left text-green-300 pl-4 mr-auto font-semibold mb-2
bg-clip-text text-transparent"
style={{
  backgroundImage: "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)",
}}>
Aesthetic Brilliance </h3>
<p className="w-[95w] md:w-[27vw] lg:w-[30vw] px-4 mb-4">
  With years of art and design experience well before web design, each website is crafted
  with the same attention to detail and care that goes into a work of art.
  Our websites are designed to be visually striking with unique and aesthetic
  layouts, color and imagery to captivate users from the moment
  they land on the page to help elevate your brand.
</p>
</article>

  
<Image
id='portal-image'
src={image}
alt='alt'
className={`w-[40vw] object-contain 
mx-auto relative z-[-1] flex-shrink-0 max-w-[437px]
opacity-0


${!isDesktop ? 'order-0' : 'order-1'}`}
        
width={300}
height={1300}
style={
  !animationComplete ? {
    transform:`translateY(${initialTranslate}) scale(0.2)`,
    transition: 'transform 1s 1s ease-in',
} : {}} 
 />



<article id='portal-article-2'
className={`mr-auto opacity-0
${isDesktop ? 'translate-x-1/2' : ''}`}>
<h3 
className="text-left text-green-300 pl-4 mr-auto font-semibold mb-2
bg-clip-text text-transparent"
style={{
  backgroundImage: "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)",
}}>
   Captivating Story Telling</h3>
<p className="w-[95w] md:w-[27vw] px-4 mb-4 lg:w-[30vw]"
>
  Just like art, our websites are designed to evoke emotions
  a tell the unique story about your brand. We design our websites
  with the intent of giving your viewers a unique and memorable interaction
  with your website to establish a connection and get your story accross
  to your audience so they understand your greatness</p>
</article>


</section>

<article id='portal-article-3'
className={`mx-auto md:w-[50vw] text-center opacity-0 
${isDesktop ? '-translate-y-1/2' : ''}`}>
<h3 
className="text-left text-green-300 pl-4 mr-auto font-semibold mb-2
bg-clip-text text-transparent"
style={{
  backgroundImage: "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)",
}}>
   Personalized design </h3>
<p className="w-[95w] md:w-[50vw] px-4 mb-4 text-left mx-auto">
  Everyone business is unique and its essential that your website reflects
  this uniqueness, especially in todays competitive marketplace,
  thats why when we plan your website we take into account
  aspects that make you unique and create distinct desings
  to help you stand out.</p>
</article>


        {/* Your content here */}
      </section>
      </div>
    </>
  );
};

export default PortalContent;
