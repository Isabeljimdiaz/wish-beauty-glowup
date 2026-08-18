import { Droplets, Sun, Sparkles, Layers } from "lucide-react";

import skincareImg from "@/assets/skincare.jpg";

const steps = [
  {
    n: "1",
    icon: Droplets,
    title: "Limpieza",
    text: "Eliminar impurezas y preparar la piel.",
  },
  {
    n: "2",
    icon: Sparkles,
    title: "Hidratación",
    text: "Mantener la piel hidratada antes del maquillaje.",
  },
  {
    n: "3",
    icon: Sun,
    title: "Protección",
    text: "Recordar la importancia del protector solar durante el día.",
  },
  {
    n: "4",
    icon: Layers,
    title: "Primer",
    text: "Preparar la superficie de la piel para el maquillaje cuando sea necesario.",
  },
];

export function Skincare() {
  return (
    <section id="skincare" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="border-gold/25 relative overflow-hidden rounded-[2.5rem] border shadow-[var(--shadow-soft)]">
            <img
              src={skincareImg}
              alt="Productos de skincare: limpiador, crema hidratante y protector solar sobre mármol blanco"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">Skincare</p>
            <h2 className="mt-3 text-4xl text-foreground md:text-5xl">Prepara tu piel</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Una buena preparación de piel es la base de cualquier maquillaje. Cuando la piel está
              limpia e hidratada, los productos se difuminan mejor, duran más tiempo y el acabado se
              ve mucho más natural.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {steps.map(({ n, icon: Icon, title, text }) => (
                <article key={n} className="surface-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="bg-pastel inline-flex h-9 w-9 items-center justify-center rounded-xl">
                      <Icon className="h-4 w-4 text-foreground/80" />
                    </span>
                    <span className="text-gold font-display text-lg">{n}.</span>
                    <h3 className="font-display text-xl text-foreground">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>

            <p className="border-gold/30 bg-secondary/50 mt-6 rounded-2xl border border-dashed p-5 text-sm leading-relaxed text-foreground/75">
              Cada piel es diferente. Las recomendaciones de productos deben adaptarse a las
              necesidades de cada persona. No realizamos diagnósticos médicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
