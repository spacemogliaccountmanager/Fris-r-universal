import { Helmet } from "react-helmet-async";
import { ContactSection } from "@/components/sections/ContactSection";

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Kontakta oss — Lekri Salong</title>
        <meta name="description" content="Kontakta oss för mer information eller för att boka en tid." />
      </Helmet>

      <main className="pt-20">
        <ContactSection />
      </main>
    </>
  );
}
