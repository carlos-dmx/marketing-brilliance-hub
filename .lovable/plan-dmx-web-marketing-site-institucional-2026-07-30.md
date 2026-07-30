# DMX Web Marketing — Site institucional

## Visão geral
Criar um site institucional moderno para a **DMX Web Marketing**, uma agência de marketing digital. O site será multi-página, com navegação clara, foco em conversão e SEO amigável.

## Páginas e rotas

1. **Home** (`/`) — Hero impactante, grid de serviços, destaque de resultados, depoimentos, CTA final e rodapé.
2. **Serviços** (`/servicos`) — Lista detalhada dos serviços oferecidos (tráfego pago, SEO, social media, branding, automação).
3. **Sobre** (`/sobre`) — História da agência, equipe/valores e diferenciais.
4. **Contato** (`/contato`) — Formulário de contato e informações de atendimento.
5. **Portfólio** (`/portfolio`) — Cases de clientes com resultados (título, descrição e resultados principais).

## Design e identidade

- **Paleta**: Cloud White (`#fafbfc`, `#e8ecf1`, `#94a3b8`, `#3b82f6`).
- **Tipografia**: Syne para títulos, Plus Jakarta Sans para corpo.
- **Layout**: Hero Grid — hero banner com destaque visual + grid de cards nas seções seguintes.
- **Estilo**: Clean, profissional, leve e conversão-orientado, com CTA claras e espaçamento generoso.
- **Responsivo**: totalmente adaptável para desktop, tablet e mobile.

## Funcionalidades

- Navegação fixa com links entre páginas usando TanStack Router.
- Formulário de contato funcional (nome, e-mail, empresa, mensagem) com validação e feedback visual.
- Cards de serviços e portfólio interativos com hover.
- CTA em destaque para WhatsApp ou e-mail.
- Metadados SEO (`head()`) em cada rota: title, description, og:title, og:description, og:type, twitter:card.
- Componentes reutilizáveis: Header, Footer, HeroSection, ServiceCard, CaseCard, TestimonialCard, ContactForm.

## Estrutura de arquivos (principais)

```text
src/routes/
  __root.tsx          # Layout raiz com header, footer e <Outlet />
  index.tsx           # Home
  sobre.tsx           # Sobre
  servicos.tsx        # Serviços
  portfolio.tsx       # Portfólio
  contato.tsx         # Contato
src/components/
  Header.tsx
  Footer.tsx
  HeroSection.tsx
  ServiceCard.tsx
  CaseCard.tsx
  TestimonialCard.tsx
  ContactForm.tsx
src/styles.css        # Design tokens: cores, fontes, bordas
```

## Notas técnicas

- Tailwind v4 com tokens semânticos em `src/styles.css`.
- Fontes carregadas via `<link>` no `head()` de `__root.tsx`.
- Não usar Supabase/Lovable Cloud: dados estáticos para serviços, cases e depoimentos.
- Formulário de contato sem backend por enquanto: exibe mensagem de sucesso no front.
- Foco em performance: imagens otimizadas (quando houver) e HTML semântico.
