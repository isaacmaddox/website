import { Button } from "@/components/button";
import { About } from "@/components/home/about";
import { ContactBlock } from "@/components/home/contact-block";
import { ExperienceBlock } from "@/components/home/experience-block";
import { HomeHero } from "@/components/home/home-hero";
import { ProjectsBlock } from "@/components/home/projects-block";
import { DownArrowIcon } from "@/components/icons";
import { ScrollInterceptor } from "@/components/scroll-interceptor";
import "@/css/components/experiences.css";
import "@/css/pages/home.css";

export default function Home() {
   return (
      <main id="top">
         <ScrollInterceptor />
         <HomeHero />
         <div className="divide">
            <Button.Link href="#projects" aria-label="Go to main content" size="icon" variant="outline">
               <DownArrowIcon />
            </Button.Link>
         </div>
         <ProjectsBlock />
         <div className="divide"></div>
         <ExperienceBlock />
         <ContactBlock />
         <About />
      </main>
   );
}
