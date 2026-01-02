import { Link } from "react-router-dom";

interface ProjectCardProps {
   name: string;
   description: string;
   projectLink: string;
   githubLink: string;
   internalLink: string;
   skills?: string[];
}

export function ProjectCard({ name, description, projectLink, githubLink, internalLink, skills }: ProjectCardProps) {
   return (
      <div className="relative mt-6 isolate group/project-card">
         <h3 className="typo-h3 relative -z-10 mb-1 group-hover/project-card:text-green-800 group-hover/project-card:dark:text-green-300">
            {name}
         </h3>
         {skills && (
            <p className="relative -z-10 mb-2 paragraph text-green-800 dark:text-green-200 text-sm">
               {skills.join(", ")}
            </p>
         )}
         <p className="paragraph text-sm relative -z-10 mb-1 group-hover/project-card:text-black group-hover/project-card:dark:text-white">
            {description}
         </p>
         <a href={projectLink} target="_blank" className="link text-sm">
            View project
         </a>
         <a href={githubLink} target="_blank" className="link text-gray-800 dark:text-gray-300 text-sm ml-3">
            View on GitHub
         </a>
         <Link to={internalLink} className="link text-gray-600 dark:text-gray-400 text-sm ml-3">
            Learn more
         </Link>
         <Link to={internalLink} className="absolute inset-0 text-[0px] -z-1">
            Learn more
         </Link>
      </div>
   );
}
