import { useEffect, useState } from "react";
/**
 * Simple hook that accepts a media query string and returns
 * a boolean indicating whether it currently matches.
 */
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => {
        if (typeof window === "undefined")
            return false;
        return window.matchMedia(query).matches;
    });
    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const handleChange = (event) => {
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
//# sourceMappingURL=useMediaQuery.js.map