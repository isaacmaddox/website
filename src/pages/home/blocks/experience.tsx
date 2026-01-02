import { CustomMarkdown } from "@/components/common/custom-markdown";
import content from "@/content/home.json";
import { ExperienceCard } from "@/pages/home/blocks/experience-card";

export function HomePageExperience() {
   return (
      <section aria-labelledby="experience" className="p-6 border-b dashed-border">
         <h2 id="experience" className="typo-h2">
            My Experience
         </h2>

         {content.experience.map((experience) => {
            return (
               <ExperienceCard title={experience.title} company={experience.company}>
                  <CustomMarkdown>{experience.body}</CustomMarkdown>
               </ExperienceCard>
            );
         })}
      </section>
   );
}
