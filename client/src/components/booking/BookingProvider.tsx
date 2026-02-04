import { createContext, useContext, useState, type ReactNode } from "react";

interface BookingContextValue {
  open: boolean;
  setOpen: (v: boolean) => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <BookingContext.Provider value={{ open, setOpen }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking(): BookingContextValue {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within a <BookingProvider>");
  }
  return ctx;
}
