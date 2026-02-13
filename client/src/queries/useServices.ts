import { useQuery } from "@tanstack/react-query";
import { services } from "@shared/data/services";

export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: () => services,
  });
}
