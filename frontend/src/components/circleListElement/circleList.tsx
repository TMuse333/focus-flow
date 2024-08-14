import React, {useState} from "react";
import AppearingCircle from "../circleContent/appearingCircle";
import ball from '../../../public/media/futuristic-money-ball-removebg-preview.webp'
import {motion, Variants} from 'framer-motion'
import { useGeneralContext } from "../../context/context";




interface CircleProps {
    image:string,
    title: string,
    description:string

    index:number
secondCircleComplete: boolean,
handleCircleComplete: (index: number, value: boolean) => void;
}

const CircleListElement: React.FC<CircleProps> = ({image,title, description,
    handleCircleComplete,secondCircleComplete,index
}) => {

    const [descriptionClicked, setDescriptionClicked] = useState<boolean>(false)

    function handleDescriptionClick() {
        setDescriptionClicked(!descriptionClicked)
    }

   
    


    const { isMobile }  = useGeneralContext()

    const headerVariants: Variants = {
        initial:{
            opacity:0,
            y: isMobile ? -20 : 0,
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                delay: 0.3
            }
        }

    }




    return (
        <div className=" relative flex flex-col glow justify-center  md:h-[220px] 
        md:h-[auto]
        md:flex-col w-[calc(100vw-5px)]  md:w-[40vw]  items-center sm:items-start mb-10 md:mt-3 bg-[#011f29] 
        rounded-3xl max-w-[490px] ml-auto mr-auto border border-q-blue">
<AppearingCircle
secondCircleComplete={secondCircleComplete}
handleCircleComplete={handleCircleComplete}
image={image}
index={index}


/>
<section className="relative text-center pr-0 flex flex-col bg-[#011f29] rounded-3xl 
h-auto min-h-0 max-h-full w-full justify-center  items-center z-1">
<motion.h1
onClick={handleDescriptionClick}
variants={headerVariants}
initial={'initial'}
animate={secondCircleComplete ? 'animate' : 'initial'}
 className="text-white text-xl    ml-auto mr-auto mt-5
 "
>{title}
 </motion.h1>

<p className={`rounded-lg  mt-3 pl-3 pr-3  transition-height ease-in duration-300  ${descriptionClicked ? ' h-[220px]  overflow-scroll pt-5  ' : 'h-0    overflow-hidden pt-0'}`}>
  {description}
</p>
</section>

        </div>
    )
}



const CircleList: React.FC = () => {

    const {secondCircleComplete, handleCircleComplete}
    = useGeneralContext()

    return (
        <>
        <h1 className="text-3xl text-center md:text-5xl mb-8
        mt-[5rem]">We get it done</h1>
 <section className="relative 
         sm:grid md:grid-cols-2 gap-4 max-w-[1200px] ml-auto
         mr-auto justify-center items-center 
         z-[0]
">
            {/* <div className="-translate-x-5"> */}
            <CircleListElement
            handleCircleComplete={handleCircleComplete}
            secondCircleComplete={secondCircleComplete[0]}
        index={0}
            image={ball.src}
            title='Absolute Tenacity'
            description= 'We take the craft of making excellent websites very seriously. We will continue to work on your project until you are satisfied with it and confident it will take your business to greatness'
            />
            {/* </div> */}
            <CircleListElement
            secondCircleComplete={secondCircleComplete[1]}
            handleCircleComplete={handleCircleComplete}
            index={1}
            image={ball.src}
       
            title='Extreme Discipline'
            description='Our lifestyle is based around improving our websites everyday so you know when you work with us, you have someone very dedicated to their craft and wont have to worry about us slacking off. When you work with us, you are working with a dedicated team.'
            />

            <CircleListElement
            secondCircleComplete={secondCircleComplete[2]}
            handleCircleComplete={handleCircleComplete}
            index={2}
            image={ball.src}
            title='Code over templates'
            description='Our websites are all custom coded from scratch, as apposed to generic drag and drop templates. We use the most up to date technologies like React Js (the same technology that Instagram, Facebook and many other big tech companies use) to ensure you get a modern looking website that has all the functionality you want with no limitations.'
            />

            <CircleListElement
            secondCircleComplete={secondCircleComplete[3]}
            handleCircleComplete={handleCircleComplete}
            index={3}
            image={ball.src}
            title='Refusal to fail'
            description='Whenever it gets tough, we will rise to the occasion. When you work with us you dont have to worry that we will shy away from a challenge. You can be confident that we will do whatever it takes to deliver you a great website'
            />

<CircleListElement
secondCircleComplete={secondCircleComplete[4]}
handleCircleComplete={handleCircleComplete}
index={4}
            image={ball.src}
            title='Keeps in touch'
            description='We keep in touch very frequently throughout the whole process. We here to serve you.'
            />

            <CircleListElement
            secondCircleComplete={secondCircleComplete[5]}
            handleCircleComplete={handleCircleComplete}
            index={5}
            image={ball.src}
            title='Top Tier Design'
            description='Having a lifetime of art experience before starting website development. We have an artists eye to go along with spectacular coding skills. With the custom code and artists eye, we can develop top tier designs that will help you stand out from the crowd.'
            />


            
        </section>
        </>
    )
}

export default CircleList