import React from "react";
import twoHand from '../../../public/media/gemeni-two-hand-stick.webp'
import brain from '../../../public/media/focusFlow-brain-nobg.webp';
import { filter } from "lodash";
import Link from "next/link";


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
      
      ],
      listSubMenu: true,
      subMenuSrc:twoHand.src,
      subMenuAlt:'Two hands',
      desktopDescription:'Here are some of our signature pieces of software that are ready to be implemented in your business quickly and take your business to the next level'
    },
   
    {
      name: 'Bulding Your Success',
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
        <footer className="w-screen relative flex flex-col
        items-center justify-center mx-auto  my-12">
            <h6 className="text-3xl sm:text-4xl font-semibold
            mb-8">Site map</h6>
            
<ul className="flex flex-col mx-auto
            md:flex-row w-full mt-6
              w-full
            justify-center items-center
            md:justify-center md:items-start " >


{filteredLinks.map((link, index) => (
  <React.Fragment key={index}>
    <ul className="flex flex-col mx-auto 
    items-center justify-center">
   
    <p className="text-lg sm:text-xl md:text-2xl
     mb-4 font-semibold
     mx-auto">
      {link.name}</p>
    {link.secondaryLinks && link.secondaryLinks.map((link2, innerIndex) => (
      <Link href={link2.destination}>


      <li className="mb-2 text-center hover:text-[#00bfff]"
      key={innerIndex}>{link2.name}</li>
            </Link>
    ))}
     </ul>
  </React.Fragment>
))}
</ul>





        </footer>
    )
}

export default Footer2