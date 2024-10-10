import React, { FC } from 'react';
import ImageTextBoxUI from '../customComponents/imageTextBox/imageTextBox.custom'; // Add other components as needed

// A mapping of component names to components
const componentMap = {
  ImageTextBoxUI,
  // Add other components here as needed
};

interface ComponentLoaderProps {
  componentName: keyof typeof componentMap; // Ensure this matches the keys in componentMap
}

const ComponentLoader: FC<ComponentLoaderProps> = ({ componentName }) => {
  const Component = componentMap[componentName];
  return Component ? <Component /> : null; // Render the component if it exists
};

export default ComponentLoader;
