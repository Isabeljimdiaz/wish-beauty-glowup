import { useMemo, useState } from "react";

import { categories, products, type Category, type Product } from "@/data/products";
import { formatMXN } from "@/lib/recommender";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ProductRecommendations() {
  const [active, setActive] = useState<Category | "Todos">("Todos");
  const [selected, setSelected] = useState<Product | null>(null);

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
                  <Button variant="soft" size="sm" onClick={() => setSelected(p)}>
                    Ver recomendación
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Los precios son aproximados y pueden variar según el punto de venta.
        </p>

        <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
            {selected && (
              <>
                <img
                  src={selected.image}
                  alt={`${selected.name} de ${selected.brand}`}
                  className="h-44 w-full rounded-2xl object-cover"
                />
                <DialogHeader className="text-left">
                  <p className="eyebrow">{selected.category}</p>
                  <DialogTitle className="font-display text-3xl leading-snug">
                    {selected.name}
                  </DialogTitle>
                  <DialogDescription>{selected.brand}</DialogDescription>
                </DialogHeader>

                <div className="flex items-center justify-between gap-3 rounded-2xl bg-secondary px-4 py-3">
                  <span className="font-display text-2xl text-foreground">
                    ${formatMXN(selected.price)}{" "}
                    <span className="text-xs text-muted-foreground">MXN aprox.</span>
                  </span>
                  <span className="text-gold text-xs tracking-[0.16em] uppercase">
                    {selected.priceLevel}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {selected.description}
                </p>

                {selected.benefits?.length ? (
                  <div>
                    <h4 className="font-display text-xl text-foreground">Beneficios</h4>
                    <ul className="mt-2 space-y-1.5">
                      {selected.benefits.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="text-gold">•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {selected.usage ? (
                  <div>
                    <h4 className="font-display text-xl text-foreground">Modo de uso</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {selected.usage}
                    </p>
                  </div>
                ) : null}

                <Button asChild variant="gold" className="mt-2">
                  <a href="#encuentra" onClick={() => setSelected(null)}>
                    Armar mi kit con mi presupuesto
                  </a>
                </Button>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
