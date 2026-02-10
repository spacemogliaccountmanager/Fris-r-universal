import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export function NotFoundPage() {
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsx("title", { children: "404 \u2014 Sidan hittades inte" }) }), _jsxs("main", { className: "flex min-h-[60vh] flex-col items-center justify-center px-4 text-center", children: [_jsx("h1", { className: "text-6xl font-bold text-neutral-900", children: "404" }), _jsx("p", { className: "mt-4 text-xl text-neutral-600", children: "Sidan hittades inte" }), _jsx("p", { className: "mt-2 text-neutral-500", children: "Sidan du letar efter finns inte eller har flyttats." }), _jsx(Link, { to: "/", className: "mt-8 inline-block rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700", children: "Tillbaka till startsidan" })] })] }));
}
//# sourceMappingURL=NotFoundPage.js.map