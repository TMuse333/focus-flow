import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';

// Define the ComponentTime interface
interface ComponentTime {
  name: string;
  time: number; // Time in milliseconds

}

// Props for the component time tracker hook
interface UseComponentTimeTrackerProps {
  inView: boolean;
  id: string;
  setTotalPageTime?: React.Dispatch<React.SetStateAction<ComponentTime[]>>;
  pageTracker?:boolean,
  totalPageTime?:ComponentTime[]
}

// Return type for the component time tracker hook
interface UseComponentTimeTrackerReturn {
  totalTimeInView: number;
  entryTime: number | null;
}




// The custom hook for tracking component time
export const useComponentTimeTracker = ({
  inView,
  id,
  setTotalPageTime,
  pageTracker,
  totalPageTime
}: UseComponentTimeTrackerProps): UseComponentTimeTrackerReturn => {
  const [entryTime, setEntryTime] = useState<number | null>(null);
  const [totalTimeInView, setTotalTimeInView] = useState(0);

  useEffect(() => {
    if (inView && entryTime === null) {
      // When component enters view
      setEntryTime(Date.now());
    } else if (!inView && entryTime !== null) {
      // When component exits view
      const exitTime = Date.now();
      const timeSpent = exitTime - entryTime;

      // Update the total time in view for the component
      setTotalTimeInView((prev) => prev + timeSpent);
      setEntryTime(null);

      if(setTotalPageTime){
        setTotalPageTime((prev) => {
          const existingEntry = prev.find(entry => entry.name === id);
          if (existingEntry) {
            // Update the existing entry's time
            return prev.map(entry => 
              entry.name === id ? { ...entry, time: entry.time + timeSpent } : entry
            );
          } else {
            // Add a new entry for the component
            return [...prev, { name: id, time: timeSpent }];
          }
        });
      }
      // Update the overall total time in the parent state
    

     
      console.log(`Time spent in ${id}:`, timeSpent, "ms");

     


      if(pageTracker && totalPageTime){

      }
    }
  }, [inView, entryTime, id, setTotalPageTime]);

  const [hasMounted, setHasMounted] = useState(false);





  return { totalTimeInView, entryTime };
};
