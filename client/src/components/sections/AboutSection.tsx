import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function AboutSection() {
  const textRef = useScrollReveal();
  const imageRef = useScrollReveal();

  function handleSmoothScroll(e: React.MouseEvent<HTMLButtonElement>, hash: string) {
    e.preventDefault();
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section id="om" className="bg-bg px-6 py-24">
      <div className="mx-auto grid max-w-site grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Text column */}
        <div ref={textRef} data-reveal>
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.08em] text-accent">
            Om Lekri
          </p>

          <h2 className="mb-6 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
            En salong byggd på närvaro och hantverk
          </h2>

          <p className="mb-4 text-ink-soft">
            Lekri är en frisörsalong där lugn och precision möts. Vi arbetar med
            lyhörda konsultationer, tydliga planer och resultat som håller över
            tid.
          </p>

          <p className="mb-8 text-ink-soft">
            Hos oss får du en helhetsupplevelse med fokus på kvalitet, värme och
            ett uttryck som känns som ditt.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="ghost"
              onClick={(e) => handleSmoothScroll(e, "#tjanster")}
            >
              Utforska tjänster
            </Button>
            <Button
              variant="ghost"
              onClick={(e) => handleSmoothScroll(e, "#kontakt")}
            >
              Prata med oss
            </Button>
          </div>
        </div>

        {/* Image column */}
        <div ref={imageRef} data-reveal>
          <figure>
            <div className="overflow-hidden rounded-lg shadow-card">
              <img
                src="/assets/hero.jpg"
                alt="Lekri salong interiör"
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 text-sm italic text-muted">
              Vår salong är skapad för att ge lugn och inspiration.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
