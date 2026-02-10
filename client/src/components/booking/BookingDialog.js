import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useBooking } from "./BookingProvider";
import { siteMeta } from "@shared/data/site-meta";
export function BookingDialog() {
    const { open, setOpen } = useBooking();
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const [shouldRenderIframe, setShouldRenderIframe] = useState(false);
    // Lazily mount the iframe only when the dialog opens
    useEffect(() => {
        if (open) {
            setShouldRenderIframe(true);
        }
    }, [open]);
    // Reset loaded state when dialog closes so spinner shows on re-open
    useEffect(() => {
        if (!open) {
            setIframeLoaded(false);
        }
    }, [open]);
    const handleIframeLoad = useCallback(() => {
        setIframeLoaded(true);
    }, []);
    return (_jsx(Dialog.Root, { open: open, onOpenChange: setOpen, children: _jsxs(Dialog.Portal, { children: [_jsx(Dialog.Overlay, { className: "fixed inset-0 z-[1000] bg-black/90 data-[state=open]:animate-in data-[state=open]:fade-in" }), _jsx(Dialog.Content, { className: "fixed inset-0 z-[1001] flex items-center justify-center sm:inset-8", children: _jsxs("div", { className: "flex h-full w-full flex-col overflow-hidden bg-neutral-900 sm:h-[min(90vh,800px)] sm:max-w-[920px] sm:rounded-lg", children: [_jsxs("div", { className: "flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4", children: [_jsx(Dialog.Title, { className: "font-serif text-xl font-semibold text-white sm:text-2xl", children: "Boka din tid" }), _jsx(Dialog.Close, { "aria-label": "St\u00E4ng", className: "flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white", children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) })] }), _jsxs("div", { className: "relative flex-1", children: [!iframeLoaded && (_jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-neutral-900", children: _jsx("p", { className: "text-sm text-white/60", children: "Laddar bokningssystemet..." }) })), shouldRenderIframe && (_jsx("iframe", { src: siteMeta.booking.iframeUrl, title: "Boka tid hos Lekri", className: "h-full w-full border-0", loading: "lazy", onLoad: handleIframeLoad }))] })] }) })] }) }));
}
//# sourceMappingURL=BookingDialog.js.map