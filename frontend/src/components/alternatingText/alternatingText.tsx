import React, { useState, useEffect } from 'react';
import TypedJS from 'typed.js';


const AlternatingText: React.FC = () => {
    const [index, setIndex] = useState<number>(0);

    // Define the text array
    const text: string[] = [
        'Your custom Built Platform to showcase your knowledge',
        'How you win over clients',
        'A 24/7 lead generator',
        'Your competitive advantage',
        'The difference between being average and great'
    ];

    useEffect(() => {
        const options = {
            strings: [text[index]], // Set the current text based on index
            typeSpeed: 40, // Typing speed in milliseconds
            // startDelay: 1000, // Delay before typing starts (adjust as needed)
            loop: false, // Do not loop through the strings
            showCursor: true, // Show the cursor
            cursorChar: '|', // Character for the cursor
            onComplete: () => {
                // Callback function when typing completes
                setTimeout(() => {
                    // Increment index to move to the next text
                    setIndex((prevIndex) => (prevIndex + 1) % text.length);
                }, 2000); // Delay before moving to the next text (adjust as needed)
            }
        };
    
        // Create a new instance of Typed.js
        const typed = new TypedJS('.typed-text', options);
    
        // Clean up function to destroy Typed instance
        return () => {
            typed.destroy();
        };
    }, [index, text]);
    

    return (
        <section className="alternating-text-container text-center relative mb-4 
        w-[50vw] bg-[#003647]
        ">
            <h1 className='pt-10 text-white text-2xl mb-4 '>FocusFlow Software</h1>
            {/* Display the typed text */}
            <h2 className="typed-text text-white  text-2xl pb-10"></h2>
        </section>
    );
};

export default AlternatingText;
