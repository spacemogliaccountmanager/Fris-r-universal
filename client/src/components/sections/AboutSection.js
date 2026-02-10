import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
export function AboutSection() {
    const textRef = useScrollReveal();
    const imageRef = useScrollReveal();
    function handleSmoothScroll(e, hash) {
        e.preventDefault();
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
    return (_jsx("section", { id: "om", className: "bg-bg px-6 py-24", children: _jsxs("div", { className: "mx-auto grid max-w-site grid-cols-1 items-center gap-16 lg:grid-cols-2", children: [_jsxs("div", { ref: textRef, "data-reveal": true, children: [_jsx("p", { className: "mb-4 font-sans text-xs font-medium uppercase tracking-[0.08em] text-accent", children: "Om salongen" }), _jsx("h2", { className: "mb-6 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl", children: "En salong byggd p\u00E5 n\u00E4rvaro och hantverk" }), _jsx("p", { className: "mb-4 text-ink-soft", children: "En fris\u00F6rsalong d\u00E4r lugn och precision m\u00F6ts. Vi arbetar med lyh\u00F6rda konsultationer, tydliga planer och resultat som h\u00E5ller \u00F6ver tid." }), _jsx("p", { className: "mb-8 text-ink-soft", children: "Hos oss f\u00E5r du en helhetsupplevelse med fokus p\u00E5 kvalitet, v\u00E4rme och ett uttryck som k\u00E4nns som ditt." }), _jsxs("div", { className: "flex flex-wrap gap-4", children: [_jsx(Button, { variant: "ghost", onClick: (e) => handleSmoothScroll(e, "#tjanster"), children: "Utforska tj\u00E4nster" }), _jsx(Button, { variant: "ghost", onClick: (e) => handleSmoothScroll(e, "#kontakt"), children: "Prata med oss" })] })] }), _jsx("div", { ref: imageRef, "data-reveal": true, children: _jsxs("figure", { children: [_jsx("div", { className: "overflow-hidden rounded-lg shadow-card", children: _jsx("img", { src: "/assets/hero.jpg", alt: "Din salong interi\u00F6r", className: "h-auto w-full object-cover" }) }), _jsx("figcaption", { className: "mt-4 text-sm italic text-muted", children: "V\u00E5r salong \u00E4r skapad f\u00F6r att ge lugn och inspiration." })] }) })] }) }));
}
//# sourceMappingURL=AboutSection.js.map