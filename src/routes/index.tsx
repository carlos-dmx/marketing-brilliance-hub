import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { CaseCard } from "@/components/CaseCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { services, portfolioCases, testimonials, stats } from "@/lib/data";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "DMX Web Marketing — Agência de Marketing Digital" },
      { name: "description", content: "Transformamos cliques em clientes. Estratégias de tráfego pago, SEO, social media, branding e automação para escalar seu negócio." },
      { property: "og:title", content: "DMX Web Marketing — Agência de Marketing Digital" },
      { property: "og:description", content: "Transformamos cliques em clientes. Estratégias de tráfego pago, SEO, social media, branding e automação." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function HomePage() {
  return (
    <div>
      <HeroSection
        title="Marketing digital que gera resultados reais"
        description="Combinamos estratégia, dados e criatividade para atrair, converter e fidelizar clientes. Da primeira impressão à venda, a DMX acompanha cada passo do seu crescimento."
        primaryCta={{ label: "Solicitar proposta", to: "/contato" }}
        secondaryCta={{ label: "Ver portfólio", to: "/portfolio" }}
      />

      {/* Stats */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Serviços que impulsionam sua marca
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Soluções integradas de marketing digital para cada etapa do funil de vendas.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/servicos">
                Ver todos os serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="bg-muted/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Cases que falam por si
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Resultados reais de clientes que confiaram na DMX para crescer.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg">
              <Link to="/portfolio">
                Ver portfólio completo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              O que dizem nossos clientes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Histórias de parcerias que geram crescimento real.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-muted/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Por que escolher a DMX?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Uma abordagem transparente, orientada a dados e focada em resultados.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Estratégia sob medida",
                description: "Cada cliente recebe um plano de ação personalizado, alinhado aos objetivos de negócio.",
              },
              {
                title: "Transparência total",
                description: "Relatórios claros e reuniões recorrentes para que você acompanhe cada resultado.",
              },
              {
                title: "Time multidisciplinar",
                description: "Especialistas em performance, conteúdo, design e tecnologia trabalhando juntos.",
              },
              {
                title: "Foco em ROI",
                description: "Decisões baseadas em dados para maximizar o retorno sobre cada real investido.",
              },
              {
                title: "Agilidade e testes",
                description: "Ciclos rápidos de aprendizado, testes A/B e otimização contínua.",
              },
              {
                title: "Suporte próximo",
                description: "Comunicação direta, respostas rápidas e parceria de verdade.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Pronto para escalar seu negócio?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Vamos conversar sobre como a DMX pode ajudar sua empresa a crescer de forma previsível e sustentável.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contato">Solicitar proposta</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/sobre">Conhecer a agência</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
