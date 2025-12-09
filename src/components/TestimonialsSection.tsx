import { Copy, CheckCircle2 } from 'lucide-react';
import { getTestimonials } from '../data/mockData';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const TestimonialsSection = () => {
  const testimonials = getTestimonials();
  const [copied, setCopied] = useState(false);

  const codeSnippet = `namespace DotNetCommunity.Core
{
    public class UserService : IUserService
    {
        private readonly IRepository<User> _repository;
        
        public UserService(IRepository<User> repository)
        {
            _repository = repository;
        }
        
        public async Task<User> GetUserAsync(int id)
        {
            return await _repository
                .GetByIdAsync(id);
        }
    }
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-6 bg-[#0A0E14]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Testimonials */}
        <div>
          <p className="text-white/60 text-sm uppercase tracking-wider mb-3">Developer Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            What Our Members Say
          </h2>
          
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="solid-border-subtle rounded-lg p-8 border-l-4 border-l-[#00D4FF]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.avatarUrl} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-2xl object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                    <p className="text-white/60 text-sm">{testimonial.role} @ {testimonial.company}</p>
                  </div>
                </div>
                
                <p className="text-white/90 text-base leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Code Snippet */}
        <div>
          <p className="text-white/60 text-sm uppercase tracking-wider mb-3">Interactive Code Snippet</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Explore Our <span className="text-[#00D4FF]">Codebase</span>
          </h2>
          
          <motion.div 
            className="solid-border rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Window Controls */}
            <div className="bg-[#1A1F2E] px-4 py-3 flex items-center justify-between border-b border-[#00D4FF]/30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-lg shadow-[#ff5f56]/50" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-lg shadow-[#ffbd2e]/50" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-lg shadow-[#27c93f]/50" />
              </div>
              
              <motion.button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 transition-all duration-300 text-[#00D4FF] text-sm font-medium border border-[#00D4FF]/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? (
                  <>
                    <CheckCircle2 size={16} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy
                  </>
                )}
              </motion.button>
            </div>
            
            {/* Code Content */}
            <div className="bg-[#0d1117] p-8 overflow-x-auto">
              <pre className="text-sm leading-loose">
                <code className="font-mono">
                  <span className="text-[#ff7b72]">namespace</span> <span className="text-[#79c0ff]">DotNetCommunity.Core</span>
                  {'\n'}{'{'}{'\n'}
                  {'    '}<span className="text-[#ff7b72]">public class</span> <span className="text-[#ffa657]">UserService</span> : <span className="text-[#79c0ff]">IUserService</span>
                  {'\n'}{'    {'}{'\n'}
                  {'        '}<span className="text-[#ff7b72]">private readonly</span> <span className="text-[#79c0ff]">IRepository</span>{'<'}<span className="text-[#ffa657]">User</span>{'>'} <span className="text-[#d2a8ff]">_repository</span>;
                  {'\n'}{'\n'}
                  {'        '}<span className="text-[#ff7b72]">public</span> <span className="text-[#ffa657]">UserService</span>(<span className="text-[#79c0ff]">IRepository</span>{'<'}<span className="text-[#ffa657]">User</span>{'>'} repository)
                  {'\n'}{'        {'}{'\n'}
                  {'            '}<span className="text-[#d2a8ff]">_repository</span> = repository;
                  {'\n'}{'        }'}{'\n'}
                  {'\n'}
                  {'        '}<span className="text-[#ff7b72]">public async</span> <span className="text-[#79c0ff]">Task</span>{'<'}<span className="text-[#ffa657]">User</span>{'>'} <span className="text-[#d2a8ff]">GetUserAsync</span>(<span className="text-[#ff7b72]">int</span> id)
                  {'\n'}{'        {'}{'\n'}
                  {'            '}<span className="text-[#ff7b72]">return await</span> <span className="text-[#d2a8ff]">_repository</span>
                  {'\n'}{'                '}.<span className="text-[#d2a8ff]">GetByIdAsync</span>(id);
                  {'\n'}{'        }'}{'\n'}
                  {'    }'}{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-[#FF8C42] hover:text-[#ff9d5c] font-semibold transition-all duration-300 border-b-2 border-[#FF8C42] hover:border-[#ff9d5c] pb-1 hover:gap-3"
            >
              View More Code
              <span className="text-xl">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};