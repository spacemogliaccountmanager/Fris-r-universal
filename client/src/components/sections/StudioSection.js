import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const STEPS = [
    { number: "01", text: "Personlig konsultation" },
    { number: "02", text: "Premiumprodukter" },
    { number: "03", text: "Fokus på helheten" },
];
export function StudioSection() {
    const leftRef = useScrollReveal();
    const rightRef = useScrollReveal();
    return (_jsx("section", { className: "bg-[#15110f] px-6 py-24 text-[#f7efe6]", children: _jsxs("div", { className: "mx-auto grid max-w-site grid-cols-1 items-center gap-16 lg:grid-cols-2", children: [_jsxs("div", { ref: leftRef, "data-reveal": true, children: [_jsx("p", { className: "mb-4 font-sans text-xs font-medium uppercase tracking-[0.08em] text-accent", children: "Upplevelsen" }), _jsx("h2", { className: "mb-6 font-serif text-4xl font-semibold leading-tight md:text-5xl", children: "En lugn plats mitt i Sandviken" }), _jsx("p", { className: "max-w-lg text-[#f7efe6]/80", children: "V\u00E5r studio \u00E4r skapad f\u00F6r att ge utrymme, ljus och en v\u00E4lkomnande k\u00E4nsla. H\u00E4r kan du landa och k\u00E4nna dig trygg genom hela behandlingen." })] }), _jsx("div", { ref: rightRef, "data-reveal": true, children: _jsxs("div", { className: "rounded-lg border border-white/10 bg-[#1e1a17] p-8", children: [_jsx("h3", { className: "mb-3 font-serif text-2xl font-semibold", children: "Detaljer som g\u00F6r skillnad" }), _jsx("p", { className: "mb-8 text-[#f7efe6]/80", children: "Vi arbetar med tydliga steg, l\u00E5ngsiktiga resultat och en avslappnad atmosf\u00E4r." }), _jsx("div", { className: "flex flex-col gap-6", children: STEPS.map((step) => (_jsxs("div", { className: "flex items-start gap-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "inline-block h-2 w-2 rounded-full bg-accent", "aria-hidden": "true" }), _jsx("span", { className: "font-serif text-xl font-bold text-accent", children: step.number })] }), _jsx("span", { className: "text-[#f7efe6]/80", children: step.text })] }, step.number))) })] }) })] }) }));
}
//# sourceMappingURL=StudioSection.js.map