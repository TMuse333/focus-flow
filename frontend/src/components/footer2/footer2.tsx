import React from "react";


interface props  {
    excludedLink:string
}



const Footer:React.FC<props> = ({
    excludedLink
}) => {

    const bigLinks = [
        {
          name: 'Home',
          secondaryLinks: [
            {
                name:'Home',
                destination:'/'
            }
          ],
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
        },
        {
          name: 'Contact',
          secondaryLinks: [
            {
                name:'Contact',
                destination:'/lets-work'
            }
          ],
          listSubMenu: false,
        },
       
      ];


    return (
        <footer className="w-screen">
            <h6>Site mao</h6>


        </footer>
    )
}

export default Footer