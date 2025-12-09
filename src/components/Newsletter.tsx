import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-24 px-6 bg-linear-to-b from-[#0A0E14] to-[#0F1419]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="solid-border rounded-lg p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#00D4FF]/20 border-2 border-[#00D4FF]/40 flex items-center justify-center">
            <Mail size={32} className="text-[#00D4FF]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mantenha-se <span className="text-[#00D4FF]">Atualizado</span>
          </h2>
          
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Receba dicas exclusivas de .NET, novos projetos e oportunidades de mentoria direto na sua caixa de entrada.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                disabled={subscribed}
                className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00D4FF] transition-colors disabled:opacity-50"
              />
              <motion.button
                type="submit"
                disabled={subscribed}
                className="px-8 py-4 rounded-lg font-bold bg-[#00D4FF] text-[#0A0E14] hover:bg-[#00B8E6] border-2 border-[#00D4FF] hover:border-[#00B8E6] transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
                whileHover={{ scale: subscribed ? 1 : 1.05 }}
                whileTap={{ scale: subscribed ? 1 : 0.95 }}
              >
                {subscribed ? (
                  <>✓ Inscrito!</>
                ) : (
                  <>
                    <Send size={20} />
                    Inscrever
                  </>
                )}
              </motion.button>
            </div>
          </form>

          <div className="flex items-center justify-center gap-6 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <span className="text-[#00D4FF]">✓</span>
              <span>Sem spam</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00D4FF]">✓</span>
              <span>Apenas qualidade</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00D4FF]">✓</span>
              <span>Cancele quando quiser</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
