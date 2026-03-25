import "@/css/components/hero.css";
import { cn } from "@/utils";
import { Children, ComponentProps, PropsWithChildren } from "react";

export function Hero({ children }: PropsWithChildren) {
   return <section className="hero container">{children}</section>;
}

Hero.Title = function HeroTitle(props: ComponentProps<"h1">) {
   return <h1 {...props} />;
};

Hero.Subtitle = function HeroSubtitle({ className, ...props }: ComponentProps<"p">) {
   return <p className={cn(className, "text-lg")} {...props} />;
};

Hero.CTAs = function HeroCTAs({ children, className, ...props }: ComponentProps<"ul">) {
   return (
      <ul className={cn(className, "hero_ctas")} {...props} role="list">
         {Children.map(children, (cta) => {
            return <li>{cta}</li>;
         })}
      </ul>
   );
};
