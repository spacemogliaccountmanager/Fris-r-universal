import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/booking/BookingProvider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const STATS = [
    { value: "10+", label: "år av erfarenhet" },
    { value: "4.9", label: "genomsnittligt betyg" },
    { value: "100%", label: "fokus på dig" },
];
export function HeroSection() {
    const { setOpen } = useBooking();
    const contentRef = useScrollReveal();
    const statsRef = useScrollReveal();
    useEffect(() => {
        document.body.classList.add("is-loaded");
    }, []);
    function handleSmoothScroll(e, hash) {
        e.preventDefault();
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
    return (_jsxs("section", { className: "relative min-h-[70vh] overflow-hidden sm:min-h-screen", children: [_jsx("img", { src: "/assets/salong-headzone-radmansgatan-18.webp", alt: "Salong Headzone", className: "hero-image absolute inset-0 h-full w-full object-cover" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" }), _jsx("div", { ref: contentRef, "data-reveal": true, className: "relative z-10 flex min-h-[70vh] flex-col justify-start px-6 pb-20 pt-36 sm:min-h-screen sm:justify-end sm:pt-0", children: _jsxs("div", { className: "mx-auto w-full max-w-site", children: [_jsx("p", { className: "mb-4 font-sans text-xs uppercase tracking-wider text-white/70", children: "Min fris\u00F6rsalong" }), _jsx("h1", { className: "mb-4 font-serif text-5xl font-bold text-white md:text-7xl", children: "V\u00E5ra behandlingar" }), _jsx("p", { className: "mb-8 max-w-xl text-lg text-white/80", children: "Personligt, kreativt och avslappnat. Vi lyfter fram din stil med skr\u00E4ddarsydda klippningar, f\u00E4rg och form." }), _jsxs("div", { className: "flex flex-wrap gap-4", children: [_jsx(Button, { variant: "outline", onClick: (e) => handleSmoothScroll(e, "#om"), children: "Mer om oss" }), _jsx(Button, { variant: "solid", onClick: () => setOpen(true), children: "Boka direkt" })] })] }) }), _jsx("div", { ref: statsRef, "data-reveal": true, className: "relative z-10 px-6 pb-12", children: _jsx("div", { className: "mx-auto flex max-w-site items-center gap-4 sm:gap-8", children: STATS.map((stat, i) => (_jsxs("div", { className: "flex items-center gap-4 sm:gap-8", children: [i > 0 && (_jsx("div", { className: "h-10 w-px bg-white/20", "aria-hidden": "true" })), _jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "font-serif text-2xl font-bold text-white sm:text-3xl", children: stat.value }), _jsx("span", { className: "text-[10px] uppercase tracking-wider text-white/60 sm:text-xs", children: stat.label })] })] }, stat.label))) }) })] }));
}
//# sourceMappingURL=HeroSection.js.map