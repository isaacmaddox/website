import collaboratorModalScreenshot from "@/../public/img/projects/tasklist/collaborator_modal_screenshot.png";
import filterListScreenshot from "@/../public/img/projects/tasklist/filter_list_screenshot.png";
import homePageScreenshot from "@/../public/img/projects/tasklist/home_page_screenshot.png";
import listPageScreenshot from "@/../public/img/projects/tasklist/list_page_screenshot.jpg";
import { Button } from "@/components/button";
import { Carousel, CarouselSlide } from "@/components/carousel";
import { Hero } from "@/components/hero";
import { DownArrowIcon, OpenInNewIcon } from "@/components/icons";
import "@/css/pages/project-page.css";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "TaskList | Isaac Maddox",
   description:
      "TaskList is a web application that I developed for a local law firm in Pensacola after they lost their existing tool.",
};

export default function FALAFELPage() {
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
         <section className="container sm" id="motivation">
            <h2>Motivation</h2>
            <p className="text-lg">Why I created TaskList</p>
            <p>
               My girlfriend works at a law firm in Pensacola, and her entire team relied heavily on Outlook&apos;s task
               feature. At some point, they lost access to this tool or it became insufficient for their daily
               operations. I had a lot of free time and decided that to fill my time, I would try to make an app that
               they could use — a simple todo app with the extra niceties that they needed and would use every day.
            </p>
         </section>
         <section className="container sm">
            <h2>The App</h2>
            <p className="text-lg">What TaskList is and what it does</p>
            <p>
               At its core, TaskList is exactly what it sounds like. It allows the user to create tasks with due dates
               and optionally flag them. After being created, they can be checked off and marked as done.
            </p>

            <p>
               TaskList also has some more features that make it more tailored to what the employees at the law firm
               were looking for. The biggest example of this is the collaborative and real-time capabilities the app
               offers. Each user who is allowed access to the list receives real-time updates of what is happening in
               the list. This allows collaborative use without having to worry about keeping track of what everyone is
               doing at all times. Not everybody likes this, though, so they can opt out of this feature. In that case,
               they are provided a button that will refresh the list on command.
            </p>

            <p>
               Additionally, TaskList offers some basic searching, filtering, and bulk actions. The user can search for
               keyword(s) in a task, filter by due date using a range, and choose some pre-built filters, such as
               &quot;Completed&quot; and &quot;Flagged.&quot;
            </p>
         </section>
         <section className="container sm">
            <h2>Technology</h2>
            <p className="text-lg">What I used to build TaskList</p>
            <p>
               I chose to create a fully client-side application using Vite + React, for a couple of reasons. Firstly, I
               am hosting this app on Netlify, which is a serverless hosting option. This keeps costs low (as of
               writing, the client has spent nothing on hosting costs). To make sure the app works fast, a client-side
               app seemed like the best solution.
            </p>

            <p>
               To enable the real-time capabilities of the app, I felt like Firebase RTDB was the right choice. I had
               worked with it during my Client-Side Programming course at UWF and loved the simple API and offline
               capabilities that come with it out of the box.
            </p>

            <p>
               I wanted this project to progress rapidly, so that I could present the product to the law firm as soon as
               I was able. I wanted to focus on making sure the function was perfect, so the UI was the best place to
               find an aid. To help me, I chose to use ShadCN, as it allowed for rapid-paced development of the
               interface and also provided accessible components from Radix UI.
            </p>
         </section>
         <section className="container sm">
            <h2>The Result</h2>
            <p className="text-lg">TaskList is still used daily at the law firm</p>
            <p>
               After I finished developing TaskList, my girlfriend presented it to her boss and a few other employees at
               the law firm, and it was adopted as their official tool for keeping track of their tasks. After it was
               adopted, I did a full rewrite of the application as I wasn&apos;t quite happy with my initial solution.
               The coupling was too high and I wanted to implement more separation of concerns to allow for improvements
               to individual parts of the application easier.
            </p>
            <h3>Always Evolving</h3>
            <p>
               Since TaskList became the tool of choice for the law firm, there have been a couple of new features that
               were requested. As each came up, I talked with the requesting party to figure out what would work best,
               and each time was able to deliver a solution that was efficient, inexpensive, and worked best for the
               team.
            </p>

            <p>
               To me, this is the best part of creating software that is used daily; learning of new problems that need
               to be solved and creating a solution for them is a very rewarding process. I also greatly enjoy watching
               the project continuously evolve into a tool that serves its users even better.
            </p>
         </section>
      </main>
   );
}
