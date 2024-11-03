// app/hooks/useRouterContext.ts
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useGeneralContext } from '@/context/context';
import axios from 'axios'

interface Props {
    totalPageTime:{
        name:string,
        time:number}[]
}


export const useRouterContext = ({
totalPageTime
} :Props) => {
  const router = useRouter();

  const pathName = usePathname()

  const {totalHomePageTime} = useGeneralContext()

  useEffect(() => {
    // Define the function to send data to the backend
    const sendDataToBackend = async () => {
      try {
        await axios.post('/api/track-time', { totalTime: totalPageTime });
        console.log('Total time sent to backend:', totalPageTime);
      } catch (error) {
        console.error('Error sending time to backend:', error);
      }
    };

    // Call the function when pathName changes
    sendDataToBackend();

    // Alert for path change (optional)
    alert('We are changing path names, slime');
    
  }, [pathName]); 


//   useEffect(() => {
//     const handleBeforeUnload = (event: BeforeUnloadEvent) => {
//       // Alert message for confirmation before navigating away
//       alert('Are you sure you want to leave?');
//       event.preventDefault();
//       event.returnValue = ''; // Required for Chrome to display the dialog
//     };

//     // Add event listener for the beforeunload event
//     window.addEventListener('beforeunload', handleBeforeUnload);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, [router]);

  return { router };
};
