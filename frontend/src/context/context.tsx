"use client"

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';


interface ComponentTime {
  name: string;
  time: number; // Time in milliseconds
}
// Define the type for the context value
interface GeneralContextType {

  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  setSecondCircleComplete: React.Dispatch<React.SetStateAction<boolean[]>>;
  secondCircleComplete: boolean[];
  isMobile2: boolean;
  setIsMobile2: React.Dispatch<React.SetStateAction<boolean>>;
  handleCircleComplete: (index: number, value: boolean) => void;
  selectedCarouselImageMainImage: string;
  setSelectedCarouselImageMainImage: React.Dispatch<React.SetStateAction<string>>;
  selectedCarouselImageSecondaryImage: string;
  setSelectedCarouselImageSecondaryImage: React.Dispatch<React.SetStateAction<string>>;
  selectedCarouselImageTitle: string;
  setSelectedCarouselImageTitle: React.Dispatch<React.SetStateAction<string>>;
  selectedCarouselImageDescription: string[];
  setSelectedCarouselImageDescription: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCarouselImageLink: string;
  setSelectedCarouselImageLink: React.Dispatch<React.SetStateAction<string>>;
  selectedCarouselImageIndex:number | null,
  setSelectedCarouselImageIndex:React.Dispatch<React.SetStateAction<number | null>>;
  setSelectedCarouselImageAlt:React.Dispatch<React.SetStateAction<string>>;
  selectedCarouselImageAlt:string
  setSelectedCarouselImageAlt2:React.Dispatch<React.SetStateAction<string>>;
  selectedCarouselImageAlt2:string
  isDesktop:boolean
  setIsDesktop:React.Dispatch<React.SetStateAction<boolean>>;
  totalHomePageTime:ComponentTime[],
  setTotalHomePageTime:React.Dispatch<React.SetStateAction<ComponentTime[]>>


}

// Create the context
export const GeneralContext = createContext<GeneralContextType | undefined>(undefined);

// Create a provider component
export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize the value state


  // Detect mobile devices
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [isMobile2, setIsMobile2] = useState<boolean>(true);
  const [secondCircleComplete, setSecondCircleComplete] = useState<boolean[]>(
    Array.from({ length: 7 }, () => false)
  );

  const [selectedCarouselImageMainImage, setSelectedCarouselImageMainImage] = useState<string>('');
  const [selectedCarouselImageSecondaryImage, setSelectedCarouselImageSecondaryImage] = useState<string>('');
  const [selectedCarouselImageTitle, setSelectedCarouselImageTitle] = useState<string>('');
  const [selectedCarouselImageDescription, setSelectedCarouselImageDescription] = useState<string[]>([]);
  const [selectedCarouselImageLink, setSelectedCarouselImageLink] = useState<string>('');
  const [selectedCarouselImageAlt, setSelectedCarouselImageAlt] = useState('')
  const [selectedCarouselImageAlt2, setSelectedCarouselImageAlt2] = useState('')  
  const [ isDesktop,
    setIsDesktop] = useState(false)

    


  const [selectedCarouselImageIndex, setSelectedCarouselImageIndex] = useState<number | null>(null)
  const handleCircleComplete = (index: number, value: boolean) => {
    setSecondCircleComplete((prev) => {
      const newState = [...prev]; // Create a copy of the previous state array
      newState[index] = value; // Update the value at the specified index
      return newState; // Return the new state array
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 655);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  useEffect(() => {
    console.log('is mobile', isMobile);
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsDesktop(window.innerWidth >= 865);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const [totalHomePageTime, setTotalHomePageTime] = useState<ComponentTime[]>([]);



  const contextValue = {

    isMobile,
    setIsMobile,
    secondCircleComplete,
    setSecondCircleComplete,
    isMobile2,
    setIsMobile2,
    handleCircleComplete,
    selectedCarouselImageMainImage,
    setSelectedCarouselImageMainImage,
    selectedCarouselImageSecondaryImage,
    setSelectedCarouselImageSecondaryImage,
    selectedCarouselImageTitle,
    setSelectedCarouselImageTitle,
    selectedCarouselImageDescription,
    setSelectedCarouselImageDescription,
    selectedCarouselImageLink,
    setSelectedCarouselImageLink,
    setSelectedCarouselImageIndex,
    selectedCarouselImageIndex,
    selectedCarouselImageAlt,
    setSelectedCarouselImageAlt,
    selectedCarouselImageAlt2,
    setSelectedCarouselImageAlt2,
    isDesktop,
    setIsDesktop,
    totalHomePageTime, 
    setTotalHomePageTime
    
  };

  return <GeneralContext.Provider value={contextValue}>{children}</GeneralContext.Provider>;
};

export const useGeneralContext = (): GeneralContextType => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error('useGeneralContext must be used within a ContextProvider');
  }
  return context;
};
