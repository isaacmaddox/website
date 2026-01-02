import { projects } from "@/content/home.json";
import { ProjectCard } from "@/pages/home/blocks/project-card";

export function HomePageProjects() {
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
