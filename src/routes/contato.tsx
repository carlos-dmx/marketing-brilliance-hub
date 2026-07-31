import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

import { HeroSection } from "@/components/HeroSection";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/contato")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contato — Educarium" },
      { name: "description", content: "Entre em contato com a Educarium. Solicite uma proposta personalizada ou tire suas dúvidas sobre marketing digital." },
      { property: "og:title", content: "Contato — Educarium" },
      { property: "og:description", content: "Fale com a Educarium e solicite uma proposta personalizada." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
});

function ContactPage() {
  return (
    <div>
      <HeroSection
        title="Vamos conversar"
        description="Preencha o formulário abaixo ou entre em contato diretamente. Nossa equipe responde em até 24 horas úteis."
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Fale com a Educarium
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Quer saber como a Educarium pode ajudar sua empresa a crescer? Nos conte um pouco sobre seu projeto e retornaremos com uma proposta alinhada aos seus objetivos.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-foreground">Telefone</p>
                      <p className="mt-1 text-sm text-muted-foreground">(11) 99999-9999</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-foreground">E-mail</p>
                      <p className="mt-1 text-sm text-muted-foreground">contato@educarium.com.br</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-foreground">Endereço</p>
                      <p className="mt-1 text-sm text-muted-foreground">São Paulo, SP — Brasil</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-foreground">Atendimento</p>
                      <p className="mt-1 text-sm text-muted-foreground">Seg a Sex, 9h às 18h</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
