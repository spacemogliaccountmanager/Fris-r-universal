import { siteMeta } from "@shared/data/site-meta";

export function Footer() {
  return (
    <footer className="bg-[#15110f] text-[#f7efe6]/70">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {/* Column 1 — Brand */}
        <div>
          <p className="font-serif text-2xl font-bold tracking-wide text-[#f7efe6]">
            LEKRI
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            {siteMeta.tagline} i {siteMeta.location} &mdash; personliga
            klippningar, färg och styling i en avslappnad miljö.
          </p>
        </div>

        {/* Column 2 — Öppettider */}
        <div>
          <h3 className="font-serif text-lg font-semibold text-[#f7efe6]">
            Öppettider
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li>{siteMeta.hours.weekdays}</li>
            <li>{siteMeta.hours.saturday}</li>
          </ul>
        </div>

        {/* Column 3 — Hitta hit */}
        <div>
          <h3 className="font-serif text-lg font-semibold text-[#f7efe6]">
            Hitta hit
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li>
              {siteMeta.location}, {siteMeta.country}
            </li>
            <li>
              <a
                href={`mailto:${siteMeta.email}`}
                className="underline decoration-[#f7efe6]/30 underline-offset-2 transition-colors hover:text-[#f7efe6]"
              >
                {siteMeta.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteMeta.phone.replace(/[^+\d]/g, "")}`}
                className="underline decoration-[#f7efe6]/30 underline-offset-2 transition-colors hover:text-[#f7efe6]"
              >
                {siteMeta.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#f7efe6]/10">
        <div className="mx-auto max-w-site px-5 py-5 text-center text-xs text-[#f7efe6]/40 lg:px-8">
          &copy; 2026 Lekri. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
}
