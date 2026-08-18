import { HeartHandshake, Palette, GraduationCap } from "lucide-react";

const focus = [
  "Maquillaje económico",
  "Skincare",
  "Consejos de belleza",
  "Recomendaciones de productos",
  "Colorimetría",
  "Asesoría de imagen",
  "Tutoriales",
  "Educación sobre maquillaje",
];

const differentiators = [
  {
    icon: HeartHandshake,
    title: "Belleza accesible",
    text: "Te mostramos opciones económicas que puedes encontrar sin gastar de más.",
  },
  {
    icon: Palette,
    title: "Aprende a conocerte",
    text: "Descubre qué colores, productos y estilos pueden favorecerte.",
  },
  {
    icon: GraduationCap,
    title: "Aprende sin importar tu nivel",
    text: "No necesitas ser maquillista profesional. Empezamos desde lo básico y avanzamos contigo.",
  },
];

export function About() {
  return (
    <section id="conocenos" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Conócenos</p>
            <h2 className="mt-3 text-4xl text-foreground md:text-5xl">
              Una comunidad de belleza accesible
            </h2>
            <div className="gold-rule mt-6 max-w-xs" />
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/80">
              En Wish Beauty creemos que el maquillaje no debería ser un lujo. Creamos contenido,
              recomendaciones y experiencias de aprendizaje para demostrar que puedes descubrir tu
              estilo y crear looks increíbles utilizando productos accesibles.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Wish Beauty comienza como una plataforma de creación de contenido enfocada en el
              maquillaje de gama económica: reseñas honestas, tutoriales paso a paso y consejos para
              aprovechar al máximo cada producto. Más adelante, esta comunidad se convierte también
              en una experiencia de aprendizaje con nuestra Masterclass.
            </p>

            <ul className="flex flex-wrap gap-2">
              {focus.map((item) => (
                <li
                  key={item}
                  className="border-gold/25 bg-secondary/60 rounded-full border px-4 py-1.5 text-sm text-foreground/75 transition-colors hover:bg-secondary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-center text-3xl text-foreground md:text-4xl">
            ¿Qué nos hace diferentes?
          </h3>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {differentiators.map(({ icon: Icon, title, text }) => (
              <article key={title} className="surface-card p-8">
                <span className="bg-pastel text-foreground/80 inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Icon className="h-5 w-5" />
                </span>
                <h4 className="font-display mt-5 text-2xl text-foreground">{title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
