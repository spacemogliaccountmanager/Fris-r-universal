import { Helmet } from "react-helmet-async";
import { ServicesSection } from "@/components/sections/ServicesSection";

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Våra tjänster — Din Salong</title>
        <meta name="description" content="Utforska våra frisörtjänster och se vad vi kan erbjuda." />
      </Helmet>

      <main className="pt-20">
        <ServicesSection />
      </main>
    </>
  );
}
