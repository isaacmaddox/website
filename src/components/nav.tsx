"use client";

import { Button } from "@/components/button";
import { GitHubLogo, HamburgerIcon, MailIcon } from "@/components/icons";
import "@/css/components/nav.css";
import { cn } from "@/utils";
import Link from "next/link";
import { PointerEvent, useState } from "react";

export function GlobalNav() {
   const [isOpen, setIsOpen] = useState(false);

   const closeNav = (e: PointerEvent<HTMLAnchorElement>) => {
      e.currentTarget.blur();
      setIsOpen(false);
   };

   return (
      <header className={cn("global-header", isOpen && "open")}>
         <div className="global-header_content container lg">
            <Button
               className="global-header_content_toggle"
               size="icon"
               aria-label="Toggle nav open"
               onFocus={(e) => e.currentTarget.blur()}
               onClick={() => setIsOpen(!isOpen)}>
               {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </Button>
            <Link href="/" className="global-header_content_brand" onClick={(e) => e.currentTarget.blur()}>
               Isaac Maddox
            </Link>
            <nav className="global-header_content_links">
               <ul role="list">
                  <li>
                     <Link href="/" onClick={closeNav}>
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link href="/projects" onClick={closeNav}>
                        Projects
                     </Link>
                  </li>
                  <li>
                     <Link href="/" onClick={closeNav}>
                        Resume
                     </Link>
                  </li>
               </ul>
            </nav>
            <ul className="global-header_content_ctas" aria-label="Find me on the internet" role="list">
               <li>
                  <Button.Link
                     size="icon"
                     href="https://linkedin.com/in/isaac-maddox"
                     target="_blank"
                     aria-label="View my LinkedIn profile">
                     <LinkedInLogo />
                  </Button.Link>
               </li>
               <li>
                  <Button.Link
                     size="icon"
                     href="https://github.com/isaacmaddox"
                     target="_blank"
                     aria-label="View my GitHub profile">
                     <GitHubLogo />
                  </Button.Link>
               </li>
               <li>
                  <Button.Link href="mailto:isaac@mail.isaacmaddox.dev" variant="primary">
                     <MailIcon />
                     Get in Touch
                  </Button.Link>
               </li>
            </ul>
         </div>
      </header>
   );
}

function LinkedInLogo() {
   return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g clipPath="url(#clip0_42_223)">
            <path
               d="M29.1053 0H2.89466C1.296 0 0 1.296 0 2.89466V29.1053C0 30.704 1.296 32 2.89466 32H29.1053C30.704 32 32 30.704 32 29.1053V2.89466C32 1.296 30.704 0 29.1053 0ZM9.90216 27.6309C9.90216 28.0962 9.52503 28.4733 9.05977 28.4733H5.47393C5.00867 28.4733 4.63154 28.0962 4.63154 27.6309V12.5992C4.63154 12.1339 5.00867 11.7568 5.47393 11.7568H9.05977C9.52503 11.7568 9.90216 12.1339 9.90216 12.5992V27.6309ZM7.26685 10.3399C5.38547 10.3399 3.86027 8.81466 3.86027 6.93328C3.86027 5.0519 5.38547 3.5267 7.26685 3.5267C9.14823 3.5267 10.6734 5.0519 10.6734 6.93328C10.6734 8.81466 9.14831 10.3399 7.26685 10.3399ZM28.6417 27.6988C28.6417 28.1265 28.2949 28.4733 27.8671 28.4733H24.0193C23.5915 28.4733 23.2447 28.1265 23.2447 27.6988V20.648C23.2447 19.5962 23.5533 16.039 20.496 16.039C18.1246 16.039 17.6436 18.4738 17.547 19.5665V27.6988C17.547 28.1265 17.2003 28.4733 16.7724 28.4733H13.0509C12.6232 28.4733 12.2764 28.1265 12.2764 27.6988V12.5314C12.2764 12.1036 12.6232 11.7568 13.0509 11.7568H16.7724C17.2002 11.7568 17.547 12.1036 17.547 12.5314V13.8428C18.4263 12.5231 19.7331 11.5046 22.5155 11.5046C28.6769 11.5046 28.6417 17.2609 28.6417 20.4237V27.6988Z"
               fill="#D9D9D9"
            />
         </g>
         <defs>
            <clipPath id="clip0_42_223">
               <rect width="32" height="32" fill="white" />
            </clipPath>
         </defs>
      </svg>
   );
}

function CloseIcon() {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         height="24px"
         viewBox="0 -960 960 960"
         width="24px"
         fill="#e3e3e3"
         aria-hidden="true">
         <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
   );
}
