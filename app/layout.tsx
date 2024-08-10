import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

// this code takes care for the font in the website
const inter = Inter({ subsets: ["latin"] });

// This code takes care of the metadata for when the web is deployed and the name of 
// website
export const metadata: Metadata = {
  title: "PORTOFOLIO",
  description: "Portofolio, SPARTA HMIF 2023, Software Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export function MainLayout ({
  children1, 
  children2
}: Readonly <{
  children1 : React.ReactNode;
  children2 : React.ReactNode;}>) {
    return (
      <div style={{display: 'flex'}}>
        <div style={{flex : 1, margin : 5, padding : 10, borderRadius : 10, backgroundColor : "beige"}}>
          {children1}
        </div>

        <div style={{flex : 1, margin : 5, padding : 10, borderRadius : 10, backgroundColor : "beige"}}>
          {children2}
        </div>
      </div>
      
    )
  }