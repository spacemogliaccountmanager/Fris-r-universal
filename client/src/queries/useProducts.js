import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
export function useProducts() {
    return useQuery({
        queryKey: ["products"],
        queryFn: () => apiFetch("/products"),
        select: (response) => response.data,
    });
}
//# sourceMappingURL=useProducts.js.map