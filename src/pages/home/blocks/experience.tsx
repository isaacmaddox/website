import { CustomMarkdown } from "@/components/common/custom-markdown";
import { experience } from "@/content/home.json";
import { ExperienceCard } from "@/pages/home/blocks/experience-card";

export function HomePageExperience() {
  return (
    <section aria-labelledby="experience">
      <h2 id="experience" className="typo-h2">
        My Experience
      </h2>

      {experience.map((experience, idx) => {
        return (
          <ExperienceCard title={experience.title} company={experience.company} key={idx}>
            <CustomMarkdown>{experience.body}</CustomMarkdown>
          </ExperienceCard>
        );
      })}
    </section>
  );
}
