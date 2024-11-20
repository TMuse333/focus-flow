import React, { useEffect } from "react";
import { useAnimate,useInView } from "framer-motion";
import { useGeneralContext } from "@/context/context";


interface PageProps {
    title:string,
    number:number,
    objectives:string[]
    id:string
}

interface PageData {
    pageContent:{
        title:string,
       
        objectives:string[]
       
    }[]
}


const PageElement:React.FC<PageProps> = ({
    id,number,objectives,title
}) => {

    return (
        <div id={id}
        className="w-[90vw] sm:w-[45vw]    mx-auto  bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300
        rounded-md pb-0 mb-8 max-w-[470px] opacity-1 overflow-hidden  ">
            <h4 className="text-center mt-2">Page&nbsp;{number}:&nbsp;{title}</h4>
            <ul className="px-2 text-center">
                <li className="my-4 font-bold text-lg">Objectives</li>
                
               {objectives.map((objective, index) => (
                <>

                <li key={index}
                className="mb-2 text-left
                md:text-center">
                    {objective}
                    </li>
                    </>
                    
               ))}
               
            </ul>
        </div>
    )
}


const PageCreation:React.FC<PageData> = ({
    pageContent
}) => {

    const [scope, animate] = useAnimate()

    const inView = useInView(scope,{
        amount:0.7,
        // margin:'-150px 0px'
    })

    const {isMobile} = useGeneralContext()

    const handleAnimation = async () => {

        const uxButton = document.getElementById('ux-button')
        const industry = document.getElementById('industry-button')
        const plan = document.getElementById('plan-button')
        const page1 = document.getElementById('page-1')
        const page2 = document.getElementById('page-2')
        const page3 = document.getElementById('page-3')
        const page4 = document.getElementById('page-4')

        if(uxButton){
            await animate(uxButton, {opacity:1
    })
        }
        
        if(industry){
            await animate(industry, {opacity:1
    })
        }

        if(uxButton){
            await animate(uxButton, {top:'50%',
        left:'50%',x:"-50%"
    },{delay:1})
        }
        
        if(industry){
            await animate(industry, {top:'50%',
        left:'50%',x:"-50%"
    }, {delay:1})
        }

        if(plan){
            await animate(plan,{opacity:1, })
        }

        if(uxButton && industry){
            await animate(industry,{opacity:0})
            await animate(uxButton,{opacity:0})
        }

        if(page1){
            await animate(page1, {opacity:1,
       }, {duration:0.5})
        }

        if(page2){
            await animate(page2, {opacity:1,
       }, {duration:0.5})
        }

        if(page3){
            await animate(page3, {opacity:1,
       }, {duration:0.5})
        }

        if(page4){
            await animate(page4, {opacity:1,
       }, {duration:0.5})
        }



    }

    useEffect(() => {
        if(inView){
            handleAnimation()
        }
    },[inView])

   


    return (
        <>
        <section ref={scope}
         className="overflow-x-hidden mx-auto mt-[12rem]
          relative z-[3] max-w-[1000px] ">
           {/* <AppearingGradient
           text="Creation of Pages"
           subText={`After we gather enough information about
           the ideal user experience and industry trends, we formulate
           the ideal pages to elevate your online presence
           `}
           description={true}
           /> */}
           <h3 className="text-center mb-4
           text-3xl sm:text-4xl md:text-5xl
           sm:text-4xl font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-3xl">
            Creation of Pages
           </h3>
           <p className="px-4 sm:text-lg md:text-xl
           max-w-[1000px] mx-auto">
           After we gather enough information about
           the ideal user experience and industry trends, we formulate
           the ideal pages to elevate your online presence.
           <br/>
           <br/>
           Below is an example of the pages we could put for
           your website.
           </p>

            {/* <section className="w-full mt-2 relative h-[25vh]">
                <p id='ux-button'
                className="absolute top-0 opacity-0 bg-[#00bfff] p-2 rounded-xl">
                    user experience</p>
                <p id='industry-button'
                className="absolute top-0 opacity-0 right-0 bg-[#00bfff] p-2 rounded-xl
                w-[70px]">
                    industry</p>
                    <p id='plan-button'
                    className="bg-green-400 absolute top-1/2
                    left-1/2 -translate-x-1/2 p-3 rounded-2xl
                    opacity-0">
                        Your plan to greatness
                    </p>
            </section> */}


            <section className="flex flex-col sm:grid sm:grid-cols-2 mx-auto mt-5 
            max-w-[1000px]
            ">
                {pageContent.map((page,index) => (
                    <PageElement
                    id={`page-${index + 1}`}
                    number={index+1}
                    {...page}
                    key={index}
                    />
                ))}
                
            </section>
           
        </section>
        </>
    )
}

export default PageCreation


