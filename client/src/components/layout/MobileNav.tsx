import * as Collapsible from "@radix-ui/react-collapsible";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

interface NavLink {
  readonly label: string;
  readonly href: string;
}

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  links: readonly NavLink[];
  onBookClick: () => void;
}

export function MobileNav({
  open,
  onOpenChange,
  links,
  onBookClick,
}: MobileNavProps) {
  function handleLinkClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onOpenChange(false);
  }

  return (
    <Collapsible.Root open={open} onOpenChange={onOpenChange}>
      <Collapsible.Content
        className={cn(
          "overflow-hidden border-b border-line bg-bg lg:hidden",
          "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-top-2",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-2",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 pb-5 pt-2" aria-label="Mobilnavigering">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-bg-deep hover:text-ink"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-3">
            <Button
              variant="solid"
              onClick={onBookClick}
              className="w-full"
            >
              Boka tid
            </Button>
          </div>
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
