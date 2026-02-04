import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import type { Service, ApiResponse } from "@shared/types";

export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: () => apiFetch<ApiResponse<Service[]>>("/services"),
    select: (response) => response.data,
  });
}
