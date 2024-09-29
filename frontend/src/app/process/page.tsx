import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";

// Lazy load ProcessPage
const ProcessPage = dynamic(() => import("../pageComponents/processPage"), { ssr: false });

// Metadata for the Process page
export const metadata: Metadata = {
  title: "Our Website Creation Process | Client Success",
  description: "Discover how our efficient website creation process ensures client success through creativity and technology at Focusflow Software.",
  keywords: "website creation process, client success, efficient web design, web development process",
  openGraph: {
    title: "Focus Flow Software | Our Efficient Website Creation Process",
    description: "Learn about our systematic approach to website creation that guarantees client success and satisfaction.",
    url: "https://www.focusflowsoftware.com/process",
    images: [
      {
        url: "https://www.focusflowsoftware.com/media/gemeni-two-hand-stick.png",
        width: 1200,
        height: 630,
        alt: "Focus Flow Software - Efficient Website Creation Process"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: 'FocusFlow Software | Website Creation Process'
  },
  icons: {
    icon: ["/favicon.ico?v=4"]
  },
};

const Process = () => {
  return (
    <>
      <ProcessPage />
    </>
  );
};

export default Process;
