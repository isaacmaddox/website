interface ExperienceCardProps {
   title: string;
   company: string;
}

export function ExperienceCard({ title, company, children }: React.PropsWithChildren<ExperienceCardProps>) {
   return (
      <div className="mt-6">
         <h3 className="typo-h3 mb-1 ">{title}</h3>
         <p className="mb-2 paragraph text-green-800 dark:text-green-200 text-sm">{company}</p>
         {children}
      </div>
   );
}
