"use client"

import  { ReactNode, useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, motionValue} from "framer-motion";
// import { FiArrowUpRight } from "react-icons/fi";
// import laptop from '../../media/laptop.jpg'

import { useVideoIntersectionObserver} from "../intersectionObserver/intersectionObserver";





interface Props {
    src:string,
    alt:string,
    isVideo:boolean
    description?:string,
    muted?:boolean,
    thumbnail?:string,
    heading:string,
    subHeading:string
   
}

interface VideoProps {
    src:string,
    alt:string,
    thumbnail?:string
    muted?:boolean,
    textYPosition:number
}








export const TextParallaxContentExample:React.FC<Props>
 = ({src,alt,isVideo, description,muted,
thumbnail,subHeading,heading }) => {

  const [textYPosition, setTextYPosition] = useState(0)
  return (
    <div className=" relative bg-black mb-4 w-screen">
      <TextParallaxContent
        imgUrl={src}
        alt={alt}
        subheading={subHeading}
        heading={heading}
        isVideo={isVideo}
      muted={muted}
      thumbnail={thumbnail}
      textYPosition={textYPosition}
      setTextYPosition={setTextYPosition}
       
      >
        {description && (
            <p className="rounded-md bg-gray-400
            w-[80%] ml-auto mr-auto relative
            p-8 rounded-xl sm:text-xl w-full
            mb-8 max-w-[1200px]
            text-lg">
              {description}
            </p>
        )}
       
      </TextParallaxContent>
    
    </div>
  );
};

const IMG_PADDING = 12;

const Video:React.FC<VideoProps> = (
  {src,muted,thumbnail,
  textYPosition }
) => {

  const [videoPlaying, setVideoPlaying] = useState(false)
  

  

  const [inView, setInView] = useState(false)

  const options = {
      root:null,
      rootMargin:!inView ?'50px' : '500px',
      threshold:0.8
  }

  const videoRef = useVideoIntersectionObserver(setInView,options,
    true
      )

  useEffect(() => {
    const handleScroll = () => {
      if (inView && !videoPlaying) {
        setVideoPlaying(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView, videoPlaying]);



  useEffect(() => {
    if(videoRef.current && !inView && muted){
      setVideoPlaying(false)
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
   
      // videoRef.current.src = ''; // Temporarily remove src
      // videoRef.current.src = src;
    }

    else if(videoRef.current && !inView &&!muted){
      setVideoPlaying(false)
      videoRef.current.pause();
    }

  },[inView])

  useEffect(() => {
    if (videoPlaying && videoRef.current && muted) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, [videoPlaying]);






  const [playing, setPlaying] = useState(false);

  const handlePlayClick = () => {
    console.log('clickage occured')
    setPlaying(true);
    if (videoRef.current) {
      console.log('passed in')
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      
      // Enter fullscreen mode
      const videoElement = videoRef.current as HTMLVideoElement & {
        requestFullscreen?: () => void;
        mozRequestFullScreen?: () => void;
        webkitRequestFullscreen?: () => void;
        msRequestFullscreen?: () => void;
      };
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) { // Firefox
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) { // IE/Edge
        videoElement.msRequestFullscreen();
      }
    }
  }


  return (
   <>
  
{muted === true ? (


   
    <motion.video
      ref={videoRef}
      className="w-full h-full object-contain relative z-[4000]
      bg-black"
      
      preload="auto"
     muted
      aria-label="A great video" // For accessibility
      loop
      
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </motion.video>

) : <>

{!playing ? (
        <div className="relative w-full h-full z-[4000] bg-black">
          <motion.img
            src={thumbnail}
            
            className="w-full h-full object-contain cursor-pointer"
            onClick={handlePlayClick}
          />
          <button
            className="absolute inset-0 flex items-center justify-center"
            onClick={handlePlayClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 p-2  text-white relative
              scale-[3] "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </button>
        </div>
      ) : (
        <motion.video
          ref={videoRef}
          className="w-screen h-screen object-contain
          relative z-[3999] bg-black"
          src={src}
          muted={muted}
          controls
          autoPlay
          
        >
          Your browser does not support the video tag.
        </motion.video>
      )}
 
  );
    
 


</>}
      
   
 </>
  )
}

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
  alt,
  isVideo,
  muted,
  thumbnail,
  textYPosition,
  setTextYPosition

 
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children?: ReactNode;
  alt:string
  isVideo:boolean,
  muted?:boolean,
  thumbnail?:string,
  textYPosition:number,
  setTextYPosition:React.Dispatch<React.SetStateAction<number>>;

}) => {
  return (
    <div
    
    >
      <div className="relative h-[150vh] w-screen
      ">
        <StickyImage 
        imgUrl={imgUrl}
        isVideo={isVideo}
        alt={alt}
        muted={muted}
        thumbnail={thumbnail}
        textYPosition={textYPosition}
       />
        <OverlayCopy heading={heading} subheading={subheading}
        setTextYPosition={setTextYPosition} />
      </div>
      <motion.div
        className=" inset-0 flex flex-col items-center justify-center"
        style={{
          scale: useTransform(
            useScroll().scrollYProgress,
            [0, 1],
            [1, 0.85]
          )
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const StickyImage = ({ imgUrl, isVideo, alt,muted,thumbnail,textYPosition }: { imgUrl: string, isVideo?:boolean
  alt:string,muted?:boolean,
  thumbnail?:string,
  textYPosition:number
 }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // const {textYPosition} = useGeneralContext()

  const motionTextYPosition = motionValue(textYPosition);

  const brightness = useTransform(
    motionTextYPosition,
    [0, -100],  // Range of scrollYProgress values
    [0.2, 1] // Range of brightness values
  );

  const [imgBrightness, setImgBrightness] = useState(0.2)

  const [videoPlaying, setVideoPlaying] = useState(false)


  useEffect(() => {
    const unsubscribe = brightness.onChange((value) => {
     
      setImgBrightness(value)
    });

    return () => {
      unsubscribe();
    };
  }, [brightness]);



  

  

  return (
    <motion.div
      style={{
        // backgroundImage: `url(${imgUrl})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        
        height:'100vh',
        top: IMG_PADDING,
        scale,
        filter: `brightness(${imgBrightness})`,
        
       
      }}
      ref={targetRef}
      className=" z-[0] overflow-hidden  sticky  relative"
    >
        {!isVideo ? (

       
        <motion.img className="w-full h-full object-contain relative"
        src={imgUrl}
        alt={alt}
       
        />

         ) : (
          <Video
          src={imgUrl}
          alt={alt}
          muted={muted}
          thumbnail={thumbnail}
          textYPosition={textYPosition}
         />
        
        )

         }
       
      <motion.div
        className="absolute inset-0 relative "
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
    subheading,
    heading,
    setTextYPosition

    
  }: {
    subheading: string;
    heading: string;
    setTextYPosition:React.Dispatch<React.SetStateAction<number>>;
  }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });



    // const { setTextYPosition} = useGeneralContext()
  
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    // Log the y position
    useEffect(() => {
        const unsubscribe = y.onChange((value) => {
         

          setTextYPosition(value)
        });
        return unsubscribe;
      }, []);



  
    return (
      <motion.div
        style={{
          y,
          opacity,
        }}
        ref={targetRef}
        className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
      >
        <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
          {subheading}
        </p>
        <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
      </motion.div>
    );
  };
  