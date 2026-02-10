import { type ReactNode } from "react";
interface BookingContextValue {
    open: boolean;
    setOpen: (v: boolean) => void;
}
export declare function BookingProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useBooking(): BookingContextValue;
export {};
//# sourceMappingURL=BookingProvider.d.ts.map