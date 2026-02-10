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
  return (
    <Collapsible.Root open={open} onOpenChange={onOpenChange}>
      <Collapsible.Content
        className={cn(
          "overflow-hidden border-b border-white/10 bg-neutral-900 lg:hidden",
          "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-top-2",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-2",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 pb-5 pt-2" aria-label="Mobilnavigering">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => onOpenChange(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
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
