"use client";

import { Button } from "@/components/button";
import { CloseIcon } from "@/components/icons";
import "@/css/components/image-modal.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ImageModal({ alt, ...props }: React.ComponentProps<typeof Image>) {
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      document.documentElement.style.overflow = isOpen ? "hidden" : "auto";

      const close = (e: KeyboardEvent) => {
         if (e.key === "Escape") setIsOpen(false);
      };

      if (isOpen) {
         window.addEventListener("keydown", close);

         return () => {
            window.removeEventListener("keydown", close);
         };
      }
   }, [isOpen]);

   return (
      <div className="image-modal-wrapper">
         <Image {...props} alt={alt} onClick={() => setIsOpen(true)} />
         {isOpen && (
            <div className="image-modal" onClick={() => setIsOpen(false)}>
               <Button
                  size="icon"
                  className="image-modal_close-button"
                  aria-label="Close image modal"
                  autoFocus={isOpen}>
                  <CloseIcon />
               </Button>
               <Image {...props} quality={100} alt={alt} onClick={(e) => e.stopPropagation()} />
            </div>
         )}
      </div>
   );
}
