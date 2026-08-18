import { Clock, Tag, MonitorSmartphone, Users, Gift } from "lucide-react";

import masterclassImg from "@/assets/masterclass.jpg";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";

const details = [
  { icon: Clock, label: "Duración", value: site.masterclass.duration },
  { icon: Tag, label: "Precio", value: `$${site.masterclass.price} ${site.masterclass.currency}` },
  { icon: MonitorSmartphone, label: "Modalidad", value: site.masterclass.format },
  { icon: Users, label: "Cupo", value: site.masterclass.capacity },
];

const modules = [
  {
    n: "01",
    title: "Preparación de piel",
    text: "Aprenderás los pasos básicos para preparar tu piel antes del maquillaje.",
  },
  {
    n: "02",
    title: "Asesoría de imagen",
    text: "Conocerás conceptos básicos de imagen personal para aprender a elegir estilos que se adapten a ti.",
  },
  {
    n: "03",
    title: "Colorimetría",
    text: "Aprenderás sobre colores y cómo identificar tonalidades que pueden favorecer tus características y estilo.",
  },
  {
    n: "04",
    title: "Clase de maquillaje",
    text: "Realizaremos paso a paso un maquillaje completo, desde la preparación de la piel hasta los detalles finales.",
  },
  {
    n: "05",
    title: "Kit de maquillaje",
    text: "Cada participante recibirá un kit de maquillaje que podrá utilizar durante la Masterclass.",
  },
];

export function Masterclass() {
  return (
    <section id="masterclass" className="relative overflow-hidden py-20 md:py-28">
      <div className="bg-pastel pointer-events-none absolute inset-0 opacity-35" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="eyebrow">La experiencia</p>
          <h2 className="mt-3 text-4xl tracking-wide text-foreground md:text-6xl">
            MASTERCLASS <span className="text-gold-gradient">WISH BEAUTY</span>
          </h2>
          <p className="font-display mx-auto mt-4 max-w-2xl text-2xl text-foreground/80">
            Aprende a maquillarte, conoce tus colores y descubre tu estilo.
          </p>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-foreground/70">
            Nuestra Masterclass está diseñada para cualquier persona que ame el mundo del maquillaje
            o simplemente quiera aprender a maquillarse desde cero.
          </p>
          <p className="border-gold/40 bg-card/85 font-display mx-auto mt-6 max-w-3xl rounded-3xl border px-6 py-5 text-lg text-foreground shadow-[var(--shadow-soft)] backdrop-blur">
            No importa si eres principiante, tienes experiencia o eres maquillista profesional. Esta
            experiencia está pensada para acompañarte desde tu propio nivel.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-gold/25 overflow-hidden rounded-[2.5rem] border shadow-[var(--shadow-glow)]">
            <img
              src={masterclassImg}
              alt="Maquillista enseñando a aplicar maquillaje durante una masterclass"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="surface-card p-8 md:p-10">
            <p className="eyebrow">Información de la Masterclass</p>
            <h3 className="font-display mt-3 text-3xl text-foreground">Detalles del evento</h3>
            <div className="gold-rule mt-5" />

            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-secondary/50 rounded-2xl p-5">
                  <dt className="flex items-center gap-2 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    <Icon className="text-gold h-4 w-4" />
                    {label}
                  </dt>
                  <dd className="font-display mt-2 text-2xl text-foreground">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="border-gold/40 bg-pastel-soft mt-6 flex items-start gap-3 rounded-2xl border p-5">
              <Gift className="text-gold mt-0.5 h-5 w-5 shrink-0" />
              <p className="font-display text-lg text-foreground">
                Tu kit está incluido en la experiencia.
              </p>
            </div>

            <Button asChild variant="gold" size="lg" className="mt-6 w-full">
              <a href="#contacto">Quiero mi Masterclass</a>
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-center text-3xl text-foreground md:text-4xl">
            ¿Qué incluye la Masterclass?
          </h3>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <article key={m.n} className="surface-card p-8">
                <span className="text-gold-gradient font-display text-4xl">{m.n}</span>
                <h4 className="font-display mt-3 text-2xl text-foreground">{m.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
