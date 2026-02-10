import { useEffect } from "react";
import { useLocation } from "react-router-dom";
/**
 * Listens for hash changes (via React Router location) and
 * smooth-scrolls to the target element.
 */
export function useScrollToHash() {
    const { hash } = useLocation();
    useEffect(() => {
        if (!hash)
            return;
        // Small delay to ensure the DOM has rendered the target element
        const timeout = setTimeout(() => {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 100);
        return () => clearTimeout(timeout);
    }, [hash]);
}
//# sourceMappingURL=useScrollToHash.js.map