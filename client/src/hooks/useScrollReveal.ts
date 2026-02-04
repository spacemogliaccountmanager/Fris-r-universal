import { useEffect, useRef } from "react";

/**
 * IntersectionObserver hook that adds an "is-visible" class
 * when the element enters the viewport. Respects prefers-reduced-motion.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect prefers-reduced-motion: skip animation entirely
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}
