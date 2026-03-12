import { Position } from "@/components/home/position";

export function ExperienceBlock() {
   return (
      <section className="container">
         <h2>Work Experience</h2>
         <p className="text-lg">
            I have had the privilege to work alongside professionals to learn valuable skills, both technical and
            interpersonal.
         </p>
         <div className="work-experience">
            <div className="work-experience_experience">
               <h3>Air Force Research Laboratory</h3>
               <Position
                  title="Intern"
                  startDateText="May 2022"
                  startDateTimeStamp="2022-05-01"
                  endDateText="Aug. 2022"
                  endDateTimeStamp="2022-08-01">
                  <p>
                     As a part of the{" "}
                     <a href="https://afrlscholars.usra.edu/" target="_blank">
                        Air Force Research Laboratory Scholars program
                     </a>
                     , I worked with a team respobsible for LiDAR research. I rewrote some existing applications,
                     migrating them from Python to MATLAB, using the MATLAB App Designer. I created an app to interact
                     with a FLIR camera and a lens rotator, to capture and store photos for research. I also built an
                     app that was responsible for managing the power state of a laser, as well as the rotation state of
                     multiple polarized lenses. Lastly, I worked closely with Dr. Jarrod Brown to create an application
                     that used serial communications to control a QPT 90 Positioner.{" "}
                     <a href="https://github.com/isaacmaddox/AFRL_Summer_Internship" target="_blank">
                        You can view the work that I completed in this position here
                     </a>
                     .
                  </p>
               </Position>
            </div>
            <div className="work-experience_experience">
               <h3>Ducks Unlimited</h3>
               <Position title="Web Development Intern" startDateText="Jan. 2023" startDateTimeStamp="2023-01-13">
                  <p>
                     In January of 2023, I was brought on as an intern to the web development team to assist in a full
                     rewrite of the website, migrating to a new CMS. During this internship, I learned many invaluable
                     skills that will undoubtedly help me throughout my career. I learned how to effectively use Git and
                     GitHub to work collaboratively on a project, how a CMS works, Java Server Pages, and gained
                     professional experience using CSS (SCSS) and JavaScript.
                  </p>
               </Position>
               <Position
                  title="User Experience Generalist"
                  startDateText="July 2023"
                  startDateTimeStamp="2023-07-01"
                  isPresent>
                  <p>
                     As a result of the work completed for the MARCOMMS team during my time as a Web Development Intern,
                     I was hired as a User Experience Generalist at the same company. In this role, I am responsible for
                     designing components and pages for use on the{" "}
                     <a href="https://ducks.org" target="_blank">
                        ducks.org
                     </a>{" "}
                     website. I have also lead many efforts for the company, including the design and development of the{" "}
                     <a href="https://duckdna.com" target="_blank">
                        duckDNA website
                     </a>
                     , the design of the{" "}
                     <a href="https://ducon.live" target="_blank">
                        DU National Convention app website
                     </a>
                     , and the design of Ducks Unlimited mobile app (
                     <a
                        href="https://play.google.com/store/apps/details?id=org.ducks.android.du.official"
                        target="_blank">
                        Play Store
                     </a>
                     ,{" "}
                     <a href="https://apps.apple.com/us/app/ducks-unlimited/id563665674" target="_blank">
                        App Store
                     </a>
                     ).
                  </p>
               </Position>
            </div>
            <div className="work-experience_experience">
               <h3>University of West Florida</h3>
               <Position
                  title="Teacher's Assistant"
                  startDateText="Aug. 2025"
                  startDateTimeStamp="2025-08-01"
                  endDateText="Dec. 2025"
                  endDateTimeStamp="2025-12-01">
                  <p>
                     As a teacher&apos;s assistant, I worked with Dr. Evorell L. Fridge, grading student assignments and
                     creating some assignments as well. I was responsible for creating an introductory Python project,
                     and planning and building the semester project that the students would complete.
                  </p>
               </Position>
            </div>
         </div>
      </section>
   );
}
