import { Button } from "@/components/button";
import { LocationIcon, SchoolIcon, WorkIcon } from "@/components/icons";
import Image from "next/image";

export function HomeHero() {
   return (
      <section className="home-hero container">
         <div className="image-container">
            <Image src="/img/me.jpg" height="250" width="250" quality={100} alt="A photograph of me" loading="eager" />
         </div>
         <h1 className="text-jumbo">Isaac Maddox</h1>
         <p className="text-xl">Web Developer & Designer</p>
         <p>
            Hi! I&apos;m Isaac Maddox, a web developer and designer based out of Florida. I am a recent college graduate
            with a major in Software Design & Development. I have a deep passion for computer programming, and
            especially enjoy web development.
         </p>
         <ul className="home-hero_ctas" role="list">
            <li>
               <Button.Link href="/IM_Resume.pdf" variant="primary" size="lg" download>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     height="24px"
                     viewBox="0 -960 960 960"
                     width="24px"
                     fill="#e3e3e3">
                     <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                  </svg>
                  Download Resume
               </Button.Link>
            </li>
            <li>
               <Button.Link href="#projects" size="lg">
                  Learn More
               </Button.Link>
            </li>
         </ul>
         <ul className="home-hero_stats" role="list">
            <li>
               <LocationIcon />
               Niceville, FL
            </li>
            <li className="school">
               <SchoolIcon />
               UWF, Pensacola
            </li>
            <li>
               <WorkIcon />
               Ducks Unlimited
            </li>
         </ul>
      </section>
   );
}
