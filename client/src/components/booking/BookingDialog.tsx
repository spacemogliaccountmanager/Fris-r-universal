import { useCallback, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useBooking } from "./BookingProvider";
import { siteMeta } from "@shared/data/site-meta";

export function BookingDialog() {
  const { open, setOpen } = useBooking();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [shouldRenderIframe, setShouldRenderIframe] = useState(false);

  // Lazily mount the iframe only when the dialog opens
  useEffect(() => {
    if (open) {
      setShouldRenderIframe(true);
    }
  }, [open]);

  // Reset loaded state when dialog closes so spinner shows on re-open
  useEffect(() => {
    if (!open) {
      setIframeLoaded(false);
    }
  }, [open]);

  const handleIframeLoad = useCallback(() => {
    setIframeLoaded(true);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 z-[1000] bg-ink/85 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />

        {/* Content wrapper */}
        <Dialog.Content className="fixed inset-4 z-[1001] flex items-center justify-center sm:inset-8">
          {/* Inner container */}
          <div className="flex h-[min(90vh,800px)] w-full max-w-[920px] flex-col overflow-hidden rounded-lg bg-white shadow-card">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <Dialog.Title className="font-serif text-2xl font-semibold text-ink">
                Boka din tid
              </Dialog.Title>

              <Dialog.Close
                aria-label="Stäng"
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-bg-deep hover:text-ink"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
              </Dialog.Close>
            </div>

            {/* Body */}
            <div className="relative flex-1">
              {/* Loading indicator */}
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-white">
                  <p className="text-sm text-muted">
                    Laddar bokningssystemet...
                  </p>
                </div>
              )}

              {/* Iframe — only rendered after dialog has opened once */}
              {shouldRenderIframe && (
                <iframe
                  src={siteMeta.booking.iframeUrl}
                  title="Boka tid hos Lekri"
                  className="h-full w-full border-0"
                  loading="lazy"
                  onLoad={handleIframeLoad}
                />
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
