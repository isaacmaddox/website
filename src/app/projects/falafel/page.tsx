import coursePageScreenshot from "@/../public/img/projects/falafel/course_page.jpg";
import sectionPageScreenshot from "@/../public/img/projects/falafel/section_page.jpg";
import teamBuilderPageScreenshot from "@/../public/img/projects/falafel/team_builder_page.jpg";
import uploadStudentsModalScreenshot from "@/../public/img/projects/falafel/upload_students_modal.jpg";
import { Button } from "@/components/button";
import { Carousel, CarouselSlide } from "@/components/carousel";
import { Hero } from "@/components/hero";
import { DownArrowIcon, OpenInNewIcon } from "@/components/icons";
import "@/css/pages/project-page.css";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "FALAFEL | Isaac Maddox",
   description:
      "FALAFEL is a CRM-like program that was designed to help one of my professors pair students into teams for his courses.",
};

export default async function FALAFELPage() {
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
         <div className="divide">
            <Button.Link href="#motivation" aria-label="Go to main content" size="icon" variant="outline">
               <DownArrowIcon />
            </Button.Link>
         </div>
         <Carousel>
            <CarouselSlide src={coursePageScreenshot} alt="A screenshot of the Course page from FALAFEL" />
            <CarouselSlide src={sectionPageScreenshot} alt="A screenshot of the Section page from FALAFEL" />
            <CarouselSlide
               src={uploadStudentsModalScreenshot}
               alt="A screenshot of the Upload Students modal from FALAFEL"
            />
            <CarouselSlide src={teamBuilderPageScreenshot} alt="A screenshot of the Team Builder page from FALAFEL" />
         </Carousel>
         <section className="container sm">
            <h2>Coming Soon</h2>
            <p className="text-lg">I will be writing a piece about this project soon.</p>
         </section>
      </main>
   );
}
