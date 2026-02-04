import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useContactMutation } from "@/queries/useContactMutation";
import {
  contactSchema,
  type ContactFormData,
} from "@shared/schemas/contact.schema";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const mutation = useContactMutation();

  function onSubmit(data: ContactFormData) {
    mutation.mutate(data, {
      onSuccess: () => {
        reset();
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-light p-7 rounded-lg shadow-card grid gap-5"
    >
      {/* Namn */}
      <div className="grid gap-2">
        <Label htmlFor="contact-name">Namn</Label>
        <Input
          id="contact-name"
          placeholder="Ditt namn"
          error={errors.name?.message}
          {...register("name")}
        />
      </div>

      {/* E-post */}
      <div className="grid gap-2">
        <Label htmlFor="contact-email">E-post</Label>
        <Input
          id="contact-email"
          type="email"
          placeholder="din@e-post.se"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      {/* Telefon */}
      <div className="grid gap-2">
        <Label htmlFor="contact-phone">Telefon</Label>
        <Input
          id="contact-phone"
          type="tel"
          placeholder="070-000 00 00"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <p className="text-xs text-muted">Valfritt</p>
      </div>

      {/* Meddelande */}
      <div className="grid gap-2">
        <Label htmlFor="contact-message">Meddelande</Label>
        <Textarea
          id="contact-message"
          rows={5}
          placeholder="Skriv ditt meddelande här..."
          error={errors.message?.message}
          {...register("message")}
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="solid"
        className="w-full"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Skickar..." : "Skicka meddelande"}
      </Button>

      {/* Success message */}
      {mutation.isSuccess && (
        <p className="text-sm text-muted" role="status">
          Tack! Vi hör av oss snart.
        </p>
      )}

      {/* Error message */}
      {mutation.isError && (
        <p className="text-sm text-red-700" role="status">
          Något gick fel. Försök igen.
        </p>
      )}
    </form>
  );
}
