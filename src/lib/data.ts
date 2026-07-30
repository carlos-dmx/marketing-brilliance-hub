import {
  BarChart3,
  Megaphone,
  PenTool,
  Search,
  Share2,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Megaphone,
    title: "Tráfego Pago",
    description:
      "Campanhas otimizadas no Google Ads, Meta Ads e LinkedIn para captar leads qualificados e maximizar o retorno sobre investimento.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Estratégia de conteúdo, técnica e autoridade para colocar sua marca no topo das buscas orgânicas e atrair tráfego de qualidade.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Gestão completa de redes sociais: planejamento de conteúdo, design, copy, agendamento e análise de performance.",
  },
  {
    icon: PenTool,
    title: "Branding",
    description:
      "Construção de identidade visual e posicionamento de marca que comunicam autoridade, geram confiança e conectam com seu público.",
  },
  {
    icon: Zap,
    title: "Automação",
    description:
      "Fluxos automatizados de e-mail, WhatsApp e CRM para nutrir leads, reduzir tarefas manuais e acelerar as vendas.",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description:
      "Dashboards e relatórios claros para acompanhar métricas, identificar oportunidades e tomar decisões baseadas em dados.",
  },
];

export interface PortfolioCase {
  client: string;
  category: string;
  title: string;
  description: string;
  result: string;
  metric: string;
  image: string;
}

export const portfolioCases: PortfolioCase[] = [
  {
    client: "Loja Elegance",
    category: "E-commerce",
    title: "Escalando vendas com Google Ads",
    description:
      "Restruturamos campanhas de Google Shopping e Performance Max, otimizando orçamento e segmentação de público.",
    result: "+187%",
    metric: "aumento no ROAS em 6 meses",
    image: "/src/assets/images/portfolio-1.jpg",
  },
  {
    client: "Clínica Bem-Estar",
    category: "Saúde",
    title: "Posicionamento orgânico para clínicas",
    description:
      "Criamos uma estratégia de SEO local e conteúdo que aumentou a visibilidade da clínica nas buscas da região.",
    result: "+340%",
    metric: "de aumento no tráfego orgânico",
    image: "/src/assets/images/portfolio-3.jpg",
  },
  {
    client: "SaaS ControlePro",
    category: "Tecnologia",
    title: "Geração de leads B2B",
    description:
      "Campanhas no LinkedIn Ads combinadas com landing pages otimizadas e automação de nutrição por e-mail.",
    result: "-42%",
    metric: "redução no Custo por Lead qualificado",
    image: "/src/assets/images/portfolio-4.jpg",
  },
  {
    client: "Restaurante Sabor & Arte",
    category: "Gastronomia",
    title: "Reputação e engajamento no Instagram",
    description:
      "Reformulação de identidade visual, calendário de conteúdo e ações com influenciadores locais.",
    result: "+12k",
    metric: "novos seguidores em 3 meses",
    image: "/src/assets/images/portfolio-2.jpg",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "A DMX transformou nossa presença digital. Em poucos meses, aumentamos as vendas online e conseguimos prever melhor nossos investimentos.",
    author: "Ana Carolina Mendes",
    role: "Diretora de Marketing",
    company: "Loja Elegance",
  },
  {
    quote:
      "Profissionalismo, agilidade e resultados concretos. A equipe entendeu nosso negócio e entregou muito além do esperado.",
    author: "Ricardo Almeida",
    role: "Fundador",
    company: "SaaS ControlePro",
  },
  {
    quote:
      "Finalmente encontramos uma agência que fala a mesma língua: dados. As campanhas são transparentes e a comunicação é excelente.",
    author: "Mariana Torres",
    role: "CEO",
    company: "Clínica Bem-Estar",
  },
];

export const stats = [
  { value: "+150", label: "clientes atendidos" },
  { value: "R$ 50M+", label: "em receita gerada" },
  { value: "+300%", label: "média de crescimento" },
  { value: "10+", label: "anos de mercado" },
];
