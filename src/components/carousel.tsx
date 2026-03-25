"use client";

import { Button } from "@/components/button";
import { BackArrowIcon, ForwardArrowIcon } from "@/components/icons";
import "@/css/components/carousel.css";
import { useMedia } from "@/lib/hooks/useMedia";
import Image from "next/image";
import { Children, CSSProperties, useRef } from "react";

export function Carousel({ children }: React.PropsWithChildren) {
   const carouselRef = useRef<HTMLDivElement>(null);
   const useReducedMotion = useMedia("(prefers-reduced-motion: reduce)");

   function scroll(direction: "forwards" | "backwards") {
      if (!carouselRef.current) return;

      const gap = Number(getComputedStyle(carouselRef.current).gap.replace("px", ""));

      carouselRef.current?.scrollBy({
         left: (carouselRef.current?.clientWidth + gap) * (direction === "backwards" ? -1 : 1),
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
