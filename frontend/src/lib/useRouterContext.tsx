import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useGeneralContext } from '@/context/context';
import axios from 'axios';

interface Props {
    totalPageTime: {
        name: string;
        time: number;
    }[];
}

export const useRouterContext = ({ totalPageTime }: Props) => {
    const router = useRouter();
    const pathName = usePathname();
    const [pageData, setPageData] = useState<{ name: string; time: number; }[] | null>(null);
    
    const { totalHomePageTime } = useGeneralContext();

    // Store the current page time in localStorage whenever it changes
    useEffect(() => {
        console.log('page time', totalHomePageTime);
        localStorage.setItem('currentPageTime', JSON.stringify(totalHomePageTime));
    }, [totalHomePageTime]);

    // Store the previous pathName to detect changes
    const prevPathNameRef = useRef<string | null>(null);

    useEffect(() => {
        // Define the function to send data to the backend
        const sendDataToBackend = async () => {
            // Retrieve the saved page time from localStorage
            const storedData = localStorage.getItem('currentPageTime');
            console.log('Stored data:', storedData);

            if (storedData) {
                const parsedData = JSON.parse(storedData); // Parse the stored data
                setPageData(parsedData); // Update state with parsed data

                // Ensure that the data is available before sending
                if (parsedData && parsedData.length > 0) {
                    try {
                        // Send the parsed data to the backend
                        await axios.post('http://localhost:9000/track-page-time', { componentsTime: parsedData });
                        console.log('Total time sent to backend:', parsedData);
                    } catch (error) {
                        console.error('Error sending time to backend:', error);
                    }
                } else {
                    console.warn('No valid page data available to send');
                }
            }
        };

        // Check if pathName has changed to prevent duplicate calls
        if (prevPathNameRef.current !== pathName) {
            sendDataToBackend();
        }

        // Update the previous pathName to the current pathName
        prevPathNameRef.current = pathName;
    }, [pathName, totalHomePageTime]); // Added totalHomePageTime to dependencies

    return { router };
};
