import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ContactForm } from "@/components/contact/ContactForm";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { siteMeta } from "@shared/data/site-meta";
const CONTACT_ITEMS = [
    {
        label: "Besök oss",
        value: `${siteMeta.location}, ${siteMeta.country}`,
        href: undefined,
        icon: (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "w-5 h-5 text-accent", "aria-hidden": "true", children: [_jsx("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), _jsx("circle", { cx: "12", cy: "10", r: "3" })] })),
    },
    {
        label: "E-post",
        value: siteMeta.email,
        href: `mailto:${siteMeta.email}`,
        icon: (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "w-5 h-5 text-accent", "aria-hidden": "true", children: [_jsx("rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }), _jsx("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })] })),
    },
    {
        label: "Telefon",
        value: siteMeta.phone,
        href: `tel:${siteMeta.phone.replace(/[^+\d]/g, "")}`,
        icon: (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "w-5 h-5 text-accent", "aria-hidden": "true", children: _jsx("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" }) })),
    },
];
export function ContactSection() {
    const headerRef = useScrollReveal();
    const leftRef = useScrollReveal();
    const rightRef = useScrollReveal();
    return (_jsx("section", { id: "kontakt", className: "bg-bg py-24 px-6", children: _jsxs("div", { className: "mx-auto max-w-site", children: [_jsxs("div", { ref: headerRef, "data-reveal": true, className: "text-center", children: [_jsx("p", { className: "text-xs uppercase tracking-[0.08em] text-accent font-medium", children: "Kontakt" }), _jsx("h2", { className: "font-serif text-4xl md:text-5xl font-semibold text-ink mt-4", children: "H\u00F6r av dig till oss" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12 items-start", children: [_jsx("div", { ref: leftRef, "data-reveal": true, className: "space-y-8", children: CONTACT_ITEMS.map((item) => (_jsxs("div", { className: "flex gap-4", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-accent/10 grid place-items-center shrink-0", children: item.icon }), _jsxs("div", { children: [_jsx("p", { className: "text-xs uppercase tracking-[0.08em] text-muted", children: item.label }), item.href ? (_jsx("a", { href: item.href, className: "text-ink text-accent hover:underline", children: item.value })) : (_jsx("p", { className: "text-ink", children: item.value }))] })] }, item.label))) }), _jsx("div", { ref: rightRef, "data-reveal": true, children: _jsx(ContactForm, {}) })] })] }) }));
}
//# sourceMappingURL=ContactSection.js.map