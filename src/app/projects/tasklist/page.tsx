import thumbnailPicture from "@/../public/img/projects/tasklist/leading.jpg";
import { Button } from "@/components/button";
import { Hero } from "@/components/hero";
import { DownArrowIcon, OpenInNewIcon } from "@/components/icons";
import "@/css/pages/project-page.css";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
   title: "TaskList | Isaac Maddox",
   description:
      "TaskList is a web application that I developed for a local law firm in Pensacola after they lost their existing tool.",
};

export default function FALAFELPage() {
   return (
      <main id="top">
         <Hero>
            <Hero.Title>TaskList</Hero.Title>
            <Hero.Subtitle>
               TaskList is a web application that I developed for a local law firm in Pensacola after they lost their
               existing tool.
            </Hero.Subtitle>
            <Hero.CTAs>
               <Button.Link href="https://tasklist.isaacmaddox.dev" target="_blank" variant="primary" size="lg">
                  View Live Project
                  <OpenInNewIcon />
               </Button.Link>
               <Button.Link href="https://github.com/isaacmaddox/wh-tasklist" target="_blank" size="lg">
                  View on GitHub
               </Button.Link>
            </Hero.CTAs>
         </Hero>
         <div className="divide">
            <Button.Link href="#projects" aria-label="Go to main content" size="icon" variant="outline">
               <DownArrowIcon />
            </Button.Link>
         </div>
         <Image
            src={thumbnailPicture}
            alt="A screenshot from the TaskList application"
            className="leading-image"
            loading="eager"
         />
         <section className="container">
            <h2>Coming soon</h2>
            <p className="text-center">I will be writing about this project in the near future. Stay tuned!</p>
         </section>
      </main>
   );
}
