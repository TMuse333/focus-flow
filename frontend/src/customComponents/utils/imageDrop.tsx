import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import logo from '../../../public/media/focusFlow-brain-nobg.webp'

interface ImageUploaderProps {
  className: string;
  animationVariants?: Variants; // Framer Motion variants
  inView?: boolean;
  setSrc?:React.Dispatch<React.SetStateAction<string>> 
  showImage?:boolean
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ className, animationVariants, inView,
setSrc, showImage }) => {
  const [droppedImages, setDroppedImages] = useState<string[]>([]);

  // Prevent default behavior for dragover and drop events
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // Handle the dropped image files
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  
    const files = event.dataTransfer.files;
    if (files.length === 1 && files[0].type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageSrc = reader.result as string;
        setDroppedImages([imageSrc]);
        if (setSrc) {
          setSrc(imageSrc); // Set the dropped image src to the provided setSrc function
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };
  
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length === 1 && files[0].type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageSrc = reader.result as string;
        setDroppedImages([imageSrc]);
        if (setSrc) {
          setSrc(imageSrc); // Set the selected image src to the provided setSrc function
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };
  

  return (
    <>
      {droppedImages.length > 0 && showImage ? (
        <motion.img
          src={droppedImages[0]}
          alt="Dropped Image"
          className={className}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          variants={animationVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        />
      ) : (
        <>
          <motion.div
          
            className={className}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            variants={animationVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
           
            
          >
            
          

            <p className="text-gray-500">Drag and drop an image here or click to upload</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              className="mt-2 p-1"
            />
          </motion.div>
        </>
      )}
    </>
  );
};

export default ImageUploader;
