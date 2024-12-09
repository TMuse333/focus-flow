import React from "react";
import twoHand from '../../../public/media/gemeni-two-hand-stick.webp'
import instagram from '../../../public/media/instagram.webp'
import linkedin from '../../../public/media/linkedin.png'

import Link from "next/link";
import Image from "next/image";


interface props  {
    excludedLink:string
}



const Footer2:React.FC<props> = ({
    excludedLink
}) => {

  const bigLinks = [
    {
      name: 'Home',
      destination:'/',
      secondaryLinks: [
        {
          name: 'Homepage',
          destination: '/',
        },
      ],
     
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
          name:'Real Estate Agent Websites',
          destination:'/real-estate-agent-websites'
        }
      
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
      secondaryLinks: [
        {
          name: 'Lets work!',
          destination: '/lets-work',
        },
      ],
    },
    {
      name:"Get creative & learn",
      listSubMenu:false,
      secondaryLinks: [
        {
          name:'The Image-Text Box',
          destination:'/studio/image-text-box'
        }
      ]
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
      ],
      listSubMenu: true,
    },
  ];

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


      return (
      <footer className="w-screen relative flex flex-col items-center justify-center mx-auto my-12">
      <h6 className="text-3xl sm:text-4xl font-semibold mb-8">Site map</h6>
    
      <div className="flex flex-col mx-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:flex-row w-full mt-6 justify-center items-center md:justify-center md:items-start">
        {filteredLinks.map((link, index) => (
          <div key={index} className="flex flex-col mx-auto items-center justify-center">
            
            <h3 className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold mx-auto text-center">
              {link.name}
            </h3>
    
            {link.secondaryLinks && (
              <ul className="list-none p-0">
                {link.secondaryLinks.map((link2, innerIndex) => (
                  <li key={innerIndex} className="mb-2 text-center hover:text-[#00bfff]">
                    <Link href={link2.destination}>
                     {link2.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <h6 className="text-3xl sm:text-4xl font-semibold my-8">Social media</h6>
      <p className="px-4">See some highlights of our creative
        web design in halifax
      </p>
      <section className="flex">
        <Image
        src={instagram}
        alt='The instagram logo that leads to focusflow softwares instagram to represent creative web design in halifax'
        width={600}
        height={1300}
        className='w-[200px] object-contain'
        />
              <Image
        src={linkedin}
        alt='The instagram logo that leads to focusflow softwares instagram to represent creative web design in halifax'
        width={600}
        height={1300}
        className='w-[200px] h-[50px] object-contain my-auto'
        />
      </section>

      <p className="px-4">For every action, there is an equal and
        opposite reaction. Use this law everyday to create
        the reality you desire.
      </p>

    </footer>
      )
    
}

export default Footer2