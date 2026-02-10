import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Header } from "./Header";
import { Footer } from "./Footer";
export function Layout() {
    return (_jsxs(BookingProvider, { children: [_jsx(Header, {}), _jsx("main", { className: "relative z-[1]", children: _jsx(Outlet, {}) }), _jsx(Footer, {}), _jsx(BookingDialog, {})] }));
}
//# sourceMappingURL=Layout.js.map