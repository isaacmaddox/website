import { HomePageExperience } from "@/components/pages/home/experience";
import { HomePageHero } from "@/components/pages/home/hero";
import { HomePageNav } from "@/components/pages/home/nav";
import { HomePageProjects } from "@/components/pages/home/projects";
import { HomePageSkills } from "@/components/pages/home/skills";

const projects = [
   {
      name: "TaskList",
      skills: ["Firebase", "Vite", "React", "TailwindCSS", "TypeScript"],
      description:
         "A relatively simple task manager app developed to solve a problem a local law agency was facing. Now, it is being used daily in the office to facilitate their vital functions.",
      links: {
         live: "https://tasklist.isaacmaddox.dev",
         github: "https://github.com/isaacmaddox/wh-tasklist",
         internal: "/projects/tasklist",
      },
   },
   {
      name: "Barricade Lawn and Landscape",
      skills: ["Serverless Hosting", "EJS", "Express", "NodeJS", "TypeScript", "Resend"],
      description: "A website made for some family members who own a lawn and landscape business",
      links: {
         live: "https://barricadelawnandlandscape.com",
         github: "https://github.com/isaacmaddox/barricadelawnandlandscape",
         internal: "/projects/barricade",
      },
   },
   {
      name: "FALAFEL",
      skills: ["NextJS", "React", "TailwindCSS", "TypeScript", "Python", "Flask", "PostgreSQL", "Docker"],
      description:
         "My Capstone project. FALAFEL is an app designed to solve another real-world problem for my professor. He stated at the end of the semester that he could see himself using the app in his day-to-day.",
      links: {
         live: "https://falafel.isaacmaddox.dev",
         github: "https://github.com/isaacmaddox/falafel",
         internal: "/projects/falafel",
      },
   },
];

const skills = [
   "TypeScript",
   "JavaScript",
   "CSS",
   "SCSS",
   "HTML",
   "Python",
   "Git",
   "GitHub",
   "Java",
   "C++",
   "React",
   "NextJS",
   "Java Server Pages (JSP)",
];

const experiences = [
   {
      title: "Teacher's Asistant",
      company: "University of West Florida",
      body: "As a teacher's assistant, I worked with Dr. Evorell L. Fridge, grading student assignments and creating some assignments as well. I was responsible for creating an introductory Python project, and planning and building the semester project that the students would complete.",
   },
   {
      title: "User Experience Generalist",
      company: "Ducks Unlimited",
      body: "As a result of the work completed for the MARCOMMS team during my time as a Web Devleopment Intern, I was hired as a User Experience Generalist at the same company. In this role, I am responsible for designing components and pages for use on the [ducks.org](https://ducks.org) website. I have also lead many efforts for the company, including the design and development of the [duckDNA website](https://duckdna.com), the [DU National Convention app website](https://ducon.live), and the Ducks Unlimited mobile app ([Play Store](https://play.google.com/store/apps/details?id=org.ducks.android.du.official), [App Store](https://apps.apple.com/us/app/ducks-unlimited/id563665674)).",
   },
   {
      title: "Web Development Intern",
      company: "Ducks Unlimited",
      body: "In January of 2023, I was brought on as an intern to the web develoment team to assist in a full rewrite of the website, migrating to a new CMS. During this internship, I learned many invaluable skills that will undoubtedly help me throughout my career. I learned how to effectively use Git and GitHub to work collaboratively on a project, how a CMS works, Java Server Pages, and gained professional experience using CSS (SCSS) and JavaScript.",
   },
   {
      title: "Intern",
      company: "Air Force Research Laboratory",
      body: "As a part of the [Air Force Research Laboratory Scholars program](https://afrlscholars.usra.edu/), I worked with a team responsbile for LiDAR research. I rewrote some existing applications, migrating them from Python to MATLAB, using the MATLAB App Designer. I created an app to interact with a FLIR camera and a lens rotator, to capture and store photos for research. I also built an app that was responsible for managing the power state of a laser, as well as the rotation state of multiple polarized lenses. Lastly, I worked closely with Dr. Jarrod Brown to create an application that used serial communications to control a QPT 90 Positioner. You can view the work that I completed in this position [here](https://github.com/isaacmaddox/AFRL_Summer_Internship).",
   },
];

export default function Home() {
   return (
      <>
         <HomePageNav />
         <HomePageHero />
         <HomePageProjects projects={projects} />
         <HomePageSkills skills={skills} />
         <HomePageExperience experiences={experiences} />
      </>
   );
}
