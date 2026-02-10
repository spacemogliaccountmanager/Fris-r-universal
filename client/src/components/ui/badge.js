import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/cn";
const badgeVariants = cva("inline-flex items-center rounded-full px-3 py-1 text-xs font-medium", {
    variants: {
        variant: {
            default: "bg-accent/10 text-accent-strong",
            muted: "bg-ink/5 text-muted",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const Badge = React.forwardRef(({ className, variant, ...props }, ref) => {
    return (_jsx("span", { ref: ref, className: cn(badgeVariants({ variant, className })), ...props }));
});
Badge.displayName = "Badge";
export { Badge, badgeVariants };
//# sourceMappingURL=badge.js.map