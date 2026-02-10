import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
export function useServices() {
    return useQuery({
        queryKey: ["services"],
        queryFn: () => apiFetch("/services"),
        select: (response) => response.data,
    });
}
//# sourceMappingURL=useServices.js.map