"use client";

import { useEffect } from "react";

export function ScrollInterceptor() {
   function doScrollEvent(e: Event) {
      const navHeight = document.querySelector("nav")?.getBoundingClientRect().height || 0;

      const target = document.getElementById(
         (e.currentTarget as HTMLAnchorElement).getAttribute("href")?.substring(1) || "",
      );
      if (!target) return;

      const targetBox = target.getBoundingClientRect();
      const targetHeight = targetBox.height;

      if (targetHeight < window.innerHeight - navHeight) {
         e.preventDefault();
         window.history.replaceState(null, "", `#${target.id}`);

         window.scrollTo({
            top: target.offsetTop - (window.innerHeight - targetHeight) / 2,
            behavior: window.matchMedia("(prefers-reduced-motion: no-preference)").matches ? "smooth" : "instant",
         });
      }
   }

   useEffect(() => {
      const links = document.querySelectorAll("a[href^='#']");

      links.forEach((link) => {
         link.addEventListener("click", doScrollEvent);
      });

      return () => {
         links.forEach((link) => {
            link.removeEventListener("click", doScrollEvent);
         });
      };
   }, []);

   return null;
}
