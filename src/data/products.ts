/**
 * Catálogo de productos recomendados.
 * EDITA AQUÍ nombres, marcas, precios y descripciones.
 * Los precios son aproximados en MXN y sirven de referencia para el
 * recomendador por presupuesto (src/lib/recommender.ts).
 * No se incluyen enlaces de compra.
 */

import catBase from "@/assets/cat-base.jpg";
import catColor from "@/assets/cat-color.jpg";
import catLips from "@/assets/cat-lips.jpg";
import catEyes from "@/assets/cat-eyes.jpg";
import skincareImg from "@/assets/skincare.jpg";

export const categories = [
  "Preparación de piel",
  "Primer",
  "Base",
  "Corrector",
  "Rubor",
  "Iluminador",
  "Contorno",
  "Sombras",
  "Labiales",
  "Máscara de pestañas",
  "Skincare",
] as const;

export type Category = (typeof categories)[number];

export type PriceLevel = "Súper accesible" | "Accesible" | "Vale la inversión";

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: Category;
  /** Precio aproximado en MXN (editable). */
  price: number;
  priceLevel: PriceLevel;
  description: string;
  /** Beneficios clave (editable). */
  benefits?: string[];
  /** Modo de uso (editable). */
  usage?: string;
  image: string;
};

const imageFor = (category: Category): string => {
  switch (category) {
    case "Base":
    case "Corrector":
    case "Primer":
      return catBase;
    case "Rubor":
    case "Iluminador":
    case "Contorno":
      return catColor;
    case "Labiales":
    case "Máscara de pestañas":
      return catLips;
    case "Sombras":
      return catEyes;
    default:
      return skincareImg;
  }
};

const raw: Omit<Product, "image">[] = [
  {
    id: "prep-agua-micelar",
    name: "Agua micelar limpiadora",
    brand: "Pink Up",
    category: "Preparación de piel",
    price: 85,
    priceLevel: "Súper accesible",
    description: "Limpia sin resecar y deja la piel lista antes del maquillaje.",
    benefits: ["Limpia sin resecar", "Retira maquillaje ligero", "Apta para piel sensible"],
    usage: "Aplica con un algodón sobre el rostro limpio antes de tu rutina, sin frotar.",
  },
  {
    id: "skincare-hidratante",
    name: "Crema hidratante ligera",
    brand: "Saniye",
    category: "Skincare",
    price: 110,
    priceLevel: "Accesible",
    description: "Textura ligera que hidrata y ayuda a que la base se adhiera mejor.",
    benefits: ["Hidratación ligera", "Mejor adherencia de la base", "No deja sensación grasosa"],
    usage: "Aplica una capa fina en rostro y cuello después de limpiar, antes del primer.",
  },
  {
    id: "primer-matificante",
    name: "Primer matificante",
    brand: "Bissú",
    category: "Primer",
    price: 95,
    priceLevel: "Súper accesible",
    description: "Suaviza la textura de la piel y prolonga la duración del maquillaje.",
    benefits: ["Controla el brillo", "Suaviza poros y textura", "Prolonga la duración"],
    usage: "Coloca una capa delgada en zona T y deja secar 1 minuto antes de la base.",
  },
  {
    id: "base-hd",
    name: "Base HD cobertura media",
    brand: "Bissú",
    category: "Base",
    price: 120,
    priceLevel: "Accesible",
    description: "Acabado natural, buildable y con variedad de tonos.",
    benefits: ["Cobertura media buildable", "Acabado natural", "Variedad de tonos"],
    usage: "Aplica por capas con esponja húmeda desde el centro del rostro hacia afuera.",
  },
  {
    id: "base-matte",
    name: "Base matte larga duración",
    brand: "Pink Up",
    category: "Base",
    price: 165,
    priceLevel: "Accesible",
    description: "Ideal para pieles mixtas o grasas que buscan control de brillo.",
    benefits: ["Larga duración", "Control de brillo", "Ideal para piel mixta o grasa"],
    usage: "Aplica en pequeñas cantidades con brocha y sella con polvo traslúcido.",
  },
  {
    id: "corrector-liquido",
    name: "Corrector líquido alta cobertura",
    brand: "Italia Deluxe",
    category: "Corrector",
    price: 90,
    priceLevel: "Súper accesible",
    description: "Cubre ojeras e imperfecciones sin marcar líneas de expresión.",
    benefits: ["Alta cobertura", "No marca líneas", "Ilumina la mirada"],
    usage: "Coloca en triángulo invertido bajo el ojo, difumina con esponja y sella con polvo.",
  },
  {
    id: "rubor-compacto",
    name: "Rubor compacto satinado",
    brand: "Pink Up",
    category: "Rubor",
    price: 100,
    priceLevel: "Accesible",
    description: "Pigmentación suave y fácil de difuminar para un rubor natural.",
    benefits: ["Pigmentación graduable", "Fácil de difuminar", "Acabado satinado"],
    usage: "Toma poco producto con brocha, difumina en las mejillas hacia la sien.",
  },
  {
    id: "iluminador-polvo",
    name: "Iluminador en polvo champagne",
    brand: "Italia Deluxe",
    category: "Iluminador",
    price: 105,
    priceLevel: "Accesible",
    description: "Brillo elegante, sin destacar textura ni poros.",
    benefits: ["Brillo elegante", "No resalta textura", "Rinde mucho"],
    usage: "Aplica en el arco de la ceja, puente de la nariz y parte alta del pómulo.",
  },
  {
    id: "contorno-crema",
    name: "Contorno en crema",
    brand: "Saniye",
    category: "Contorno",
    price: 115,
    priceLevel: "Accesible",
    description: "Tono neutro para esculpir el rostro de forma sutil.",
    benefits: ["Tono neutro", "Esculpe sutilmente", "Se funde con la base"],
    usage: "Aplica bajo el pómulo y mandíbula; difumina hacia arriba con esponja húmeda.",
  },
  {
    id: "sombras-neutras",
    name: "Paleta de sombras neutras",
    brand: "Italia Deluxe",
    category: "Sombras",
    price: 180,
    priceLevel: "Vale la inversión",
    description: "Mates y satinados versátiles para looks de día y de noche.",
    benefits: ["Mates y satinados", "Alta pigmentación", "Versátil día y noche"],
    usage: "Empieza con un tono transición en la cuenca, luego profundiza el ángulo externo.",
  },
  {
    id: "labial-mate",
    name: "Labial mate de larga duración",
    brand: "Bissú",
    category: "Labiales",
    price: 70,
    priceLevel: "Súper accesible",
    description: "Un clásico mexicano: pigmentado, cómodo y muy duradero.",
    benefits: ["Muy duradero", "Cómodo en labios", "Color intenso"],
    usage: "Delinea el contorno y rellena desde el centro; retoca con un pañuelo.",
  },
  {
    id: "gloss-nude",
    name: "Gloss nude luminoso",
    brand: "Saniye",
    category: "Labiales",
    price: 65,
    priceLevel: "Súper accesible",
    description: "Acabado jugoso que combina con cualquier maquillaje.",
    benefits: ["Acabado jugoso", "Combina con todo", "Sensación hidratante"],
    usage: "Aplica solo o encima de tu labial mate para un efecto luminoso.",
  },
  {
    id: "mascara-volumen",
    name: "Máscara de pestañas volumen",
    brand: "Saniye",
    category: "Máscara de pestañas",
    price: 80,
    priceLevel: "Súper accesible",
    description: "Levanta y da volumen sin grumos desde la primera capa.",
    benefits: ["Volumen inmediato", "Sin grumos", "Efecto lifting"],
    usage: "Aplica en zigzag desde la raíz; agrega una segunda capa antes de que seque.",
  },
  {
    id: "protector-solar",
    name: "Protector solar facial FPS 50",
    brand: "Pink Up",
    category: "Skincare",
    price: 145,
    priceLevel: "Accesible",
    description: "Paso indispensable de día, incluso debajo del maquillaje.",
    benefits: ["FPS 50", "Previene manchas", "Base ideal para maquillaje"],
    usage: "Aplica cada mañana como último paso de skincare y reaplica cada 3-4 horas.",
  },
];

export const products: Product[] = raw.map((p) => ({ ...p, image: imageFor(p.category) }));

export const priceLevelOrder: PriceLevel[] = [
  "Súper accesible",
  "Accesible",
  "Vale la inversión",
];
