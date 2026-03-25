import collaboratorModalScreenshot from "@/../public/img/projects/tasklist/collaborator_modal_screenshot.png";
import filterListScreenshot from "@/../public/img/projects/tasklist/filter_list_screenshot.png";
import homePageScreenshot from "@/../public/img/projects/tasklist/home_page_screenshot.png";
import listPageScreenshot from "@/../public/img/projects/tasklist/list_page_screenshot.jpg";
import { Button } from "@/components/button";
import { Carousel, CarouselSlide } from "@/components/carousel";
import { Hero } from "@/components/hero";
import { DownArrowIcon, OpenInNewIcon } from "@/components/icons";
import "@/css/pages/project-page.css";
import { Metadata } from "next";

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
            <Button.Link href="#motivation" aria-label="Go to main content" size="icon" variant="outline">
               <DownArrowIcon />
            </Button.Link>
         </div>
         <Carousel>
            <CarouselSlide src={homePageScreenshot} alt="The home page of the application" />
            <CarouselSlide src={listPageScreenshot} alt="The list page of the application" />
            <CarouselSlide src={filterListScreenshot} alt="The list page of the application" />
            <CarouselSlide src={collaboratorModalScreenshot} alt="The list page of the application" />
         </Carousel>
         <section className="container sm">
            <h2>Coming Soon</h2>
            <p className="text-lg">I will be writing a piece about this project soon.</p>
         </section>
      </main>
   );
}
