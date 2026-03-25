import "@/css/components/card-container.css";
import { cn } from "@/utils";
import { Children, isValidElement, PropsWithChildren } from "react";

type HeadingLevels = "2" | "3" | "4";
type CardStyles = "count" | "default";

interface CardContainerProps extends React.ComponentProps<"section"> {
   title?: string;
   level?: HeadingLevels;
   subtitle?: string;
}

export function CardContainer({ title, level, subtitle, children, ...props }: CardContainerProps) {
   const HeadingElement: `h${typeof level}` = level ? `h${level}` : "h2";

   for (const child of Children.toArray(children)) {
      if (isValidElement(child) && child.type !== Card) {
         throw new Error("All children of CardContainer must be of type Card");
      }
   }

   return (
      <section className="card-container container" {...props}>
         {title && <HeadingElement>{title}</HeadingElement>}
         {subtitle && <p className="text-lg">{subtitle}</p>}
         <div className="card-container_cards">{children}</div>
      </section>
   );
}

interface CardProps extends PropsWithChildren {
   title?: string;
   level?: HeadingLevels;
   text?: string;
   style?: CardStyles;
}

export function Card({ title, text, level, children, style }: CardProps) {
   const HeadingElement: `h${typeof level}` = level ? `h${level}` : "h2";

   return (
      <div className={cn("card", style !== "default" && style)}>
         {title && <HeadingElement>{title}</HeadingElement>}
         {text && <p>{text}</p>}
         {children}
      </div>
   );
}

Card.CTAs = function CardCTAs({ children, className, ...props }: React.ComponentProps<"ul">) {
   return (
      <ul className={cn(className, "card_ctas")} {...props} role="list">
         {Children.map(children, (cta) => {
            return <li>{cta}</li>;
         })}
      </ul>
   );
};
