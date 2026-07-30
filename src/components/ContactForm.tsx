import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Digite um e-mail válido"),
  company: z.string().optional(),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate submission for now
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact form data:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="w-full">
        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
            Mensagem enviada!
          </h3>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Obrigado pelo contato. Nossa equipe retornará em breve.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Seu nome completo" {...register("name")} />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="seu@email.com" {...register("email")} />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Empresa (opcional)</Label>
            <Input id="company" placeholder="Nome da empresa" {...register("company")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              placeholder="Conte-nos sobre seu projeto ou desafio"
              rows={5}
              {...register("message")}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
