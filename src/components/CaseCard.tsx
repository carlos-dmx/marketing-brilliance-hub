import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

interface CaseCardProps {
  client: string;
  category: string;
  title: string;
  description: string;
  result: string;
  metric: string;
  image?: string;
}

export function CaseCard({
  client,
  category,
  title,
  description,
  result,
  metric,
  image,
}: CaseCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md">
      {image && (
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            width={512}
            height={384}
          />
        </div>
      )}
      <CardHeader className={image ? "" : "bg-muted/40"}>
        <div className="flex items-center justify-between">
          <span className="font-heading text-sm font-semibold text-foreground">{client}</span>
          <Badge variant="secondary">{category}</Badge>
        </div>
        <CardTitle className="font-heading text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
        <div className="flex items-center gap-3 rounded-xl bg-primary/10 p-4">
          <TrendingUp className="h-5 w-5 text-primary" />
          <div>
            <p className="font-heading text-2xl font-bold text-foreground">{result}</p>
            <p className="text-sm text-muted-foreground">{metric}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
