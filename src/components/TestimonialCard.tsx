import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-md">
      <CardContent className="flex h-full flex-col p-6">
        <Quote className="h-6 w-6 text-primary/40" />
        <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
          “{quote}”
        </blockquote>
        <div className="mt-6 border-t border-border pt-4">
          <p className="font-heading text-sm font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
