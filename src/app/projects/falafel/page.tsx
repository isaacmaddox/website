import coursePageScreenshot from "@/../public/img/projects/falafel/course_page.jpg";
import sectionPageScreenshot from "@/../public/img/projects/falafel/section_page.jpg";
import teamBuilderPageScreenshot from "@/../public/img/projects/falafel/team_builder_page.jpg";
import uploadStudentsModalScreenshot from "@/../public/img/projects/falafel/upload_students_modal.jpg";
import { Button } from "@/components/button";
import { Carousel, CarouselSlide } from "@/components/carousel";
import { CodeBlock } from "@/components/code-block";
import { Hero } from "@/components/hero";
import { DownArrowIcon, OpenInNewIcon } from "@/components/icons";
import { ImageModal } from "@/components/image-modal";
import "@/css/components/carousel.css";
import "@/css/pages/project-page.css";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "FALAFEL | Isaac Maddox",
   description:
      "FALAFEL is a CRM-like program that was designed to help one of my professors pair students into teams for his courses.",
};

export default function FALAFELPage() {
   return (
      <main id="top">
         <Hero>
            <Hero.Title>FALAFEL</Hero.Title>
            <Hero.Subtitle>
               FALAFEL is a CRM-like program that was designed to help one of my professors pair students into teams for
               his courses.
            </Hero.Subtitle>
            <Hero.CTAs>
               <Button.Link href="https://falafel.isaacmaddox.dev" target="_blank" variant="primary" size="lg">
                  View Live Project
                  <OpenInNewIcon />
               </Button.Link>
               <Button.Link href="https://github.com/isaacmaddox/falafel" target="_blank" size="lg">
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
            <CarouselSlide src={coursePageScreenshot} alt="A screenshot of the Course page from FALAFEL" />
            <CarouselSlide src={sectionPageScreenshot} alt="A screenshot of the Section page from FALAFEL" />
            <CarouselSlide
               src={uploadStudentsModalScreenshot}
               alt="A screenshot of the Upload Students modal from FALAFEL"
            />
            <CarouselSlide src={teamBuilderPageScreenshot} alt="A screenshot of the Team Builder page from FALAFEL" />
         </Carousel>
         <section className="container sm" id="motivation">
            <h2>Motivation</h2>
            <p className="text-lg">Why we created FALAFEL</p>
            <p>
               In my last semester in college, I took a Capstone course for which we had to create a semester-long
               project in a team. Our professor suggested an application to help him keep up with all of his students.
               He said because of how many courses he taught each semester, it was easy to lose track of this kind of
               stuff.
            </p>
         </section>
         <section className="container sm">
            <h2>Technology</h2>
            <p className="text-lg">What technologies we chose for FALAFEL and why</p>
            <p>
               My team was composed of two Cybersecurity majors, a Computer Science major, and myself &mdash; a Software
               Design and Development major. The Cybersecurity program did not do much in the way of programming, so
               those two team members were not very comfortable with newer technologies. For this reason, my team opted
               to do a separated frontend and backend solution. The CS major and I would develop a NextJS application
               that was primarily frontend, but also allowed for us to have our own server (for security purposes). At
               the same time, our teammates would develop a REST API using Python and Flask that we would communicate
               with. For our database, we chose to use PostgreSQL because they had an easy-to-use Docker image that we
               could set up.
            </p>
            <p>
               Because of the sensitive nature of the data that would be stored in this app, we decided that an
               offline-first approach would be beneficial. We structured our application to be run entirely by Docker,
               started with one command. This meant that the user of the app (in this case, our professor), could set up
               the app anywhere that they wanted (say, a server in their home) and connect securely through that.
            </p>
         </section>
         <section className="container sm">
            <h2>The App</h2>
            <p className="text-lg">What FALAFEL does</p>
            <p>
               FALAFEL organizes data into four main entities: Courses, Sections, Students, and Teams. Each user can own
               many Courses, each Course has many Sections and Teams, and each Section can have many Students. Finally,
               there is the critical relationship: each Team can have many Students.
            </p>
            <p>The basic flow of the app is as follows:</p>
            <ol>
               <li>Create a Course</li>
               <li>Create the Sections in the course</li>
               <li>Upload Students into each Section</li>
               <li>Create Teams in the Course</li>
               <li>Put Students on the Teams</li>
            </ol>
            <p>
               Each of these actions can be performed manually, but we also offered some automation. For instance,
               Students can be uploaded from a CSV file format. To do this, the user has to map their columns to the
               data that FALAFEL needs to identify each student.
            </p>
            <figure>
               <ImageModal
                  src={uploadStudentsModalScreenshot}
                  alt="A screenshot of the Upload Students Modal from FALAFEL"
               />
               <figcaption>
                  This is the modal that allows users to map their CSV data to FALAFEL&apos;s structure in order to
                  upload students automatically
               </figcaption>
            </figure>
         </section>
         <section className="container sm">
            <h2>Technical Overview</h2>
            <p className="text-lg">A view into the inner workings of FALAFEL</p>
            <h3>Front End</h3>
            <p>
               The{" "}
               <a href="https://github.com/isaacmaddox/falafel/tree/main/client" target="_blank">
                  front-end portion
               </a>{" "}
               of FALAFEL is a NextJS application.
            </p>
            <CodeBlock language="css" file="carousel.css">
               {`.carousel-container {
   display: grid;
   grid-template-columns: 1fr max-content max-content calc(5% - 0.5rem);
   grid-template-rows: max-content max-content;
   gap: 0.5rem;
   position: relative;

   @media (width < 56.25rem) {
      grid-template-columns: 1fr max-content max-content;
   }

   & > .carousel {
      grid-column: 1 / -1;
   }

   & > button {
      grid-row: 2;
   }

   & > .carousel-container_back-button {
      anchor-name: --back-button;
      grid-column: 2;
   }

   & > .carousel-container_forward-button {
      grid-column: 3;
   }
}

.carousel {
   display: flex;
   gap: 1rem;
   overflow: auto;
   padding-block-end: 0.5rem;
   scroll-snap-type: x mandatory;
   scroll-timeline: --carousel;
   scroll-timeline-axis: inline;

   scrollbar-width: none;

   @supports (animation-timeline: --carousel) {
      &::before {
         --completion-percentage: 0%;
         --rounding-interval: calc(100% / var(--number-of-slides, 100));

         content: "";
         display: block;
         position: absolute;
         position-anchor: --back-button;
         inset-inline: 5% calc(anchor(start) + 1rem);
         inset-block: anchor(center);
         height: 0.5rem;
         width: min(calc(2rem * var(--number-of-slides)), 100%);

         mask-image: linear-gradient(0.25turn, black calc(100% - 0.25rem), transparent calc(100% - 0.25rem));
         mask-size: var(--rounding-interval);

         animation: --completion 1ms linear forwards;
         animation-timeline: --carousel;

         @media (width < 56.25rem) {
            inset-inline-start: 0;
         }

         background-image: linear-gradient(
            0.25turn,
            var(--color-surface-inverse) round(up, max(var(--completion-percentage), 1%), var(--rounding-interval)),
            var(--color-border-on-surface) round(up, max(var(--completion-percentage), 1%), var(--rounding-interval))
         );
      }

      &::-webkit-scrollbar {
         display: none;
      }
   }

   @media (width < 56.25rem) {
      mask-image: none;
   }

   & > .carousel_slide {
      flex: 0 0 auto;
      width: 90%;
      border: 1px solid var(--color-border-on-surface);
      overflow: hidden;
      border-radius: 0.75rem;
      scroll-snap-align: center;
      scroll-snap-stop: always;
      display: grid;

      background-color: var(--color-surface-2);

      @supports (animation-timeline: scroll()) {
         animation: --slide-border 1ms linear;
         animation-timeline: view(inline);
         animation-range: cover;
      }

      & > p {
         margin: 0.5rem;
      }

      & > img {
         width: 100%;
         height: auto;
         max-width: unset;
      }

      @media (width >= 56.25rem) {
         &:first-child {
            margin-inline-start: 5%;
         }

         &:last-child {
            margin-inline-end: 5%;
         }
      }

      @media (width < 56.25rem) {
         width: 100%;
      }
   }
}

@keyframes --slide-border {
   29.9%,
   70.1% {
      border-color: var(--color-border-on-surface);
   }

   30%,
   70% {
      border-color: var(--color-border-input-focus);
   }
}

@property --completion-percentage {
   syntax: "<percentage>";
   inherits: true;
   initial-value: 0%;
}

@keyframes --completion {
   from {
      --completion-percentage: 0%;
   }

   to {
      --completion-percentage: 100%;
   }
}
`}
            </CodeBlock>
         </section>
      </main>
   );
}
