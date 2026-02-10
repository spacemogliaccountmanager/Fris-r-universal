import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
const BookingContext = createContext(null);
export function BookingProvider({ children }) {
    const [open, setOpen] = useState(false);
    return (_jsx(BookingContext.Provider, { value: { open, setOpen }, children: children }));
}
export function useBooking() {
    const ctx = useContext(BookingContext);
    if (!ctx) {
        throw new Error("useBooking must be used within a <BookingProvider>");
    }
    return ctx;
}
//# sourceMappingURL=BookingProvider.js.map