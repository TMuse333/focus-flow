import { StaticImageData } from "next/image"
import dolceVita from '../../public/media/dolce-vita-screenshot.webp'
import cards2 from '../../public/media/card-game2-screenshot.png'
import sainey from '../../public/media/sainey-media-picture.png'
import restaurant from '../../public/media/generic-logo.png'

import twoHands from '../../public/media/gemeni-two-hand-stick.webp'
import coder from '../../public/media/quantum-coder.webp'
import village from '../../public/media/quantum-village.webp'
import coder2 from '../../public/media/focused-coder.webp'
import meditate from '../../public/media/q3-visuals-logo-2.webp'
import functional from '../../public/media/gemeni-functional.webp'
import laptop from '../../public/media/q3-imac.webp'
import placeholder from '../../public/media/placeholder.jpeg'

export const contentData1 = {
    mainTitle:'Your Digital Presence is Important',
    description:[
    'In todays world your website can be one of the biggest factors contributing to your success. Your website is a reflection of you and your brand so it is essential that you stand out by having a visually appealing a custom build website where you can put your best foot forward and stand out above your competition',
    'FocusFlow Software specializes in creating visually appealing and attention grabbing websites so that your brand can be displayed to the world in a way that gives you the highest probability for success.',
   
],
// image:'/src/media/laptop.jpg'

}


export const workTenets = [
    {
        title:'Laser Focus',
        description:'When we put our mind to a project, it is the primary focus of life.'+
        'We have the ability the lock in and commit hours and hours of concentrated work every day to your website gives is as high quality as it can be and it '+
        ' gives your business a great boost '
    },

    {
        title:'Fantastic Creativity',
        description:'With years of drawing experience along with custom coded websites as opposed to generic drag and drop templates, '+
        'we are able to make unique looking websites that will attract attention. But we are also able to analyze other other popular websites and apply our own unique style to them to ensure your website has all the qualities of a great website while standing out.'
    },
    {
        title:'Fast Worker',
        description:'With over 1000 hours of dedication to web design in the last year, we have developed a efficient and quick process to '+
        'get your website up and running quickly. We understand websites are very and can execute and very fast speeds to '+
        'deliver your website on time.'
    },
  
    {
        title:'Daily Communication',
        description:'Your input and is very important to us. We can give you daily updates on the '+
        'progress of your website and listen to your feedback to ensure your website turns out the way you want it.'
    },
    {
        title:'Constant improvement',
        description:'We are always striving to add new features to our websites and make them even better, you are a direct beneficiary of this work because we will add our discoveries to your website to make them even better!'
    },
    {
        title:'A lot to gain',
        description:'We are just starting out, it is extremley important that our projects go well so we can do this for a long time. When you work with us we ensure we do everything we can to make sure your project turns out as best as it can.'
    }
]







export const accordion1Text = [

    {
        title:'Use of latest and most powerful technology',
        description:`The technologies we use are react js, which was developed by Facebook,
         this website framework allows for unlimited creative potential as
         we can use custom code to make highly customizable components
         that you just cannot replicate with regular drag and drop
         minimal code websites`
    },
    {
        title:'Interactive Components',
        description:`Given the interactive nature of our websites, this leads to
        higher user engagement as their is a lot to discover on our web pages. This leads
        to more time spent on your website and a higher probability to convert clients`
    },
    {
        title:'Subtle but stunning animations',
        description:'We have spent a great amount of time creating custom made designs '+
        'through many difficult hours of coding, as opposed to generic drag and drop'
    },
    {
        title:'Ready for implementation',
        description:'We have been building websites for a long time and have developed an efficient system'+
        ' to produces high quality websites as quickly as possible.'
    },
    {
        title: 'Long-Term Reliability',
    description: `Unlike popular no code websites, which require regular updates and ongoing maintenance
    to stay secure and perform well, our React-based websites are built with long-term reliability
    in mind. React's modern architecture minimizes the need for frequent updates, reducing the risk
    of security vulnerabilities, plugin conflicts, and downtime. This means less ongoing maintenance
    and a more stable website for your business.`
  },
    {
        title: '3D Models',
        description: `Our advanced web development capabilities also extend to 3D models and
        other cutting-edge interactive elements that can truly set your website apart from competitors.`
    
    }
   
]


const circleText = [
    'We take the craft of making excellent websites very seriously. We will continue to work on your project until you are satisfied with it and confident it will take your business to greatness',
    'Our lifestyle is based around improving our websites everyday so you know when you work with us, you have someone very dedicated to their craft and wont have to worry about us slacking off. When you work with us, you are working with a dedicated team.'
]



export const scrollableImages = [
  
    {
      src:dolceVita.src,
      alt:'Dolce Vita',
      details:{
        mainImage:dolceVita.src,
        secondaryImage:dolceVita.src,
        title:'Dolce Vita Construction',
        description:['A website for a construction company based out of Halifax, Nova scotia',
      'The construction website had to have many different ways to display all of its projects and construction, so we integrated numerous carousels to showcase everything properly.'],
        link:'https://dolcevitaconstructionandpm.com'
      }
    },
   
    {
      src:cards2.src,
      alt:'cards2',
      details:{
        mainImage:cards2.src,
    secondaryImage:cards2.src,
    title:'The Quantum Card game',
    description:['A website to test your reaction time and memory skills',
  'This showcases my quality art skills and complex state management with react'],
    link:'https://quantumcardgame.netlify.app'
    }
    },
    {
      src:sainey.src,
      alt:'sainey',
      details:{
        mainImage:sainey.src,
    secondaryImage:sainey.src,
    title:'Sainey Media',
    description:['A website for my a big time social media influencer',
  'I implemented particles.js to give off a new and modern vibe'],
    link:'https://saineymedia.com'
    }
    },
  ]

  interface ContentBoxProps {

    title:string,
    subTitle:string,
    description:string,
    src:StaticImageData,
    alt:string,
    destination:string,
    buttonText:string
}

export const slideShowImages = [
    
    {
        src:coder2.src,
        alt:'Quantum coder',
        description:'Thousands of hours dedicated to design, we are prepared to quickly deliver an outstanding website'
    },
    {
        src:meditate.src,
        alt:'meditate',
        description:'We use all custom code, crafted from scratch for complete control over the project and a unique outcome, as opposed to generic drag and drop websites.'
    },
    {
        src:functional.src,
        alt:'functional',
        description:'With frontend and backend capabilities, we are able to help you complete tasks for your business and make your business look as visually appealing as possible, all in a quick manner.'
    },
    {
        src:laptop.src,
        alt:'laptop',
        description:'We care very deeply about the quality of our work and delivering it in a quick manner. We are ready to work and deliver you a great product'
    }
]

export const RestaurantContentBoxData:ContentBoxProps = {
    title:'Our restaurant Software',
    subTitle:'More efficient, more money saved',
    description:'If you are a restaurant owner it is crucial to have an efficient online ordering system. We have taken care of this necessity for you with this easy to setup software that enables you to take online orders for far cheaper than other third party services like uber eats',
    src:restaurant,
    alt:'The restaurant logo',
    destination:'/online-food-ordering-system',
    buttonText:'Learn more'
}


interface ParallaxProps {
    src:string,
    alt:string,
    isVideo:boolean
    description?:string,
    muted?:boolean,
    thumbnail?:string,
    heading:string,
    subHeading:string
   
}

const lorem30 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt illo corporis, ut doloremque corrupti officiis aliquid veniam non. Molestiae, sunt voluptatum. Numquam voluptas vero magni dolores? Earum cupiditate blanditiis doloribus!'


export const lionSpeech = '/videos/restaurant-speech.mp4'


export const restaurantParallax:ParallaxProps = {
    src:lionSpeech,
    alt:'Explaining how focus software has the best online ordering system',
    isVideo:true,
    description:lorem30,
    thumbnail:'/media/focused-coder.webp',
    heading:'Online ordering software',
    subHeading:'Quick, easy, Efficient and Profitable'
}

export const ownershipParallax:ParallaxProps = {
    src:'media/gemeni-functional.webp',
    alt:'Explaining how focus software has the best online ordering system',
    isVideo:false,
    description:'Unlike other platforms, with our solution, you retain complete ownership. Your data, your customers, your business—everything is under your control. No commissions, no hidden fees, no surprises. Just a powerful tool that works for you, not the other way around.',
    thumbnail:'/media/gemeni-functional.webp',
    heading:'Your Software, Your Way',
    subHeading:'Full Control, Full Potential'
}

export const customParallax:ParallaxProps = {
    src:'media/gemeni-two-hand-stick.webp',
    alt:'Explaining how focus software has the best online ordering system',
    isVideo:false,
    description:'From start to finish, this is your software. Customize it, scale it, and make it your own. You’re not just getting a product—you’re getting the freedom to shape your restaurant’s digital presence exactly how you envision it.',
    thumbnail:'/media/gemeni-functional.webp',
    heading:'Own the Experience',
    subHeading:'Crafted for Your Vision'
}

export const priceBoxesData = [
    {
        src:'/media/stripe-integration.webp',
        alt:'The stripe logo',
        price:'2.9% + 30 cents'
    },
    {
        src:'/media/ubereats.webp',
        alt:'The stripe logo',
        price:'10%'
    },
    {
        src:'/media/doordash.webp',
        alt:'The stripe logo',
        price:'15%'
    },
]


export const restaurantFaq = [
    {
        src:'/media/stripe-integration.webp',
        alt:'the stripe logo ',
        title:'How are payments secured?',
        description:'To accept payments we use stripe, one of the worlds leading payment processors. It is a secure and trusted source so security is completely taken care of.'
    },
    {
        src:'/media/lightning-plug.webp',
        alt:'the stripe logo',
        title:'How quickly can this be ready to go?',
        description:'Very fast. The software is fully functional and ready to be distributed, all you have to do is create a stripe account so we can hook up your new website to your account so you can start to receive your money!'
    },
    {
        src:'/media/react-logo.webp',
        alt:'the stripe logo',
        title:'What technologies are used?',
        description:'We use React Js, the same most popular user interface software in the world which is also used by Instagram, Facebook any many other big tech companies, the data is stored on mongodb.'
    },
    {
        src: '/media/dollar-sign-logo.webp',
        alt: 'Stripe logo',
        title: 'How will this help increase sales?',
        description: 'By offering an intuitive and seamless online ordering experience, your customers can easily place orders with just a few clicks. This convenience not only enhances customer satisfaction but also increases order frequency, leading to a substantial boost in sales. Plus, with integrated analytics, you can continuously optimize your offerings and marketing strategies to drive even more revenue.'
    }

]

export const herobannerData = [
    {
        src: "/media/brain.png", // Empty for now
        alt: "Creative Web Design in Halifax",
        heading: "Creative Web Design in Halifax",
    },
    {
        src: "/media/dollar-sign-logo.webp", // Empty for now
        alt: "Custom Web Design Services",
        heading: "Custom Web Design Services",
    },
    {
        src: "/media/futuristic-money-ball-removebg-preview.webp", // Empty for now
        alt: "Fast and Creative Solutions",
        heading: "Fast and Creative Solutions",
    },
    {
        src: "/media/gemeni-builder.webp", // Empty for now
        alt: "Unique and Visually Appealing Websites",
        heading: "Unique and Visually Appealing Websites",
    },
    {
        src: "/media/gemeni-two-hand-stick.png", // Empty for now
        alt: "Quickly Delivered Web Design",
        heading: "Quickly Delivered Web Design",
    }
];

export const laptop3d = '/models/laptop.gltf'

export const coloredLaptop = '/models/colored-laptop.gltf'


export const restaurantCloser = {
    title:'Elevate Your Restaurant',
    description:`Step into the future of dining with FocusFlow Software. It's not just a tool—it's a revolution in how you connect with customers. Own your success, drive growth, and deliver an unparalleled experience, all on your terms. Your restaurant, your rules, with technology that adapts to you.`,
    buttonText:'Get yours today',
    destination:'/lets-work',
    image:'/media/gemeni-two-hand-stick.webp'
}


export const pageScroll = '/videos/homepage-scrol.mp4'

export const focusFlowPromo = '/videos/focusflow-promotional-video1.mp4'


export const slideScrollImages = [
    {
        src:'/media/focusFlow-brain-nobg.webp',
        alt:'the focusflow brain',
        title:'The FocusFlow Brain'
    },
    {
        src:'/media/focusFlow-brain-nobg.webp',
        alt:'the focusflow brain',
        title:'The FocusFlow Brain'
    },
    {
        src:'/media/focusFlow-brain-nobg.webp',
        alt:'the focusflow brain',
        title:'The FocusFlow Brain'
    },
    {
        src:'/media/focusFlow-brain-nobg.webp',
        alt:'the focusflow brain',
        title:'The FocusFlow Brain'
    },
    {
        src:'/media/focusFlow-brain-nobg.webp',
        alt:'the focusflow brain',
        title:'The FocusFlow Brain'
    },

]

export const genericContent = {
    description:[`This is a staple in any website, a 
    clean and simple way to introduce a page with an image or video that
     slides in along with text right besides it and an optional button towards the page`,
     'we typically use this component on the homepage but it can also be used when an image is needed to go along with some text in any scenario, the format of the text can also be completly customized to any format as well like a list or other components '
]
    }

    export const genericSlideShow = [
    
        {
            src:placeholder.src,
            alt:'Quantum coder',
            description:lorem30
        },
        {
            src:placeholder.src,
            alt:'meditate',
            description:lorem30
        },
        {
            src:placeholder.src,
            alt:'functional',
            description:lorem30
        },
        {
            src:placeholder.src,
            alt:'laptop',
            description:lorem30
        }
    ]


 export const genericAccordion = [

        {
            title:'Point 1',
            description:'We are confident that we can design your website as good if not better than anyone else'+
            'you can find, with a background in art we are sure that we can '+
            'create a design that you will love and elevate your digital presence'
        },
        {
            title:'Point 2',
            description:'Our websites have capabilities beyond appealing designs to help your business grow.'+
            'We can inegegrate databases, user accounts e-commerce and booking appointments all through your website to save you more time and let you do what you do best, run your business.'
        },
        {
            title:'Point 3',
            description:'We have spent a great amount of time creating custom made designs '+
            'through many difficult hours of coding, as opposed to generic drag and drop'
        },
        {
            title:'Point 4',
            description:'We have been building websites for a long time and have developed an efficient system'+
            ' to produces high quality websites as quickly as possible.'
        },
        {
            title:'Point 5',
            description:'Your website is extremely important to your success online and we take it very seriously.'+
            ' When you work with us we will not stop working until you are satisfied with your lovely website.'
        },
       



    ]


   export const builtDifferent = {

    }

    //words to add
//     digital marketing
// web design development
// award winning
// customer service
// medium sized businesses
// start to finish
// online presence
// search engine optimization
// design projects
// designed and developed
// social media marketing
// user friendly
// website development
// logo design
// custom website
// halifax website design company
// halifax nova scotia