import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import type { ContactFormData } from "@shared/schemas/contact.schema";
import type { ApiResponse } from "@shared/types";

export function useContactMutation() {
  return useMutation({
    mutationFn: (data: ContactFormData) =>
      apiFetch<ApiResponse<null>>("/contact", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  });
}
