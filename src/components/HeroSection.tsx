import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

interface HeroSectionProps {
  title: string;
  description: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  image?: string;
}

export function HeroSection({
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--color-primary)_0%,transparent_35%)] opacity-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid gap-12 items-center ${image ? "lg:grid-cols-2" : ""}`}>
          <div className={image ? "max-w-2xl" : "mx-auto max-w-3xl text-center"}>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className={`mt-10 flex flex-wrap gap-4 ${image ? "" : "items-center justify-center"}`}>
                {primaryCta && (
                  <Button asChild size="lg">
                    <Link to={primaryCta.to}>
                      {primaryCta.label}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Button asChild variant="outline" size="lg">
                    <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
                  </Button>
                )}
              </div>
            )}
          </div>
          {image && (
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/5 blur-2xl" />
              <img
                src={image}
                alt=""
                className="rounded-2xl border border-border shadow-lg"
                width={960}
                height={540}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
