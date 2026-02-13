import { useQuery } from "@tanstack/react-query";
import { products } from "@shared/data/products";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => products,
  });
}
