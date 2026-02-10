import { z } from "zod";
export const contactSchema = z.object({
    name: z
        .string()
        .min(1, "Namn är obligatoriskt")
        .max(200),
    email: z
        .string()
        .email("Ogiltig e-postadress")
        .max(300),
    phone: z
        .union([z.string().max(30), z.literal("")])
        .optional(),
    message: z
        .string()
        .min(1, "Meddelande är obligatoriskt")
        .max(5000),
});
//# sourceMappingURL=contact.schema.js.map