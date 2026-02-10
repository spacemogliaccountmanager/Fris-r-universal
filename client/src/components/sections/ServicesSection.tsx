import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useServices } from "@/queries/useServices";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ServicesSection() {
  const { data: services, isLoading, error } = useServices();
  const headerRef = useScrollReveal();

  return (
    <section id="tjanster" className="bg-bg py-24 px-6">
      <div className="mx-auto max-w-site">
        {/* Header */}
        <div ref={headerRef} data-reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.08em] text-accent font-medium">
            Våra tjänster
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink mt-4">
            Skräddarsydda behandlingar för varje stil
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mt-4">
            Vi kombinerar form, färg och textur för att skapa ett resultat som
            framhäver din personlighet. Välj en behandling eller börja med en
            konsultation.
          </p>
        </div>

        {/* Loading state */}
        {isLoading && (
          <p className="text-muted text-sm text-center mt-12">Laddar...</p>
        )}

        {/* Error state */}
        {error && (
          <p className="text-red-500 text-sm text-center mt-12">
            Kunde inte ladda tjänster.
          </p>
        )}

        {/* Services grid */}
        {services && services.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: { id: string; title: string; description: string; durationMinutes: number; priceLabel: string };
  index: number;
}) {
  const cardRef = useScrollReveal();

  return (
    <div
      ref={cardRef}
      data-reveal
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <Card hover className="h-full">
        <h3 className="font-serif text-base font-semibold text-ink sm:text-xl">
          {service.title}
        </h3>
        <p className="text-muted text-xs mt-1 sm:text-sm sm:mt-2">{service.description}</p>
        <div className="h-px bg-line my-2 sm:my-4" />
        <div className="flex items-center gap-1.5 flex-wrap sm:gap-2">
          <Badge variant="muted">{service.durationMinutes} min</Badge>
          <Badge variant="default">{service.priceLabel}</Badge>
        </div>
      </Card>
    </div>
  );
}
