import collaboratorModalScreenshot from "@/../public/img/projects/tasklist/collaborator_modal_screenshot.png";
import filterListScreenshot from "@/../public/img/projects/tasklist/filter_list_screenshot.png";
import homePageScreenshot from "@/../public/img/projects/tasklist/home_page_screenshot.png";
import listPageScreenshot from "@/../public/img/projects/tasklist/list_page_screenshot.jpg";
import { Button } from "@/components/button";
import { Carousel, CarouselSlide } from "@/components/carousel";
import { CodeBlock } from "@/components/code-block";
import { Hero } from "@/components/hero";
import { DownArrowIcon, OpenInNewIcon } from "@/components/icons";
import "@/css/pages/project-page.css";
import { getSnippet } from "@/lib/getSnippet";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "TaskList | Isaac Maddox",
   description:
      "TaskList is a web application that I developed for a local law firm in Pensacola after they lost their existing tool.",
};

export default async function FALAFELPage() {
   return (
      <main id="top">
         <Hero>
            <Hero.Title>TaskList</Hero.Title>
            <Hero.Subtitle>
               TaskList is a web application that I developed for a local law firm in Pensacola after they lost their
               existing tool.
            </Hero.Subtitle>
            <Hero.CTAs>
               <Button.Link href="https://tasklist.isaacmaddox.dev" target="_blank" variant="primary" size="lg">
                  View Live Project
                  <OpenInNewIcon />
               </Button.Link>
               <Button.Link href="https://github.com/isaacmaddox/wh-tasklist" target="_blank" size="lg">
                  View on GitHub
               </Button.Link>
            </Hero.CTAs>
         </Hero>
         <div className="divide">
            <Button.Link href="#motivation" aria-label="Go to main content" size="icon" variant="outline">
               <DownArrowIcon />
            </Button.Link>
         </div>
         <Carousel>
            <CarouselSlide src={homePageScreenshot} alt="The home page of the application" />
            <CarouselSlide src={listPageScreenshot} alt="The list page of the application" />
            <CarouselSlide src={filterListScreenshot} alt="The list page of the application" />
            <CarouselSlide src={collaboratorModalScreenshot} alt="The list page of the application" />
         </Carousel>
         <section className="container sm text-start" id="motivation">
            <h2>Motivation</h2>
            <p className="text-lg">Why I created TaskList</p>
            <p>
               TaskList was developed to replace a tool that was being phased out at a local law firm in Pensacola. The
               firm previously used the Outlook task feature, and couldn&apos;t continue using it after the recent
               Outlook update. When I learned of this, I talked with an employee, who is conveniently my girlfriend, to
               learn what they needed for this project.
            </p>
         </section>
         <section className="container sm text-start">
            <h2>Requirements and Planning</h2>
            <p>This project had fairly simple requirements:</p>
            <ul>
               <li>Create, edit, and delete lists including a “shares” list for collaboration</li>
               <li>Create, edit, and delete tasks with a name, due date, and priority toggle</li>
               <li>Provide optional live updates to client machines</li>
               <li>Filter and search all tasks in a list</li>
            </ul>
            <p>
               After gathering these requirements, I began planning how I would build this project. Because of the need
               for live updates, I believed that Firebase Realtime Database would be a good choice for the database.
               This would give me a flexible JSON tree (allowing for future updates easier than a traditional relational
               database) and stupid simple realtime updates.
            </p>
            <p>
               I then worked from this &mdash; I chose to use Vite to bundle an entirely client-side application to
               prioritize speed. I have a fondness for React, especially for projects like this &mdash; with large,
               repetitive datasets that just make sense to be broken into components. TypeScript is always my go-to when
               I get to choose, so I scaffolded a Vite React + TS project. I also decided to use ShadCN UI to make the
               user interface development even speedier, with the added bonus of out-of-the-box accessibility!
            </p>
         </section>
         <section className="container sm text-start">
            <h2>Development &amp; Early Life</h2>
            <p>
               The development for TaskList took a couple of weeks alongside my part-time job and school. I worked on it
               every chance I got during the evenings. When I get a project to work on and have a true purpose for it,
               it is easy for me to get carried away. This happened many nights, I would stay up until well past
               midnight without realizing it.
            </p>
            <p>
               After I finished the initial 1.0 version, I had my girlfriend test and give me feedback. Once she was
               satisfied, the project was presented to one of the partners at the law firm and readily adopted!
            </p>
         </section>
         <section className="container sm text-start">
            <h2>Code Insights</h2>
            <p>
               A couple of weeks after TaskList went into daily use and a few more requests trickled down the pipeline,
               I decided that I wanted to rewrite most of the internals. The code, while working, was convoluted and did
               not have clear separation of concerns. I chose to rewrite from scratch using a strict tier system for the
               parts of the app.
            </p>
            <p>
               I implemented services to handle database interaction, allowing for a migration to another database
               technology if that should be a requirement later in the lifetime of this product.
            </p>
            <p>
               I made sure while implementing these services to type all communications between layers to allow for an
               easier developer experience. Below you can read the file containing the overarching types that I used for
               my service layer.
            </p>
            <CodeBlock
               language="typescript"
               file="src/lib/services/index.ts"
               fileLink="https://github.com/isaacmaddox/wh-tasklist/blob/main/src/lib/services/index.ts">
               {await getSnippet("/tasklist/service-types.ts")}
            </CodeBlock>
         </section>
         <section className="container sm text-start">
            <h2>Database Security</h2>
            <p>
               While architecting this project, I studied Firebase&apos;s security system so that I could best protect
               users&apos; data. I made it clear to the clients that no confidential information should be entered into
               the program, but that there should also be no unauthorized data use because of the security rules.
            </p>
            <p>
               Firebase RTDB uses a top-down approach to security, meaning once someone has permission to access a
               specific data point in the JSON tree, they can access all of its children too. After research and much
               testing, I ended up with the following security rules in Firebase:
            </p>
            <CodeBlock language="json" file="Firebase security rules">
               {await getSnippet("/tasklist/security-rules.json")}
            </CodeBlock>
         </section>
         <section className="container sm text-start">
            <h2>Feedback</h2>
            <p>
               Since the law firm adopted my program as their daily use task tracker, they have experienced less
               headache and more freedom to do what they need in the program. Through constant communication with the
               daily users of the application, I have delivered multiple new features that help to improve their menial
               tasks, such as deleting all completed tasks or even duplicating tasks to happen at fixed intervals.
            </p>
            <p>I asked for direct feedback from a few employees at the law firm, and this is what they had to say:</p>
            <blockquote>
               <p>
                  Isaac Maddox made my life (and my co-workers&apos;) much easier by creating this program for our
                  tasks. Managing everything is a lot of work, and when we lost our previous task list, we were all in a
                  panic. Mr. Maddox truly came to the rescue with this solution. The new task list is also very easy to
                  navigate and is a huge improvement over the old one we used in our previous email program.
               </p>
               <p>
                  <em>Haley, employee at the law firm</em>
               </p>
            </blockquote>
            <blockquote>
               <p>
                  After our firm&apos;s conversion to Windows 11, we quickly discovered that Outlook&apos;s Task Program
                  no longer fit our team&apos;s needs&hellip;. Isaac Maddox learned of our struggles, listened to what
                  we needed as a group, and rapidly built a program designed with us in mind. After Beta testing the new
                  program, he quickly and efficiently implemented a few design suggestions, and we were able to launch
                  before any of us thought possible. Isaac Maddox saved our team a lot of headaches and additional
                  unnecessary stress by listening to our needs and designing a program that worked for us and hectic
                  schedules. I would highly recommend him for your programming needs.
               </p>
               <p>
                  <em>Amanda, employee at the law firm</em>
               </p>
            </blockquote>
         </section>
      </main>
   );
}
