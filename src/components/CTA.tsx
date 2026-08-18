import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="px-5 pb-20 md:pb-28 lg:px-8">
      <div className="bg-pastel border-gold/30 relative mx-auto max-w-6xl overflow-hidden rounded-[2.75rem] border px-6 py-16 text-center shadow-[var(--shadow-glow)] md:px-14 md:py-20">
        <div className="bg-card/40 pointer-events-none absolute inset-0" />
        <div className="relative">
          <p className="eyebrow">Wish Beauty</p>
          <h2 className="mt-3 text-4xl text-foreground md:text-5xl">
            ¿Lista para descubrir tu versión Wish?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-foreground/75">
            Empieza a explorar productos accesibles, descubre nuevos tips y aprende a crear looks que
            representen tu estilo.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gold" size="lg">
              <a href="#recomendaciones">Explorar productos</a>
            </Button>
            <Button asChild variant="soft" size="lg">
              <a href="#masterclass">Quiero mi Masterclass</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
