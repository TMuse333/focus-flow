import React from "react";
import twoHand from '../../../public/media/gemeni-two-hand-stick.webp'
import brain from '../../../public/media/focusFlow-brain-nobg.webp';


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
        <footer className="w-screen">
            <h6 className="text-3xl">Site map</h6>


        </footer>
    )
}

export default Footer2