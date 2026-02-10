import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/booking/BookingProvider";
import { siteMeta } from "@shared/data/site-meta";
import { cn } from "@/lib/cn";
import { MobileNav } from "./MobileNav";
const NAV_LINKS = [
    { label: "Om oss", href: "/om" },
    { label: "Våra tjänster", href: "/tjanster" },
    { label: "Våra produkter", href: "/produkter" },
    { label: "Kontakta oss", href: "/kontakt" },
];
export function Header() {
    const { setOpen } = useBooking();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 40);
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (_jsxs("header", { className: cn("fixed inset-x-0 top-0 z-50 transition-colors duration-300", scrolled ? "bg-neutral-900/95 backdrop-blur-md shadow-card-sm" : "bg-transparent"), children: [_jsxs("div", { className: "mx-auto flex max-w-site items-center justify-between px-5 py-4 lg:px-8", children: [_jsx("a", { href: "/", className: "flex items-center gap-2", "aria-label": "Hem", children: _jsx("span", { className: "font-serif text-2xl font-bold tracking-wide text-white", children: "Din Logga" }) }), _jsx("nav", { className: "hidden items-center gap-8 lg:flex", "aria-label": "Huvudnavigering", children: NAV_LINKS.map((link) => (_jsx("a", { href: link.href, onClick: () => setMobileOpen(false), className: cn("text-sm font-medium transition-colors duration-200", "text-white/80 hover:text-white"), children: link.label }, link.href))) }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("a", { href: siteMeta.instagram, target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "hidden h-9 w-9 items-center justify-center rounded-full transition-colors sm:flex text-white/70 hover:text-white", children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5" }), _jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }), _jsx("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })] }) }), _jsx("a", { href: `mailto:${siteMeta.email}`, "aria-label": "Skicka e-post", className: "hidden h-9 w-9 items-center justify-center rounded-full transition-colors sm:flex text-white/70 hover:text-white", children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }), _jsx("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })] }) }), _jsx(Button, { variant: "solid", onClick: () => setOpen(true), className: "hidden lg:inline-flex", children: "Boka tid" }), _jsx("button", { type: "button", onClick: () => setMobileOpen((prev) => !prev), "aria-label": mobileOpen ? "Stäng meny" : "Öppna meny", "aria-expanded": mobileOpen, className: "flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden text-white hover:bg-white/10", children: mobileOpen ? (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] })) : (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("line", { x1: "4", y1: "8", x2: "20", y2: "8" }), _jsx("line", { x1: "4", y1: "16", x2: "20", y2: "16" })] })) })] })] }), _jsx(MobileNav, { open: mobileOpen, onOpenChange: setMobileOpen, links: NAV_LINKS, onBookClick: () => {
                    setMobileOpen(false);
                    setOpen(true);
                } })] }));
}
//# sourceMappingURL=Header.js.map