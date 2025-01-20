import { motion } from 'framer-motion';
import React, { ElementType, useState, useEffect } from 'react';

interface TypeAlongTextProps {
  text: string; // The text to animate
  as?: ElementType; // The HTML tag to render (default: 'p')
  styles?: string; // Additional CSS classes
  keywords?: string[]; // Highlighted keywords
  startAnimation?: boolean; // Control when animation starts
  setAnimationComplete?: React.Dispatch<React.SetStateAction<boolean>>; // Notify when animation is complete
  duration?: number; // Optional duration to control animation speed (default: 0.3 seconds)
}

const TypeAlongText: React.FC<TypeAlongTextProps> = ({
  text,
  as: Tag = 'p', // Default to 'p' tag
  styles = '',
  keywords = [],
  startAnimation = false, // Default to false if not provided
  setAnimationComplete, // Optional function to notify when animation is complete
  duration = 0.3, // Default animation duration for each character (can be customized)
}) => {
  const [highlightComplete, setHighlightComplete] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (startAnimation && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [startAnimation, animationStarted]);

  const isKeyword = (segment: string) => keywords.includes(segment);

  const handleAnimationComplete = () => {
    setHighlightComplete(true);
    if (setAnimationComplete) {
      setAnimationComplete(true); // Notify parent that the animation is complete
    }
  };

  let charIndexCounter = 0;

  return (
    <Tag className={`inline-block text-center mx-auto ${styles}`}>
      {text.split('\n').map((line, lineIndex) => (
        <span key={lineIndex} className="block"> {/* Render each line as a block */}
          {line.split(' ').map((word, wordIndex) => (
            <span key={`${lineIndex}-${wordIndex}`}> {/* Add spacing between words */}
              {word.split('').map((char, charIndex) => {
                const cumulativeDelay = charIndexCounter * 0.05;
                charIndexCounter++;

                const isLastCharacter =
                  charIndexCounter === text.replace(/\s/g, '').length;

                return (
                  <motion.span
                    key={`${lineIndex}-${wordIndex}-${charIndex}`}
                    initial={{ y: -20, opacity: 0 }}
                    animate={startAnimation ? { y: 0, opacity: 1 } : {}}
                    transition={{
                      delay: cumulativeDelay,
                      duration,
                    }}
                    className={`inline-block whitespace-pre-line ${
                      highlightComplete && isKeyword(word) ? 'animate-gradient' : ''
                    }`}
                    style={
                      highlightComplete && isKeyword(word)
                        ? {
                            background: 'linear-gradient(90deg, #f5e4d4, #ddbeab, #b08848)',
                            backgroundSize: '200% 200%',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            animation: 'gradient-animation 8s ease-in-out infinite',
                            transition: 'background 0.5s ease, color 0.5s ease',
                          }
                        : undefined
                    }
                    whileHover={{
                      y: -12,
                      transition: {
                        duration: 0.2,
                        ease: 'easeInOut',
                      },
                    }}
                    onAnimationComplete={isLastCharacter ? handleAnimationComplete : undefined}
                  >
                    {char}
                  </motion.span>
                );
              })}
              &nbsp; {/* Add space between words */}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
};

export default TypeAlongText;