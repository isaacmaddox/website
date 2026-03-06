import { Button } from "@/components/button";
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

function LocationIcon() {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         height="24px"
         viewBox="0 -960 960 960"
         width="24px"
         fill="#e3e3e3"
         aria-hidden="true">
         <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
      </svg>
   );
}

function SchoolIcon() {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         height="24px"
         viewBox="0 -960 960 960"
         width="24px"
         fill="#e3e3e3"
         aria-hidden="true">
         <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
      </svg>
   );
}

function WorkIcon() {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         height="24px"
         viewBox="0 -960 960 960"
         width="24px"
         fill="#e3e3e3"
         aria-hidden="true">
         <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
      </svg>
   );
}
