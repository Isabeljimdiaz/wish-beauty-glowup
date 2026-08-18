import { Instagram, Mail, MapPin, Music2, Phone } from "lucide-react";

import logo from "@/assets/wish-beauty-logo.png";
import { site, isPlaceholder } from "@/data/site";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Conócenos", href: "#conocenos" },
  { label: "Productos", href: "#recomendaciones" },
  { label: "Encuentra tu maquillaje", href: "#encuentra" },
  { label: "Masterclass", href: "#masterclass" },
];

export function Footer() {
  const igReady = !isPlaceholder(site.social.instagram.url);
  const tkReady = !isPlaceholder(site.social.tiktok.url);

  return (
    <footer id="contacto" className="bg-pastel-soft border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logotipo de Wish Beauty"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-16 w-16 object-contain"
              />
              <div>
                <p className="font-display text-2xl text-foreground">{site.brand.name}</p>
                <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {site.brand.keywords}
                </p>
              </div>
            </div>
            <p className="font-display mt-6 max-w-sm text-lg text-foreground/70 italic">
              “{site.brand.philosophy}”
            </p>
          </div>

          <div>
            <p className="eyebrow">Navegación</p>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                {igReady ? (
                  <a
                    href={site.social.instagram.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Instagram
                  </a>
                ) : (
                  <span className="text-muted-foreground/70">Instagram</span>
                )}
              </li>
              <li>
                {tkReady ? (
                  <a
                    href={site.social.tiktok.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    TikTok
                  </a>
                ) : (
                  <span className="text-muted-foreground/70">TikTok</span>
                )}
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Contacto</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Instagram className="text-gold h-4 w-4" />
                <span className="break-all">Instagram: {site.social.instagram.handle}</span>
              </li>
              <li className="flex items-center gap-2">
                <Music2 className="text-gold h-4 w-4" />
                TikTok: {site.social.tiktok.handle}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-gold h-4 w-4" />
                Correo: {site.contact.email}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-gold h-4 w-4" />
                WhatsApp: {site.contact.whatsapp}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="text-gold h-4 w-4" />
                Ubicación: {site.contact.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-rule mt-12" />
        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.brand.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
