import { motion } from 'framer-motion';
import { UserPlus, Search, Users, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Cadastro',
    description: 'Crie sua conta em menos de 2 minutos. É totalmente grátis!',
    color: '#00D4FF'
  },
  {
    icon: Search,
    number: '02',
    title: 'Explorar',
    description: 'Navegue por 500+ projetos .NET de todos os níveis.',
    color: '#7B2BE8'
  },
  {
    icon: Users,
    number: '03',
    title: 'Participar',
    description: 'Entre em projetos que combinam com seu nível e interesses.',
    color: '#FF8C42'
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Crescer',
    description: 'Construa seu portfólio e acelere sua carreira.',
    color: '#00D4FF'
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-linear-to-b from-[#0A0E14] to-[#0F1419]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-white/60 text-sm uppercase tracking-wider mb-4">Como Funciona</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comece em <span className="text-[#00D4FF]">4 Passos Simples</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Do cadastro ao crescimento profissional. Veja como é fácil fazer parte da maior comunidade .NET do Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="solid-border-subtle rounded-lg p-8 text-center h-full bg-[#1A1F2E] hover:border-[#00D4FF] hover:shadow-lg hover:shadow-[#00D4FF]/20 transition-all duration-300">
                {/* Step Number */}
                <div 
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ 
                    background: `linear-gradient(135deg, ${step.color}, ${step.color}90)`,
                    boxShadow: `0 8px 24px ${step.color}40`
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div 
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                  style={{ 
                    background: `${step.color}20`,
                    border: `2px solid ${step.color}40`
                  }}
                >
                  <step.icon size={32} style={{ color: step.color }} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Arrow (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-linear-to-r from-[#00D4FF] to-transparent"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-[#00D4FF]"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#join"
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg bg-[#00D4FF] text-[#0A0E14] hover:bg-[#00B8E6] border-2 border-[#00D4FF] hover:border-[#00B8E6] transition-all duration-300"
          >
            Começar Agora - É Grátis!
          </a>
          <p className="text-white/50 text-sm mt-4">✓ Sem cartão de crédito • ✓ Acesso completo • ✓ Cancele quando quiser</p>
        </motion.div>
      </div>
    </section>
  );
};
