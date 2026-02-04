import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useProducts } from "@/queries/useProducts";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ProductsSection() {
  const { data: products, isLoading, error } = useProducts();
  const headerRef = useScrollReveal();

  return (
    <section id="produkter" className="bg-bg-deep py-24 px-6">
      <div className="mx-auto max-w-site">
        {/* Header */}
        <div ref={headerRef} data-reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.08em] text-accent font-medium">
            Våra produkter
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink mt-4">
            Professionell hårvård från Kevin Murphy
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mt-4">
            Vi använder och säljer Kevin Murphy – premiumprodukter som skyddar
            färg, bygger styrka och bevarar glans. Alla produkter är framtagna
            med hållbarhet i fokus och ger långvariga resultat.
          </p>
        </div>

        {/* Loading state */}
        {isLoading && (
          <p className="text-muted text-sm text-center mt-12">Laddar...</p>
        )}

        {/* Error state */}
        {error && (
          <p className="text-red-500 text-sm text-center mt-12">
            Kunde inte ladda produkter.
          </p>
        )}

        {/* Products grid */}
        {products && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: {
    id: string;
    name: string;
    price: string;
    description: string;
    features: string[];
    image: string;
  };
  index: number;
}) {
  const cardRef = useScrollReveal();

  return (
    <div
      ref={cardRef}
      data-reveal
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <Card hover className="h-full">
        {/* Product image */}
        <div className="rounded-md overflow-hidden aspect-[4/3] mb-4">
          <img
            src={`/assets/${product.image}`}
            alt={product.name}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>

        {/* Product name */}
        <h3 className="font-serif text-lg font-semibold text-ink">
          {product.name}
        </h3>

        {/* Price badge */}
        <div className="mt-2">
          <Badge variant="default">{product.price}</Badge>
        </div>

        {/* Description */}
        <p className="text-muted text-sm mt-2">{product.description}</p>

        {/* Features list */}
        {product.features.length > 0 && (
          <ul className="mt-3 space-y-1">
            {product.features.map((feature) => (
              <li key={feature} className="text-sm text-muted flex items-start gap-2">
                <span className="text-accent mt-0.5" aria-hidden="true">
                  &bull;
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
