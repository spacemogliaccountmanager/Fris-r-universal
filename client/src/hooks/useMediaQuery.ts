import { useEffect, useState } from "react";

/**
 * Simple hook that accepts a media query string and returns
 * a boolean indicating whether it currently matches.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Set initial value
    setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
