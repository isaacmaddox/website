import { ExperienceCard } from "@/components/experience-card";
import { components } from "@/mdx-components";
import Markdown, { Components } from "react-markdown";

interface Experience {
   title: string;
   company: string;
   body: string;
}

export function HomePageExperience({ experiences }: { experiences: Experience[] }) {
   return (
      <section aria-labelledby="experience">
         <h2 id="experience" className="typo-h2">
            My Experience
         </h2>

         {experiences.map((experience, idx) => {
            return (
               <ExperienceCard title={experience.title} company={experience.company} key={idx}>
                  <Markdown components={components as Components}>{experience.body}</Markdown>
               </ExperienceCard>
            );
         })}
      </section>
   );
}
