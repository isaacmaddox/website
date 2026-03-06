import { Footer } from "@/components/footer";
import { GlobalNav } from "@/components/nav";
import "@/css/global.css";
import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";

const playfairDisplay = Playfair_Display({
   variable: "--font-playfair-display",
   subsets: ["latin"],
});

const sourceSerif4 = Source_Serif_4({
   variable: "--font-source-serif-4",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Isaac Maddox | Web Developer and Designer",
   description:
      "Hi! I'm Isaac Maddox, a web developer and designer based out of Florida. I am a recent college graduate with a major in Software Design & Development. I have a deep passion for computer programming, and especially enjoy web development.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className={`${playfairDisplay.variable} ${sourceSerif4.variable}`} data-scroll-behavior="smooth">
         <body>
            <GlobalNav />
            {children}
            <Footer />
         </body>
      </html>
   );
}
