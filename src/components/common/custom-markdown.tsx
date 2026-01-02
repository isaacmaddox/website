import Markdown from "react-markdown";

export function CustomMarkdown(props: React.ComponentProps<typeof Markdown>) {
   return (
      <Markdown
         components={{
            ul: ({ children }) => <ul className="list-disc list-ouside pl-4 paragraph text-sm">{children}</ul>,
            a: ({ children, href }) => (
               <a href={href} className="link" target="_blank">
                  {children}
               </a>
            ),
         }}
         {...props}></Markdown>
   );
}
