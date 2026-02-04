import { Outlet } from "react-router-dom";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <BookingProvider>
      <Header />
      <main className="relative z-[1]">
        <Outlet />
      </main>
      <Footer />
      <BookingDialog />
    </BookingProvider>
  );
}
