
import { ContextProvider } from "@/context/context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Focus Flow software",
  description: "The fastest and most creative web design",
  icons: {
    icon: "/favicon.ico", // Path to your favicon.ico file
  },

  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   

   
    <html lang="en">
    
<ContextProvider>


      <body className={inter.className}>{children}
      <Analytics/>
      </body>
      </ContextProvider>
    </html>

  );
}
