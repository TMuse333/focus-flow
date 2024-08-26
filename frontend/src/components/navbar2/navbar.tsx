import React, { useState } from "react";
import Link from 'next/link'

interface NavbarProps {
    links: {
        name: string,
        destination: string
    }[],
    transparentBg?:boolean
    absolute?:boolean
}



const Navbar: React.FC<NavbarProps> = ({ links,transparentBg,
    absolute }) => {
    const [subMenuClicked, setSubMenuClicked] = useState(false);

    function handleSubmenuClick() {
        setSubMenuClicked(!subMenuClicked);
    }

    return (
        <nav className={` top-0 z-[225] w-screen left-0  h-[100px]
         flex justify-between items-center  text-gray-500
          z-[100] ${!transparentBg ? 'bg-[#00bfff] bg-opacity-[1] border-b-4 border-[#003549]' : ''}
          ${absolute ? "fixed" : 'fixed'}`}>
            <div className="relative flex justify-between 
             items-center  w-screen lg:w-[80vw] max-w-[1300px] lg:justify-between lg:items-stretch
            z-[100]  ml-auto mr-auto">
                <Link href='/'>


                <p className="ml-2 font-cormorant-garamond text-white  text-3xl lg:text-4xl mr-auto lg:mr-0 pl-6 lg:pl-0 bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent font-dancing-script
                ">Focus Flow</p>
                </Link>
                <div
                    className={`relative right-[5%] top-[5px] flex flex-col justify-center items-center lg:relative lg:top-auto lg:right-auto`}
                    onClick={handleSubmenuClick}
                >
                    <div className="   lg:hidden w-[140px] lg:w-auto flex flex-col justify-center items-center">
                        <div className="h-[3px] bg-white w-[20px] mb-1" />
                        <div className="h-[3px] bg-white w-[20px] mb-1" />
                        <div className="h-[3px] bg-white w-[20px]" />
                    </div>
                    <ul
                        className={`text-left bg-[#08365f] fixed right-[5%] top-[70px] overflow-hidden
                         transition-[height] flex flex-col items-center z-[300]
                     
                          justify-center rounded-lg w-[140px]
                           lg:bg-transparent lg:w-auto lg:relative lg:overflow-auto 
                           lg:top-auto lg:right-auto lg:flex-row
                           text-center
                            ${subMenuClicked ? `h-[175px] p-0 
                           ` : 'h-[0px] p-0 lg:h-auto'}`}
                    >
                        {links.map((link, index) => (
                            <Link key={index} href={link.destination}
                            passHref>
                                <li className="text-md lg:text-lg mb-2
                                 pl-2 pr-2 lg:mb-0 text-white
                                 hover:text-[#009acc] ">{link.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;