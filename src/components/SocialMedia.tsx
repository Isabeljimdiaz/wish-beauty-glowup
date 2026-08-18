import { Instagram, Music2 } from "lucide-react";

import { site, isPlaceholder } from "@/data/site";
import { Button } from "@/components/ui/button";

export function SocialMedia() {
  const igReady = !isPlaceholder(site.social.instagram.url);

  return (
    <section id="redes" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="border-gold/25 bg-pastel-soft relative overflow-hidden rounded-[2.5rem] border p-8 text-center shadow-[var(--shadow-soft)] md:p-14">
          <p className="eyebrow">Redes sociales</p>
          <h2 className="mt-3 text-4xl text-foreground md:text-5xl">
            Síguenos y sé parte de Wish Beauty
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            En nuestras redes compartimos nuevos productos accesibles, tutoriales, reseñas honestas y
            contenido de belleza para que aprendas algo nuevo cada semana.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="surface-card p-7 text-left">
              <span className="bg-pastel inline-flex h-11 w-11 items-center justify-center rounded-2xl">
                <Instagram className="h-5 w-5 text-foreground/80" />
              </span>
              <h3 className="font-display mt-4 text-2xl text-foreground">Instagram</h3>
              <p className="mt-1 text-sm break-all text-muted-foreground">
                {site.social.instagram.handle}
              </p>
              <div className="mt-5">
                {igReady ? (
                  <Button asChild variant="gold">
                    <a href={site.social.instagram.url} target="_blank" rel="noreferrer noopener">
                      Seguir en Instagram
                    </a>
                  </Button>
                ) : (
                  <Button variant="soft" disabled title="Agrega la URL en src/data/site.ts">
                    Enlace por definir
                  </Button>
                )}
              </div>
            </article>

            <article className="surface-card p-7 text-left">
              <span className="bg-pastel inline-flex h-11 w-11 items-center justify-center rounded-2xl">
                <Music2 className="h-5 w-5 text-foreground/80" />
              </span>
              <h3 className="font-display mt-4 text-2xl text-foreground">
                TikTok — Próximamente
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Estamos preparando nuestro contenido en video.
              </p>
              <div className="mt-5">
                {!isPlaceholder(site.social.tiktok.url) ? (
                  <Button asChild variant="gold">
                    <a href={site.social.tiktok.url} target="_blank" rel="noreferrer noopener">
                      Seguir en TikTok
                    </a>
                  </Button>
                ) : (
                  <Button variant="soft" disabled title="Agrega la URL en src/data/site.ts">
                    Próximamente
                  </Button>
                )}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
