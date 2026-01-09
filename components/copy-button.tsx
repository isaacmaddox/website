"use client";

import { cn } from "@/lib/util";
import { useState } from "react";

interface CopyButtonProps extends React.ComponentProps<"button"> {
   content: string;
}

export function CopyButton({ content, onClick, ...props }: CopyButtonProps) {
   const [isCopied, setIsCopied] = useState<boolean>(false);

   if (isCopied) {
      setTimeout(() => {
         setIsCopied(false);
      }, 3000);
   }

   return (
      <button
         {...props}
         className={cn("grid p-2 rounded-md text-neutral-300 hover:bg-white/10 hover:text-white", props.className)}
         onClick={(e) => {
            onClick?.(e);
            try {
               navigator.clipboard.writeText(content);
               setIsCopied(true);
            } catch (e) {
               console.log(e);
            }
         }}>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("transition-transform row-start-1 col-start-1 text-white!", !isCopied && "scale-0")}>
            <path d="M20 6 9 17l-5-5" />
         </svg>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("transition-transform row-start-1 col-start-1", isCopied && "scale-0")}>
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
         </svg>
      </button>
   );
}
