import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-xs font-medium uppercase tracking-[0.08em] transition-all duration-300 min-h-[44px] cursor-pointer border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid:
          "bg-accent text-[#1b140f] shadow-btn hover:bg-accent-strong hover:-translate-y-0.5",
        outline:
          "border border-white/50 text-white hover:bg-white/10 hover:-translate-y-0.5",
        ghost:
          "border border-line text-ink hover:border-ink hover:-translate-y-0.5",
      },
      size: {
        default: "px-8 py-3",
        lg: "px-12 py-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
