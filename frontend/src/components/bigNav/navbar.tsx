import React, { useState, useEffect } from "react";
import Link from 'next/link'

interface NavbarProps {
    links: {
        name: string,
        // destination: string
        secondaryLinks:{
            name:string
            destination:string
        }[],
        listSubMenu:boolean
    }[]
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

 



const BigNav: React.FC<NavbarProps> = ({ links }) => {
    const [subMenuClicked, setSubMenuClicked] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900)
    const [hoveredSubMenuIndex, setHoveredSubMenuIndex] =
    useState<number | null>(null)

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
        lg:bg-[#00bfff] lg:bg-opacity-[0.4]
        ">
            <MobileSubMenu
            subMenuClicked={subMenuClicked}
            setSubMenuClicked={setSubMenuClicked}
            links={links }
            />
               <div className="relative w-full h-full flex items-center justify-end 
               lg:justify-around max-w-[1200px] ml-auto mr-auto
             ">

{!isDesktop ? (

<>
          
              
            <div onClick={handleSubmenuClick}
            className="lg:hidden  lg:w-auto flex flex-col justify-center items-center
            z-20 relative
            p-0 pr-7">
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

          
            {links.map((link,index) => (
                <div key={index}
                onMouseEnter={()=>handleSubMenuHover(index)}
                            onMouseLeave={handleSubMenuLeave}
                 className=" relative 
                 text-white  pb-[2rem] pt-[0rem] mt-auto">
                    <h3 className="mt-auto">{link.name}</h3>
                    {link.listSubMenu ? (
                        <ul className={`absolute text-center bg-[#032029]
                   pt-5 pb-5 pr-8 pl-8 left-[50%] mt-0  -translate-x-1/2 w-[175px]
                   h-[200px] ${hoveredSubMenuIndex === index ? 'opacity-1 z-20 ' : 'opacity-0 z-[-3] -translate-y-[30rem] '} `}>
                        
                        {link.secondaryLinks.map((subLink, innerIndex) => (
                            <Link href={subLink.destination}>
                            <li 
                            className="mb-3 hover:text-q-blue transition-colors"
                            key={innerIndex}
                            >
                                {subLink.name}
                            </li>
                            </Link>

                        ))}
                    </ul>
                    ) : (
                        <>
                        <div className={`bg-[#032029] fixed top-[70px] w-screen
                        h-[200px] left-0 transition-opacity transition-transform ${hoveredSubMenuIndex === index ? 'opacity-1 z-20 ' : 'opacity-0 z-[-3] -translate-y-[30rem] '}}`}>

                        
                        <p>Coming soon!</p>
                        </div>
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