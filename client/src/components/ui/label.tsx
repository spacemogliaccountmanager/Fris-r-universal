import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/cn";

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-xs font-sans font-medium uppercase tracking-[0.08em] text-muted",
      className,
    )}
    {...props}
  />
));
Label.displayName = "Label";

export { Label };
