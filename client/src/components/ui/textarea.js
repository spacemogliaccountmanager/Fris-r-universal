import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "@/lib/cn";
const Textarea = React.forwardRef(({ className, error, ...props }, ref) => {
    return (_jsxs("div", { className: "w-full", children: [_jsx("textarea", { className: cn("flex min-h-[120px] w-full resize-y rounded-md border border-line bg-light px-4 py-3 text-sm font-sans text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent disabled:cursor-not-allowed disabled:opacity-50", error && "border-red-500 focus:ring-red-400/40 focus:border-red-500", className), ref: ref, ...props }), error && (_jsx("p", { className: "mt-1.5 text-xs text-red-500 font-sans", children: error }))] }));
});
Textarea.displayName = "Textarea";
export { Textarea };
//# sourceMappingURL=textarea.js.map