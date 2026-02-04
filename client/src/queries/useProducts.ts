import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import type { Product, ApiResponse } from "@shared/types";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => apiFetch<ApiResponse<Product[]>>("/products"),
    select: (response) => response.data,
  });
}
