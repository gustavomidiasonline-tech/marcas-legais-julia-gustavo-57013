import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const leadSchema = z.object({
  nome: z.string().trim().min(3, "Nome deve ter pelo menos 3 caracteres").max(100, "Nome muito longo"),
  telefone: z.string().trim().regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Formato: (11) 91234-5678"),
  nome_marca: z.string().trim().max(100, "Nome da marca muito longo").optional().or(z.literal("")),
});

type LeadFormData = z.infer<typeof leadSchema>;

const LeadCaptureForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const whatsappNumber = "5511912200912";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert([
        {
          nome: data.nome,
          telefone: data.telefone,
          nome_marca: data.nome_marca || null,
        },
      ]);

      if (error) throw error;

      toast.success("Dados enviados com sucesso! Entraremos em contato em breve.", {
        duration: 5000,
      });
      reset();
    } catch (error) {
      console.error("Erro ao enviar lead:", error);
      toast.error("Erro ao enviar dados. Tente novamente ou entre em contato via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Quero saber mais sobre o registro de marca.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="bg-gradient-subtle border-2 border-primary/20 rounded-xl p-6 sm:p-8 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
          📋 Consulta Gratuita de Marca
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground">
          Preencha abaixo ou fale direto no WhatsApp
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="nome" className="text-sm font-semibold text-foreground">
            Nome completo *
          </Label>
          <Input
            id="nome"
            {...register("nome")}
            placeholder="Seu nome completo"
            className="mt-1"
            disabled={isSubmitting}
          />
          {errors.nome && (
            <p className="text-xs text-red-600 mt-1">{errors.nome.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="telefone" className="text-sm font-semibold text-foreground">
            Telefone/WhatsApp *
          </Label>
          <Input
            id="telefone"
            {...register("telefone")}
            placeholder="(11) 91234-5678"
            className="mt-1"
            disabled={isSubmitting}
            onChange={(e) => {
              e.target.value = formatPhone(e.target.value);
            }}
            maxLength={15}
          />
          {errors.telefone && (
            <p className="text-xs text-red-600 mt-1">{errors.telefone.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="nome_marca" className="text-sm font-semibold text-foreground">
            Nome da sua marca (opcional)
          </Label>
          <Input
            id="nome_marca"
            {...register("nome_marca")}
            placeholder="Nome da marca que deseja registrar"
            className="mt-1"
            disabled={isSubmitting}
          />
          {errors.nome_marca && (
            <p className="text-xs text-red-600 mt-1">{errors.nome_marca.message}</p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-3 pt-2">
          <Button
            type="submit"
            variant="default"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar"
            )}
          </Button>

          <Button
            type="button"
            variant="whatsapp"
            className="w-full"
            onClick={handleWhatsApp}
            disabled={isSubmitting}
          >
            <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar no WhatsApp
          </Button>
        </div>
      </form>

      <p className="text-xs text-center text-muted-foreground mt-4">
        ✅ Seus dados estão seguros • Resposta em até 2 horas
      </p>
    </div>
  );
};

export default LeadCaptureForm;