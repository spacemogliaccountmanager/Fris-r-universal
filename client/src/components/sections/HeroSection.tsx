import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/booking/BookingProvider";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const STATS = [
  { value: "10+", label: "år av erfarenhet" },
  { value: "4.9", label: "genomsnittligt betyg" },
  { value: "100%", label: "fokus på dig" },
] as const;

export function HeroSection() {
  const { setOpen } = useBooking();
  const contentRef = useScrollReveal();
  const statsRef = useScrollReveal();

  useEffect(() => {
    document.body.classList.add("is-loaded");
  }, []);

  function handleSmoothScroll(e: React.MouseEvent<HTMLButtonElement>, hash: string) {
    e.preventDefault();
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <picture>
        <source srcSet="/assets/hero-mobile.jpg" media="(max-width: 640px)" />
        <img
          src="/assets/hero.jpg"
          alt="Lekri frisörsalong"
          className="hero-image absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content */}
      <div
        ref={contentRef}
        data-reveal
        className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-20"
      >
        <div className="mx-auto w-full max-w-site">
          <p className="mb-4 font-sans text-xs uppercase tracking-wider text-white/70">
            Lekri frisörsalong
          </p>

          <h1 className="mb-4 font-serif text-5xl font-bold text-white md:text-7xl">
            Våra behandlingar
          </h1>

          <p className="mb-8 max-w-xl text-lg text-white/80">
            Personligt, kreativt och avslappnat. Vi lyfter fram din stil med
            skräddarsydda klippningar, färg och form.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              onClick={(e) => handleSmoothScroll(e, "#om")}
            >
              Mer om oss
            </Button>
            <Button variant="solid" onClick={() => setOpen(true)}>
              Boka direkt
            </Button>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div
        ref={statsRef}
        data-reveal
        className="relative z-10 px-6 pb-12"
      >
        <div className="mx-auto flex max-w-site flex-wrap items-center gap-8">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8">
              {i > 0 && (
                <div className="h-10 w-px bg-white/20" aria-hidden="true" />
              )}
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-white/60">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
