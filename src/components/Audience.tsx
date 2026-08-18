const profiles = [
  {
    emoji: "🌸",
    title: "Si estás empezando",
    text: "Aprende desde cero y pierde el miedo a maquillarte.",
  },
  {
    emoji: "💄",
    title: "Si amas el maquillaje",
    text: "Descubre nuevos productos, técnicas y estilos.",
  },
  {
    emoji: "✨",
    title: "Si quieres conocer tu estilo",
    text: "Aprende sobre colorimetría y asesoría de imagen.",
  },
  {
    emoji: "👑",
    title: "Si ya tienes experiencia",
    text: "Perfecciona tus conocimientos y descubre nuevas herramientas.",
  },
];

export function Audience() {
  return (
    <section id="para-quien" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="eyebrow">¿Para quién es?</p>
          <h2 className="mt-3 text-4xl text-foreground md:text-5xl">
            Esta experiencia es para ti
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((p) => (
            <article key={p.title} className="surface-card p-8 text-center">
              <span className="text-3xl" aria-hidden="true">
                {p.emoji}
              </span>
              <h3 className="font-display mt-4 text-xl leading-snug text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>

        <p className="font-display mt-12 text-center text-2xl text-foreground/80 md:text-3xl">
          No necesitas experiencia. Solo necesitas ganas de aprender.
        </p>
      </div>
    </section>
  );
}
