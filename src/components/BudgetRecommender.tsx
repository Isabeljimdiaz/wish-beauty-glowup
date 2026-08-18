import { useState } from "react";
import { RefreshCw, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  budgetPresets,
  buildKit,
  cheapestProductPrice,
  formatMXN,
  type KitResult,
} from "@/lib/recommender";

export function BudgetRecommender() {
  const [value, setValue] = useState("");
  const [kit, setKit] = useState<KitResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generate = (raw: string) => {
    const budget = Number(raw.replace(/[^\d]/g, ""));
    if (!budget || budget < cheapestProductPrice) {
      setKit(null);
      setError(
        `Ingresa un presupuesto de al menos $${formatMXN(cheapestProductPrice)} MXN para armar tu kit.`,
      );
      return;
    }
    setError(null);
    setKit(buildKit(budget));
  };

  return (
    <section id="encuentra" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center">
          <p className="eyebrow">Función principal</p>
          <h2 className="mt-3 text-4xl text-foreground md:text-5xl">Encuentra tu maquillaje</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            ¿Tienes un presupuesto y no sabes qué comprar? Dinos cuánto quieres gastar y te
            ayudaremos a crear una selección de productos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border-gold/25 bg-pastel-soft rounded-[2.5rem] border p-8 shadow-[var(--shadow-soft)] md:p-10">
            <span className="bg-card/80 inline-flex h-12 w-12 items-center justify-center rounded-2xl">
              <Wallet className="text-gold h-5 w-5" />
            </span>
            <h3 className="font-display mt-5 text-2xl text-foreground">¿Cuánto quieres gastar?</h3>

            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                generate(value);
              }}
            >
              <label htmlFor="budget" className="text-sm text-muted-foreground">
                Presupuesto en MXN
              </label>
              <div className="mt-2 flex items-center gap-2">
                <span className="font-display text-2xl text-foreground">$</span>
                <Input
                  id="budget"
                  inputMode="numeric"
                  placeholder="500"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="h-12 rounded-2xl bg-card text-base"
                />
                <span className="text-sm text-muted-foreground">MXN</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {budgetPresets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => {
                      setValue(String(preset));
                      generate(String(preset));
                    }}
                    className="border-gold/30 bg-card rounded-full border px-4 py-1.5 text-sm text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
                  >
                    ${formatMXN(preset)}
                  </button>
                ))}
              </div>

              <Button type="submit" variant="gold" size="lg" className="mt-7 w-full">
                Encontrar mi maquillaje
              </Button>

              {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
            </form>
          </div>

          <div className="surface-card p-8 md:p-10">
            {!kit ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                <p className="eyebrow">Tu kit recomendado</p>
                <p className="font-display mt-4 max-w-sm text-2xl text-foreground/70">
                  Escribe tu presupuesto y armaremos una selección de productos accesibles para ti.
                </p>
              </div>
            ) : (
              <div className="fade-up">
                <p className="eyebrow">Tu kit recomendado</p>
                <h3 className="font-display mt-3 text-3xl text-foreground">
                  {kit.items.length} productos para ti
                </h3>

                <ul className="mt-6 divide-y divide-border">
                  {kit.items.map((item) => (
                    <li key={item.id} className="flex items-center justify-between gap-4 py-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.category}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.name} — {item.brand}
                        </p>
                      </div>
                      <p className="font-display text-lg text-foreground">
                        ${formatMXN(item.price)}
                      </p>
                    </li>
                  ))}
                </ul>

                <dl className="bg-secondary/60 mt-6 space-y-2 rounded-2xl p-5 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Total estimado</dt>
                    <dd className="font-semibold text-foreground">${formatMXN(kit.total)} MXN</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Tu presupuesto</dt>
                    <dd className="text-foreground">${formatMXN(kit.budget)} MXN</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Te quedan</dt>
                    <dd className="text-gold font-semibold">${formatMXN(kit.remaining)} MXN</dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="gold" onClick={() => setKit(buildKit(kit.budget))}>
                    <RefreshCw />
                    Cambiar recomendación
                  </Button>
                  <Button asChild variant="soft">
                    <a href="#recomendaciones">Ver productos</a>
                  </Button>
                </div>

                <p className="mt-4 text-xs text-muted-foreground">
                  Selección orientativa con precios aproximados. Cada piel y cada estilo son
                  distintos.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
