import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
export function useContactMutation() {
    return useMutation({
        mutationFn: (data) => apiFetch("/contact", {
            method: "POST",
            body: JSON.stringify(data),
        }),
    });
}
//# sourceMappingURL=useContactMutation.js.map