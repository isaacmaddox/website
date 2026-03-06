import thumbnailPicture from "@/../public/img/projects/barricade/leading.jpg";
import { Button } from "@/components/button";
import { Hero } from "@/components/hero";
import { DownArrowIcon, OpenInNewIcon } from "@/components/icons";
import "@/css/pages/project-page.css";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
   title: "Barricade Lawn and Landscape | Isaac Maddox",
   description:
      "Barricade Lawn and Landscape is a small landscaping company in South Florida. I designed and developed a website for them to help generate leads.",
};

export default function FALAFELPage() {
   return (
      <main id="top">
         <Hero>
            <Hero.Title>Barricade Lawn and Landscape</Hero.Title>
            <Hero.Subtitle>
               Barricade Lawn and Landscape is a small landscaping company in South Florida. I designed and developed a
               website for them to help generate leads.
            </Hero.Subtitle>
            <Hero.CTAs>
               <Button.Link href="https://barricadelawnandlandscape.com" target="_blank" variant="primary" size="lg">
                  View Live Project
                  <OpenInNewIcon />
               </Button.Link>
               <Button.Link href="https://github.com/isaacmaddox/barricadelawnandlandscape" target="_blank" size="lg">
                  View on GitHub
               </Button.Link>
            </Hero.CTAs>
         </Hero>
         <Image src={thumbnailPicture} alt="A screenshot from the Barricade Lawn and Landscape website" />
         <div className="divide">
            <Button.Link href="#projects" aria-label="Go to main content" size="icon" variant="outline">
               <DownArrowIcon />
            </Button.Link>
         </div>
         <section className="container">
            <h2>Coming soon</h2>
            <p className="text-center">I will be writing about this project in the near future. Stay tuned!</p>
         </section>
      </main>
   );
}
