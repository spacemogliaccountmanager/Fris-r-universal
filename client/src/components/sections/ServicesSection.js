import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useServices } from "@/queries/useServices";
import { useScrollReveal } from "@/hooks/useScrollReveal";
export function ServicesSection() {
    const { data: services, isLoading, error } = useServices();
    const headerRef = useScrollReveal();
    return (_jsx("section", { id: "tjanster", className: "bg-bg py-24 px-6", children: _jsxs("div", { className: "mx-auto max-w-site", children: [_jsxs("div", { ref: headerRef, "data-reveal": true, className: "text-center", children: [_jsx("p", { className: "text-xs uppercase tracking-[0.08em] text-accent font-medium", children: "V\u00E5ra tj\u00E4nster" }), _jsx("h2", { className: "font-serif text-4xl md:text-5xl font-semibold text-ink mt-4", children: "Skr\u00E4ddarsydda behandlingar f\u00F6r varje stil" }), _jsx("p", { className: "text-muted text-lg max-w-2xl mx-auto mt-4", children: "Vi kombinerar form, f\u00E4rg och textur f\u00F6r att skapa ett resultat som framh\u00E4ver din personlighet. V\u00E4lj en behandling eller b\u00F6rja med en konsultation." })] }), isLoading && (_jsx("p", { className: "text-muted text-sm text-center mt-12", children: "Laddar..." })), error && (_jsx("p", { className: "text-red-500 text-sm text-center mt-12", children: "Kunde inte ladda tj\u00E4nster." })), services && services.length > 0 && (_jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12", children: services.map((service, index) => (_jsx(ServiceCard, { service: service, index: index }, service.id))) }))] }) }));
}
function ServiceCard({ service, index, }) {
    const cardRef = useScrollReveal();
    return (_jsx("div", { ref: cardRef, "data-reveal": true, style: { transitionDelay: `${index * 0.08}s` }, children: _jsxs(Card, { hover: true, className: "h-full", children: [_jsx("h3", { className: "font-serif text-base font-semibold text-ink sm:text-xl", children: service.title }), _jsx("p", { className: "text-muted text-xs mt-1 sm:text-sm sm:mt-2", children: service.description }), _jsx("div", { className: "h-px bg-line my-2 sm:my-4" }), _jsxs("div", { className: "flex items-center gap-1.5 flex-wrap sm:gap-2", children: [_jsxs(Badge, { variant: "muted", children: [service.durationMinutes, " min"] }), _jsx(Badge, { variant: "default", children: service.priceLabel })] })] }) }));
}
//# sourceMappingURL=ServicesSection.js.map