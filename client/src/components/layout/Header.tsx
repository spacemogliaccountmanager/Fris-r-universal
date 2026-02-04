import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/booking/BookingProvider";
import { siteMeta } from "@shared/data/site-meta";
import { cn } from "@/lib/cn";
import { MobileNav } from "./MobileNav";

const NAV_LINKS = [
  { label: "Om oss", href: "#om" },
  { label: "Våra tjänster", href: "#tjanster" },
  { label: "Våra produkter", href: "#produkter" },
  { label: "Kontakta oss", href: "#kontakt" },
] as const;

export function Header() {
  const { setOpen } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMobileOpen(false);
    },
    [],
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-bg/95 backdrop-blur-md shadow-card-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" aria-label="Lekri hem">
          {logoError ? (
            <span className="font-serif text-2xl font-bold tracking-wide text-white">
              LEKRI
            </span>
          ) : (
            <img
              src="/assets/logo-white.png"
              alt="Lekri"
              className="h-8 w-auto"
              onError={() => setLogoError(true)}
            />
          )}
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Huvudnavigering">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                scrolled
                  ? "text-ink-soft hover:text-ink"
                  : "text-white/80 hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: actions */}
        <div className="flex items-center gap-3">
          {/* Social icons */}
          <a
            href={siteMeta.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={cn(
              "hidden h-9 w-9 items-center justify-center rounded-full transition-colors sm:flex",
              scrolled
                ? "text-ink-soft hover:text-ink"
                : "text-white/70 hover:text-white",
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <a
            href={`mailto:${siteMeta.email}`}
            aria-label="Skicka e-post"
            className={cn(
              "hidden h-9 w-9 items-center justify-center rounded-full transition-colors sm:flex",
              scrolled
                ? "text-ink-soft hover:text-ink"
                : "text-white/70 hover:text-white",
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>

          {/* Boka tid — desktop */}
          <Button
            variant="solid"
            onClick={() => setOpen(true)}
            className="hidden lg:inline-flex"
          >
            Boka tid
          </Button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={mobileOpen}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
              scrolled
                ? "text-ink hover:bg-bg-deep"
                : "text-white hover:bg-white/10",
            )}
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <MobileNav
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        links={NAV_LINKS}
        onBookClick={() => {
          setMobileOpen(false);
          setOpen(true);
        }}
      />
    </header>
  );
}
