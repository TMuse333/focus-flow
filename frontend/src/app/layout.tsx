
import { ContextProvider } from "@/context/context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Q3 Designs",
  description: "A website made with the power of the Quantum Realm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   

   
    <html lang="en">
<ContextProvider>


      <body className={inter.className}>{children}</body>
      </ContextProvider>
    </html>

  );
}
