import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/cn";
const Label = React.forwardRef(({ className, ...props }, ref) => (_jsx(LabelPrimitive.Root, { ref: ref, className: cn("text-xs font-sans font-medium uppercase tracking-[0.08em] text-muted", className), ...props })));
Label.displayName = "Label";
export { Label };
//# sourceMappingURL=label.js.map