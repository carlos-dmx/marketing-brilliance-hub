import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Navegação",
    links: [
      { label: "Home", to: "/" },
      { label: "Serviços", to: "/servicos" },
      { label: "Portfólio", to: "/portfolio" },
      { label: "Sobre", to: "/sobre" },
      { label: "Contato", to: "/contato" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Tráfego Pago", to: "/servicos" },
      { label: "SEO", to: "/servicos" },
      { label: "Social Media", to: "/servicos" },
      { label: "Branding", to: "/servicos" },
      { label: "Automação", to: "/servicos" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="font-heading text-xl font-bold tracking-tight text-foreground">
                Educarium
              </span>
              <span className="font-heading text-sm font-medium text-primary">
                Marketing Digital
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Transformamos cliques em clientes. Estratégia, criatividade e dados para escalar o crescimento da sua marca.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@educarium.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>São Paulo, SP — Brasil</span>
              </div>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading text-sm font-semibold text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Educarium. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
