import { Helmet } from "react-helmet-async";
import { AboutSection } from "@/components/sections/AboutSection";

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Om oss — Din Salong</title>
        <meta name="description" content="Läs mer om  Salong och vår historia." />
      </Helmet>

      <main className="pt-20">
        <AboutSection />
      </main>
    </>
  );
}
