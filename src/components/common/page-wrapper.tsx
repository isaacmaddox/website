export function PageWrapper({ children }: React.PropsWithChildren) {
   return (
      <div className="w-full max-w-200 mx-auto border-x dashed-border bg-white dark:bg-gray-800/15">
         <div className="h-12 border-b dashed-border bg-slanted from-gray-300 dark:from-gray-700" id="top"></div>
         {children}
         <div className="h-12 border-b dashed-border bg-slanted from-gray-300 dark:from-gray-700"></div>
      </div>
   );
}
