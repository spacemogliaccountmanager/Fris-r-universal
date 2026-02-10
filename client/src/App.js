import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ProductsPage } from "@/pages/ProductsPage";
import { ContactPage } from "@/pages/ContactPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
export function App() {
    return (_jsx(Routes, { children: _jsxs(Route, { element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/om", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/tjanster", element: _jsx(ServicesPage, {}) }), _jsx(Route, { path: "/produkter", element: _jsx(ProductsPage, {}) }), _jsx(Route, { path: "/kontakt", element: _jsx(ContactPage, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFoundPage, {}) })] }) }));
}
//# sourceMappingURL=App.js.map