import { cn } from "@/utils";
import React from "react";

type ButtonProps = {
   variant?: "primary" | "outline" | "ghost" | "default";
   size?: "icon" | "icon sm" | "lg" | "default";
};

export function Button({ variant, size, className, ...props }: ButtonProps & React.ComponentProps<"button">) {
   return (
      <button
         className={cn("btn", variant !== "default" && variant, size !== "default" && size, className)}
         {...props}
      />
   );
}

Button.Link = function LinkButton({ variant, size, className, ...props }: ButtonProps & React.ComponentProps<"a">) {
   return (
      <a className={cn("btn", variant !== "default" && variant, size !== "default" && size, className)} {...props} />
   );
};
