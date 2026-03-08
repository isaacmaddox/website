"use client";

import { cn } from "@/utils";
import { Children, cloneElement, HTMLAttributes, isValidElement, useEffect, useRef, useState } from "react";

function isValidParagraph(child: unknown): child is React.ReactElement<React.ComponentProps<"p">> {
   return isValidElement(child) && child.type === "p";
}

interface PositionProps {
   title: string;
   startDateText: string;
   startDateTimeStamp: string;
   endDateText?: string;
   endDateTimeStamp?: string;
   isPresent?: boolean;
   children: React.ReactNode;
}

export function Position({
   title,
   startDateText,
   startDateTimeStamp,
   endDateText,
   endDateTimeStamp,
   isPresent,
   children,
}: PositionProps) {
   const wrapperRef = useRef<HTMLDivElement>(null);
   const [willTextCutoff, setWillTextCutoff] = useState(false);
   const [isTextOpened, setIsTextOpened] = useState(false);
   const child = Children.toArray(children)[0];
   if (!isValidParagraph(child)) {
      throw new Error("Children must be valid React elements");
   }

   function calculateHeight() {
      if (!wrapperRef.current) return;
      setWillTextCutoff(wrapperRef.current.clientHeight > 200);
   }

   useEffect(() => {
      calculateHeight();
      window.addEventListener("resize", calculateHeight);

      return () => {
         window.removeEventListener("resize", calculateHeight);
      };
   }, [wrapperRef]);

   return (
      <div className="position">
         <h4 className="text-lg">{title}</h4>
         <div className={cn("text-wrapper", willTextCutoff && "will-cut-off", isTextOpened && "open")} ref={wrapperRef}>
            {cloneElement<HTMLAttributes<HTMLParagraphElement>>(child, {
               onClick: (e) => {
                  e.stopPropagation();
                  if ((e.target as HTMLElement).closest("a")) return;
                  setIsTextOpened(!isTextOpened);
               },
            })}
            <button onClick={() => setIsTextOpened(!isTextOpened)}>Read {isTextOpened ? "Less" : "More"}</button>
         </div>
         <time dateTime={startDateTimeStamp} className="position_start-date" title="Position start date">
            {startDateText}
         </time>
         {endDateText && (
            <time dateTime={endDateTimeStamp} className="position_end-date" title="Position end date">
               {endDateText}
            </time>
         )}
         {isPresent && (
            <span className="position_end-date time" title="Position end date">
               Present
            </span>
         )}
      </div>
   );
}
