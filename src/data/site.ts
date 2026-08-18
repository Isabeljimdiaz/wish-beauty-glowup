/**
 * Configuración central de Wish Beauty.
 * EDITA AQUÍ todos los datos de contacto, redes sociales y Masterclass.
 * Los valores entre corchetes [ ] son placeholders pendientes de definir.
 */

export const site = {
  brand: {
    name: "Wish Beauty",
    tagline: "Maquillaje, skincare y belleza al alcance de todas.",
    philosophy: "El maquillaje no tiene que ser costoso para hacerte sentir increíble.",
    keywords: "Maquillaje • Colorimetría • Masterclass",
  },

  // Redes sociales — pega aquí las URLs cuando estén listas.
  social: {
    instagram: {
      handle: "@MASTERCLASS_WISH_BEAUTY",
      url: "[URL INSTAGRAM]", // ej. https://instagram.com/masterclass_wish_beauty
    },
    tiktok: {
      handle: "Próximamente",
      url: "[URL TIKTOK]",
    },
  },

  // Datos de contacto — editables.
  contact: {
    email: "[CORREO]",
    whatsapp: "[WHATSAPP]",
    location: "[UBICACIÓN]",
  },

  // Información de la Masterclass — editable.
  masterclass: {
    duration: "[DURACIÓN]", // ej. "3 horas"
    price: "[PRECIO]", // ej. "1,200"
    currency: "MXN",
    format: "[MODALIDAD]", // presencial / online / ambas
    capacity: "[CUPO]", // ej. "10 lugares"
  },
} as const;

/** Devuelve true si un valor sigue siendo un placeholder sin definir. */
export const isPlaceholder = (value: string) =>
  value.trim().startsWith("[") && value.trim().endsWith("]");

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Conócenos", href: "#conocenos" },
  { label: "Recomendaciones", href: "#recomendaciones" },
  { label: "Encuentra tu maquillaje", href: "#encuentra" },
  { label: "Masterclass", href: "#masterclass" },
  { label: "Redes sociales", href: "#redes" },
  { label: "Contacto", href: "#contacto" },
] as const;
