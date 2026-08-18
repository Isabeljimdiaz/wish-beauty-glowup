import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProductRecommendations } from "@/components/ProductRecommendations";
import { BudgetRecommender } from "@/components/BudgetRecommender";
import { Skincare } from "@/components/Skincare";
import { Masterclass } from "@/components/Masterclass";
import { Audience } from "@/components/Audience";
import { SocialMedia } from "@/components/SocialMedia";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const title = "Wish Beauty — Maquillaje y skincare accesible para todas";
const description =
  "Recomendaciones de maquillaje económico, rutina de skincare y la Masterclass Wish Beauty. Arma tu kit según tu presupuesto con marcas como Bissú, Pink Up e Italia Deluxe.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <ProductRecommendations />
        <BudgetRecommender />
        <Skincare />
        <Masterclass />
        <Audience />
        <SocialMedia />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
