import type { Metadata } from "next";
import { Stack_Sans_Headline, Stack_Sans_Text } from "next/font/google";
import "./globals.css";

const heading = Stack_Sans_Headline({
   variable: "--font-stack-sans-headline",
   subsets: ["latin"],
   fallback: ["serif"],
});

const body = Stack_Sans_Text({
   variable: "--font-stack-sans-text",
   subsets: ["latin"],
   fallback: ["sans-serif"],
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
