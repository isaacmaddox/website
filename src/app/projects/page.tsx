import { Button } from "@/components/button";
import { ProjectBlock } from "@/components/projects/project-card";
import "@/css/pages/projects.css";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "My Projects | Isaac Maddox",
   description:
      "Since I began programming, I have had the chance to make many projects. These are the projects that I am most proud of.",
};

export default function ProjectsPage() {
   return (
      <main id="top">
         <section className="container">
            <h1>Projects</h1>
            <p className="text-lg">
               Since I began programming, I have had the chance to make many projects. These are the projects that I am
               most proud of.
            </p>
         </section>
         <div className="divide">
            <Button.Link href="#projects" aria-label="Go to main content" size="icon" variant="outline">
               <DownArrowIcon />
            </Button.Link>
         </div>
         <section className="project-grid container lg" id="projects">
            <ProjectBlock
               title="TaskList"
               description="A task list app made for a local law firm who lost their existing tooling"
               liveURL="https://tasklist.isaacmaddox.dev"
               href="/projects/tasklist"
               githubURL="https://github.com/isaacmaddox/wh-tasklist"
               image="/img/projects/tasklist/list_page_screenshot.jpg"
            />
            <ProjectBlock
               reverse
               title="FALAFEL"
               description="A student relationship manager created for one of my professors who had issues pairing students."
               liveURL="https://falafel.isaacmaddox.dev"
               href="/projects/falafel"
               githubURL="https://github.com/isaacmaddox/falafel"
               image="/img/projects/falafel/thumbnail.jpg"
            />
            <ProjectBlock
               title="Barricade Lawn and Landscape"
               description="A website for a small lawn care business in south Florida"
               liveURL="https://barricadelawnandlandscape.com"
               href="/projects/barricade"
               githubURL="https://github.com/isaacmaddox/barricadelawnandlandscape"
               image="/img/projects/barricade/thumbnail.jpg"
            />
         </section>
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
