import { Sparkles } from "lucide-react";

import heroImage from "@/assets/hero-beauty.jpg";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="bg-pastel pointer-events-none absolute -top-40 -right-32 h-[34rem] w-[34rem] rounded-full opacity-40 blur-3xl" />
      <div className="bg-pastel pointer-events-none absolute -bottom-48 -left-40 h-[30rem] w-[30rem] rounded-full opacity-30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="fade-up">
          <span className="border-gold/40 bg-card/70 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs tracking-[0.18em] text-muted-foreground uppercase backdrop-blur">
            <Sparkles className="text-gold h-3.5 w-3.5" />
            Belleza accesible
          </span>

          <h1 className="mt-6 text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            Wish <span className="text-gold-gradient">Beauty</span>
          </h1>

          <p className="font-display mt-4 text-2xl text-foreground/80 md:text-3xl">
            {site.brand.tagline}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Descubre productos accesibles, aprende a conocer tu estilo y encuentra una forma de
            maquillarte que se adapte a ti y a tu presupuesto.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg">
              <a href="#recomendaciones">Explorar recomendaciones</a>
            </Button>
            <Button asChild variant="soft" size="lg">
              <a href="#masterclass">Conocer la Masterclass</a>
            </Button>
          </div>

          <div className="gold-rule mt-12 max-w-md" />
          <p className="font-display mt-4 max-w-md text-lg text-foreground/70 italic">
            “{site.brand.philosophy}”
          </p>
        </div>

        <div className="fade-up relative">
          <div className="bg-pastel absolute -inset-4 rounded-[2.75rem] opacity-60 blur-xl" />
          <div className="border-gold/30 relative overflow-hidden rounded-[2.5rem] border shadow-[var(--shadow-glow)]">
            <img
              src={heroImage}
              alt="Mujer con maquillaje suave sosteniendo una brocha, rodeada de productos de maquillaje accesibles"
              width={1280}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="border-gold/30 bg-card/90 absolute bottom-6 left-6 rounded-2xl border px-5 py-3 shadow-[var(--shadow-soft)] backdrop-blur">
            <p className="eyebrow">Marcas favoritas</p>
            <p className="mt-1 text-sm text-foreground/80">
              Bissú · Pink Up · Italia Deluxe · Saniye
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
