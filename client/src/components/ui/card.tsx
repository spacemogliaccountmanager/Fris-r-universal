import * as React from "react";

import { cn } from "@/lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-card rounded-lg p-7 shadow-card-sm border border-line/50 transition-all duration-300",
          hover && "hover:shadow-card hover:-translate-y-1",
          className,
        )}
        {...props}
      />
    );
  },
);
Card.displayName = "Card";

export { Card };
