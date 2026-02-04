import { useScrollReveal } from "@/hooks/useScrollReveal";

const STEPS = [
  { number: "01", text: "Personlig konsultation" },
  { number: "02", text: "Premiumprodukter" },
  { number: "03", text: "Fokus på helheten" },
] as const;

export function StudioSection() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section className="bg-[#15110f] px-6 py-24 text-[#f7efe6]">
      <div className="mx-auto grid max-w-site grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left column */}
        <div ref={leftRef} data-reveal>
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.08em] text-accent">
            Lekri upplevelsen
          </p>

          <h2 className="mb-6 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            En lugn plats mitt i Sandviken
          </h2>

          <p className="max-w-lg text-[#f7efe6]/80">
            Vår studio är skapad för att ge utrymme, ljus och en välkomnande
            känsla. Här kan du landa och känna dig trygg genom hela
            behandlingen.
          </p>
        </div>

        {/* Right column — card */}
        <div ref={rightRef} data-reveal>
          <div className="rounded-lg border border-white/10 bg-[#1e1a17] p-8">
            <h3 className="mb-3 font-serif text-2xl font-semibold">
              Detaljer som gör skillnad
            </h3>

            <p className="mb-8 text-[#f7efe6]/80">
              Vi arbetar med tydliga steg, långsiktiga resultat och en
              avslappnad atmosfär.
            </p>

            <div className="flex flex-col gap-6">
              {STEPS.map((step) => (
                <div key={step.number} className="flex items-start gap-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block h-2 w-2 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span className="font-serif text-xl font-bold text-accent">
                      {step.number}
                    </span>
                  </div>
                  <span className="text-[#f7efe6]/80">{step.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
