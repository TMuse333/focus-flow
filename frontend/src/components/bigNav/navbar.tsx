"use client"

import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import twoHand from '../../../public/media/gemeni-two-hand-stick.webp'
import brain from '../../../public/media/focusFlow-brain-nobg.webp';

interface NavbarProps {
    excludedLink:string
}


interface DesktopSubMenuProps {
    src:string,
    alt:string,
    destination?:string
    secondaryLinks?:{
        name:string
        destination:string
    }[],
    isClicked:boolean
    description:string,
    setIsClicked:React.Dispatch<React.SetStateAction<number | null>>
    index:number
   
}

interface SubMenuProps {
    subMenuClicked: boolean;
    setSubMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
    links: {
        name: string,
        destination?: string
        secondaryLinks:{
            name:string
            destination:string
        }[]
    }[]
  }

  const bigLinks = [
    {
      name: 'Home',
      destination:'/',
     
      //  
      
      listSubMenu: false,
    },
 
    {
      name: 'Pre built Software',
      secondaryLinks: [
        {
          name: 'Restaurant Software',
          destination: '/online-food-ordering-system',
        },
        {
          name:'Real estate agent websites',
          destination:'/real-estate-agent-websites'
        },
      
      ],
      listSubMenu: true,
      subMenuSrc:twoHand.src,
      subMenuAlt:'Two hands',
      desktopDescription:'Here are some of our signature pieces of software that are ready to be implemented in your business quickly and take your business to the next level'
    },
   
    {
      name: 'Building Your Success',
      secondaryLinks: [
        {
            name:'Top tier custom web design',
            destination:'/best-web-design-halifax'
        },
        {
          name: 'Your long term success',
          destination: '/long-term-success',
        },
        {
          name: 'Our Process',
          destination: '/process',
        },
      ],
      listSubMenu: true,
      subMenuSrc:twoHand.src,
      subMenuAlt:'Two hands',
      desktopDescription:'Learn here why we give you the highest probability of success with our professional services'
    },
    {
      name: 'Contact',
     
      destination:'/lets-work',
      listSubMenu: false,
    },
    {
      name: 'Studio',
     
      destination:'/studio/image-text-box',
      listSubMenu: false,
    },
    {
      name: 'Extras',
      secondaryLinks: [
        {
            name:'Artwork',
            destination:'/artist'
        },
        {
          name:'About the Founder',
          destination:'/about'
        }
        // {
        //   name: 'Your long term success',
        //   destination: '/long-term-success',
        // },
        // {
        //   name: 'Our Process',
        //   destination: '/process',
        // },
      ],
      listSubMenu: true,
      subMenuSrc:twoHand.src,
      subMenuAlt:'Two hands',
      desktopDescription:'Some extra content that you will find interesting'
    },

    
    // {
    //   name: 'Canvas',
    //   secondaryLinks: [
    //     {
    //         name:'Canvas',
    //         destination:'/canvas'
    //     }
    //   ],
    //   listSubMenu: false,
    // },
  ];

  

  const DesktopSubMenu:React.FC<DesktopSubMenuProps> = ({
    src, alt, secondaryLinks,isClicked,description,
    index,destination,
    setIsClicked
  }) => {

    const [isHovered, setIsHovered] = useState(false)

    function handleMouseEnter(index:number){
      setIsClicked(index)
    }

    function handleMouseLeave(){
       setIsClicked(null)
    }

    return (
        <div className={`bg-[#036080] fixed top-[20px] w-screen
         left-0  transition-[height] overflow-hidden
         pt-4 
        flex justify-evenly ${isClicked  ? 'h-[200px] z-[10]' : 'h-[0px] z-[-1]'}`
        }
        onMouseEnter={()=>handleMouseEnter(index)}
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
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 30vw"
            />

            <div className="flex flex-col mx-auto">
            <p className="w-[70vw]">{description}</p>

<ul className="flex mt-6">
    {secondaryLinks?.map((link, index) => (
      
            <li  key={index}
            className="mb-2 mr-4
            text-lg hover:text-gray-300
            bg-gray-700 p-3 rounded-xl">
                <Link href={link.destination}
       
        >
                {link.name}
                </Link>
            </li>
        
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
  flex flex-col items-start justify-center`}>
  {links.map((link, index) => (
    <li
      key={index}
      className="text-md sm:text-xl mb-4 mr-auto text-white pl-2 pr-2 hover:text-[#00bfff]">
      {link.destination ? (
        <Link href={link.destination}>
          {link.name}
        </Link>
      ) : (
        <span onClick={() => handleSecondarySubClick(index)}>
          {link.name}
        </span>
      )}
    </li>
  ))}
</ul>

                    </>
                        )}

                    <div className={`fixed top-0 h-full w-full transition-transform bg-black
                    ${!secondarySubMenuClicked ? 'translate-x-full': ''}`}>

                            <button className="bg-transparent
                            top-[5%] absolute right-[10%] !text-2xl
                            hover:text-[#00bfff]"
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
                                  
                                        <li className="mb-2 text-white transition-colors
                                         hover:text-[#00bfff] md:xl"
                                         key={index}>
                                            <Link
                                  
                                  href={link.destination}
                                  passHref
                                  >
                                    {link.name}

                                          </Link>  
                                        </li>
                                   
                                ))}
                                                             </ul>
                               
                            
                        
                    </div>
        </div>
        </nav>
    )
  }

 



const BigNav: React.FC<NavbarProps> = ({ excludedLink }) => {
    const [subMenuClicked, setSubMenuClicked] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false)
    const [hoveredSubMenuIndex, setHoveredSubMenuIndex] =
    useState<number | null>(null)

   
    
  
  
    const filteredLinks = bigLinks
    .filter(link => link.name !== excludedLink) // Filter out links where link.name matches excludedLink
    .map(link => {
      // Check if secondaryLinks exist before filtering
      const filteredSecondaryLinks = link.secondaryLinks
        ? link.secondaryLinks.filter(secondary => secondary.name !== excludedLink)
        : []; // If no secondaryLinks, return an empty array
  
      // Return the link with the filtered secondaryLinks
      return {
        ...link,
        secondaryLinks: filteredSecondaryLinks
      };
    });
  
    
    
    
    
    

      useEffect(() => {
        const handleResize = () => {
          if (typeof window !== 'undefined') {
            setIsDesktop(window.innerWidth >= 900);
          }
        };
    
        if (typeof window !== 'undefined') {
          handleResize(); // Initial check
          window.addEventListener('resize', handleResize);
        }
    
        return () => {
          if (typeof window !== 'undefined') {
            window.removeEventListener('resize', handleResize);
          }
        };
      }, []);

    function handleSubmenuClick() {
        setSubMenuClicked(!subMenuClicked);
    }


    function handleSubMenuHover(index:number){
        setHoveredSubMenuIndex(index)
    }

    function handleSubMenuLeave(){
        setHoveredSubMenuIndex(null)
    }

// useEffect(()=>{
//   console.log('filtered links,',filteredLinks)
//   console.log(filteredLinks[0].secondaryLinks[0].destination)
// },[])


    return (
        <nav className="fixed top-[0] z-[301] w-screen left-0 bg-transparent h-[30px] flex justify-between items-center
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
            <Link href='/'
            passHref>
             
     
           <Image src={brain}
           className='w-[50px] relative z-[2]'
           width={600}
           height={1300}
           alt='Focusflow brain'
           />
           </Link>
            <section className="flex
            w-[80%] h-full
            justify-around items-center
          
            max-w-[1000px]
            ">
  
          
            {filteredLinks.map((link,index) => (
              
                <div key={index}
               
                 className=" relative 
                 text-white   my-auto
                
                 ">
                   
                    {link.listSubMenu ? (
                     <>
                      <p
                       onMouseEnter={()=>handleSubMenuHover(index)}
                       onMouseLeave={handleSubMenuLeave}
                      className="mt-auto relative z-[4]   text-sm sm:text-md">{link.name}</p>
                                 {link.subMenuSrc && link.subMenuAlt &&
                                 link.desktopDescription && (

              
<DesktopSubMenu
secondaryLinks={link.secondaryLinks}
src={link.subMenuSrc}
  alt={link.subMenuAlt}
  isClicked={hoveredSubMenuIndex === index}
  setIsClicked={setHoveredSubMenuIndex}
description={link.desktopDescription}
index={index}
/>

)}
                     </>
                    ) : (
                        <>
                    
  <Link href={link.destination? link.destination : ''}>
    <p className="my-auto text-sm relative z-[4] hover:text-[#00bfff]
    sm:text-md">
      {link.name}
    </p>
  </Link>


           
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