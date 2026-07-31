import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Users, Lightbulb, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { stats } from "@/lib/data";
import sobreImage from "@/assets/images/sobre.jpg";

export const Route = createFileRoute("/sobre")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Sobre — DMX Web Marketing" },
      { name: "description", content: "Conheça a DMX Web Marketing: nossa história, valores, equipe e o método que usamos para transformar cliques em clientes." },
      { property: "og:title", content: "Sobre — DMX Web Marketing" },
      { property: "og:description", content: "Nossa história, valores e equipe dedicada a transformar cliques em clientes." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
});

function AboutPage() {
  return (
    <div>
      <HeroSection
        title="Quem somos"
        description="A Educarium nasceu da vontade de fazer marketing digital de forma mais inteligente, humana e orientada a resultados."
        primaryCta={{ label: "Trabalhar com a Educarium", to: "/contato" }}
        image={sobreImage}
      />

      {/* Story */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Nossa história
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Fundada em 2014, a Educarium começou como uma pequena equipe de especialistas em mídia paga. Com o tempo, fomos reunindo talentos em SEO, conteúdo, design, automação e analytics para oferecer uma visão completa do marketing digital.
                </p>
                <p>
                  Hoje atendemos empresas de diferentes portes e setores, sempre com o mesmo propósito: usar estratégia e dados para gerar crescimento real e mensurável.
                </p>
                <p>
                  Acreditamos que o marketing deixa de ser custo quando é feito com clareza, propósito e foco no retorno do investimento.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-muted/30 p-6 text-center"
                >
                  <p className="font-heading text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nossos valores
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Princípios que guiam nossas decisões e relacionamentos.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Resultado",
                description: "Medimos sucesso pelo impacto que geramos no negócio do cliente.",
              },
              {
                icon: Lightbulb,
                title: "Inovação",
                description: "Testamos novas ideias, ferramentas e abordagens para manter a vantagem competitiva.",
              },
              {
                icon: Users,
                title: "Parceria",
                description: "Trabalhamos como extensão do time do cliente, com comunicação transparente.",
              },
              {
                icon: Heart,
                title: "Paixão",
                description: "Gostamos do que fazemos e isso se reflete na qualidade do trabalho entregue.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-background p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nossa equipe
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Especialistas que combinam criatividade, técnica e visão de negócio.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Carlos Silva", role: "CEO & Estrategista" },
              { name: "Fernanda Lima", role: "Head de Performance" },
              { name: "Rafael Souza", role: "Head de SEO & Conteúdo" },
              { name: "Juliana Torres", role: "Head de Criação" },
            ].map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-border bg-muted/30 p-6 text-center"
              >
                <div className="mx-auto h-20 w-20 rounded-full bg-primary/10" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Vamos escrever a próxima página juntos
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Conte-nos sobre sua empresa e descubra como podemos fazer parte do seu crescimento.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contato">
                Entrar em contato
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
