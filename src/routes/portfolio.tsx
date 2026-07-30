import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { CaseCard } from "@/components/CaseCard";
import { portfolioCases } from "@/lib/data";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfólio — DMX Web Marketing" },
      { name: "description", content: "Veja os cases de sucesso da DMX Web Marketing. Resultados reais em tráfego pago, SEO, social media, branding e automação." },
      { property: "og:title", content: "Portfólio — DMX Web Marketing" },
      { property: "og:description", content: "Cases reais de crescimento em tráfego pago, SEO, social media e automação." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
});

function PortfolioPage() {
  return (
    <div>
      <HeroSection
        title="Resultados que provam nosso método"
        description="Cases de clientes que cresceram com estratégias de marketing digital planejadas, executadas e otimizadas pela DMX."
        primaryCta={{ label: "Quer um case como esse?", to: "/contato" }}
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioCases.map((item) => (
              <CaseCard
                key={item.title}
                client={item.client}
                category={item.category}
                title={item.title}
                description={item.description}
                result={item.result}
                metric={item.metric}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Results summary */}
      <section className="bg-muted/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              O impacto da DMX em números
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Resultados acumulados ao longo de anos de parceria com marcas de diferentes setores.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "R$ 50M+", label: "em receita gerada para clientes" },
              { value: "+2M", label: "leads qualificados captados" },
              { value: "+150", label: "campanhas ativas no último ano" },
              { value: "95%", label: "de clientes que recomendam" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-background p-8 text-center transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <p className="font-heading text-4xl font-bold text-primary">{item.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Seu case pode ser o próximo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Vamos analisar seu cenário atual e construir uma estratégia sob medida.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/contato">
                Solicitar diagnóstico gratuito
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
