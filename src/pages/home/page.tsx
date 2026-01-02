import { HomePageExperience } from "@/pages/home/blocks/experience";
import { HomePageProjects } from "@/pages/home/blocks/projects";
import { HomePageHero } from "./blocks/hero";

export function HomePage() {
   return (
      <>
         <HomePageHero />
         <HomePageProjects />
         <HomePageExperience />
      </>
   );
}
