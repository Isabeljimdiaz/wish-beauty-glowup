import { useMemo, useState } from "react";

import { categories, products, type Category } from "@/data/products";
import { formatMXN } from "@/lib/recommender";
import { Button } from "@/components/ui/button";

export function ProductRecommendations() {
  const [active, setActive] = useState<Category | "Todos">("Todos");

  const visible = useMemo(
    () => (active === "Todos" ? products : products.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="recomendaciones" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="eyebrow">Productos recomendados</p>
          <h2 className="mt-3 text-4xl text-foreground md:text-5xl">Nuestros favoritos</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Productos accesibles que recomendamos para crear tu rutina de maquillaje y skincare.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {(["Todos", ...categories] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-all duration-300 ${
                active === cat
                  ? "border-gold bg-gold text-gold-foreground shadow-[var(--shadow-soft)]"
                  : "border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article key={p.id} className="surface-card group overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} de ${p.brand}`}
                  width={900}
                  height={700}
                  loading="lazy"
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="bg-secondary rounded-full px-3 py-1 text-xs text-secondary-foreground">
                    {p.category}
                  </span>
                  <span className="text-gold text-xs tracking-[0.16em] uppercase">
                    {p.priceLevel}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-2xl leading-snug text-foreground">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.brand}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="font-display text-xl text-foreground">
                    ${formatMXN(p.price)}{" "}
                    <span className="text-xs text-muted-foreground">MXN aprox.</span>
                  </p>
                  <Button asChild variant="soft" size="sm">
                    <a href="#encuentra">Ver recomendación</a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Los precios son aproximados y pueden variar según el punto de venta.
        </p>
      </div>
    </section>
  );
}
