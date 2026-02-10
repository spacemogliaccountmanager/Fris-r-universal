import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
export function MobileNav({ open, onOpenChange, links, onBookClick, }) {
    return (_jsx(Collapsible.Root, { open: open, onOpenChange: onOpenChange, children: _jsx(Collapsible.Content, { className: cn("overflow-hidden border-b border-white/10 bg-neutral-900 lg:hidden", "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-top-2", "data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-2"), children: _jsxs("nav", { className: "flex flex-col gap-1 px-5 pb-5 pt-2", "aria-label": "Mobilnavigering", children: [links.map((link) => (_jsx("a", { href: link.href, onClick: () => onOpenChange(false), className: "rounded-md px-3 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white", children: link.label }, link.href))), _jsx("div", { className: "mt-3", children: _jsx(Button, { variant: "solid", onClick: onBookClick, className: "w-full", children: "Boka tid" }) })] }) }) }));
}
//# sourceMappingURL=MobileNav.js.map