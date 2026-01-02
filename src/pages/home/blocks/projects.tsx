import { ProjectCard } from "@/pages/home/blocks/project-card";

export function HomePageProjects() {
   return (
      <section className="border-b dashed-border p-6" aria-labelledby="projects">
         <h2 id="projects" className="typo-h2 mb-2">
            My Projects
         </h2>
         <p className="paragraph">The projects that I am most proud of</p>

         <ProjectCard
            name="TaskList"
            description="A relatively simple task manager app developed to solve a problem a local law agency was facing. Now, it
               is being used daily in the office to facilitate their vital functions."
            projectLink="https://tasklist.isaacmaddox.dev"
            githubLink="https://github.com/isaacmaddox/wh-tasklist"
            internalLink="/projects/tasklist"
            skills={["Firebase", "Vite", "React", "TailwindCSS", "TypeScript"]}
         />
         <ProjectCard
            name="FALAFEL"
            description="My Capstone project. FALAFEL is an app designed to solve another real-world problem for my professor. He stated at the end of the semester that he could see himself using the app in his day-to-day."
            projectLink="https://falafel.isaacmaddox.dev"
            githubLink="https://github.com/isaacmaddox/falafel"
            internalLink="/projects/falafel"
            skills={["NextJS", "React", "TailwindCSS", "TypeScript", "Python", "Flask", "PostgreSQL", "Docker"]}
         />
      </section>
   );
}
