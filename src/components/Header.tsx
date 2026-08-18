import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "@/assets/wish-beauty-logo.png";
import { navItems } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <a href="#inicio" onClick={scrollTo("#inicio")} className="flex items-center gap-3" aria-label="Wish Beauty — Inicio">
          <img
            src={logo}
            alt="Logotipo de Wish Beauty"
            width={1024}
            height={1024}
            className="h-12 w-12 object-contain md:h-14 md:w-14"
          />
          <span className="font-display text-lg leading-none tracking-wide text-foreground md:text-xl">
            Wish Beauty
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={scrollTo(item.href)}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="gold" size="sm" className="hidden md:inline-flex">
            <a href="#masterclass" onClick={scrollTo("#masterclass")}>
              Masterclass
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="fade-up border-t border-border/60 bg-background/95 px-5 pb-6 pt-2 backdrop-blur-xl xl:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={scrollTo(item.href)}
                  className="block border-b border-border/50 py-3 text-base text-foreground/85 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
