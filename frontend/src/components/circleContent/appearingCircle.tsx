import React, { useEffect, useRef, useState } from 'react';
import { useGeneralContext } from '../../context/context';
import {useIntersectionObserver} from '../intersectionObserver/intersectionObserver';
import {motion,Variants} from 'framer-motion'
import Image from 'next/image'

interface CircleProps  {
    image: string,
    
   secondCircleComplete:boolean
    handleCircleComplete: (index: number, value: boolean) => void;
    index:number
}

const AppearingCircle: React.FC<CircleProps> = ({image,secondCircleComplete,
    handleCircleComplete,index}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const offscreenCanvasRef = useRef<HTMLCanvasElement>(null); // Ref for the offscreen canvas
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
    const [circleRadius, setCircleRadius] = useState<number>(0);
    const [fraction, setFraction] = useState<number>(0.1);
    const [firstCircleComplete, setFirstCircleComplete] = useState<boolean>(false);
    const [redraw, setRedraw] = useState<boolean>(true)

    const [inView, setInView] = useState(false); // State for tracking whether the component is in view
    // const quarter = Math.PI / 2;
    // const circle = Math.PI * 2;

    const [circleThickness] = useState<number>(4)

    const {isMobile2} = useGeneralContext()
    const [imageWidth, setImageWidth]
     = useState(isMobile2 ? 40 : 40)

     useEffect(()=> {
        if(isMobile2 ){
            
        }
        else{
         
        }
     },[isMobile2])


    // const [screenSize]
    // = useState(window.innerWidth)

    const [resize, setResize] = useState(false)
   

 
    

    const [circleRadiusLimit,setCircleRadiusLimit] =useState(isMobile2 ? 50 : 80)

    const secondCircleRadius = isMobile2 ? 60 : 100

    const circleOriginX = isMobile2 ? canvasSize.width / 2 : canvasSize.width /2
    const circleOriginY = isMobile2 ? canvasSize.height / 2 : canvasSize.height /2

    const [circle2Radius, setCircle2Radius] = useState(isMobile2 ? 60 : 100 )
  
const {isMobile} = useGeneralContext()

const imageVariants: Variants = {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1
    }
}
    

   
    // Configure intersection observer options
    const options = {
        root: null,
        rootMargin: '-25px',
        threshold: !isMobile ? 1 : 0.6,
    };

    // Apply intersection observer hook to detect when the component is in view
    const componentRef = useIntersectionObserver(setInView, options);

 

    useEffect(() => {
        const canvas = canvasRef.current;
        const offscreenCanvas = offscreenCanvasRef.current;
        if (!canvas || !offscreenCanvas) return;
    
        const c = canvas.getContext('2d');
        const offscreenCtx = offscreenCanvas.getContext('2d');
        if (!c || !offscreenCtx) return;
    
        const padding = isMobile2 ? 80 : 110; // Adjust the padding as needed
    
        const calculateCanvasSize = () => {
            const maxWidth = 1200;
            const canvasWidth = Math.min(window.innerWidth, maxWidth);
    
            // Calculate the required canvas size based on circle positions and sizes
            const requiredWidth = Math.max(circleOriginX + secondCircleRadius, circleOriginX + circleRadius) + padding;
            const requiredHeight = Math.max(circleOriginY + secondCircleRadius, circleOriginY + circleRadius) + padding;
    
            setCanvasSize({ width: Math.min(canvasWidth, requiredWidth), height: Math.min(window.innerHeight, requiredHeight) });
            canvas.width = Math.min(canvasWidth, requiredWidth);
            canvas.height = Math.min(window.innerHeight, requiredHeight);
            offscreenCanvas.width = Math.min(canvasWidth, requiredWidth); // Set offscreen canvas size
            offscreenCanvas.height = Math.min(window.innerHeight, requiredHeight);
        };
    
        window.addEventListener('resize', calculateCanvasSize);
        calculateCanvasSize();
    
        // Draw repeated objects on the offscreen canvas
        offscreenCtx.fillStyle = 'transparent';
        offscreenCtx.fillRect(0, 0, offscreenCanvas.width, offscreenCanvas.height); // Example drawing
        // Draw other repeated objects as needed
    
        return () => {
            window.removeEventListener('resize', calculateCanvasSize);
        };
    }, []);
    

   

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas  || !redraw ) return;
    
        const c = canvas.getContext('2d');
        if (!c) return;
    
        const animate = () => {
            c.clearRect(0, 0, canvas.width, canvas.height);
    
            // Draw circle border
            c.strokeStyle = '#00bfff';
            c.beginPath();


            c.arc(circleOriginX, circleOriginY, circleRadius, 0, 2 * Math.PI);
            c.lineWidth = 4; // Set border width
            
            c.stroke();

        if(firstCircleComplete){
            c.beginPath();
            c.arc(circleOriginX, circleOriginY, circle2Radius, 0, (fraction * Math.PI) * 2, false);
            c.lineWidth = circleThickness; 
            c.strokeStyle = '#048dba'; // Set stroke color to red
            c.stroke();
        }
    
            requestAnimationFrame(animate);
        };
    
        animate();
    }, [canvasSize, circleRadius,firstCircleComplete,fraction, circleThickness,
    circle2Radius,circleRadius,resize,circleRadiusLimit]);
    

    useEffect(() => {

        if(!inView || !redraw){
            console.log('radius not increased')
            return
        }
   
        const intervalId = setInterval(() => {
        

       
            if (circleRadius < circleRadiusLimit ) {
                // console.log('circle radius',circleRadius)
                setCircleRadius(prev => prev + 1);
               
            } else {
                clearInterval(intervalId);
                setFirstCircleComplete(true);
            }
        }, 16);

        return () => clearInterval(intervalId);
    }, [circleRadius,inView]);


    useEffect(() => {
        if(!inView  || !redraw){
            return
        }
        const intervalId = setInterval(() => {
            if (fraction < 1 && firstCircleComplete) {
                setFraction(prev => prev + 0.03);
                // console.log('fraction',fraction)

            }

                else if(fraction > 0.96){
                    handleCircleComplete(index,true);
                    setRedraw(false)
                    // console.warn('second circle complete')
                }

             else {
                clearInterval(intervalId);
               
             
            }

           
        }, 16);

        return () => clearInterval(intervalId);
    }, [fraction, firstCircleComplete,inView]);

    const MotionImage = motion(Image);

    return (
        <>
            <div ref={componentRef} className='relative mr-auto ml-auto
    z-2'>
                <MotionImage 
                alt='raging alt'
                variants={imageVariants}
                initial={'initial'}
                animate={secondCircleComplete ? 'animate' : 'initial'}
                // style={imageStyle}
                src={image}
                className={`absolute  top-[20%] left-[50%] -translate-x-[50%]
               `}
               layout="position"
               width={1000} // Base width as a percentage
               height={55} // Base height as a percentage
               objectFit="cover"
               style={{
                width:`${imageWidth}%`
               }}/>
            <canvas className='relative z-2' ref={canvasRef}></canvas>
            <canvas style={{ display: 'none' }} ref={offscreenCanvasRef}></canvas> 
            {/* Offscreen canvas */}
            </div>
        </>
    );
};

export default AppearingCircle;