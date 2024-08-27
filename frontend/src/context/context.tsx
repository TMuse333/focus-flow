"use client"

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the type for the context value
interface GeneralContextType {
  textYPosition: number;
  setTextYPosition: React.Dispatch<React.SetStateAction<number>>;
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
}

// Create the context
export const GeneralContext = createContext<GeneralContextType | undefined>(undefined);

// Create a provider component
export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize the value state
  const [textYPosition, setTextYPosition] = useState<number>(0);

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

  const contextValue = {
    textYPosition,
    setTextYPosition,
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
    selectedCarouselImageIndex
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
