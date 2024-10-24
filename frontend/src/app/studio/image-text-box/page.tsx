import { Metadata } from "next";
import dynamic from "next/dynamic";
import ImageTextBoxStudio from "@/app/studioPageComponents/imageTextBoxPage";

import React from "react";

export const metadata: Metadata = {
    title: "Get creative and educated| Halifax Web Design by Focus Flow Software",
    description: "Want to learn more about how websites are made and customize them yourself? Welcome to the FocusFlow Software studio where visitors can customize some amazing components",
    keywords: "Halifax web design, collaborate with Focus Flow Software, responsive web design, creative web development, fast website design",
    openGraph: {
      title: "Get creative | Halifax Web Design by Focus Flow Software",
      description: "Customize the image text box with no coding",
      url: "https://www.focusflowsoftware.com/studio/image-text-box",
     
      type: "website",
      locale: "en_US",
      siteName: "Focus Flow Software | Halifax Web Design"
    },
    twitter: {
      card: "summary_large_image",
      title: "Get creative | Halifax Web Design by Focus Flow Software",
      description: "Learn more about fundamental website components while getting to customize them with your own pictures and text with no coding.",
      // Uncomment and replace with your actual image URL
      // images: ["https://q3-visuals.vercel.app/images/og-image.jpg"]
    },
    icons: {
      icon: ["/favicon.ico"]
    },
    alternates: {
      canonical: "https://www.focusflowsoftware.com/studio/image-text-box"
    }
  };
const ImageTextBoxArticle = () => {

return (
    <>
    <main className="w-screen">

      
     
        <ImageTextBoxStudio/>
    </main>
    </>
)

}


export default ImageTextBoxArticle