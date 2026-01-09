import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/util";
import { MDXComponents } from "mdx/types";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export const components: MDXComponents = {
   p: ({ children }) => <p className="paragraph">{children}</p>,
   ul: ({ children }) => <ul className="paragraph list-disc list-outside pl-[revert]">{children}</ul>,
   h1: ({ children }) => <h1 className="typo-h1 mb-2">{children}</h1>,
   h2: ({ children }) => <h2 className="typo-h2 mb-2">{children}</h2>,
   h3: ({ children }) => <h3 className="typo-h3 mb-2">{children}</h3>,
   em: ({ children }) => (
      <em className="not-italic text-black dark:text-white dark:text-shadow-sm dark:text-shadow-white/50">
         {children}
      </em>
   ),
   code: ({ children, className }) => {
      return (
         <div className="relative p-1 my-6 max-h-[80svh] overflow-auto bg-gray-800 border border-gray-700 rounded-lg">
            <header className="p-1 pl-2 sticky top-0 left-0 flex justify-between items-center border border-gray-600 backdrop-blur-xl rounded-md">
               <p className="text-white">{className.replace("language-", "")}</p>
               <CopyButton content={children} />
            </header>
            <SyntaxHighlighter
               className="w-fit block px-2! bg-transparent! py-0!"
               language={className.replace("language-", "")}
               style={nightOwl}>
               {children}
            </SyntaxHighlighter>
         </div>
      );
   },
   a: ({ children, href }) => {
      if (href.startsWith("/")) {
         return (
            <Link href={href} className="link">
               {children}
            </Link>
         );
      } else {
         return (
            <a href={href} className="link" target="_blank">
               {children}
            </a>
         );
      }
   },
   hr: () => {
      return <hr className="dashed-border my-6" />;
   },
   img: (props) => {
      return (
         <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={cn(props.alt ? "mt-6 mb-2" : "my-6")} alt="" {...props} />
            {props.alt && (
               <span aria-hidden="true" className="block mb-6 text-sm text-gray-500 dark:text-gray-400 italic">
                  {props.alt}
               </span>
            )}
         </>
      );
   },
};

export function useMDXComponents(): MDXComponents {
   return components;
}
