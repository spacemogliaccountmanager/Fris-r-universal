import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/booking/BookingProvider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
export function BookingSection() {
    const { setOpen } = useBooking();
    const ref = useScrollReveal();
    return (_jsx("section", { id: "boka", className: "bg-bg-deep px-6 py-24 text-center", children: _jsxs("div", { ref: ref, "data-reveal": true, className: "mx-auto max-w-2xl", children: [_jsx("p", { className: "mb-4 font-sans text-xs font-medium uppercase tracking-[0.08em] text-accent", children: "Boka tid" }), _jsx("h2", { className: "mb-4 font-serif text-4xl font-semibold text-ink md:text-5xl", children: "Redo att boka din tid?" }), _jsx("p", { className: "mb-8 text-lg text-muted", children: "V\u00E4lj en tid som passar dig. Vi ser fram emot att tr\u00E4ffa dig." }), _jsx(Button, { variant: "solid", size: "lg", onClick: () => setOpen(true), children: "Boka nu" })] }) }));
}
//# sourceMappingURL=BookingSection.js.map