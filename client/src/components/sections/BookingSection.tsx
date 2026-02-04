import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/booking/BookingProvider";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function BookingSection() {
  const { setOpen } = useBooking();
  const ref = useScrollReveal();

  return (
    <section id="boka" className="bg-bg-deep px-6 py-24 text-center">
      <div ref={ref} data-reveal className="mx-auto max-w-2xl">
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.08em] text-accent">
          Boka tid
        </p>

        <h2 className="mb-4 font-serif text-4xl font-semibold text-ink md:text-5xl">
          Redo att boka din tid?
        </h2>

        <p className="mb-8 text-lg text-muted">
          Välj en tid som passar dig. Vi ser fram emot att träffa dig.
        </p>

        <Button variant="solid" size="lg" onClick={() => setOpen(true)}>
          Boka nu
        </Button>
      </div>
    </section>
  );
}
