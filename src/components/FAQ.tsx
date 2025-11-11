import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para registrar uma marca?",
    answer: "O processo completo de registro de marca no INPI leva em média de 12 a 24 meses. Durante todo esse período, acompanhamos cada etapa e mantemos você informado sobre o andamento. Após a aprovação, sua marca fica protegida por 10 anos, podendo ser renovada indefinidamente.",
  },
  {
    question: "O registro é válido em todo o Brasil?",
    answer: "Sim! O registro no INPI garante proteção nacional, ou seja, sua marca fica protegida em todo território brasileiro. Nenhuma outra empresa poderá usar a mesma marca ou uma marca similar no mesmo segmento de atuação em qualquer estado do país.",
  },
  {
    question: "Preciso ter CNPJ para registrar minha marca?",
    answer: "Não necessariamente. O registro de marca pode ser feito tanto por pessoas físicas (CPF) quanto por pessoas jurídicas (CNPJ). Se você ainda não formalizou seu negócio, pode fazer o registro como pessoa física e depois transferir para sua empresa quando abrir o CNPJ.",
  },
  {
    question: "Quanto custa para registrar uma marca?",
    answer: "O investimento varia de acordo com o tipo de registro e a classe escolhida. Entre em contato conosco para receber um orçamento personalizado e transparente. Oferecemos condições especiais e parcelamento para facilitar o investimento na proteção da sua marca.",
  },
  {
    question: "O que acontece se alguém já tiver registrado uma marca parecida?",
    answer: "Fazemos uma análise de viabilidade completa antes do protocolo. Se identificarmos marcas similares, orientamos sobre a melhor estratégia: seja ajustando elementos da sua marca ou apresentando argumentos técnicos que demonstrem a diferença entre as marcas. Nossa equipe especializada está preparada para defender seu registro.",
  },
  {
    question: "Minha marca fica protegida desde o início do processo?",
    answer: "Sim! A partir do momento em que o pedido é protocolado no INPI, você já tem direito de prioridade sobre aquela marca. Isso significa que, mesmo que o processo demore, ninguém mais poderá registrar uma marca igual ou similar depois da sua solicitação.",
  },
  {
    question: "O que está incluído no valor de R$ 1.800?",
    answer: "O valor inclui tudo que você precisa: análise completa de viabilidade da marca, preparação e protocolo de toda documentação necessária, acompanhamento de todo o processo no INPI (que pode levar de 12 a 24 meses), suporte jurídico especializado em todas as etapas, defesa da marca em caso de oposição, e entrega do certificado oficial de registro. Sem taxas ocultas ou mensalidades.",
  },
  {
    question: "Vocês têm garantia de registro?",
    answer: "Sim! Se sua marca não for aprovada pelo INPI após todo o processo, refazemos o pedido sem custo adicional. Além disso, oferecemos garantia de satisfação: se não ficar satisfeito com nosso atendimento nos primeiros 7 dias, devolvemos 100% do valor pago.",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Aceitamos pagamento via cartão de crédito em até 6x sem juros ou PIX à vista com 10% de desconto. O pagamento é 100% seguro e você pode escolher a modalidade que melhor se encaixa no seu orçamento. Após a confirmação do pagamento, já iniciamos o processo em até 24 horas.",
  },
  {
    question: "Posso cancelar se mudar de ideia?",
    answer: "Sim. Você tem 7 dias após a contratação para cancelar o serviço e receber 100% do valor de volta, conforme o Código de Defesa do Consumidor. Após esse prazo, caso o processo já tenha sido iniciado no INPI, não é possível reembolsar as taxas governamentais já pagas, mas você pode cancelar nossos honorários profissionais.",
  },
  {
    question: "Qual a diferença entre marca e patente?",
    answer: "Marca é o nome, logo ou símbolo que identifica seus produtos ou serviços, diferenciando-os dos concorrentes. Patente protege invenções, produtos ou processos inovadores. Se você tem um negócio (restaurante, loja, clínica, etc.), precisa registrar a MARCA. Se criou um produto novo, uma tecnologia ou processo inovador, aí sim precisa de PATENTE. Nós somos especialistas em registro de marcas.",
  },
  {
    question: "Preciso renovar a marca?",
    answer: "Sim, mas apenas depois de 10 anos! Uma vez registrada, sua marca fica protegida por 10 anos. Após esse período, basta fazer uma renovação simples (que também podemos cuidar para você) e sua marca continua protegida por mais 10 anos. Você pode renovar quantas vezes quiser, mantendo a exclusividade para sempre.",
  },
  {
    question: "Como sei que minha marca foi registrada?",
    answer: "Durante todo o processo, você acompanha cada etapa em tempo real através do nosso sistema. Enviamos atualizações regulares por WhatsApp e e-mail sobre o andamento no INPI. Quando sua marca for aprovada, você receberá o certificado oficial de registro emitido pelo INPI, comprovando que a marca é sua e está protegida em todo território nacional.",
  },
  {
    question: "Vocês atendem todo o Brasil?",
    answer: "Sim! Atendemos clientes de todos os estados brasileiros. Todo o processo é feito online de forma prática e segura. O registro de marca é válido nacionalmente, protegendo sua marca em todos os 26 estados e no Distrito Federal. Não importa onde você esteja, podemos cuidar do registro da sua marca com a mesma qualidade e dedicação.",
  },
];

const FAQ = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Dúvidas Frequentes sobre Registro de Marca
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
              Respondemos as principais questões para você tomar a melhor decisão.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-4 sm:px-6 shadow-sm hover:shadow-md transition-smooth bg-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-4 sm:py-6 text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4 sm:pb-6 text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
