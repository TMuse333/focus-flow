"use client"

import { useEffect, useRef, Dispatch, SetStateAction } from "react";

interface IntersectionObserverOptions {
  root: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  toggle?: boolean;
}

 export const useIntersectionObserver = (
  setInView: Dispatch<SetStateAction<boolean>>,
  options: IntersectionObserverOptions,

  toggle?: boolean
) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<Element | null>(null);

  useEffect(() => {
    if (options.root && typeof options.root === 'string') {
      rootRef.current = document.getElementById(options.root);
    } else {
      rootRef.current = options.root;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (!toggle) {
          observer.disconnect();
        }
      } else if (toggle) {
        setInView(false);
      }
    }, {
      ...options,
      root: rootRef.current,
    });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
    else if(toggle === true){
      setInView(false);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [setInView, options, toggle]);



  return componentRef;
};



export const useVideoIntersectionObserver = (
  setInView: Dispatch<SetStateAction<boolean>>,
  options: IntersectionObserverOptions,
  toggle?: boolean // Note: Toggle is an optional parameter, not `true`
) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<Element | null>(null);

  useEffect(() => {
    if (options.root && typeof options.root === 'string') {
      rootRef.current = document.getElementById(options.root);
    } else {
      rootRef.current = options.root;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (!toggle) {
          observer.disconnect();
        }
      } else if (toggle) {
        setInView(false);
      }
    }, {
      ...options,
      root: rootRef.current,
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    } else if (toggle) {
      setInView(false); // Ensure that `setInView` is set to `false` if `toggle` is true and the video is not present
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [setInView, options, toggle]);

  return videoRef;
};
  