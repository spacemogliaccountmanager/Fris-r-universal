import { ContactForm } from "@/components/contact/ContactForm";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { siteMeta } from "@shared/data/site-meta";

const CONTACT_ITEMS = [
  {
    label: "Besök oss",
    value: `${siteMeta.location}, ${siteMeta.country}`,
    href: undefined,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-accent"
        aria-hidden="true"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "E-post",
    value: siteMeta.email,
    href: `mailto:${siteMeta.email}`,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-accent"
        aria-hidden="true"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Telefon",
    value: siteMeta.phone,
    href: `tel:${siteMeta.phone.replace(/[^+\d]/g, "")}`,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-accent"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
] as const;

export function ContactSection() {
  const headerRef = useScrollReveal();
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="kontakt" className="bg-bg py-24 px-6">
      <div className="mx-auto max-w-site">
        {/* Header */}
        <div ref={headerRef} data-reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.08em] text-accent font-medium">
            Kontakt
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink mt-4">
            Hör av dig till oss
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12 items-start">
          {/* Left column – contact details */}
          <div ref={leftRef} data-reveal className="space-y-8">
            {CONTACT_ITEMS.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 grid place-items-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.08em] text-muted">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-ink text-accent hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-ink">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right column – contact form */}
          <div ref={rightRef} data-reveal>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
