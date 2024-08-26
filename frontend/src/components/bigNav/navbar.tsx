import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import twoHand from '../../../public/media/gemeni-two-hand-stick.webp'

interface NavbarProps {
    excludedLink:string
}


interface DesktopSubMenuProps {
    src:string,
    alt:string,
    secondaryLinks:{
        name:string
        destination:string
    }[],
    isClicked:boolean
    description:string,
    setIsClicked:React.Dispatch<React.SetStateAction<number | null>>
   
}

interface SubMenuProps {
    subMenuClicked: boolean;
    setSubMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
    links: {
        name: string,
        // destination: string
        secondaryLinks:{
            name:string
            destination:string
        }[]
    }[]
  }


  const DesktopSubMenu:React.FC<DesktopSubMenuProps> = ({
    src, alt, secondaryLinks,isClicked,description,
    setIsClicked
  }) => {

    const [isHovered, setIsHovered] = useState(false)

    function handleMouseEnter(){
        if(isClicked !== null){
            setIsHovered(true)
        }
    }

    function handleMouseLeave(){
       setIsClicked(null)
    }

    return (
        <div className={`bg-[#036080] fixed top-[70px] w-screen
        h-[200px] left-0 transition-opacity  
        flex justify-evenly ${isClicked  ? 'opacity-1 z-[3]' : 'hidden'}`
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <Image
            height={630}
            width={1200}
            className='w-[30vw] h-full
            object-contain
            mt-auto  mr-auto'
            src={src}
            alt={alt}
            />

            <div className="flex flex-col mx-auto">
            <p className="w-[70vw]">{description}</p>

<ul className="flex mt-6">
    {secondaryLinks.map((link, index) => (
        <Link href={link.destination}
        key={index}
        >
            <li className="mb-2 mr-4
            text-lg hover:text-gray-300">
                {link.name}
            </li>
        </Link>
    ))}
</ul>
            </div>
            
        
       
        </div>
    )
  }

  const MobileSubMenu: React.FC<SubMenuProps>
  = ({subMenuClicked, setSubMenuClicked,links}) => {

    function handleSubMenuLeave(){
        setSubMenuClicked(false)
     
    }

    const [secondaryLinksIndex, setSecondaryLinksIndex] =
    useState<number>(0)

    const [secondarySubMenuClicked, setSecondarySubMenuClicked] 
    = useState<boolean>(false)

    function handleSecondarySubClick(index:number){
        setSecondarySubMenuClicked(true)
        setSecondaryLinksIndex(index)
    }

    function handleSecondarySubLeave(){
        setSecondarySubMenuClicked(false)
        // setSecondaryLinksIndex(null)
    }

    function exitFullMobileNav(){
        setSubMenuClicked(false)
        setSecondarySubMenuClicked(false)

    }

    return (
        <nav className={`fixed top-0 right-0 bg-black
        h-screen w-[75vw] max-w-[470px] z-10 transition-transform
      ${!subMenuClicked ? 'translate-x-full' : 'translate-x-0'}`}>
        <div className="relative h-full w-full z-40 ">
            {!secondarySubMenuClicked && (
                <>
         <button onClick={handleSubMenuLeave}
         className="absolute top-[5%] right-[10%] z-[90] text-3xl
         hover:text-q-blue transition-colors bg-transparent"
         >X
         </button>
      
                    <ul
                        className={`text-left absolute mt-8
                        top-[25%]
                          overflow-hidden transition-[height]
                          flex flex-col items-start justify-center 
                            `}>
                        {links.map((link, index) => (
                           
                                <li key={index}
                                onClick={()=>handleSecondarySubClick(index)}
                                className="text-md sm:text-xl mb-4
                                mr-auto text-white
                               
                                 pl-2 pr-2 
                                 hover:text-q-blue">{link.name}</li>
                           
                        ))}
                    </ul>
                    </>
                        )}

                    <div className={`fixed top-0 h-full w-full transition-transform bg-black
                    ${!secondarySubMenuClicked ? 'translate-x-full': ''}`}>

                            <button className="bg-transparent
                            top-[5%] absolute left-[10%] !text-2xl
                            hover:text-q-blue"
                            onClick={exitFullMobileNav}>
                                X
                            </button>

                            <button onClick={handleSecondarySubLeave}
                             className="absolute top-[5%]
                             bg-transparent !text-lg hover:text-q-blue
                             transition-colors">Back</button>

                            
                                <ul className="absolute top-[25%] text-left left-[10%]
                                ">
                                {links[secondaryLinksIndex].secondaryLinks.map((link,index)=> (
                                    <Link
                                    key={index}
                                    href={link.destination}
                                    passHref
                                    >
                                        <li className="mb-2 text-white transition-colors
                                         hover:text-q-blue md:xl">
                                            {link.name}
                                        </li>
                                    </Link>
                                ))}
                             </ul>
                               
                            
                        
                    </div>
        </div>
        </nav>
    )
  }

 



const BigNav: React.FC<NavbarProps> = ({ excludedLink }) => {
    const [subMenuClicked, setSubMenuClicked] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900)
    const [hoveredSubMenuIndex, setHoveredSubMenuIndex] =
    useState<number | null>(null)

    const bigLinks = [
        {
          name: 'Our Work',
          secondaryLinks: [
            {
              name: 'Our Best Designs',
              destination: 'showcase',
            },
            {
              name: 'Client Work',
              destination: 'portfolio',
            },
          ],
          listSubMenu: true,
        },
        {
          name: 'Products',
          secondaryLinks: [
            {
              name: 'Restaurant Software',
              destination: 'online-food-ordering-system',
            },
            {
              name: 'Realtor Website',
              destination: 'realtor',
            },
          ],
          listSubMenu: true,
          subMenuSrc:twoHand.src,
          subMenuAlt:'Two hands',
          desktopDescription:'Here are some of our signature pieces of software that are ready to be implemented in your business quickly and take your business to the next level'
        },
        {
          name: 'Resources',
          secondaryLinks: [
            {
              name: 'Focus Strategies',
              destination: 'focus-strategies',
            },
            {
              name: 'Skill Refinement',
              destination: 'skill-refinement',
            },
          ],
          listSubMenu: true,
          subMenuSrc:twoHand.src,
          subMenuAlt:'Two hands',
          desktopDescription:'To be able to get to this level of web design, it has taken many hours of deep, focused work daily. Check these pages out to learn how learn the value of focused work and take your skills to the next level.'
        },
        {
          name:'Websites',
          secondaryLinks:[
            {
              name:'What makes a great website?',
              destination:'great-website'
            },
            {
              name:'Potential of websites',
              destination:'/potential'
            },
            {
              name:'Website maintenance',
              destination:'Web-maintenance'
            }
          ],
          listSubMenu:true,
          subMenuSrc:twoHand.src,
          subMenuAlt:'Two hands',
          desktopDescription:'Your website is the cornerstone of your digital presence. Discover what makes a website truly great, explore its full potential, and learn the importance of regular maintenance to ensure your site stays ahead in the fast-paced digital world.'
        },
        {
          name: 'About Us',
          secondaryLinks: [],
          listSubMenu: false,
        },
        {
          name: 'Contact',
          secondaryLinks: [],
          listSubMenu: false,
        },
      ];

      const filteredLinks = bigLinks.filter(link => link.name !== excludedLink);
    

    useEffect(()=> {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 900)
        }
        handleResize()
        window.addEventListener('resize',handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    })

    function handleSubmenuClick() {
        setSubMenuClicked(!subMenuClicked);
    }


    function handleSubMenuHover(index:number){
        setHoveredSubMenuIndex(index)
    }

    function handleSubMenuLeave(){
        setHoveredSubMenuIndex(null)
    }




    return (
        <nav className="fixed top-0 z-50 w-screen left-0 bg-transparent h-[80px] flex justify-between items-center
        lg:bg-[#036080]
        ">
            <MobileSubMenu
            subMenuClicked={subMenuClicked}
            setSubMenuClicked={setSubMenuClicked}
            links={filteredLinks }
            />
               <div className="relative w-full h-full flex items-center justify-end 
               lg:justify-around max-w-[1200px] ml-auto mr-auto
             ">

{!isDesktop ? (

<>
          
              
            <div onClick={handleSubmenuClick}
            className={`lg:hidden  lg:w-auto flex flex-col justify-center items-center
            z-20 relative
            p-0 pr-7 ${subMenuClicked ? 'hidden' : ''}`}>
            <div className="h-[3px] bg-white w-[20px] mb-1" />
            <div className="h-[3px] bg-white w-[20px] mb-1" />
            <div className="h-[3px] bg-white w-[20px]" />
        </div>
       
        </>

        ) : (
            <>
           <h3>
            FocusFlow Software
           </h3>
            <section className="flex
            w-[80%] h-full
            justify-around items-center
          
            max-w-[1000px]
            ">

          
            {filteredLinks.map((link,index) => (
                <div key={index}
                onMouseEnter={()=>handleSubMenuHover(index)}
                            onMouseLeave={handleSubMenuLeave}
                 className=" relative 
                 text-white  pb-[2rem] pt-[0rem] mt-auto">
                    <h3 className="mt-auto">{link.name}</h3>
                    {link.listSubMenu ? (
                     <>
                                 {link.subMenuSrc && link.subMenuAlt &&
                                 link.desktopDescription && (

              
<DesktopSubMenu
secondaryLinks={link.secondaryLinks}
src={link.subMenuSrc}
  alt={link.subMenuAlt}
  isClicked={hoveredSubMenuIndex === index}
  setIsClicked={setHoveredSubMenuIndex}
description={link.desktopDescription}
/>

)}
                     </>
                    ) : (
                        <>
            
                        </>
                    )}
                    
                </div>
            ))}
              </section>
            </>
        )}

       

</div>      
               
        
          
            
        </nav>
    );
};

export default BigNav;