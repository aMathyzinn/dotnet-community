import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Preciso conhecer .NET para participar?',
    answer: 'Não necessariamente! Temos projetos para todos os níveis, desde iniciantes até experts. Se você está começando, recomendamos nossos projetos marcados como "Iniciante" que incluem mentoria.'
  },
  {
    question: 'É realmente grátis?',
    answer: 'Sim, 100% grátis! Você tem acesso completo a todos os projetos, fóruns, eventos e mentorias sem pagar nada. Não pedimos cartão de crédito e você pode cancelar quando quiser.'
  },
  {
    question: 'Como entro em um projeto?',
    answer: 'Simples: navegue pela seção de projetos, escolha um que interesse você, clique em "Participar" e pronto! Você será adicionado ao canal do projeto no Discord e receberá todas as instruções.'
  },
  {
    question: 'Quanto tempo preciso dedicar?',
    answer: 'Você decide! Temos projetos que requerem apenas 2-3 horas por semana e outros mais intensos. Cada projeto deixa claro o comprometimento esperado na descrição.'
  },
  {
    question: 'Posso propor meu próprio projeto?',
    answer: 'Com certeza! Após completar seu primeiro projeto na comunidade, você pode propor novos projetos. Nossa equipe avalia e, se aprovado, você se torna líder do projeto.'
  },
  {
    question: 'Recebo certificado ao concluir um projeto?',
    answer: 'Sim! Ao concluir um projeto, você recebe um certificado digital que pode adicionar ao LinkedIn e seu portfólio. O certificado é validado pela comunidade.'
  },
  {
    question: 'Como funciona a mentoria?',
    answer: 'Membros sênior da comunidade oferecem mentorias voluntárias. Você pode agendar sessões 1-on-1 ou participar de office hours semanais onde pode tirar dúvidas.'
  },
  {
    question: 'Posso usar os projetos no meu portfólio?',
    answer: 'Absolutamente! Todos os projetos são open-source e você pode incluí-los no seu GitHub e portfólio. Muitos membros conseguiram empregos mostrando esses projetos em entrevistas.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-[#0A0E14]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-white/60 text-sm uppercase tracking-wider mb-4">Perguntas Frequentes</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dúvidas? <span className="text-[#00D4FF]">Respondidas</span>
          </h2>
          <p className="text-white/70 text-lg">
            Tudo que você precisa saber antes de começar
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="solid-border-subtle rounded-lg overflow-hidden bg-[#1A1F2E]">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white pr-8">{faq.question}</h3>
                  <div className={`shrink-0 w-8 h-8 rounded-full bg-[#00D4FF]/20 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? (
                      <Minus size={20} className="text-[#00D4FF]" />
                    ) : (
                      <Plus size={20} className="text-[#00D4FF]" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-white/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/60 mb-4">Ainda tem dúvidas?</p>
          <a 
            href="mailto:hello@netdevs.com"
            className="inline-flex items-center gap-2 text-[#00D4FF] hover:text-[#7B2BE8] font-semibold transition-colors border-b-2 border-[#00D4FF] hover:border-[#7B2BE8] pb-1"
          >
            Entre em contato conosco
            <span className="text-xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
