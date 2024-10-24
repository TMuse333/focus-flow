import BigNav from "@/components/bigNav/navbar";
import ComponentHero from "@/components/componentHero/componentHero";
import Content from "@/components/content/content";
import Footer2 from "@/components/footer2/footer2";
import ImageTextBox from "@/components/imageTextBox/imageTextBox";
import { useGeneralContext } from "@/context/context";
import ImageTextBoxUI from "@/customComponents/imageTextBox/imageTextBox.custom";
import React from "react";
import logo from '../../../public/media/focusFlow-brain-nobg.webp'


const ImageTextBoxStudio = () => {

const {isMobile} = useGeneralContext()

function scrollToId(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
        block: 'start',     // Aligns the element to the top
      });
    }
  }
  

    return (
        <>
        <BigNav
        excludedLink="Studio"/>
        <main className="mx-auto max-w-[1200px]
w-screen flex flex-col justify-center
overflow-x-hidden
        "
        >

<section className=""
// style={{
//     background:`radial-gradient(10% 30% at 50% 20%, #00bfff 0%, black)`
// }}
>


<header className="my-12 text-left pl-6 ">

<p className="text-sm sm:text-md mb-2">FocusFlow Software presents</p>
       <h1
       className="text-3xl mb-4 font-bold
       sm:text-4xl md:text-5xl">The image text box</h1>
       <h2 className="sm:text-xl sm:text-2xl
       max-w-[900px]">One of the most fundamental ways you can 
        display content on a website
       </h2>
       <br/>
        <button onClick={()=>scrollToId('image-text-box-interface')}
        className="p-2 rounded-2xl
       bg-[#00bfff] mt-4 hover:bg-white
       hover:scale-[1.05]
       hover:text-[#00bfff]
       transition-all">
        Customize your own
       </button>
      
       </header>
       <div className="w-screen 
       py-8 "
       style={{
        background: `linear-gradient(to bottom, #015d87, #0070aa)`,
    
      }}
      >

      
       <section className="pl-6"
>

   

 
       <p className="my-6
       sm:text-lg md:text-xl">
        The image text box is a simple and quick to set up
        component where you can display a header, description
        and image side by side, or vertically stacked if on 
        mobile. It has lots of subtle variants in how the 
        text can be formatted and how the element can be animated.
       
       </p>
       <section 
       
       className="rounded-md  
       p-3">

   
       <h3 className="mb-4 font-semibold text-2xl
       sm:text-3xl md:text-4xl">
        Here are some of the image text boxes uses,
       </h3>
       <ul className="text-md sm:text-lg md:text-xl">
        <li className="mb-4 list-disc ml-4">
        Introducing a different page
            from your homepage
        </li>
        <li className="mb-4 list-disc ml-4">
            Whenever you have lots of text 
            and what to add pictures to keep audience
            engaged
        </li>
           
       </ul>
       

       <p className="mb-4 font-semibold text-2xl
       sm:text-3xl md:text-4xl">
        Variations of the image text box
       </p>
       <ul>
        <li className="mb-4 list-disc ml-4">
            Switching the stacking of the 
            horizontal stacking on destop
        </li>
        <li className="mb-4 list-disc ml-4">
            Triggering the animations
            scrolling

        </li>
        <li className="mb-4 list-disc ml-4">
            Triggering animations based off
            the element being in view
        </li>
       
       </ul>
       </section>
       </section>
       </div>
       
       <section
       id="image-text-box-interface" 
       className="relative"
       >
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl 
        mb-4 font-semibold">How to use this</h2>
        <p className="mb-8 px-6">You can harnesse the power of creativity by making
            customizing the text, image and animations of the image text box
            ! Simply type in what you want your content to
            be about an you can optionally add a picture if you'd
            like. 
            <br/><br/>
            From there you can select the animations you want 
            on your component, we have a couple to choose from.
        </p>
       </section>
       </section>
     
        <ImageTextBoxUI/>

<section className="pb-12 w-screen "
style={{
    background:  'linear-gradient(to bottom right, #00bfff, black)',
  }}>


        <Content
        mainTitle="Master the Image Text Box Component"
        description={['Learn how to create and customize image text boxes effortlessly with step-by-step guidance. Watch the tutorial to get started and create engaging layouts.']}
        iframe={<iframe 
            className="absolute h-full w-full
        
        "
      
            src="https://www.youtube.com/embed/ciN4fWPdKdo?si=v_LcitvY8eOliQma" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
           ></iframe>}
      
        />

        <ImageTextBox
        title="Advanced Techniques "
        description={'Take your designs to the next level by exploring advanced features like animations and layout variations. Learn how to make your website more interactive and visually appealing.'}
        iframe={<iframe 
            className="absolute h-full w-full"
             src="https://www.youtube.com/embed/jG37sILjFIw?si=wDB3SyXe5uZ1aoco" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
        
        reverse={true}
        />
</section>
        

            <Footer2
            excludedLink={`Get creative & learn`}
            />
       
           </main>
        </>
    )

}

export default ImageTextBoxStudio