import { z } from "zod";
export declare const contactSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    message: string;
    phone?: string | undefined;
}, {
    name: string;
    email: string;
    message: string;
    phone?: string | undefined;
}>;
export type ContactFormData = z.infer<typeof contactSchema>;
//# sourceMappingURL=contact.schema.d.ts.map