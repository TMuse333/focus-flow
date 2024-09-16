import React, { useRef, useState, useEffect } from "react";
import { animate, motion, useScroll, useTransform } from 'framer-motion';
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
        if(window.innerWidth >= 750){
            setIsDesktop(true)
        }
        else{
            setIsDesktop(false)
        }
    }
 
    window.addEventListener('resize',handleResize)
    handleResize()

    return ()=> {
        window.removeEventListener('reset',handleResize)
    }
 })

  // Capture the scroll position within the referenced element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map the scroll position to height values (e.g., 0px to 300px)
  const height = useTransform(scrollYProgress, [0, 1], ["0px", "200px"]);
  const [isHeightReached, setIsHeightReached] = useState(false);

  useEffect(() => {
    const unsubscribe = height.on("change", (latestHeight) => {
      if (parseInt(latestHeight) >= 200) {
        setIsHeightReached(true)
       
            handleAnimation()
        
        console.log('height reached!')
          ; // Call the function when height reaches 500
        
      } 
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [height, isHeightReached]);

  


  const [atomLanded, setAtomLanded] = useState(false)

  // Usage
  const handleAnimation = async () => {
    await animate('#portal', { width: '90vw' });
    await animate('#portal-image', {y:0, scale:1});
  
    setTimeout(async ()=>{
        await animate('#portal-header',{y:0, opacity:1})
        setAtomLanded(true)
       await animate('#portal', { width: '0px', });
       await animate('#portal-line',{opacity:0})
     
    },2000)
   

  }; // Adjust delay as needed
  
useEffect(()=>{
    console.log('atom landed',atomLanded)
},[atomLanded])

 


  return (
    <>
    <div className="h-[120vh] relative z-[4] w-screen overflow-x-hidden
    mx-auto  flex flex-col items-center justify-center
   ">

    <div className="w-screen relative z-[3] mx-auto 
  flex items-center justify-center">

    
      <motion.div
      id="portal-line"
        className="mx-auto  relative z-[4] w-[10px] bg-[linear-gradient(to_bottom_right,#80d4ff,#00bfff)]
        "
        style={{ height,
        originY:1 }} // Bind height to scroll position
        
      />
      </div>
      <section ref={ref}
      className='mx-auto max-w-[1300px]'>
       
      <div id="portal"
      className="relative mx-auto bg-gradient-to-br from-[#80d4ff] to-[#00bfff] 
          w-[0vw] h-[20px] max-w-[600px] rounded-full  shadow-xl shadow-[#00bfff]
           z-[3] transition-all"
        //   style={{
        //     transition: `width ${!atomLanded ? '10s 10s' : '0.1s 0s'} ease-in`, // Longer duration when atomLanded is true
            
        //   }}
          >
 
</div>
<h3 id='portal-header'

className="opacity-0 translate-y-[3rem] mx-auto
text-center">slatty</h3>
<section className={`flex transition-none
justify-center items-center ${isDesktop ? 'flex-row' : 'flex-col'} `}>



<article className="mx-auto order-2 transition-none">
<h3 className={`text-left pl-4 mr-auto font-semibold mb-2
${isDesktop ? 'text-red-400' : ''}`}>point 1 </h3>
<p className="w-[95w] md:w-[20vw] lg:w-[30vw] px-4 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita beatae officiis iste aliquid facilis nulla, unde hic! Dolorum necessitatibus exercitationem culpa est voluptatem, unde quos accusantium enim quibusdam maxime?</p>
</article>
<Image
id='portal-image'
src={image}
alt='alt'
className={`w-[40vw] relative object-contain 
mx-auto  z-[2] flex-shrink-0 max-w-[437px]
${!isDesktop ? 'order-0' : 'order-1'}`}
        
width={300}
height={1300}
style={{
    transform:`translateY(-6rem) scale(0.2)`,
    transition: atomLanded ? 'none' : 'all 0.3s 1s ease-in',
}}
/>


<article className="mx-auto transition-none">
<h3 className="text-left pl-4 mr-auto font-semibold mb-2">point 1 </h3>
<p className="w-[95w] md:w-[20vw] px-4 mb-4 lg:w-[30vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita beatae officiis iste aliquid facilis nulla, unde hic! Dolorum necessitatibus exercitationem culpa est voluptatem, unde quos accusantium enim quibusdam maxime?</p>
</article>


</section>

<article className="mx-auto md:w-[20vw] text-center transition-none">
<h3 className="text-center pl-4  mr-auto font-semibold mb-2 mx-auto ">point 1 </h3>
<p className="w-[95w] md:w-[20vw] px-4 mb-4 text-left mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita beatae officiis iste aliquid facilis nulla, unde hic! Dolorum necessitatibus exercitationem culpa est voluptatem, unde quos accusantium enim quibusdam maxime?</p>
</article>


        {/* Your content here */}
      </section>
      </div>
    </>
  );
};

export default PortalContent;
