import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "@/lib/cn";
const Card = React.forwardRef(({ className, hover = false, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("bg-card rounded-lg p-7 shadow-card-sm border border-line/50 transition-all duration-300", hover && "hover:shadow-card hover:-translate-y-1", className), ...props }));
});
Card.displayName = "Card";
export { Card };
//# sourceMappingURL=card.js.map