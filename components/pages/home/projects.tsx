import { ProjectCard } from "@/components/project-card";

interface Project {
   name: string;
   skills: string[];
   description: string;
   links: {
      live: string;
      github: string;
      internal: string;
   };
}

export function HomePageProjects({ projects }: { projects: Project[] }) {
   return (
      <section className="border-b dashed-border p-6" aria-labelledby="projects">
         <h2 id="projects" className="typo-h2 mb-2">
            My Projects
         </h2>
         <p className="paragraph">The projects that I am most proud of</p>

         {projects.map((project, idx) => {
            return (
               <ProjectCard
                  name={project.name}
                  description={project.description}
                  projectLink={project.links.live}
                  githubLink={project.links.github}
                  internalLink={project.links.internal}
                  skills={project.skills}
                  key={idx}
               />
            );
         })}
      </section>
   );
}
