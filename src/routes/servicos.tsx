import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { Link } from "@tanstack/react-router";
import { services } from "@/lib/data";

export const Route = createFileRoute("/servicos")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Serviços — DMX Web Marketing" },
      { name: "description", content: "Conheça os serviços da DMX Web Marketing: tráfego pago, SEO, social media, branding, automação e analytics. Soluções completas para crescer online." },
      { property: "og:title", content: "Serviços — DMX Web Marketing" },
      { property: "og:description", content: "Tráfego pago, SEO, social media, branding, automação e analytics para escalar sua marca." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
});

function ServicesPage() {
  return (
    <div>
      <HeroSection
        title="Soluções completas de marketing digital"
        description="Do primeiro contato à fidelização, oferecemos serviços integrados que cobrem todas as etapas do crescimento da sua marca."
        primaryCta={{ label: "Falar com um especialista", to: "/contato" }}
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Como trabalhamos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Um método claro para entregar resultados consistentes.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Diagnóstico",
                description: "Analisamos sua presença digital, concorrência e oportunidades de crescimento.",
              },
              {
                step: "02",
                title: "Estratégia",
                description: "Definimos o plano de ação, canais, KPIs e orçamento para alcançar seus objetivos.",
              },
              {
                step: "03",
                title: "Execução",
                description: "Colocamos campanhas, conteúdos e automações no ar com qualidade e velocidade.",
              },
              {
                step: "04",
                title: "Otimização",
                description: "Monitoramos, testamos e ajustamos continuamente para melhorar performance.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="font-heading text-4xl font-bold text-primary/30">{item.step}</span>
                <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Vamos montar a estratégia ideal para você
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Entre em contato e descubra como nossos serviços podem se encaixar no momento do seu negócio.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/contato">
                Solicitar proposta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
