/**
 * Lógica del recomendador "Encuentra tu maquillaje".
 * Editable: cambia el orden de prioridad de categorías para modificar el kit.
 */

import { products, type Category, type Product } from "@/data/products";

/** Orden de prioridad: primero lo esencial de un kit básico. */
export const kitPriority: Category[] = [
  "Base",
  "Corrector",
  "Rubor",
  "Máscara de pestañas",
  "Labiales",
  "Primer",
  "Iluminador",
  "Sombras",
  "Contorno",
  "Preparación de piel",
  "Skincare",
];

export type KitResult = {
  items: Product[];
  total: number;
  budget: number;
  remaining: number;
};

const shuffle = <T,>(list: T[]): T[] =>
  [...list]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

/**
 * Construye un kit dentro del presupuesto indicado.
 * Recorre las categorías por prioridad y agrega un producto por categoría
 * mientras quepa en el presupuesto restante.
 */
export const buildKit = (budget: number): KitResult => {
  const items: Product[] = [];
  let total = 0;

  for (const category of kitPriority) {
    const options = shuffle(products.filter((p) => p.category === category));
    const pick = options.find((p) => total + p.price <= budget);
    if (pick) {
      items.push(pick);
      total += pick.price;
    }
  }

  // Segunda pasada: aprovecha el sobrante con cualquier producto que falte.
  const remainingProducts = shuffle(products.filter((p) => !items.includes(p)));
  for (const p of remainingProducts) {
    if (total + p.price <= budget) {
      items.push(p);
      total += p.price;
    }
  }

  return { items, total, budget, remaining: budget - total };
};

export const formatMXN = (value: number) =>
  new Intl.NumberFormat("es-MX", { maximumFractionDigits: 0 }).format(value);

export const budgetPresets = [300, 500, 700, 1000, 1500];

export const cheapestProductPrice = Math.min(...products.map((p) => p.price));
