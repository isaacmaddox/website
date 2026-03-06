import { Button } from "@/components/button";
import { About } from "@/components/home/about";
import { ContactBlock } from "@/components/home/contact-block";
import { ExperienceBlock } from "@/components/home/experience-block";
import { HomeHero } from "@/components/home/home-hero";
import { ProjectsBlock } from "@/components/home/projects-block";
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

function DownArrowIcon() {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         height="24px"
         viewBox="0 -960 960 960"
         width="24px"
         fill="#e3e3e3"
         aria-hidden="true">
         <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
      </svg>
   );
}
