import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { StudioSection } from "@/components/sections/StudioSection";
import { ContactSection } from "@/components/sections/ContactSection";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Hem — Lekri Salong</title>
      </Helmet>

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BookingSection />
        <ProductsSection />
        <StudioSection />
        <ContactSection />
      </main>
    </>
  );
}
