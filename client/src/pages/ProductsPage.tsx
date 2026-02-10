import { Helmet } from "react-helmet-async";
import { ProductsSection } from "@/components/sections/ProductsSection";

export function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>Våra produkter — Din Salong</title>
        <meta name="description" content="Bläddra genom vårt urval av högkvalitativa hårvårdsprodukter." />
      </Helmet>

      <main className="pt-20">
        <ProductsSection />
      </main>
    </>
  );
}
