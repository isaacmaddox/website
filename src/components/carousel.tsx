"use client";

import { Button } from "@/components/button";
import { BackArrowIcon, ForwardArrowIcon } from "@/components/icons";
import Image from "next/image";
import { Children, CSSProperties, useEffect, useRef, useState } from "react";

function isIOS() {
   if (typeof window === "undefined" || typeof navigator === "undefined") return false;
   return /iPhone|iPad|iPod/i.test(navigator.userAgent || navigator.platform);
}

export function Carousel({ children }: React.PropsWithChildren) {
   const carouselRef = useRef<HTMLDivElement>(null);
   const [useReducedMotion, setUseReducedMotion] = useState<boolean>(false);

   useEffect(() => {
      if (typeof window === undefined) return;
      const query = window.matchMedia("(prefers-reduced-motion: reduce)");

      const handleChange = (ev: MediaQueryListEvent) => setUseReducedMotion(ev.matches);

      query.addEventListener("change", handleChange);

      return () => {
         query.removeEventListener("change", handleChange);
      };
   }, []);

   function scroll(direction: "forwards" | "backwards") {
      carouselRef.current?.scrollBy({
         left: (carouselRef.current?.clientWidth + 16) * (direction === "backwards" ? -1 : 1),
         behavior: useReducedMotion ? "instant" : "smooth",
      });
   }

   return (
      <section
         className="carousel-container container lg"
         style={{ "--number-of-slides": `${Children.count(children)}` } as CSSProperties}>
         <Button
            className="carousel-container_back-button"
            size="icon"
            variant="outline"
            onClick={() => scroll("backwards")}
            aria-label="Go to previous image">
            <BackArrowIcon />
         </Button>
         <Button
            className="carousel-container_forward-button"
            size="icon"
            variant="outline"
            onClick={() => scroll("forwards")}
            aria-label="Go to next image">
            <ForwardArrowIcon />
         </Button>
         <div className="carousel" aria-label="A carousel of screenshots from the app" ref={carouselRef}>
            {children}
         </div>
      </section>
   );
}

interface CarouselSlideProps extends React.ComponentProps<typeof Image> {
   caption?: string;
}

export function CarouselSlide({ caption, alt, ...imageProps }: CarouselSlideProps) {
   return (
      <div className="carousel_slide">
         <Image {...imageProps} alt={alt} />
         {caption && <p className="text-sm">{caption}</p>}
      </div>
   );
}
