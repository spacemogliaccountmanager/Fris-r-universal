import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useContactMutation } from "@/queries/useContactMutation";
import { contactSchema, } from "@shared/schemas/contact.schema";
export function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm({
        resolver: zodResolver(contactSchema),
    });
    const mutation = useContactMutation();
    function onSubmit(data) {
        mutation.mutate(data, {
            onSuccess: () => {
                reset();
            },
        });
    }
    return (_jsxs("form", { onSubmit: handleSubmit(onSubmit), noValidate: true, className: "bg-light p-7 rounded-lg shadow-card grid gap-5", children: [_jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "contact-name", children: "Namn" }), _jsx(Input, { id: "contact-name", placeholder: "Ditt namn", error: errors.name?.message, ...register("name") })] }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "contact-email", children: "E-post" }), _jsx(Input, { id: "contact-email", type: "email", placeholder: "din@e-post.se", error: errors.email?.message, ...register("email") })] }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "contact-phone", children: "Telefon" }), _jsx(Input, { id: "contact-phone", type: "tel", placeholder: "070-000 00 00", error: errors.phone?.message, ...register("phone") }), _jsx("p", { className: "text-xs text-muted", children: "Valfritt" })] }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "contact-message", children: "Meddelande" }), _jsx(Textarea, { id: "contact-message", rows: 5, placeholder: "Skriv ditt meddelande h\u00E4r...", error: errors.message?.message, ...register("message") })] }), _jsx(Button, { type: "submit", variant: "solid", className: "w-full", disabled: mutation.isPending, children: mutation.isPending ? "Skickar..." : "Skicka meddelande" }), mutation.isSuccess && (_jsx("p", { className: "text-sm text-muted", role: "status", children: "Tack! Vi h\u00F6r av oss snart." })), mutation.isError && (_jsx("p", { className: "text-sm text-red-700", role: "status", children: "N\u00E5got gick fel. F\u00F6rs\u00F6k igen." }))] }));
}
//# sourceMappingURL=ContactForm.js.map