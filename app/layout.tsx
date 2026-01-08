import type { Metadata } from "next";
import { Stack_Sans_Headline, Stack_Sans_Text } from "next/font/google";
import "./globals.css";

const heading = Stack_Sans_Headline({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const body = Stack_Sans_Text({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Isaac Maddox",
   description: "Web Developer and Designer",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${heading.variable} ${body.variable} antialiased`}>
            <div className="w-full max-w-200 mx-auto border-x dashed-border bg-white dark:bg-gray-800/15">
               <div className="h-12 border-b dashed-border bg-slanted from-gray-300 dark:from-gray-700" id="top"></div>
               {children}
               <div className="h-12 border-b dashed-border bg-slanted from-gray-300 dark:from-gray-700" id="top"></div>
            </div>
         </body>
      </html>
   );
}
