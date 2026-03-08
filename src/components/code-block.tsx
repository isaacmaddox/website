"use client";

import { Button } from "@/components/button";
import { CheckIcon, ContentCopyIcon } from "@/components/icons";
import { useMedia } from "@/lib/hooks/useMedia";
import { cn } from "@/utils";
import { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
   language: string;
   file?: string;
   children: string;
}

export function CodeBlock({ language, file, children }: CodeBlockProps) {
   const isLight = useMedia("(prefers-color-scheme: light)");
   const [isCopied, setIsCopied] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const [willTextCutoff, setWillTextCutoff] = useState(false);
   const preRef = useRef<HTMLPreElement>(null);

   if (isCopied) {
      setTimeout(() => {
         setIsCopied(false);
      }, 2000);
   }

   function copyText() {
      navigator.clipboard.writeText(children);
      setIsCopied(true);
   }

   function calculateHeight() {
      if (!preRef.current) return;
      setWillTextCutoff(preRef.current.offsetHeight > 400);
   }

   useEffect(() => {
      calculateHeight();
      window.addEventListener("resize", calculateHeight);

      return () => {
         window.removeEventListener("resize", calculateHeight);
      };
   }, [preRef, children]);

   return (
      <div className={cn("code-block", willTextCutoff && "will-cutoff", isOpen && "open")}>
         <header>
            {file && <p className="code-block_file-name">{file}</p>}
            <Button variant="ghost" size="icon sm" aria-label="Copy code text" onClick={copyText}>
               {!isCopied ? <ContentCopyIcon /> : <CheckIcon />}
            </Button>
         </header>
         <SyntaxHighlighter language={language} style={isLight ? oneLight : oneDark} codeTagProps={{ ref: preRef }}>
            {children}
         </SyntaxHighlighter>
         {willTextCutoff && (
            <footer>
               <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? "Collapse Code Block" : "Expand Code Block"}
               </Button>
            </footer>
         )}
      </div>
   );
}
