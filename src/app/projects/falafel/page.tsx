import thumbnailPicture from "@/../public/img/projects/falafel/leading.jpg";
import { Button } from "@/components/button";
import { Hero } from "@/components/hero";
import { DownArrowIcon, OpenInNewIcon } from "@/components/icons";
import "@/css/pages/project-page.css";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
   title: "FALAFEL | Isaac Maddox",
   description:
      "FALAFEL is a CRM-like program that was designed to help one of my professors pair students into teams for his courses.",
};

export default function FALAFELPage() {
   return (
      <main id="top">
         <Hero>
            <Hero.Title>FALAFEL</Hero.Title>
            <Hero.Subtitle>
               FALAFEL is a CRM-like program that was designed to help one of my professors pair students into teams for
               his courses.
            </Hero.Subtitle>
            <Hero.CTAs>
               <Button.Link href="https://falafel.isaacmaddox.dev" target="_blank" variant="primary" size="lg">
                  View Live Project
                  <OpenInNewIcon />
               </Button.Link>
               <Button.Link href="https://github.com/isaacmaddox/falafel" target="_blank" size="lg">
                  View on GitHub
               </Button.Link>
            </Hero.CTAs>
         </Hero>
         <Image src={thumbnailPicture} alt="A screenshot from the FALAFEL application" />
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
